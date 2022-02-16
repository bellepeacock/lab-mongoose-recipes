const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  level: {type: String, enum: ["Amateur Chef", "Easy Peasy", "Ultrapro Chef"]},
  ingredients: [ String ],
  cuisine: { type: String, isRequired: true },
  dishType: {type: String, enum: ["breakfast", "main_course", "soup", "snack", "drink", "desert", "other"]},
  image: {type: String, Default: "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: {type: Number, minimum: 0},
  creator: String,
  created: {type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;


