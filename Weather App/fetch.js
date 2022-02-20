class Fetch {
    async getCurrent(input) {
      const myKey = "ea0836bb569eeab5b292d243cd0236e5";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }