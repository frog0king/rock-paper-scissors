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
var cScore = 0;
var pScore = 0;
var tScore = 0;
function clck (){
  changeTheme()
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
  
  //making the player and the cpu choices numbers to make the comparison fuctoin, theme independent
  var a =1
  pchoice =="paper"?a=10:pchoice =="scissors"? a=100:pchoice =="rock"? a=1:
  pchoice =="wood"?a=10:pchoice =="fire"? a=100: a=1;
  var b =1
  cpuchoice =="paper"?b=10:cpuchoice =="scissors"? b=100:cpuchoice =="rock"? b=1:
  cpuchoice =="wood"?b=10:cpuchoice =="fire"? b=100: b=1;
  //counting the score
  var compare = a-b;
  var round = 0;
  switch(compare){
    case 0 : 
    tScore++;
    break;
    case 99:
    case -90:
    case -9:
    cScore++;
    break;
    default:
    pScore++;
    break;
  }
  //counting the round and decciding whether the round end or not 
  round = tScore + cScore + pScore;
  var roundNum = document.querySelector(".numberOfRound").value;
  //defining the score and updating it 
  setTimeout(updatenumbers,2000);
  function updatenumbers (){
    roundElemnt = document.querySelector(".round");
    cScoreNum = document.querySelector(".cScoreNum");
    pScoreNum = document.querySelector(".pScoreNum");
    pScoreNum.innerHTML = pScore;
    cScoreNum.innerHTML = cScore;
    if(round <roundNum){
    roundElemnt.innerHTML=1+round;
    
  }
  }
  

  
  // fading the result if the tital round is done 
  var result = "tieGame";
  if (round >=roundNum){
    pScore>cScore? result ="you win":pScore<cScore?result = "you lose":result ="tieGame";
    rsltImg.setAttribute("src","imgs/"+result+".png");
    outro.setAttribute("class","outro");
    outro.classList.add("fadeIn");
  }
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
  cScore = 0;
  pScore = 0;
  tScore = 0;
  pScoreNum.innerHTML = pScore;
  cScoreNum.innerHTML = cScore;
  roundElemnt.innerHTML=1
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
function removePo(){
  const po = document.querySelector(".po");
  po.remove();
}