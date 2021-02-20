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
  // the cpu choice 
  var rng = Math.floor(Math.random()*3);
  var cpuchoice = choiceArr[rng];
  // applying the corrisponding img after 2s
  setTimeout(changImg,2000);
  function changImg (){
    cpuImg.setAttribute("src","imgs/"+cpuchoice+".png");
    pImg.setAttribute("src","imgs/"+pchoice+".png");
  }
  
  //comparing the inputs
  var result;
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
  // fading the result
  outro.setAttribute("class","outro");
  outro.classList.add("fadeIn");
  // hands animation
  pImg.style.animation ="pshaking 2s ";
  cpuImg.style.animation= "cpushaking 2s" ; 
  
  
}


//adding the player choice img
const pImg= document.createElement("img");
const thePlayerChoice = document.getElementById("thePlayerChoice");
pImg.setAttribute("src","imgs/rock.png");
pImg.setAttribute("class","pImg");
thePlayerChoice.appendChild(pImg);
// adding the cpu img
const cpuImg= document.createElement("img");
const theCpuChoice = document.getElementById("theCpuChoice");
cpuImg.setAttribute("src","imgs/rock.png");
theCpuChoice.appendChild(cpuImg);
cpuImg.setAttribute("class","cpuImg");
pImg.addEventListener("animationend", delt);

function delt(){
  pImg.style.animation ="";
  cpuImg.style.animation= "" ; 
}
// adding the result img
const rsltImg= document.createElement("img");
const theResultSection = document.getElementById("result");
theResultSection.appendChild(rsltImg);
// defining the function of play agian button
const playAgian = document.getElementById("playAgain");
playAgian.addEventListener("click",retry);
//defining the reault
const outro = document.querySelector(".outro");
function retry(){
  outro.setAttribute("class","outro");
   outro.classList.add("fadeOut");
   pImg.setAttribute("src","imgs/rock.png");
   cpuImg.setAttribute("src","imgs/rock.png");
}

