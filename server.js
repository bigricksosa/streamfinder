// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

const TMDB_API_KEY = 'YOUR_API_KEY_HERE';

app.use(cors());

app.get('/api/search', async (req, res) => {
    const query = req.query.query;
    // Get region from query, default to United States
    const region = req.query.region || 'US'; 

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        const topResults = searchData.results
            .filter(item => item.media_type === 'movie' || item.media_type === 'tv')
            .slice(0, 5);

        const detailedResults = await Promise.all(
            topResults.map(async (item) => {
                const providersUrl = `https://api.themoviedb.org/3/${item.media_type}/${item.id}/watch/providers?api_key=${TMDB_API_KEY}`;
                const providersResponse = await fetch(providersUrl);
                const providersData = await providersResponse.json();
                
                // Use the dynamic region code here
                item.providers = providersData.results[region.toUpperCase()] || {};
                return item;
            })
        );
        
        res.json(detailedResults);

    } catch (error) {
        console.error('Error fetching from TMDB:', error);
        res.status(500).json({ error: 'Failed to fetch data from TMDB' });
    }
});

app.listen(port, () => {
    console.log(`Server proxy is running on http://localhost:${port}`);
});
