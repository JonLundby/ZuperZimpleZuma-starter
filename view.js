// TODO: Import controller
import * as controller from "./controller.js"
export {init, updateDisplay}

// *********************************
// *                               *
// *          THE VIEW             *
// *                               *
// *********************************

function init() {
  console.log("View init");
  document.querySelector("#addball").addEventListener("click", addNewBall);
}

function addNewBall() {
  console.log("View clicked add new ball"); 
  // notify controller
  console.log("TODO: Notify controller that we want to add a new ball to the chain!")
  // TODO: Notify controller that we want to add a new ball to the chain!
  controller.addNewBall()
}

const visualBalls = {
  "🔴": "red-ball.png",
  "🔵": "blue-ball.png",
  "🟡": "yellow-ball.png",
  "🟢": "green-ball.png"
}

const modelToView = new Map();
function getVisualBalls() {
  // TODO...............
}

function updateDisplay(model) {
  // Update the entire chain

  const visualChain = document.querySelector("#chain");
  // remove everything
  visualChain.innerHTML = "";

  // iterate through model of balls with the usual linked list method:
  // - find the first, loop while it isn't null, inside the loop: find the next

  // TODO: Find the first ball
  let ball = model.getFirstBall();
  console.log(ball);
  

  // TODO: loop while the ball isn't null
  while(ball) {
    // add visual ball
    const visualBall = createVisualBall(ball.data);
    visualChain.append(visualBall);
    // add button next to ball
    addButtonTo(visualBall, ball);

    // TODO: find the next ball and loop the loop
    ball = model.getNextBall(ball);

    modelToView.set(ball, visualBall)
  }

  // Also update the cannonball
  updateCannonBall(model.getCannonBall());
}

function updateCannonBall(color) {
  const visualCannon = document.querySelector("#cannon");
  visualCannon.innerHTML = "";
  const visualCannonBall = createVisualBall(color);
  visualCannon.append(visualCannonBall);
}

function createVisualBall(color) {
  console.log(color);
  
  const visualBall = document.createElement("div");
  visualBall.classList.add("ball");
  const image = document.createElement("img");
  image.src = "images/"+visualBalls[color];
  visualBall.append(image);
  return visualBall;
}

function addButtonTo(visualBall, ballModel) {
  const button = createButton();
  visualBall.append(button);
  // handle click
  button.addEventListener("click", () => {
    console.log(`Clicked button after ${ballModel.data}`);
    console.log(ballModel);
    // notify controller
    console.log("TODO: Notify controller that we want to insert the cannonball after this!")
    // TODO: Notify controller that we want to insert the cannonball after this!

  });
}

function createButton() {
  const button = document.createElement("button");
  button.textContent = "↑";
  return button;
}
