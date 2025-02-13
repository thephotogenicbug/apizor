# APIHandler - Simple API Fetching for React & Next.js

![npm](https://img.shields.io/npm/v/apizor) ![license](https://img.shields.io/npm/l/apizor) ![downloads](https://img.shields.io/npm/dt/apizor)

APIHandler is a lightweight JavaScript library for easily handling API requests in React and Next.js applications. It supports both `fetch` and `axios` for making HTTP requests.

## Features
- 🌐 Supports `fetch` and `axios`
- ⚛️ Works with React & Next.js
- 🚀 Lightweight and easy to use
- 🔄 Handles GET requests with query parameters

## Installation

Install via npm:
```sh
npm install apizor
```

Or via yarn:
```sh
yarn add apizor
```

## Usage

### Import and Initialize
```javascript
import APIHandler from "apizor";

const api = new APIHandler("https://jsonplaceholder.typicode.com");
```

### Fetch Data using GET Request
```javascript
async function fetchData() {
  try {
    const data = await api.get("/posts", { userId: 1 });
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

## API Reference

### `new APIHandler(baseURL, useAxios = true)`
Creates an instance of the APIHandler class.
- `baseURL` *(string)*: The base URL of the API.
- `useAxios` *(boolean, default: true)*: Whether to use Axios or Fetch.

### `get(endpoint, params = {})`
Performs a GET request.
- `endpoint` *(string)*: The API endpoint.
- `params` *(object)*: Query parameters.

## License

This project is licensed under the MIT License.