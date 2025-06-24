# 🎬 Stream Finder

Tired of checking every streaming service to find a specific movie or TV show? Stream Finder is a clean, simple web application that tells you where to watch your favorite content. Just type in a title, select your region, and get instant results!

This project was built from the ground up to demonstrate how to securely interact with a third-party API by using a Node.js backend proxy, ensuring that the API key is never exposed to the client.

---

### ✨ Features

*   **🔎 Smart Search:** Instantly search for any movie or TV show.
*   **🌍 Region Selector:** Get accurate streaming availability for your country, with support for the US, UK, Canada, Australia and Europe.
*   **🔐 Secure API Handling:** Uses a Node.js/Express backend proxy to protect the TMDB API key from being exposed in the browser.
*   **🔄 Quick Reset:** A dedicated button to clear the search bar and results with a single click.
*   **⌨️ Keyboard Friendly:** Simply press `Enter` to start your search.
*   **💅 Clean UI:** A simple, modern, and responsive user interface.

---

### 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (with Fetch API)
*   **Backend:** Node.js, Express.js
*   **API:** [The Movie Database (TMDB)](https://www.themoviedb.org/)

---

### 🚀 Getting Started

Follow these steps to get a local copy up and running.

#### **Prerequisites**

*   [Node.js](https://nodejs.org/en/) installed on your machine.
*   An API key from [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api). It's free!

#### **Installation**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

4.  **Add your API Key:**
    Open the [`server.js`](https://github.com/bigricksosa/streamfinder/blob/main/server.js) file and replace the placeholder text with your actual TMDB API key:
    ```javascript
    const TMDB_API_KEY = 'YOUR_API_KEY_HERE';
    ```

5.  **Run the server:**
    ```bash
    node server.js
    ```
    You should see the message `Server proxy is running on http://localhost:3000` in your terminal.

6.  **Open the application:**
    Open the [`index.html`](https://github.com/bigricksosa/streamfinder/blob/main/index.html) file in your web browser by entering `localhost:3000` in the address bar.

---

### 🏗️ Project Structure

The project is organized with a clear separation between the frontend and backend code, making it easy to manage and scale.

