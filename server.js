'use strict';
require('dotenv').config();
let globalBody={};
const express=require('express');
const request=require('request');
const ejs=require('ejs');

const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.send(globalBody);
  });


var options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
  qs: {
    timeFrame: 'day',
    targetCalories: '2000',
    diet: 'kito',
    exclude: 'shellfish%2C olives'
  },
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': 'de72feb0d1msh4cd6880191f064fp1248d3jsnb2c8b04da480'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
    // console.log(body);
    // console.log(response);
    // response.send(body);
    // response.JSON.parse(body);
    // response.json(body);
    globalBody=JSON.parse(body);

    // render('/', {food:body});

});


  
  app.listen(PORT, () => {
    console.log(`Listening on PORT${PORT}`);
  });