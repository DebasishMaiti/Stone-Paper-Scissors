let userSc=document.querySelector("#user-score");
let compSc=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choise");

const DrawGame=()=>{
    msg.innerText="The Game Is Draw!Can you Play Again???";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}
const gameWinner=(userwin)=>{
      if(userwin===true){
        userScore++;

        userSc.innerText=userScore;
        msg.innerText="Hoorrey!!  You Won the game";
        msg.style.backgroundColor="green";
      }else{
        compScore++;
        compSc.innerText=compScore;
        msg.innerText="ooh noo!! You Loose the game";
        msg.style.backgroundColor="red";
      }
}

const genCompChoice=()=>{
     const option=["stone","paper","scissors"];
     const ranidx=Math.floor(Math.random()*3);
     return option[ranidx];
    };

const playGame= (userChoice)=>{

   const compChoice=genCompChoice();

   if(userChoice===compChoice){
      DrawGame();
   }else{
    let userwin=true;
    if(userChoice==="stone"){
        userwin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userwin=compChoice==="scissors"?false:true;
    }
    else{
        userwin=compChoice==="stone"?false:true;
    }
    gameWinner(userwin);   }
};

choices.forEach((choice)=>{
 
    choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});