// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (location) => {

    console.log(location);

    // Figure out the geolocation
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "4a491741189d4407810728a312eb1c0b";

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
