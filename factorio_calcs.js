import { html, render } from "https://unpkg.com/lit-html@2.7.4/lit-html.js";

function CalculatedRecipe(amount) {
  return html` <span>${amount}</span> `;
}

function updateCalcs() {
  const target = document.getElementById("targetValue").value;
  const unit = document.getElementById("targetUnit").value;
  var multiplier;

  switch (unit) {
    case "ups":
      multiplier = 1;
      break;
    case "upm":
      multiplier = 1 / 60;
      break;
    case "yellowBelt":
      multiplier = 15;
      break;
    default:
      alert(`Unrecognized unit type: ${unit}`);
      multiplier = 1;
      break;
  }

  // Red science calculations
  const RSTime = 5;
  const RSCogs = 1;
  const RSCopper = 1;

  let factoriesReq = target * multiplier * RSTime;
  let cogsReq = target * multiplier * RSCogs;
  let copperReq = target * multiplier * RSCopper;

  document.getElementById("RSFactoryCount").textContent = Math.ceil(
    factoriesReq
  );
  document.getElementById("RSCogCount").textContent = cogsReq.toFixed(1);
  document.getElementById("RSCopperCount").textContent = copperReq.toFixed(1);

  // Cogs calculations
  const cogTime = 0.5;
  const cogIron = 2;

  factoriesReq = cogsReq * cogTime;
  let ironReq = cogsReq * cogIron;
  document.getElementById("cogFactoryCount").textContent = Math.ceil(
    factoriesReq
  );
  document.getElementById("cogIronCount").textContent = ironReq.toFixed(1);

  const recipeBreakdown = document.getElementById("recipeBreakdown");
  console.log(recipeBreakdown);
  render(CalculatedRecipe(target * multiplier), recipeBreakdown);
  render(html`<p>Hello world!</p>`, recipeBreakdown);
}

const inputFormIDs = ["targetValue", "targetUnit"];

for (const inputFormID of inputFormIDs) {
  document.getElementById(inputFormID).addEventListener("input", updateCalcs);
}

// Call the update function to initialize the website after loading
updateCalcs();
