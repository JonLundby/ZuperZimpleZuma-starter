import SimpleLinkedList from "./simplelinkedlist.js";

export {init, getFirstBall, getNextBall, loadCannon, getCannonBall, addRandomBall, dump, insertBallAfter, insertBallBefore, numberOfBalls, checkMatches, removeMatches, addBall, randomBall, red, blue, yellow, green};

const list = new SimpleLinkedList();

function init() {
  console.log("Model init");

}

function dump() {
  let node = list.head;
  let output = "";
  while(node != null) {
    output += '"' + node.data + node.id +'"';
    output += " -> ";
   
    node = node.next;
  }
  output += "null";
  console.log(output);
}

// **** WRAPPERS ****
function addRandomBall() {
  return list.add(randomBall());
}

function addBall(ball) {
  list.add(ball);
}

function insertBallAfter(node, ball) {
  return list.insertAfter(ball, node);
}

function insertBallBefore(node, ball) {
  return list.insertBefore(ball, node);
}

function numberOfBalls() {
  return list.size();
}

// **** CANNON ****
let cannonBall;

function loadCannon() {
  cannonBall = randomBall();
}

function getCannonBall() {
  return cannonBall;
}

// **** MATCHES ****
function checkMatches(node) {
  if (!node) return;
  const matches = []
  // find matche før
  let lookAt = node;

  // tjekker matches bagud
  while (lookAt && lookAt.data == node.data) {
    matches.push(lookAt);
    lookAt = lookAt.prev;
  }
  // reset til at kigge på udgangspunktet +1(next)
  lookAt = node.next;
  
  // tjekker matches fremad
  while (lookAt && lookAt.data == node.data) {
    matches.push(lookAt);
    lookAt = lookAt.next;
  }

  return matches;

}

function removeMatches(matches) {
  const removedMatches = [];

  for (const node of matches) {
    removedMatches.push(node)
    list.remove(node);
  }

  return removedMatches;
}

// TODO: Implement functions to find and remove matches
function getFirstBall() {
  return list.head;
}

function getNextBall(ball) {
  return ball.next;
}

// **** BALLS ****

const balls = ["🔴", "🔵","🟡","🟢"];

function randomBall() {
  return balls[Math.floor(Math.random()*balls.length)];
}

function red() {
  return balls[0];
}

function blue() {
  return balls[1];
}

function yellow() {
  return balls[2];
}

function green() {
  return balls[3];
}
