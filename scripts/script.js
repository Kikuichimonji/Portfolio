var blackscreen = document.getElementById("blackscreen");
var intro = document.getElementById("intro");
var visible = true; // blinking _
var visibleStart = true; // blinking Intro
var textTable = ['"Bonjour, Je me m\'appelle Thomas, je suis Web Développeur Fullstack avec préférence Back end."',
    '"J\'ai 33 ans, j\'habite dans le Haut-Rhin et je suis également bénévole à l\'association \'Animaux en Détresse\'."',
    '"Je suis passionné par le développement web ansi que les jeux vidéo depuis que je suis jeune."',
    '"J\'aime également travailler en musique, les randonnées, la piscine, le vélo et m\'occuper des animaux."',
    "test"] //the dialogue text list

var activeText = false;
var interDiag = 10; //Typing Speed of the dialog
var textInterval = [];  // Table of timeouts, for easy cleaning (page slide for ex)

var title = "Découvrez Thomas" //All the slider Titles
var title2 = "Mes compétences"
var title3 = "Mes projets"
var title4 = "Me contacter"
var interTitle = 80; //Typing Speed of the title
var letters = []; // Table of timeouts, for easy cleaning (stop all typing animation for the title when we change slide)


var consoleBox = document.getElementById("console") //The console Mockup
var animEnd = true; // Status of the animation (to prevent overlap)

var listInput = document.getElementsByTagName("input")
var listArea = document.getElementsByTagName("textarea")
var formButton = document.getElementsByTagName("button")[0]

var swiperTouchStartX;
var wheelSlowing = false;
var noScroll = false;
var interScroll = 500;

var footerLinks = document.getElementsByTagName("footer")[0].getElementsByTagName("p")
var modalBox = document.getElementsByClassName("modalBox")
var closeCookie = document.getElementById("cookie").getElementsByTagName("span")[1];
var table = [];
if (typeof document.getElementById("timerSession") !== 'undefined')
    timer = document.getElementById("timerSession").dataset
else
    timer = 0;
var timeDiff = 5 * 60 * 1000;
var dateTimer = timer.value * 1000;
var swiperSuffix = "";
var mainWidth = window.innerWidth;
var mainHeight = window.innerHeight;

let projectListImg = document.getElementsByClassName("imgPort");
let projectListText = document.getElementsByClassName("textPort");
let projectListBullet = document.getElementsByClassName("bulletPort");
projectListImg[0].classList.add("active");
projectListText[0].classList.add("active");
projectListBullet[0].classList.add("active");
document.getElementsByClassName("console-top")[0].getElementsByTagName("p")[1].textContent = projectListImg.length


if (mainWidth <= 768) {
    /*swiperSuffix = ""*/
    document.getElementById("logo").src = "assets/img/Favicon-Thomas.png"
    document.getElementById("prenomL").innerHTML = "Prénom";
    document.getElementById("nomL").innerHTML = "Nom";
    document.getElementById("mailL").innerHTML = "Mail";
    document.getElementById("texteL").innerHTML = "Message";
}
if(mainWidth > mainHeight){
    document.getElementById("mainImg").src = "assets/img/Thomas_roess-cropped.webp";
} else {
    document.getElementById("mainImg").src = "assets/img/Thomas-roess-Mobile-flip.jpg";
}


const swiper = new Swiper("#swiper" + swiperSuffix, { // Swiper params

    direction: 'horizontal', //Horizontal slide
    /*mousewheel: 
    {
        releaseOnEdges : true,
    },*/
    loop: false, //Come back to 1 after last one (actually a duplicate with n+1 ID )
    /*navigation: { // Nav arrows
        nextEl: '.swiper-button-next' ,
        prevEl: '.swiper-button-prev',
    },*/
    pagination: { //Buletts
        el: '.swiper-pagination'+ swiperSuffix,
        type: 'bullets',
        clickable: 'true',
        autoHeight:'true',
    },
    on: {
        init(swiper) { //on initialisation
            swiper.el.querySelector('.swiper-button-prev').addEventListener('click', function () { //We rewrite the clicking because the loop duplication is annoying
                if (swiper.isBeginning) {
                    swiper.slideTo(swiper.slides.length - 1); //if we prev on the first, we go back to last
                }
                else {
                    swiper.slideTo(swiper.realIndex - 1); //else we just move 1 back
                }
            });
            swiper.el.querySelector('.swiper-button-next').addEventListener('click', function () {
                if (swiper.isEnd) {
                    swiper.slideTo(0);
                }
                else {
                    swiper.slideTo(swiper.realIndex + 1);
                }
            });
        },
        touchStart(swiper, e) //Event fired when we start dragging 
        {
            swiperTouchStartX = e.clientX; //we save the initial position of the cursor
        },
        touchEnd(swiper, e) {
            tolerance = 150; //min pixel distance to start changing slides
            totalSlides = swiper.slides.length;
            diff = e.clientX - swiperTouchStartX; //how many pixels we travelled between start and end dragging
            if (swiper.isBeginning && diff >= tolerance)  // if we're at the start and we dragged 150 to the right
            {
                swiper.slideTo(totalSlides - 1); //we slide back to last
            }
            else if (swiper.isEnd && diff <= -tolerance)  //same a before but the other way
            {
                setTimeout(function ()  //for some reason it behave nicer this way, otherwise it goes to slide 2
                {
                    swiper.slideTo(0);
                }, 1);
            }
        },
    }
});


