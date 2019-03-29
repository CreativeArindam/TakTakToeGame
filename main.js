
let p1btn = document.getElementById("p1btn");
let p2btn = document.getElementById("p2btn");

//Add player's name..
var player1 = "Player 1",player2 = "Player 2";
let addname = document.getElementById("addnameBtn");
addname.addEventListener("click",function(){
  player1 = prompt("Enter player 1 name:").toUpperCase();
  player2 = prompt("Enter player 2 name:").toUpperCase();
  addname.textContent ="Change player name"
  
  let p1 = document.getElementById("p1");
  p1.textContent = player1 + " :";
  let p2 = document.getElementById("p2");
  p2.textContent = player2 + " :";
  p1btn.textContent = player1;
  p2btn.textContent = player2;
})
//Reset the table..
function clearBoard(){
  for(let i=0; i < squares.length; i++){
    squares[i].textContent = "";
  }
}
let reset = document.getElementById("resetbtn");
reset.addEventListener("click",function (){
  let choice = confirm("Do you want to reset?");
  if(choice){
    clearBoard();
  }
  
});



let squares = document.getElementsByTagName("td");
//Putting X to the table..
function inputX(indexX){
  if(squares[indexX].textContent === ""){
    squares[indexX].textContent = "X";
  }else{
    squares[indexX].textContent = ""
  }
}

for(let indexX = 0; indexX < squares.length; indexX++){
  squares[indexX].addEventListener("click",function(){
  inputX(indexX);
  });
}

//Putting O to the table..
function inputO(indexO){
  if(squares[indexO].textContent === ""){
    squares[indexO].textContent = "O";
  }else{
    squares[indexO].textContent = ""
  }
}

for(let indexO = 0; indexO < squares.length; indexO++){
  squares[indexO].addEventListener("dblclick",function(){
    inputO(indexO);
  });
}

//Score increament..
let p1Score = 0, p2Score = 0;
let currentScore1 = document.getElementById("currentScore1");
let currentScore2 = document.getElementById("currentScore2");
p1btn.addEventListener("click",function(){
  clearBoard();
  p1Score += 5;
  currentScore1.textContent = " "+ p1Score;
})
p2btn.addEventListener("click",function(){
  clearBoard();
  p2Score += 5;
  currentScore2.textContent = " "+ p2Score;
})

//Quit game..
let quit = document.getElementById("quit");
quit.addEventListener("click",function(){
  let choice = confirm("Do you really want to quit the game?");

  if(p1Score > 0 || p2Score > 0){  
    if(choice){
    if(p1Score > p2Score){
      alert(`${player1} has won the game.`);
    }else if(p1Score === p2Score){
      alert(`It is a draw match.\nBoth score is ${p1Score}`);
    }else{
      alert(`${player2} has won the game.`);
    }
    clearBoard();
    p1.textContent = "Player 1 :"
    p2.textContent = "Player 2 :"
    p1btn.textContent = "Player 1";
    p2btn.textContent = "Player 2";
    p1Score = 0;
    p2Score = 0;
    currentScore1.textContent = " "+ p1Score;
    currentScore2.textContent = " "+ p2Score;
  }}
})





