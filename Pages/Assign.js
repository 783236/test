function greeting(){
	var box=prompt("What's your name");
	alert("Hello "+box);
}

  

function triangle(){
	var firstAngle = parseInt(prompt("Enter First Angle (60 or less)"));
	var secondAngle = parseInt(prompt("Enter Second Angle (60 or less)"));
	var thirdAngle = 180-(firstAngle+secondAngle);
	alert("Third angle is "+thirdAngle);
	}


//  function number(){
// 	 var user = prompt("Guess the two numbers that will show you a written number");
// 	 for ( let i=0; i>100; i++)
// 	 	return ("user_input")
// 	 if (user = 4){
// 	 	greeting = "Four";
// 	 } else if (user = 10){
// 	 	greeting = "Ten";
// 	 } else if (user = 40,80){
// 	 	greeting = "TenFour";
// 	 }
// 	 else  {
// 	 	greeting = "Wrong, try again!";
// 	 }
// }

function number(){
	var text = "Numbers";
	var i = 0;
	while (i <=100){
		
		if (i%4==0&&i%10==0){
			console.log("TenFour");
		}
		else if (i%4==0){
			console.log("Four");
		}
		else if (i%10==0){
			console.log( "Ten");
		}
		
		else {
			console.log (i);
		}
		i++;
	}
	

}








function century(){
	var century1to1000 = parseInt(prompt("State a year"));
	if ("centuryto1000" < 100) {
		alert("1st Century");
	} if ("centuryto1000" > 100 < 200) {
		alert("2nd Century");
	} if ("centuryto1000"  > 200 < 300) {
		alert("3rd Century");
	} if ("century1to1000" >300 <400) {
		alert("4th Century");
	} if ("century1to1000" >400 <500) {
		alert("5th Century");
	} if ("century1to1000" >500 <600) {
		alert("6th Century");
	} if ("century1to1000" >600 <700) {
		alert("7th Century");
	} if ("century1to1000" >700 <800) {
		alert("8th Century");
	} if ("century1to1000" >800 <900) {
		alert("9th Century");
	} if ("century1to1000" >900 <1000) {
		alert("10th Century");
	}
	var centuryto2000 = parseInt(prompt("State a year"));
	if ("century1to2000" >1000 <1100) {
		alert("11th Century");
	} if ("century1to2000" >1100 <1200) {
		alert("12th Century");
	} if ("century1to2000" >1200 <1300) {
		alert("13th Century");
	} if ("century1to2000" >1300 <1400) {
		alert("14th Century");
	} if ("century1to2000" >1400 <1500) {
		alert("15th Century");
	} if ("century1to2000" >1500 <1600) {
		alert("16th Century");
	} if ("century1to2000" >1600 <1700) {
		alert("17th Century");
	} if ("century1to2000" >1700 <1800) {
		alert("18th Century");
	} if ("century1to2000" >1800 <1900) {
		alert("19th Century");
	} if ("century1to2000" >1900 <2000) {
		alert("20th Century");
	} if ("century1to2000" >2000 <2100) {
		alert("21st Century");
	}

}