blackscreen.addEventListener("click", function () //Remove the intro on click 
{
    document.querySelector("#swiper").style.height = document.querySelector("#article1").offsetHeight+100+"px";
    blackscreen.className = blackscreen.className + " fadeOutFast";
    setTimeout(() => { //I'm not used to type it this way, i need to train more
        blackscreen.style.display = "none";
    }, 500);
    setTimeout(function () { showDialog(textTable, [0, 1, 2, 3], 0, interDiag, "dialog0") }, 500); //first dialog initialisation
})

function attachEvenInput(listInput) // as name says, we attach all event listeners to the inputs
{
    for (let countList = 0; countList < listInput.length; countList++) //we disable draging when we're focused on the inputs
    {
        listInput[countList].addEventListener("focus", function (e) //on focus
        {
            swiper.allowTouchMove = false;
            listInput[countList].previousElementSibling.className = "inputFocus" //Animated class
        })
        listInput[countList].addEventListener("blur", function (e) //leaving focus
        {
            swiper.allowTouchMove = true;
            if (listInput[countList].value == "")
                listInput[countList].previousElementSibling.className = "inputLoseFocus"
        })
    }
    formButton.addEventListener("mouseenter", function (e) {
        swiper.allowTouchMove = false;
    })
    formButton.addEventListener("mouseleave", function (e) {
        swiper.allowTouchMove = true;
    })
}

attachEvenInput(listInput); // Events on the inputs
attachEvenInput(listArea); // Events on the textarea

function showTitle(texte, interval, tag) // i separated title and text for screen sliding reason
{
    document.getElementById(tag).textContent = ""; //Clean the actual title
    for (count = 0; count < texte.length; count++) //Loop for the text animation
    {
        (function (countDracula)  //Self executing anonymous function (truly private scope)
        {
            letters[countDracula] = setTimeout(function () //Writing letter by letter
            {
                document.getElementById(tag).textContent = document.getElementById(tag).textContent + texte[countDracula];
            }, interval * countDracula) //repeat x number of letters times with desired interval
        }(count)) //Param to the functionn

    }
}

function showDialog(text, textIndex, index, interval, tag) //Fuck yeah it finally work //(Table of dialog,list of indexes fot the table,which one in the list,what speed we write,where do we write)
{
    var mainBox = document.getElementsByClassName("dialog__content" + swiperSuffix); //To differentiate Mobile and Desktop box

    if (tag == "dialog0" || tag == "dialog1") //first dialog box 
    {
        mainBox[0].style.opacity = 1;
        subBox = mainBox[0].getElementsByClassName(tag)[0];
    }
    if (tag == "dialog2" || tag == "dialog3") //second dialog box 
    {
        mainBox[1].style.opacity = 1;
        subBox = mainBox[1].getElementsByClassName(tag)[0];
    }

    for (countLetter = 0; countLetter < text[textIndex[index]].length; countLetter++) //We loop for the lenght of the right text in the table
    {

        (function (countLetter) //Self executed anonymous fonction again
        {
            textInterval[countLetter] = setTimeout(function () //each timeout got a unique id, this way we cean clear the whole list later
            {
                subBox.textContent = subBox.textContent + text[textIndex[index]][countLetter]; //we look for the right container (tag), the right text at the right index to write, then we print letter by letter
                //document.getElementsByClassName(tag)[1].innerHTML = document.getElementsByClassName(tag)[1].innerHTML + text[textIndex[index]][countLetter]; // Had to recall it because of swipper duplicating first and last slider for smooth loops (index 0 = slide 1, index 1 = slide 1 duplicated)
                if (countLetter == text[textIndex[index]].length - 1) // if we're at the end of the sentence
                    if (textIndex[index + 1]) //if we got more sentences
                    {
                        index++;
                        activeText = true; //We say that an animation is still running
                        setTimeout(function () { showDialog(text, textIndex, index, interval, "dialog" + index) }, 200); //recursion 
                    }
                    else
                        activeText = false; // No more dialog is running, we can re animate if we want
            }, countLetter * interval)
        })(countLetter)
    }
}
function clearDialog(tag, list) //CLearing all the dialogs for the tags
{
    let indexDiag = 0;
    if(swiperSuffix)
        indexDiag = 1;
    for (count = 0; count < list.length; count++)
        document.getElementsByClassName(tag + list[count])[indexDiag].textContent = ""
    var dialogList = document.getElementsByClassName("dialog__content" + swiperSuffix)
    for (count = 0; count < dialogList.length; count++)
        dialogList[count].style.opacity = 0

    /*for(count = 0; count < list.length; count++) //had to repeat again because of swipper (duplication of slides)
        document.getElementsByClassName(tag+list[count])[1].innerHTML = ""*/
}

