var choiceArr = ["rock","paper","scissors"];
//creating the choicess buttons
for(var i = 0 ; i<=2;i++){
    const choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class","btn");
    choiceBtn.innerHTML=choiceArr[i];
    const playerOptions = document.getElementById("playerOptions");
    playerOptions.appendChild(choiceBtn);
    choiceBtn.addEventListener("click",clck);
}
function clck (){
    //taking the player choice when clicking
  var  pchoice = this.innerHTML;
  pImg.setAttribute("src","imgs/"+pchoice+".png");
  // the cpu choice 
  var rng = Math.floor(Math.random()*3);
  var cpuchoice = choiceArr[rng];
  cpuImg.setAttribute("src","imgs/"+cpuchoice+".png");
  
  //comparing the inputs
  var result = "the computer wins";
   //making the player and the cpu choices number to make the comparison fuctoin shorter 1 for rock 10 for paper 100 for scissors
   var a =1
   pchoice =="paper"?a=10:pchoice =="scissors"? a=100: a=1;
   var b =1
   cpuchoice =="paper"?b=10:cpuchoice =="scissors"? b=100: b=1;
  //judeging the winner
  var compare = a-b;
  switch(compare){
      case 0 : 
        result = "tieGame";
        break;
      case 99:
      case -90:
      case -9:
        result = "you lose";
        break;
      default:
        result = "you win";
        break;

  }
  rsltImg.setAttribute("src","imgs/"+result+".png");
  // removing the player options 
  document.getElementById("playerOptions").style.visibility = "hidden";
  cpuImg.style.visibility = "visible";
  pImg.style.visibility = "visible";
  rsltImg.style.visibility = "visible";
}
//adding the player choice img
const pImg= document.createElement("img");
const thePlayerChoice = document.getElementById("thePlayerChoice");
thePlayerChoice.appendChild(pImg);

// adding the cpu img
const cpuImg= document.createElement("img");
const theCpuChoice = document.getElementById("theCpuChoice");
theCpuChoice.appendChild(cpuImg);
// adding the result img
const rsltImg= document.createElement("img");
const theResultSection = document.getElementById("result");
theResultSection.appendChild(rsltImg);
// defining the function of play agian button
const playAgian = document.getElementById("playAgain");
playAgian.addEventListener("click",retry);
function retry(){
    document.getElementById("playerOptions").style.visibility = "visible";
    pImg.style.visibility = "hidden";
    cpuImg.style.visibility = "hidden";
    rsltImg.style.visibility = "hidden";
   
    
}
