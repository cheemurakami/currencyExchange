export function apiCall (){
  return fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}`)
        .then(function (response) {
          if (response.ok && response.status == 200) {
            return response.json();
          } else {
            return false;
          }
        })
        .catch(function () {
          return false;
        })
        .then(function (responseJson) {
          console.log(responseJson)
          return responseJson;
        });

}