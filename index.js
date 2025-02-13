class APIHandler {
  constructor(baseURL, useAxios = true) {
    this.baseURL = baseURL;
    this.useAxios = useAxios;
  }

  async get(endpoint, params = {}) {
    const url = new URL(`${this.baseURL}${endpoint}`);
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    if (this.useAxios) {
      return this.getWithAxios(url);
    }
    return this.getWithFetch(url);
  }

  async getWithAxios(url) {
    try {
      const response = await axios.get(url.toString());
      return response.data;
    } catch (error) {
      console.error("Axios Error:", error);
      throw error;
    }
  }

  async getWithFetch(url) {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  }
}

export default APIHandler;