underscore = window.setInterval(function () { //Blinking "_"
    document.getElementById("undescore").classList.toggle('hidden')
}, 600)

start = window.setInterval(function () { //Blinking Start
    document.getElementById("start").classList.toggle('hidden')
}, 600)


showTitle(title, interTitle, "titre"); //first title initialisation

window.addEventListener("load", function () {
    document.querySelector("#swiper").style.height = "0"
    var middleHeight = (window.innerHeight / 2) - (intro.offsetHeight / 2); //My attempt at centenring the title animation
    var xMax = 16 //shake offset
    anime.timeline({ loop: false }) //Intro Animation
        .add({ // Coming down
            targets: '#intro',
            opacity: [0, 1],
            translateY: [0, middleHeight-100],
            easing: "easeInExpo",
            duration: 1000,
        })
        .add({ // Shake
            targets: '#intro',
            easing: 'easeInOutSine',
            duration: 550,
            translateY: [ middleHeight-100,  middleHeight-100], //necessary, if not here the text ges back up for some reason
            translateX: [
                {
                    value: xMax * -1,
                },
                {
                    value: xMax,
                },
                {
                    value: xMax / -2,
                },
                {
                    value: xMax / 2,
                },
                {
                    value: 0
                }
            ],
        })
        .add({ // Press any key Appear
            targets: '#start',
            opacity: [0, 1],
            duration: 1,
            delay: 600
        })
})

window.addEventListener("keyup", function (e) {
    if(e.key == "ArrowRight")
    {
        swiper.slideNext();
    }
    else if(e.key == "ArrowLeft")
    {
        swiper.slidePrev();
    }
    if(swiper.activeIndex == 2)
    {
        if(e.key == "ArrowUp")
        {
            if (animEnd) 
            {
                animateConsole("up")
            }
        }
        else if(e.key =="ArrowDown")
        {
            if (animEnd) // if an animation is running or at the end of the list 
            {
                animateConsole("down")
            }
        }
    }
});
window.addEventListener("wheel", function (e) {
    consoleBox.addEventListener("mouseenter", function (e) // we disable page scrolling when we enter the console box
    {
        noScroll = true
    })
    consoleBox.addEventListener("mouseleave", function (e) // we re enable page scrolling when we leave the console box
    {
        noScroll = false
    })
    if (!wheelSlowing && !noScroll) {
        wheelSlowing = true
        if (e.deltaY < 0 && swiper.isBeginning) //if we scroll up
        {
            swiper.slideTo(swiper.slides.length - 1);
        }
        else if (e.deltaY < 0 && !swiper.isBeginning) {
            swiper.slidePrev();
        }
        else if (e.deltaY > 0 && swiper.isEnd)//if we scroll down
        {
            swiper.slideTo(0);
        }
        else if (e.deltaY > 0 && !swiper.isEnd) {
            swiper.slideNext();
        }
        setTimeout(function () {
            wheelSlowing = false
        }, interScroll)
    }
},{passive: true})

consoleBox.addEventListener("wheel", function (e) // All the console animations
{
    if (swiper.activeIndex == 2){
        if (e.deltaY > 0) //if we scroll down
        {
            if (animEnd && !wheelSlowing) // if an animation is running or at the end of the list 
            {
                animateConsole("down")
            }
        }
        else //if we scroll up
        {
            if (animEnd && !wheelSlowing) 
            {
                animateConsole("up")
            }
        }
        wheelSlowing = true;
        setTimeout(function () {
            wheelSlowing = false
        }, interScroll)
    }
    
},{passive: true})

