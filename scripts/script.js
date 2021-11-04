var blackscreen = document.getElementById("blackscreen");
var visible= true; // blinking _
var visibleStart= true; // blinking Intro
var textTable = ['"Bonjour, Je me prénomme Thomas, je suis Web Développeur Fullstack avec préférence Back end et je suis passionné par le développement"',
'"J\'ai 33 ans, j\'habite dans le haut Rhin, et je suis bénévole chez Animaux en Détresse"',
'"Je suis passionné de jeux vidéo et de développement web, le tout accompagné de musiques !"',
'"J\'aime également les randonnées, la piscine, le lockpicking, le vélo, et m\'occuper des animaux"',
"test"] //the dialogue text list
/*var texte ='"Bonjour, Je me prénomme Thomas, je suis Web Développeur Fullstack avec préférence Back end et je suis passionné par le développement"'
var texte2 = '"J\'ai 33 ans, j\'habite dans le haut Rhin, et je suis bénévole chez Animaux en Détresse"'
var texte3 = '"Je suis passionné de jeux vidéo et de développement web, le tout accompagné de musiques !"'
var texte4 = '"J\'aime également les randonnées, la piscine, le lockpicking, le vélo, et m\'occuper des animaux"'*/
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
var animPosi = true; //Status of scroll | Start / end | (to not start an animation if we're already at the bottom for ex.)

var listInput = document.getElementsByTagName("input")
var listArea = document.getElementsByTagName("textarea")

const swiper = new Swiper('.swiper', { // Swiper params
    
    direction: 'horizontal', //Horizontal slide
    loop: true, //Come back to 1 after last one (actually a duplicate with n+1 ID )
    navigation: { // Nav arrows
        nextEl: '.swiper-button-next' ,
        prevEl: '.swiper-button-prev',
    },
    pagination: { //Buletts
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
    },
});

blackscreen.addEventListener("click",function() //Remove the intro on click 
{
    blackscreen.className = blackscreen.className + " fadeOutFast"; 
    setTimeout(() => { //I'm not used to type it this way, i need to train more
        blackscreen.style.display="none";
    }, 500);
    setTimeout(function(){showDialog(textTable,[0,1,2,3],0,interDiag,"dialog0")},500); //first dialog initialisation
})

for(let countList = 0; countList < listInput.length; countList++)
{
    listInput[countList].addEventListener("focus",function(e)
    {
        listInput[countList].previousElementSibling.className= "inputFocus"
    })
    listInput[countList].addEventListener("blur",function(e)
    {
        listInput[countList].previousElementSibling.className= "inputLoseFocus"
    })
}
for(let countArea = 0; countArea < listArea.length; countArea++)
{
    listArea[countArea].addEventListener("focus",function(e)
    {
        listArea[countArea].previousElementSibling.className= "inputFocus"
    })
    listArea[countArea].addEventListener("blur",function(e)
    {
        listArea[countArea].previousElementSibling.className= "inputLoseFocus"
    })
}


function showTitle(texte,interval,tag) // i separated title and text for screen sliding reason
{
    document.getElementById(tag).innerHTML=""; //Clean the actual title
    for(count = 0; count < texte.length; count++) //Loop for the text animation
    {
        (function(countDracula)  //Self executing anonymous function (truly private scope)
        {
            letters[countDracula] = setTimeout(function() //Writing letter by letter
            {
                document.getElementById(tag).innerHTML = document.getElementById(tag).innerHTML + texte[countDracula]; 
            },interval*countDracula) //repeat x number of letters times with desired interval
        }(count)) //Param to the functionn

    }
}

function showDialog(text,textIndex,index,interval,tag) //Fuck yeah it finally work //(Table of dialog,list of indexes fot the table,which one in the list,what speed we write,where do we write)
{
    for(countLetter = 0; countLetter < text[textIndex[index]].length; countLetter++) //We loop for the lenght of the right text in the table
    {
        (function(countLetter) //Self executed anonymous fonction again
        {
            textInterval[countLetter] = setTimeout(function() //each timeout got a unique id, this way we cean clear the whole list later
            {
                document.getElementsByClassName(tag)[0].innerHTML = document.getElementsByClassName(tag)[0].innerHTML + text[textIndex[index]][countLetter]; //My head hurts //
                document.getElementsByClassName(tag)[1].innerHTML = document.getElementsByClassName(tag)[1].innerHTML + text[textIndex[index]][countLetter];
                if(countLetter == text[textIndex[index]].length-1)
                    if(textIndex[index+1])
                    {
                        index++;
                        activeText=true;
                        setTimeout(function(){showDialog(text,textIndex,index,interval,"dialog"+index)},200);
                    }
                    else
                        activeText=false;
            },countLetter*interval)
        })(countLetter)
    }
}
function clearDialog(tag,list)
{
    for(count = 0; count < list.length; count++)
        document.getElementsByClassName(tag+list[count])[0].innerHTML = ""
    for(count = 0; count < list.length; count++)
        document.getElementsByClassName(tag+list[count])[1].innerHTML = ""
}

underscore = window.setInterval(function() { //Blinking "_"
        document.getElementById("undescore").classList.toggle('hidden')
}, 600)

start = window.setInterval(function() { //Blinking Start
        document.getElementById("start").classList.toggle('hidden')
}, 600)


showTitle(title,interTitle,"titre"); //first title initialisation


var xMax = 16
anime.timeline({loop: false}) //Intro Animation
.add({ // Coming down
    targets: '#intro',
    opacity:[0,1],
    translateY: [0,400],
    easing: "easeInExpo",
    duration: 1000,
})
.add({ // Shake
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
.add({ // Press any key Appear
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
                    top: 0,
                    easing: "easeOutExpo",
                    opacity:1,
                    duration: 1000,
                    complete: function()
                    {
                        animEnd = true;
                        animPosi = false;
                    }
                })

                scrolldownI3 = anime.timeline({loop:false})
                .add({
                    targets:"#i1",
                    top:"100vh",
                    opacity:0,
                    easing: "easeInExpo",
                    duration: 1000,
                    delay:100,
                    begin: function()
                    {
                        animEnd=false;
                        
                    }
                })
                .add({
                    targets:"#i2",
                    top: "-65vh",
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
                
                scrollUpI3 = anime.timeline({loop:false})
                .add({
                    targets:"#i2",
                    top: 0,
                    opacity:0,
                    easing: "easeInExpo",
                    duration: 1000,
                    begin: function()
                    {
                        animEnd=false;
                    }
                })
                .add({
                    targets:"#i1",
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
        if(!activeText) // To not overlap 2 dialogue if we switch active window
        {
            for(let countD = 0; countD < textInterval.length; countD++)
                clearTimeout(textInterval[countD]);

            clearDialog("dialog",[0,1,2,3]);
            setTimeout(function(){showDialog(textTable,[0,1,2,3],0,interDiag,"dialog0")},500);
        }
    }
    if(swiper.activeIndex == 2) // Hardcoded Id of the animated dialog
    {
        showTitle(title2,interTitle,"titre");
        
    }
    if(swiper.activeIndex == 3) // Hardcoded Id of the animated dialog
    {
        showTitle(title3,interTitle,"titre");
    }
    if(swiper.activeIndex == 4 || swiper.activeIndex == 0)
    {
        showTitle(title4,interTitle,"titre");
    }
});

