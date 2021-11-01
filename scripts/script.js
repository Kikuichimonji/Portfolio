var visible= true; // blinking _
var visibleStart= true; // blinking Intro

var texte ='\"Bonjour, Je me prénomme Thomas, je suis Web Développeur Fullstack avec préférence Back end et je suis passionné par le développement\" \n "J\'ai 33 ans, j\'habite dans le haut Rhin, et je suisbénévole chez Animaux en Détresse"'
var texte2 = '\"Je suis passionné de jeux vidéo et de développementweb, le tout accompagné de musiques !" \n "J\'aime également les randonnées, la piscine, le lockpicking, le vélo, et m\'occuper des animaux"'
var showTextActive = false;
var interDiag = 10; //Speed of the dialog
var textInterval = [];

var title = "Découvrez Thomas"
var title2 = "Mes passions et passe-temps"
var title3 = "Mes projets"
var title4 = "Me contacter"
var showTitleActive = false;
var interTitle = 80; //Speed of the title
var letters = [];


var consoleBox = document.getElementById("console")
var animEnd = true; // Status of the animation (to prevent overlap)
var animPosi = true; //Status of scroll | Start / end | (to not start an animation if we're already at the bottom for ex.)


const swiper = new Swiper('.swiper', { // Swiper params
    
    direction: 'horizontal',
    loop: true,
    navigation: { // Nav arrows
        nextEl: '.swiper-button-next' ,
        prevEl: '.swiper-button-prev',
    },
    pagination: { //Buletts
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
    },
    on: 
    {

    }
});

blackscreen.addEventListener("click",function()
{
    blackscreen.className = blackscreen.className + " fadeOutFast";
    setTimeout(() => {
        blackscreen.style.display="none";
    }, 500);
})

function showTitle(texte,interval,tag) // i separated title and text for screen sliding reason
{
    showTitleActive = true; 
    document.getElementById(tag).innerHTML="";
    for(count = 0; count < texte.length; count++) //Loop for the text animation
    {
        (function(count) 
        {
            letters[count] = setTimeout(function()
            {
                document.getElementById(tag).innerHTML = document.getElementById(tag).innerHTML + texte[count];
            },interval*count) //repeat x number of letters times with desired interval
        }(count))

    }
}

function showText(texte,interval,tag)//same as the one upside but for the Dialog
{
    showTextActive = true;
    document.getElementById(tag).innerHTML="";
    for(count = 0; count < texte.length; count++)
    {
        (function(count)
        {
            textInterval[count] = setTimeout(function()
            {
                document.getElementById(tag).innerHTML = document.getElementById(tag).innerHTML + texte[count];
            },interval*count)
        }(count))
    } 
    setTimeout(function(){showTextActive=false;},(count*interval)) //to not overlap 2 dialog
}

underscore = window.setInterval(function() { //Blinking "_"
    if (visible)
    {
        document.getElementById("undescore").className = 'hidden'
        visible = false;
    }
    else 
    {
        document.getElementById("undescore").className = ''
        visible = true;
    }
}, 600)
start = window.setInterval(function() { //Blinking Start
    if (visibleStart)
    {
        document.getElementById("start").className = 'hidden'
        visibleStart = false;
    }
    else 
    {
        document.getElementById("start").className = ''
        visibleStart = true;
    }
}, 600)


showTitle(title,interTitle,"titre"); //first title initialisation

var xMax = 16
anime.timeline({loop: false}) //
.add({
    targets: '#intro',
    opacity:[0,1],
    translateY: [0,400],
    easing: "easeInExpo",
    duration: 1000,
})
.add({
    targets: '#intro',
    easing: 'easeInOutSine',
    duration: 550,
    translateY: [400,400],
    translateX: [
    {
        value: xMax * -1,
    },
    {
        value: xMax,
    },
    {
        value: xMax/-2,
    },
    {
        value: xMax/2,
    },
    {
        value: 0
    }
    ],
})
.add({
    targets: '#start',
    opacity:[0,1],
    duration: 1,
    delay: 600
})

consoleBox.addEventListener('wheel',function(e)
{
    if(e.deltaY > 0)
    {
        if(swiper.activeIndex == 3)
        {
            if(animEnd && animPosi)
            {
                scrolldownP3 = anime.timeline({loop:false})
                .add({
                    targets:"#p1",
                    top:"100vh",
                    opacity:0,
                    easing: "easeInExpo",
                    duration: 1000,
                    begin: function()
                    {
                        animEnd=false;
                        
                    }
                })
                .add({
                    targets:"#p2",
                    top: '0',
                    easing: "easeOutExpo",
                    opacity:1,
                    duration: 1000,
                    complete: function()
                    {
                        animEnd = true;
                        animPosi = false;
                    }
                })
            }
            if(animEnd && !animPosi)
                swiper.slideNext()
        }
    }
    else
    {
        if(swiper.activeIndex == 3)
        {
            if(animEnd && !animPosi)
            {
                scrollUpP3 = anime.timeline({loop:false})
                .add({
                    targets:"#p2",
                    top: '100vh',
                    opacity:0,
                    easing: "easeInExpo",
                    duration: 1000,
                    begin: function()
                    {
                        animEnd=false;
                    }
                })
                .add({
                    targets:"#p1",
                    top: 0,
                    opacity:1,
                    easing: "easeOutExpo",
                    duration: 1000,
                    complete: function()
                    {
                        animEnd = true;
                        animPosi = true;
                    }
                })
            }
            if(animEnd && animPosi)
            swiper.slidePrev()
        }
    }
})

window.addEventListener('wheel',function(e) //check if we hover the consol, to not change pic&slide at same time
{
    if(e.deltaY > 0)
    {
        if(!consoleBox.matches(':hover'))
            swiper.slideNext();
    }
    else
    {
        if(!consoleBox.matches(':hover'))
            swiper.slidePrev();
    }
})

swiper.on('slideChangeTransitionEnd',function() //event at the end of the slide transition
{
    for(let countI = 0; countI < letters.length; countI++)
        clearTimeout(letters[countI]);

    if(swiper.activeIndex == 1 || swiper.activeIndex == 5) // Will be a switch in the future
    {
        showTitle(title,interTitle,"titre");
        if(!showTextActive) // To not overlap 2 dialogue if we switch active window
        {
            for(let countD = 0; countD < textInterval.length; countD++)
                clearTimeout(textInterval[countD]);

            setTimeout(function(){showText(texte,interDiag,"dialog")},500); // Timeout on the start of the text
            setTimeout(function(){showText(texte2,interDiag,"dialog2")},500);
        }
    }
    if(swiper.activeIndex == 2) // Hardcoded Id of the animated dialog
    {
        showTitle(title2,interTitle,"titre");
        
    }
    if(swiper.activeIndex == 3) // Hardcoded Id of the animated dialog
    {
        swiper.mousewheel.disable()
        showTitle(title3,interTitle,"titre");
    }
    if(swiper.activeIndex == 4 || swiper.activeIndex == 0)
    {
        showTitle(title4,interTitle,"titre");
    }

});