function animateConsole(dir,endProj=null)
{
    let activeProject = document.getElementById("article3").getElementsByClassName("active");
    let projectTable = Array.prototype.slice.call(projectListImg)

    startProj = projectTable.indexOf(activeProject[0]);
    startProj++;
    switch (dir) {
        case "down":
            if(!endProj){
                endProj = startProj+1;
            }
            if(projectTable[startProj]){
                anime.timeline({ loop: false })
                .add({ // project 1 slide down
                    targets: ["#p"+startProj , "#i"+startProj ],
                    top: "100vh",
                    opacity: 0,
                    easing: "easeInExpo",
                    duration: 700,
                    begin: function () {
                        animEnd = false;
                    },
                    complete: function () {
                        if(startProj > 0){
                            document.getElementById("i"+(startProj)).style.display = "none";
                        }
                    }
                })
                .add({ // project 2 slide up
                    targets: ["#p"+(endProj), "#i"+(endProj)],
                    top: 0,
                    easing: "easeOutExpo",
                    opacity: 1,
                    duration: 700,
                    complete: function () {
                        animEnd = true;
                        if(!projectTable[endProj]){
                            document.getElementsByTagName("object")[0].data = "assets/img/mouse-scroll-down-up.svg" //we swap the svg when we're at the end
                        }
                        document.getElementsByClassName("console-top")[0].getElementsByTagName("p")[0].textContent = endProj // "2/2"
                        projectListImg[startProj-1].classList.remove("active");
                        projectListText[startProj-1].classList.remove("active");
                        projectListBullet[startProj-1].classList.remove("active");
                        projectListImg[endProj-1].classList.add("active");
                        projectListText[endProj-1].classList.add("active");
                        projectListBullet[endProj-1].classList.add("active");
                    }
                })
            }
            else{
                swiper.slideNext()
            }
        break;
        case "up":
            if(!endProj){
                endProj = startProj-1;
            }
            if(projectTable[endProj-1]){
                anime.timeline({ loop: false })
                .add({
                    targets: ["#p"+startProj , "#i"+startProj ],
                    top: '100vh',
                    opacity: 0,
                    easing: "easeInExpo",
                    duration: 700,
                    begin: function () {
                        animEnd = false;
                    },
                    complete: function () {
                        if(startProj > 0){
                            document.getElementById("i"+(endProj)).style.display = "flex";
                        }
                    }
                })
                .add({
                    targets: ["#p"+(endProj) , "#i"+(endProj) ],
                    top: 0,
                    opacity: 1,
                    easing: "easeOutExpo",
                    duration: 700,
                    complete: function () {
                        animEnd = true;
                        if(!projectTable[endProj-1]){
                            document.getElementsByTagName("object")[0].data = "assets/img/mouse-scroll-up-down.svg";
                        }
                        document.getElementsByClassName("console-top")[0].getElementsByTagName("p")[0].textContent = endProj //"(1/2)"
                        projectListImg[startProj-1].classList.remove("active");
                        projectListText[startProj-1].classList.remove("active");
                        projectListBullet[startProj-1].classList.remove("active");
                        projectListImg[endProj-1].classList.add("active");
                        projectListText[endProj-1].classList.add("active");
                        projectListBullet[endProj-1].classList.add("active");
                    }
                })
            }
            else{
                swiper.slidePrev()
            }
        break;
    }
}

for( i = 0; i< projectListBullet.length; i++){
    projectListBullet[i].addEventListener("click", (e) =>{
        if(animEnd && !wheelSlowing)
            animateConsoleTo(e.target.innerHTML)     
    })
}


