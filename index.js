const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
console.log(data.map(item => item.title));

const express = require('express');

const MONGODB_URI = 'mongodb://127.0.0.1/recipe-app';
const app = express();

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, remove all existing ones
    // return Recipe.deleteMany()
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
});


const createRecipe = (title, level, ingredients, cuisine, dishType, image, duration, creator, created) => {
  const newRecipe = new Recipe({
    title,
    level: level.split(" ").join("_"),
    ingredients,
    cuisine,
    dishType: dishType.split(" ").join("_"),
    image,
    duration,
    creator,
    created
  })
  console.log(newRecipe.title)
  newRecipe.save()
  .then(newlyCreatedRecipe => console.log(newlyCreatedRecipe))
  .catch(error => console.log(error));
};


// createRecipe('Gordon Bleu', 'amateur_chef', ['tomato', 'carrot'], 'french', 'breakfast', 'image_url', 5, 'Gordon Ramsay')


Recipe.insertMany(data)
  .then(createdRecipes => console.log(createdRecipes))
  .catch(error => console.log(error))