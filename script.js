var choiceArrRps = ["rock","paper","scissors"];
var choiceArrElement = ["water","wood","fire"];
var choiceArr = choiceArrRps
//creating the choicess buttons
const playerOptions = document.querySelector(".playerOptions");
function creatButtons(arr){
  const po = document.createElement("div");
  po.setAttribute("class","po");
  for(var i = 0 ; i<=2;i++){
    const choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class","btn");
    choiceBtn.innerHTML=arr[i];
    po.appendChild(choiceBtn);
    playerOptions.appendChild(po);
    choiceBtn.addEventListener("click",clck);
  }
}
creatButtons(choiceArr);
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
  //making the player and the cpu choices numbers to make the comparison fuctoin, theme independent
  var a =1
  pchoice =="paper"?a=10:pchoice =="scissors"? a=100: a=1;
  pchoice =="wood"?a=10:pchoice =="fire"? a=100: a=1;
  var b =1
  cpuchoice =="paper"?b=10:cpuchoice =="scissors"? b=100: b=1;
  cpuchoice =="wood"?b=10:cpuchoice =="fire"? b=100: b=1;
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
//defining the retry
const outro = document.querySelector(".outro");
function retry(){
  outro.setAttribute("class","outro");
  outro.classList.add("fadeOut");
  changeTheme();
}
//open options buttn
const optionBtn = document.getElementById("options-btn");
const options = document.querySelector(".options");
optionBtn.addEventListener("click",()=>{
  options.setAttribute("class","options")
  options.classList.add("fadeInOptions");
})
// options 
const close = document.querySelector(".save");
close.addEventListener("click",saveFunction)
function saveFunction() {
  options.setAttribute("class","options")
  options.classList.add("fadeOut");
  //changing the theme
  const backGroundcolor = document.querySelector("#backGroundColor").value;
  document.body.style.backgroundColor= backGroundcolor;
  function removePo(){
    const po = document.querySelector(".po");
    po.remove();
  }
  removePo();
  const theme = document.getElementById("theme");
  changeTheme();
  creatButtons(choiceArr);
}
function changeTheme(){
  if (theme.options[theme.selectedIndex].innerHTML== "elements"){
    choiceArr =choiceArrElement
    console.log ("sucsess")
    cpuImg.setAttribute("src","imgs/defaultElemnt.png");
    pImg.setAttribute("src","imgs/defaultElemnt.png");
  }else{
    choiceArr =choiceArrRps
    cpuImg.setAttribute("src","imgs/rock.png");
    pImg.setAttribute("src","imgs/rock.png");
  }
}