function animateConsoleTo(index)
{
    let activeProject = document.getElementById("article3").getElementsByClassName("active");
    if(activeProject[0].id.slice(1) > index){
        animateConsole("up",index)
    }else if(activeProject[0].id.slice(1) < index){
        animateConsole("down",index)
    }
}
/*swiper.on("touchEnd",function() //Custom Sensitivity , original was way too touchy
{
    if(swiper.touches.diff > 100) //if we move more than 100pixels regarding of the speed, we slide  
    {
        //swiper.touches.diff = 0
        swiper.slidePrev();
    }  
    else if(swiper.touches.diff < -100)
    {
        //swiper.touches.diff = 0
        swiper.slideNext();
    }   

})*/ //everything become wanky, might change later again
document.querySelector("#article1").style.height = window.innerHeight*0.9 - document.querySelector("header").offsetHeight +"px";
document.querySelector("#article3").style.height = window.innerHeight*0.9 - document.querySelector("header").offsetHeight +"px";
document.querySelector("#article4").style.height = window.innerHeight*0.9 - document.querySelector("header").offsetHeight +"px";
swiper.on('beforeTransitionStart', function () //event at the end of the slide transition
{
    switch (swiper.activeIndex) {
        case 0:
            document.querySelector("#swiper").style.height = document.querySelector("#article1").offsetHeight+100+"px";
            break;
        case 1:
            document.querySelector("#swiper").style.height = document.querySelector("#article2").offsetHeight+"px";
            break;
        case 2:
            document.querySelector("#swiper").style.height = document.querySelector("#article3").offsetHeight+100+"px";
            break;
        case 3:
            document.querySelector("#swiper").style.height = document.querySelector("#article4").offsetHeight+100+"px";
            //document.querySelector("#swiperM .swiper-wrapper .swiper-slide:nth-child(4)").style.height = "1000px";
            break;
    }
})
swiper.on('slideChangeTransitionEnd', function () //event at the end of the slide transition
{
    for (let countI = 0; countI < letters.length; countI++) //we clear the previous animation timeouts for the titles
        clearTimeout(letters[countI]);

    switch (swiper.activeIndex) {
        case 0:
            showTitle(title, interTitle, "titre");
            if (!activeText) // To not overlap 2 dialogue if we switch active window
            {
                for (let countD = 0; countD < textInterval.length; countD++) //we clear all the timeouts to stop the current animation
                    clearTimeout(textInterval[countD]);

                clearDialog("dialog", [0, 1, 2, 3]); //we clear the dialog for the id tag+n
                setTimeout(function () { showDialog(textTable, [0, 1, 2, 3], 0, interDiag, "dialog0") }, 500);

            }
            break;
        case 1:
            showTitle(title2, interTitle, "titre");               
            break;
        case 2:
            if(swiperSuffix)
                showTitle(title2, interTitle, "titre");
            else
                showTitle(title3, interTitle, "titre");
            break;
        case 3:
            if(swiperSuffix)
                showTitle(title3, interTitle, "titre");
            else
                showTitle(title4, interTitle, "titre");

            break;
        case 4:
            showTitle(title4, interTitle, "titre");
            break;
    }
});


function timeLeft(timeToWait, startTimer) //Function that return the time left from a given timer 
{
    timingDate = new Date(timeToWait - (Date.now() - startTimer)) //timestamp calculation
    if (timeToWait - (Date.now() - startTimer) > 1000) //This check is just to not show the "00:00" and go directly to the button text after 00:01(1000 because milliseconds)
    {
        if (timingDate.getUTCSeconds() < 10) // small display improvement, show XX:05 instead of XX:5
            seconds = "0" + timingDate.getUTCSeconds()
        else
            seconds = timingDate.getUTCSeconds()
        return timingDate.getUTCMinutes() + " : " + seconds;
    }
    else {
        clearInterval(timeLeftInter); //we clear the interval that show the time
        return "Envoyer"
    }
}


timeLeftInter = window.setInterval(function () { //we start the interval directly at the loading, so it's already shown
    document.getElementById("buttonForm").textContent = timeLeft(timeDiff, dateTimer);
}, 1000)

function submitForm(form) //before we submit the form we do some verifications
{
    dateNow = Date.now() //we get the time 

    if (timeDiff - (dateNow - dateTimer) > 0) //if the coutdown run out, we can send the for
    {
        return false;
    }

    else {
        return true;
    }
}

footerLinks[0].addEventListener("click", function () { //Politique de confidentialité
    modalBox[0].style.display = "initial"
    noScroll = true
    modalBox[0].addEventListener("click", function () {
        modalBox[0].style.display = "none"
        noScroll = false
    })
})
footerLinks[2].addEventListener("click", function () { //Mentions légales

    modalBox[1].style.display = "initial"
    noScroll = true
    modalBox[1].addEventListener("click", function () {
        modalBox[1].style.display = "none"
        noScroll = false
    })
})
closeCookie.addEventListener("click", function () { //Close cookie banner with X
    document.getElementById("cookie").style.display = "none"
})
cookieButtons = document.querySelectorAll("#cookie div p");
for(count=0;count < cookieButtons.length; count++) // Close cookie banner with buttons (last minute stuff)
{
    cookieButtons[count].addEventListener("click", function () {
        document.getElementById("cookie").style.display = "none"
    })
}