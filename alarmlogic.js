

/*************************************************************/
/* CONTROLLER */
document.addEventListener("DOMContentLoaded", init);
var h1;

function init() {

	//+++++++++++Form addeventlistener method+++++++++++++++
	//first I grab the form
	const addForm = document.forms['userDTEntry'];
	let countdown;
	//then add an event listener, and use a callback function that takes through the event as a parameter
	addForm.addEventListener('submit', function (e) {
		//prevents refresh
		e.preventDefault();
		//grabs value submitted by user which is the 'datetime-local' and then we grab the value from the input field
		const inputValue = addForm.querySelector('input[type="datetime-local"]').value;
		countdown = Date.parse(inputValue) - Date.now();
		console.log(Date.now())
		console.log(Date.parse(inputValue));
		h1 = document.querySelector("h1");
		const countdownInMS = countdown; //datetime-local value goes here 
		setAlarmClock(countdownInMS, alarmFinished, showTimeRemaining);
	})
}

function showTimeRemaining(time) {
	h1.textContent = time;
}

//====================================================
//THIS IS WHEN THE WEATHER API AJAX CALL IS MADE
//beginning of weather api ajax/fetch call;
function alarmFinished() {
	h1.textContent = "Alarm Finished!";
	// weatherAPIex(PLACEHOLDER);
	geo2();
	// playSong(); 
	
	var OneWordClimate
}
                                                                  

/*************************************************************/
/* ALARM CLOCK MODULE */
function setAlarmClock(targetTimeInMS, finishedCallback, tickCallback) { //front-door function
	var timeRemaining = targetTimeInMS; //targetTime minus now
	tick();
	function tick() {
		if (timeRemaining <= 0) {
			if ("function" === typeof finishedCallback) finishedCallback();
		}
		else {
			if ("function" === typeof tickCallback) tickCallback(timeRemaining);
			timeRemaining -= 1000;
			setTimeout(tick, 1000); //run the tick function again in one second
		}
	}
}
/*************************************************************/

/* Clock*/
function update() {
    var HourNow= moment().format('LTS')
    $("#Clock").text(HourNow)
    };

    $(document).ready(function() {
        setInterval(update, 0);
    })
    function latLon(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=eee2c7e90565ccc72ed33f1160353f32";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            currentLoc = response.name;
            dataStroage(response.name);// call the function for save the data
            getCurrent(currentLoc);// call the the function for cureent weather
        });
	}
	
	// FERNANDO'S WEATHER API JS
	//CALLED WHEN USER OPENS WEB-PAGE
	function geo1(){
		navigator.geolocation.getCurrentPosition(function(position) {
		  let lat = position.coords.latitude;
		  let long = position.coords.longitude;
			$(".latitude").text(lat)
			$(".longitude").text(long)
			
			// //to test without using the timer to reach zero; remove comment and let geo2(); run
			// geo2();
		
		  var OneWordClimate
		  var currLocation;
		  var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=166a433c57516f51dfab1f7edaed8413";
		  
		  console.log(queryURL)
		  //add new api
		  
		  $.ajax({
			  url: queryURL,
			  method: "GET"
		  }).then(function(response) {            
		   OneWordClimate = response.weather[0].main
		  console.log(response)
		  console.log(OneWordClimate);
		  console.log(response.name);
		  $(".City").text(response.name)
		  })
		  
		});
	}
geo1();

	// FERNANDO'S WEATHER API JS
	function geo2 () {
		
		var lat = $(".latitude").text();
		var long = $(".longitude").text();
	
		var OneWordClimate;
		var currLocation;
		var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=166a433c57516f51dfab1f7edaed8413";
		
		console.log(queryURL)
		//add new api
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {            
			OneWordClimate = response.weather[0].id
			console.log(response)
			console.log(OneWordClimate);
			console.log(typeof OneWordClimate);
			console.log(response.name);
			//this is the weather icon asset
			var img = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
			var image = $("<img>").attr({
				src : img,
				alt : "Weather Icon",
				width : "250px",
				class : "weatherImage"
			});
			$("#weatherDisplay").append(image);
			
			$(".WeatherResult").text(response.weather[0].id)
		});
			//this is where the audio API
			//https://developers.soundcloud.com/docs#search
			//work on naming conventions, indentation, cleaner...
	
			function playSong(){
			// var OneWordClimate.inner
			// var weatherID =$(".WeatherResult").val()    
			// console.log(weatherID)
			
			// if (weatherID > 0 || weatherID < 1000 ) {
			// 	var RainySound = $("#rainySong");
			//   console.log(RainySound)

			// var OneWordClimate;
			var correctSong = document.getElementById("rainySong"); 
			correctSong.play();
			// How do I make the song an object to i can play it with .play()
				// if (OneWordClimate >200 || OneWordClimate <300 ) {
			// 	//  block of code to be executed if the condition is true
				
			// }
			// else if ((OneWordClimate > 300 || OneWordClimate < 400)) {
			// 	//  block of code to be executed if the condition is false
			// }
			// else if ((OneWordClimate > 500 || OneWordClimate < 600)) {
			// 	//  block of code to be executed if the condition is false
			// }
			// else if ((OneWordClimate > 600 || OneWordClimate < 700)) {
			// 	//  block of code to be executed if the condition is false
			// }
		}
		// else if ((OneWordClimate > 600 || OneWordClimate < 700)) {
		// 	//  block of code to be executed if the condition is false
		// }
			// else{
			// }
	}
	
	