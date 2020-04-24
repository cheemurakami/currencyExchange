import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function(){
  $("#test").submit(function(event){
    event.preventDefault();
    alert('hi');
  });
});