var numberOfSquares=6;
var colors=generateRandomColors(numberOfSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
colorDisplay.textContent=pickedColor;
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");



easyBtn.addEventListener("click",function(){
   numberOfSquares=3;
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
   colors=generateRandomColors(3);
   pickedColor=pickColor();
   colorDisplay.textContent=pickedColor;
   for(var i=0; i<squares.length; i++){
      if(colors[i]){
      	squares[i].style.backgroundColor=colors[i];
      	squares[i].style.display="block";
      }
      else{
      	squares[i].style.display="none";
      }
   }
   
});


hardBtn.addEventListener("click",function(){
	h1.style.backgroundColor="#232323";
   numberOfSquares=6;
   hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   colors=generateRandomColors(6);
   pickedColor=pickColor();
   colorDisplay.textContent=pickedColor;
   for(var i=0; i<squares.length; i++){
      	squares[i].style.backgroundColor=colors[i];
      	squares[i].style.display="block";
      
      
   }
    
});


resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numberOfSquares);
	//pick new random color from array
	pickedColor=pickColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;
	//change the colors of all squares
	h1.style.backgroundColor="#232323";
	messageDisplay.textContent="";
    resetButton.textContent="NEW COLORS";
    
    for(var i=0; i<squares.length; i++){
    	squares[i].style.backgroundColor=colors[i];

    }
});


for(var i =0; i < squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="none";
    colorDisplay.textContent="";
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;
		//compare color to pickedColor
		
		if(clickedColor===pickedColor){
          messageDisplay.textContent="That's correct!";
          changeColors(clickedColor);
          h1.style.backgroundColor=pickedColor;
          resetButton.textContent="PLAY AGAIN?"

			
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again...";
		}
	});
}



function changeColors(color){
   //loop through all  squares
   for(var i=0;i<squares.length;i++){
       //change each color to match given color
       squares[i].style.backgroundColor=color;
   }

}


function pickColor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}


function generateRandomColors(num){
    var arr=[]
    //make array
    //add num random colors to array
    for(var i=0; i<num;i++){
    	//get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick  a "red" from 0-255
   var r=Math.floor(Math.random()*256);
    //pick  a "green" from 0-255
   var g=Math.floor(Math.random()*256);    
    //pick  a "blue" from 0-255
   var b=Math.floor(Math.random()*256);
  
   return "rgb("+r+", "+g+", "+b+")";

}