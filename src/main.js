import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {apiCall} from "./apiCall.js";

$(document).ready(function(){
  $("#convert").submit(function(event){
    event.preventDefault();
    let usDollars = parseInt($("#us-dollars").val());
    apiCall().then(function(response){
      let covertedCurrency = response.conversion_rates.JPY * usDollars;
      $(".result").html(covertedCurrency);
    });
  });
});