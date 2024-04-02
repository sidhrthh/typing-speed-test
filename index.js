let para = ["pack play general more plan can well eye child present these will general any can as seem up set give line around she what we way again want back need run good for point run each these lead no under write run order little very hand all real into",
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
]


// Timer
let time = 60;
let intervalId; // Variable to store the interval ID

function startTimer() {
    intervalId = window.setInterval(function () {
        if (time > 0)
            time--;
        document.getElementById("timer").innerHTML = time;
    }, 1000);
}

startTimer();

document.getElementById("restartButton").addEventListener("click", function() {
    clearInterval(intervalId); 
    time = 60;
    document.getElementById("timer").innerHTML = time; 
    startTimer(); 
});



// Paragraph fetch
function fetchRandom() {
let paragraph = document.getElementById("paragraph");
const randomNum = Math.floor(Math.random() * para.length)
paragraph.innerHTML = (para[randomNum])
}