import * as model from "./model.js";
import * as view from "./view.js";

// TODO: Export functions used by the view
export { addNewBall, shootCannon, ballInserted, matchesRemoved };

window.addEventListener("load", init);

function init() {
  console.log("Controller init");
  model.init();
  view.init();

  createInitialChain();
  model.loadCannon();
  view.updateDisplay(model);
  // show debug info on the model
  model.dump();

  // store "shortcuts" to model and view in window
  window.model = model;
  window.view = view;
}

function createInitialChain() {
  for (let i = 0; i < 5; i++) {
    model.addRandomBall();
  }
}

// TODO: Add controller functions to handle things happening in the view
function addNewBall() {
  const newNode = model.addRandomBall();

  view.animateNewBall(model, newNode);
}

function shootCannon(node) {
  const cannonBall = model.getCannonBall();
  console.log("Shooting cannonball: ", cannonBall);
  const newBallInList = model.insertBallAfter(node, cannonBall);
  model.loadCannon();
  view.animateCannonBall(model, newBallInList);
}

// **** ANIMATIONS ****

// TODO: Add controller functions to be called when animations have completed

function ballInserted(node) {
  // check for matches
  console.log("Node in ball inserted:", node);

//   const matchesArr = undefined
  const matchesArr = model.checkMatches(node);
  console.log(matchesArr);
  // update the view
  if (matchesArr?.length > 2) {
    model.removeMatches(matchesArr);
    view.animateRemoveBalls(model, matchesArr);

  }
}

function matchesRemoved(nextBall) {}
