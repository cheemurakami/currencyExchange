import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { apiCall } from "./apiCall.js";

$(document).ready(function () {
  apiCall().then(function(response){
    if(response){
      
      let lastUpdate = new Date(response.time_last_update * 1000).toString();
      let nextUpdate = new Date(response.time_next_update * 1000).toString();
      console.log(lastUpdate)
      $("#last-update").html(`Last update: ${lastUpdate}`);
      $("#next-update").html(`Next update: ${nextUpdate}`);
    }
  });
  $("#convert").submit(function (event) {
    event.preventDefault();
    $(".result").show();
    let usDollars = parseInt($("#us-dollars").val()).toFixed(2);
    let currencyType = $("#currency-type").val();
    apiCall().then(function (response) {
      if (response) {
        let covertedCurrency = response.conversion_rates[currencyType] * usDollars;
        $("#currency-code").html(currencyType);
        console.log(currencyType);
        $("#converted-currency").html(covertedCurrency);
        if (!response.conversion_rates[currencyType]) {
          $(".result").text("Does not exist.");
        } 
      } else {
        $(".result").text("There was an error handling your request.");
      }
    });
  });
});