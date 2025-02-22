export const fetchData = async (endpoint) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
    return response.json();
  };
  