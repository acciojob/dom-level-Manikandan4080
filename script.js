//your JS code here. If required.
const element = document.getElementById("level");
const level = 1;
while(true){
	if(element.tagName == "HTML"){
		break;
	}
	level++;
	element = element.parentNode;
}
alert(`The level of the element is: ${level}`);