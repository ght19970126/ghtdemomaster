
	window.onload=function(){
	var div1=document.getElementById("div1");
	function showTime(){
		var myDate=new Date();
		div1.innerHTML=myDate.toLocaleString();
	}
	showTime();
	setInterval(showTime,1000);
}
