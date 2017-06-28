// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: function(term, start, end)  {

    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231"

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {

      params: {
          'api-key': APIKey,
          'q': term,
          'begin_date': start,
          'end_date': end
      }
    })

    .then(function(results){

      return results.data.response;

    });
  },

  getArticle: function(){

    return axios.get('/api/saved')
      .then(function(results){

        return results;
      })

     },

  postArticle: function(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        return results._id;
      })

  },

   deleteArticle: function(title, data, url){

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      return results;
    })
  }

};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
