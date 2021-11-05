var blackscreen = document.getElementById("blackscreen");
var intro = document.getElementById("intro");
var visible= true; // blinking _
var visibleStart= true; // blinking Intro
var textTable = ['"Bonjour, Je me prénomme Thomas, je suis Web Développeur Fullstack avec préférence Back end et je suis passionné par le développement"',
'"J\'ai 33 ans, j\'habite dans le haut Rhin, et je suis bénévole chez Animaux en Détresse"',
'"Je suis passionné de jeux vidéo et de développement web, le tout accompagné de musiques !"',
'"J\'aime également les randonnées, la piscine, le lockpicking, le vélo, et m\'occuper des animaux"',
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
var animPosi = true; //Status of scroll | Start / end | (to not start an animation if we're already at the bottom for ex.)

var listInput = document.getElementsByTagName("input")
var listArea = document.getElementsByTagName("textarea")
var formButton = document.getElementsByTagName("button")[0]

const swiper = new Swiper('.swiper', { // Swiper params
    
    direction: 'horizontal', //Horizontal slide
    mousewheel: true,
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

function attachEvenInput(listInput) // as name says, we attach all event listeners to the inputs
{
    for(let countList = 0; countList < listInput.length; countList++) //we disable draging when we're focused on the inputs
    {
        listInput[countList].addEventListener("focus",function(e) //on focus
        {
            swiper.allowTouchMove = false;
            listInput[countList].previousElementSibling.className= "inputFocus" //Animated class
        })
        listInput[countList].addEventListener("blur",function(e) //leaving focus
        {
            swiper.allowTouchMove = true;
            if(listInput[countList].value == "")
                listInput[countList].previousElementSibling.className= "inputLoseFocus"
        })
    }
    formButton.addEventListener("mouseenter",function(e){
        swiper.allowTouchMove = false;
    })
    formButton.addEventListener("mouseleave",function(e){
        swiper.allowTouchMove = true;
    })
}

attachEvenInput(listInput);
attachEvenInput(listArea);


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
                document.getElementsByClassName(tag)[0].innerHTML = document.getElementsByClassName(tag)[0].innerHTML + text[textIndex[index]][countLetter]; //we look for the right container (tag), the right text at the right index to write, then we print letter by letter
                document.getElementsByClassName(tag)[1].innerHTML = document.getElementsByClassName(tag)[1].innerHTML + text[textIndex[index]][countLetter]; // Had to recall it because of swipper duplicating first and last slider for smooth loops (index 0 = slide 1, index 1 = slide 1 duplicated)
                if(countLetter == text[textIndex[index]].length-1) // if we're at the end of the sentence
                    if(textIndex[index+1]) //if we got more sentences
                    {
                        index++;
                        activeText=true; //We say that an animation is still running
                        setTimeout(function(){showDialog(text,textIndex,index,interval,"dialog"+index)},200); //recursion 
                    }
                    else
                        activeText=false; // No more dialog is running, we can reanimate if we want
            },countLetter*interval) 
        })(countLetter)
    }
}
function clearDialog(tag,list) //CLearing all the dialogs for the tags
{
    for(count = 0; count < list.length; count++) 
        document.getElementsByClassName(tag+list[count])[0].innerHTML = ""
    for(count = 0; count < list.length; count++) //had to repeat again because of swipper (duplication of slides)
        document.getElementsByClassName(tag+list[count])[1].innerHTML = ""
}

underscore = window.setInterval(function() { //Blinking "_"
        document.getElementById("undescore").classList.toggle('hidden')
}, 600)

start = window.setInterval(function() { //Blinking Start
        document.getElementById("start").classList.toggle('hidden')
}, 600)


showTitle(title,interTitle,"titre"); //first title initialisation


