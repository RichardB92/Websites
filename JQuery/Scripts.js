		function RandColor(){
			var letters= '0123456789ABCDEF'.split('');
			var color='#';
			for (var i=0; i<6; i++){
				color+=letters[Math.round(Math.random()*15)];
			}
			return color;
		
		}
		
		alert(RandColor());		
		
		var clickedTime; var createdTime; var reactionTime;
				
		function makebox(){
			
			var time=Math.random();
			time=time*3000;
		
			setTimeout(function(){
			if(Math.random()>0.5){
				document.getElementById("box").style.borderRadius="100px";
			}else{
				document.getElementById("box").style.borderRadius="0px";
			}
			
			var top=Math.random();
			
			top=top*500;
			
			var left=Math.random();
			
			left=left*500;
			
			
			document.getElementById("box").style.top=top+"px";
			document.getElementById("box").style.left=left+"px";
			document.getElementById("box").style.backgroundColor=RandColor();
			document.getElementById("box").style.display="block";
			createdTime=Date.now();
			
			},time);
		}
		
		
		document.getElementById("box").onclick=function(){
		
			clickedTime=Date.now();
			reactionTime=(clickedTime-createdTime)/1000;
			document.getElementById("tim").innerHTML=reactionTime;
			this.style.display="none";
			makebox();
		
		}
		
		makebox();