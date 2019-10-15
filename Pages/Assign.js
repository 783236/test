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
	var text
	var century1000;
	switch (century1000) {
		case > 100 :
			text = "1st Century";
		break;
		case < 100, > 200 :
			text = "2nd Century";
		break;
}


 
