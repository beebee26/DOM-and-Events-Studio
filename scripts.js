// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const shuttlebackground = document.getElementById("shuttleBackground");
    const upRocket = document.getElementById("up");
    const downRocket = document.getElementById("down");
    const rightRocket = document.getElementById("right");
    const leftRocket = document.getElementById("left");
    const rocketPic = document.getElementById("rocket");
    rocketPic.style.top = 250 + "px";
    rocketPic.style.left = 0 + "px";
    rocketPic.style.right = 0 + "px";

/*When the "Take off" button is clicked, the following should happen:
A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
The flight status should change to "Shuttle in flight."
The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
The shuttle height should increase by 10,000 miles.*/
takeOff.addEventListener("click", function (event) {
    let element = event.target;
    if (window.confirm("Confirm that the shuttle is ready for takeoff."))
    {
        shuttlebackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;  
        flightStatus.innerHTML = "Shuttle in flight."  
        rocketPic.style.top = 240 + "px";
    }
});
            
/*When the "Land" button is clicked, the following should happen:
A window alert should let the user know "The shuttle is landing. Landing gear engaged."
The flight status should change to "The shuttle has landed."
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go down to 0.*/

land.addEventListener("click", function (event) {
    let element = event.target;
    if (window.confirm("The shuttle is landing. Landing gear engaged."))
    {
         shuttlebackground.style.backgroundColor = "green";
         spaceShuttleHeight.innerHTML = 0;  
         flightStatus.innerHTML = "The shuttle has landed." 
         rocketPic.style.top = 250 + "px"; 
    }
});

/*When the "Abort Mission" button is clicked, the following should happen:
A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
The flight status should change to "Mission aborted."
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go to 0.*/

abortMission.addEventListener("click", function (event) {
    let element = event.target;
    if (window.confirm("Confirm that you want to abort the mission."))
    {
         shuttlebackground.style.backgroundColor = "green";
         spaceShuttleHeight.innerHTML = 0;  
         flightStatus.innerHTML = "Mission aborted."
         rocketPic.style.top = 250 + "px";  
    }
});

/*When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
The rocket image should move 10 px in the direction of the button that was clicked.
If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
23.8.3. Bonus Mission*/

upRocket.addEventListener("click", function (event) {
    let element = event.target;
    //Increase height by 10 px
    rocketPic.style.top =  parseInt(rocketPic.style.top) - 10 + 'px';
    //Increase height counter by 10000
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;  
    //Change background to blue when not on ground
    shuttlebackground.style.backgroundColor = "blue";
    //Indicate shuttle is in flight
    flightStatus.innerHTML = "Shuttle in flight." 
});

downRocket.addEventListener("click", function (event) {
    let element = event.target;
    //If not on ground lower shuttle by 10 px and decrease counter by 10000
    if (parseInt(rocketPic.style.top) < 250) {
        rocketPic.style.top =  parseInt(rocketPic.style.top) + 10 + 'px';
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000; 
    }
    //If back on ground change background to green and don't move
    else{
        shuttlebackground.style.backgroundColor = "green";
        //Indicate shuttle has landed
        flightStatus.innerHTML = "The shuttle has landed." 
    }
    
});

//Move 10 px to right
rightRocket.addEventListener("click", function (event) {
    let element = event.target;
    rocketPic.style.left =  parseInt(rocketPic.style.left) + 10 + 'px';
    
});

//Move 10 px to left
leftRocket.addEventListener("click", function (event) {
    let element = event.target;
    rocketPic.style.left =  parseInt(rocketPic.style.left) - 10 + 'px';
    
});

}

window.addEventListener("load", init);


