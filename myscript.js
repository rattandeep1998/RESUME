/*var listelem = document.getElementById("navlist");

var education = document.getElementsByTagName("education")[0];
education.addEventListener('mouseout',func2("education"));
//education.addEventListener('mouseover',func1("education"));

function func2(tagname) {
	console.log('up');
	var arr = listelem.childNodes;
	for(var i=0 ; i<arr.length ; i++) {
		if(arr[i].id === tagname) {
			arr[i].childNodes[0].childNodes[0].style.opacity = 0.5;
			break;
		}
	}
}

function func1(tagname) {
	console.log('down');
	var arr = listelem.childNodes;
	for(var i=0 ; i<arr.length ; i++) {
		if(arr[i].id === tagname) {
			console.log('true');
			arr[i].childNodes[0].childNodes[0].style.opacity = 1;
			break;
		}
	}
}

*/

/*
var listelem = document.getElementById("navlist");
	var timer=1;
	var flag = 0;
	var id = null;
	var arr = listelem.childNodes;
	console.log(arr);
	for(var i=1 ; i<arr.length ; i+=2) {
			console.log(arr[i]);
		
			var divelem = document.getElementsByTagName(arr[i].id)[0];
			
			console.log(divelem);

			var bodyRect = document.body.getBoundingClientRect();
			//rectangle bounding that div element
			var elemRect = divelem.getBoundingClientRect();
			var offset = elemRect.top - bodyRect.top ;			


			var divy = offset - 120;

			arr[i].addEventListener('click',function(event) {			
				event.preventDefault();

					id=setInterval(scrollToLocation(divy),10);
		});
	}

function scrollToLocation(finalY) {
	var y = window.scrollY;
	if(timer==1)
	{
		if(y<finalY)
			flag=0;
		else
			flag=1;
		timer++;
	}
	
	if(flag==0)
	{
		y=y+5;
		y = y<finalY ? y : finalY;
		window.scrollTo(0,y);
		if(y===finalY)
		{
			clearInterval(id);
			timer=1;
		} 
	}
	else
	{
		y=y-5;
		y = y>finalY ? y : finalY;
		window.scrollTo(0,y);
		if(y===finalY)
		{
			clearInterval(id);
			timer=1;
		}
	}
}


function scrollToUpperLocation(finalY) {
	var y = window.scrollY;

	y = y - 5;

	y = y>finalY ? y : finalY;

	window.scrollTo(0,y);
	if( y === finalY)
	{
		clearInterval(id);
	}
}

function scrollToLowerLocation(finalY) {
	var y = window.scrollY;

	y = y + 5;

	y = y<finalY ? y : finalY;

	window.scrollTo(0,y);
	if( y === finalY)
	{
		clearInterval(id);
	}
}*/