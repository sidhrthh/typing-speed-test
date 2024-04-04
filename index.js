let paras = [
  "pack play general more plan can well eye child present these will general any can as seem up set give line around she what we way again want back need run good for point run each these lead no under write run order little very hand all real into",
  "or say first year nation program before take fact more course should where or program line well late even then turn leave problem this also small nation turn public group long go or without form would from against they then under play",
  "head after from give into lead play person about since now show like again face that against do the come and group increase but under see plan late person without thing as what and work he so for public how good group call could open tell too for",
  "show course lead both they what public will may line say day problem large seen part or now day both house other word work other same work look place work hold ru face here nation people would should face word with out present show will because",
  "write school possible general day any down child turn about most early even s keep be around lead some begin such and person time still from hold still old comp increase move large old any late think must which nation find well right between",
  "might very under with do down year those play he during down make need because public time early must people mean look just move world go however ask eye any own possible year under small since form year more also very on still interest year",
  "in about become which word only around say line or form mean consider late opelt never run this house group however increase when go just even may hold call school say own man around nation where leave many nation you house to set through more",
  "could old these such public get in nation they eye down she after should whaCH K increase with fact under show public people point want only school can she way since new over govern world how eye say possible this say thing a system very",
  "and give back plan set both down turn back seem may show few system state down ver would that most during group problem she form turn need leave by feel through nos state if can so while then through that end real group between few from come might",
  "Without large set of here man change will school use without open where or increase there problem find can through than under line way never make about same begin part large might since real have play few against head can tell people early small use",
  "as face may right day that off govern they good may late way between look school begin day early turn fact work hand much between eye know move again old for molit part group point feel have what nation however move last early also place person",
  "seem great program only it can only word thing from to play now need from to nove day one few they plan only want real day stand must have where find can point open another give who from make go may point just line again house just both which such"
];

const typingP = document.querySelector("#paragraph p"),
inputF = document.querySelector("#input-field"),
tryAgainB = document.querySelector("#restartButton"),
timerT = document.querySelector("#timer"),
mistakeT = document.querySelector("#mistake"),
wpmT = document.querySelector("#wpm"),
cpmT = document.querySelector("#cpm");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = 0;

// Fetch the Paragraphs
function loadPara() {
  const randIndex = Math.floor(Math.random() * paras.length);
  typingP.innerHTML = paras[randIndex].split("").map(c => `<span>${c}</span>`).join("");
  typingP.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inputF.focus());
  typingP.addEventListener("click", () => inputF.focus());
}

function initTyping(e) {
  let chars = typingP.querySelectorAll("span");
  let typedC = inputF.value.charAt(charIndex);
  if (charIndex < chars.length && timeLeft > 0) {
      if (!isTyping) {
          timer = setInterval(initTimer, 1000);
          isTyping = true;
      }
      if (typedC === null) {
          if (charIndex > 0) {
              charIndex--;
              if (chars[charIndex].classList.contains("incorrect")) {
                  mistakes--;
              }
              chars[charIndex].classList.remove("correct", "incorrect");
          }
      } else {
          if (chars[charIndex].innerText === typedC) {
              chars[charIndex].classList.add("correct");
          } else {
              mistakes++;
              chars[charIndex].classList.add("incorrect");
          }
          charIndex++;
      }
      chars.forEach(s => s.classList.remove("active"));
      chars[charIndex].classList.add("active");

      let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
      wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

      wpmT.innerText = wpm;
      mistakeT.innerText = mistakes;
      cpmT.innerText = charIndex - mistakes;
  } else {
      clearInterval(timer);
      inputF.value = "";
  }
}



function initTimer() {
  if (timeLeft > 0) {
      timeLeft--;
      timerT.innerText = timeLeft;
      const wpm = Math.round((charIndex - mistakes) / 5 / (maxTime - timeLeft) * 60);
      wpmT.innerText = isNaN(wpm) || wpm === Infinity ? 0 : wpm;
  } else {
      clearInterval(timer);
  }
}


function resetGame() {
    loadPara();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inputF.value = "";
    timerT.innerText = timeLeft;
    wpmT.innerText = 0;
    mistakeT.innerText = 0;
    cpmT.innerText = 0;
}

loadPara();
inputF.addEventListener("input", initTyping);
tryAgainB.addEventListener("click", resetGame);
