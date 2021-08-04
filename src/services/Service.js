export const getQuote = async() => {
    try {
      const response = await fetch("https://api.kanye.rest", {
        method: "GET",
      });
      return response.json();
    } catch (error) {
      throw error; 
    }

};