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


function number(){
	
	var text = alert("Numbers");
	var i = 0;
	while (i <=100){
		
		if  (i%4==0&&i%10==0){
			alert("TenFour");
		}
		else if (i%4==0){
			alert("Four");
		}
		else if (i%10==0){
			alert( "Ten");
		}
		
		else {
			alert (i);
		}
		i++;
	}
}


function century(){

	var first = parseInt(prompt("State a year"));
		if (first <100) 
			alert ("1st Century");
		else if (first <200) 
			alert ("2nd Century");
		else if (first <300)
			alert ("3rd Century");
		else if (first <400)
			alert ("4th Century");
		else if (first <500)
			alert ("5th Century");
		else if (first <600)
			alert ("6th Century");
		else if (first <700)
			alert ("7th Century");
		else if (first <800)
			alert ("8th Century");
		else if (first <900)
			alert ("9th Century");
		else if (first <1000)
			alert ("10th Century");
		else if (first <1100)
			alert ("11th Century");
		else if (first <1200)
			alert ("12th Century");
		else if (first <1300)
			alert ("13th Century");
		else if (first <1400)
			alert ("14th Century");
		else if (first <1500)
			alert ("15th Century");
		else if (first <1600)
			alert ("16th Century");
		else if (first <1700)
			alert ("17th Century");
		else if (first <1800)
			alert ("18th Century");
		else if (first <1900)
			alert ("19th Century");
		else if (first <2000)
			alert ("20th Century");
		else if (first <2100)
			alert ("21st Century");
		
}


 
