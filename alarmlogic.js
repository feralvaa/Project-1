

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
	playSong(); 
	
	}

                                                                                                                                                                 
function weatherAPIex(){

};

function playSong(){
	var OneWordClimate.inner
	var weatherID =$(".WeatherResult").val()    
	console.log(weatherID)
    
    if (weatherID > 0 || weatherID < 1000 ) {
    	var RainySound = $("#rainySong");
      console.log(RainySound)
    //   RainySound.play();
    
	  
    } 
    // else if ((weatherID > 300 || weatherID < 400)) {
    //     //  block of code to be executed if the condition is false
    // }
    // else if ((weatherID > 400 || weatherID < 500)) {
    //     //  block of code to be executed if the condition is false
    // }
    // else{


    // }
}  
//======================================================
//===================BELOW IS THE WEATHER API HW==========================

//===================ABOVE IS THE WEATHER API HW==========================


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


// /*  Weather API */
// var OneWordClimate
// var currLocation;
// var apiKey = "166a433c57516f51dfab1f7edaed8413"
// function CallWeather() {
     
//     var APICity = "Sydney";
//     console.log(APICity)
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+APICity+"&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
//     //add new api
//     var queryURL1 = "https:/api.openweathermap.org/data/2.5/weather?q=" + currLocation + " &appid=" + apiKey;
//     $.ajax({
//         url: queryURL1,
//         method: "GET"
//     }).then(function(response) {            
//      OneWordClimate = response.weather[0].main
//     console.log(response)
//     console.log(OneWordClimate);
// })
// }
// CallWeather()




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
	
		var OneWordClimate
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
		console.log(response.name);
		$(".WeatherResult").text(response.weather[0].id)
		debugger
		})
		
	}

