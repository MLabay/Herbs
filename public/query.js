
// Import the OpenAI library using ECMAScript modules syntax
// const {Configuration, OpenAIApi}= require("openai")
// const configuration = new Configuration({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
// });
import OpenAI from "../node_module/openai";
const openai = new OpenAI();

function query() {
  const i1 = document.getElementById('Ingredient1').value;
  const i2 = document.getElementById('Ingredient2').value;
  const i3 = document.getElementById('Ingredient3').value;

  openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a Dungeons and Dragons Fifth edition potion making assistant, skilled in creating potions from magical ingredients with 3 ingredients." },
      { role: "user", content: "Describe the effect and method of creation for a potion made from " + i1 + ", " + i2 + ", and " + i3 + "." }
    ]
  }).then(completion => {
    console.log(completion.choices[0].message.content);
  });
}

// Example usage
query();