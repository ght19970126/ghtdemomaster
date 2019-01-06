
	window.onload=function(){
	var inputs=document.getElementsByTagName("input");
	var nav=document.getElementById("nav");
	var divs=nav.getElementsByTagName("div");
	for(var i=0;i<inputs.length;i++){
		inputs[i].index=i;
		inputs[i].onclick=function(){
			for(var j=0;j<inputs.length;j++){
				inputs[j].className="";
				divs[j].style.display="none";
			}
			this.className="active";
			divs[this.index].style.display="block";
		};
	}
};
