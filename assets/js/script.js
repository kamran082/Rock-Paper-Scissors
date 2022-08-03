    
    var youChoice = document.querySelector("#youChoice");
    var computerChoice = document.querySelector("#computerChoice");
    var resultText = document.querySelector("#resultText");
    var choiceClick = document.querySelectorAll(".choiceClick");
    var You;
    var Computer;
    
    ///click function
    choiceClick.forEach(button => button.addEventListener("click", () => {
    
        You = button.textContent;
        computerTurn();
        youChoice.textContent = `You: ${You}`;
        computerChoice.textContent = `Computer: ${Computer}`;
        resultText.textContent = checkWinner();
    }));
    
     //random  for Computer.
    
    function computerTurn(){
    
        var randNum = Math.floor(Math.random() * 3) + 1;
    
        switch(randNum){
          case 1:
            Computer = "ROCK";
            break;
          case 2:
            Computer = "PAPER";
            break;
          case 3:
            Computer = "SCISSORS";
            break;
        }
    }
    
     //check for winner.
    
    function checkWinner(){
        if(You == Computer){
          return "Draw";
        }
        else if(Computer == "ROCK"){
          return (You == "PAPER") ? "You Win" : "You Lose";
        }
        else if(Computer == "PAPER"){
          return (You == "SCISSORS") ? "You Win" : "You Lose";
        }
        else if(Computer == "SCISSORS"){
          return (You == "ROCK") ? "You Win" : "You Lose";
        }
    }
    