var middleHeight = (window.innerHeight / 2)-(intro.offsetHeight / 2); //My attempt at centenring the title animation
var xMax = 16 //shake offset
anime.timeline({loop: false}) //Intro Animation
.add({ // Coming down
    targets: '#intro',
    opacity:[0,1],
    translateY: [0,middleHeight],
    easing: "easeInExpo",
    duration: 1000,
})
.add({ // Shake
    targets: '#intro',
    easing: 'easeInOutSine',
    duration: 550,
    translateY: [middleHeight,middleHeight], //necessary, if not here the text ges back up for some reason
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

consoleBox.addEventListener('wheel',function(e) // All the console animations
{
    if(e.deltaY > 0) //if we scroll down
    {
        if(swiper.activeIndex == 3) //if we're actually on the console slide
        {
            if(animEnd && animPosi) // if an animation is running or at the end of the list 
            {
                scrolldownP3 = anime.timeline({loop:false})
                .add({ // project 1 slide down
                    targets:["#p1","#i1"],
                    top:"100vh",
                    opacity:0,
                    easing: "easeInExpo",
                    duration: 1000,
                    begin: function()
                    {
                        animEnd=false;
                        
                    }
                })
                .add({ // project 2 slide up
                    targets:["#p2","#i2"],
                    top: 0,
                    easing: "easeOutExpo",
                    opacity:1,
                    duration: 1000,
                    complete: function()
                    {
                        animEnd = true;
                        animPosi = false;
                        document.getElementsByTagName("object")[0].data = "assets/img/mouse-scroll-down-up.svg" 
                        document.getElementById("console-top").getElementsByTagName("p")[0].innerHTML = 2 
                    }
                })
            }
            if(animEnd && !animPosi)
                swiper.slideNext() // if we're at the bottom of the project list we can slide next 
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
                    targets:["#p2","#i2"],
                    top: '100vh',
                    opacity:0,
                    easing: "easeInExpo",
                    duration: 1000,
                    begin: function()
                    {
                        animEnd=false;
                    },
                })
                .add({
                    targets:["#p1","#i1"],
                    top: 0,
                    opacity:1,
                    easing: "easeOutExpo",
                    duration: 1000,
                    complete: function()
                    {
                        animEnd = true;
                        animPosi = true;
                        document.getElementsByTagName("object")[0].data = "assets/img/mouse-scroll-up-down.svg"
                        document.getElementById("console-top").getElementsByTagName("p")[0].innerHTML = 1
                    }
                })   
            }
            if(animEnd && animPosi)
            swiper.slidePrev()
        }
    }
})
consoleBox.addEventListener("mouseenter",function(e)
{
    swiper.mousewheel.disable();
})
consoleBox.addEventListener("mouseleave",function(e)
{
    swiper.mousewheel.enable();
})

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

swiper.on("activeIndexChange",function()
{
    if(swiper.activeIndex == 0)
    {
        swiper.slideToLoop(3) //workaround to duplicate problem from swiper, lots of problems since my last slide is a form
    }
})

swiper.on('slideChangeTransitionEnd',function() //event at the end of the slide transition
{
    for(let countI = 0; countI < letters.length; countI++)
        clearTimeout(letters[countI]);

    switch(swiper.activeIndex)
    {
        case 1:
        case 5:
            showTitle(title,interTitle,"titre");
            if(!activeText) // To not overlap 2 dialogue if we switch active window
            {
                for(let countD = 0; countD < textInterval.length; countD++) //we clear all the timeouts to stop the current animation
                    clearTimeout(textInterval[countD]);

                clearDialog("dialog",[0,1,2,3]);
                setTimeout(function(){showDialog(textTable,[0,1,2,3],0,interDiag,"dialog0")},500);
            }
            break;
        case 2:
            showTitle(title2,interTitle,"titre");
            break;
        case 3:
            showTitle(title3,interTitle,"titre");
            break;
        case 4:
        case 0:
            showTitle(title4,interTitle,"titre");
            break;
    }
    /*if(swiper.activeIndex == 1 || swiper.activeIndex == 5) // Will be a switch in the future
    {
        showTitle(title,interTitle,"titre");
        if(!activeText) // To not overlap 2 dialogue if we switch active window
        {
            for(let countD = 0; countD < textInterval.length; countD++) //we clear all the timeouts to stop the current animation
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
    /*if(swiper.previousIndex == 4 || swiper.previousIndex == 0)
    {
        swiper.loopDestroy();
        swiper.loopCreate(); 
        attachEvenInput(listInput);
        attachEvenInput(listArea)  
    }*/
});


/*formButton.addEventListener("click",function(e)
{
    firstName = document.getElementsByTagName("input")[0].value
    lastName = document.getElementsByTagName("input")[1].value
    email = document.getElementsByTagName("input")[2].value
    message = document.getElementsByTagName("textarea")[0].value

    console.log(firstName)
	Email.send({
	Host: "smtp.gmail.com",
	Username : "thomasroesshd@gmail.com",
	Password : "***********",
	To : 'thomas_roess@hotmail.fr',
	From : firstName + " " + lastName,
	Subject : "Message du portfolio",
	Body : message,
	}).then(
		message => alert("ça marche pô")
    );
})*/
