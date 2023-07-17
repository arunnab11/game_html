function game(){
    location.href="game.html"
}

// Game page script code.....

var randomNumber=Math.floor(Math.random()*100);
console.log(randomNumber);
var chance=10;
function check(){
    chance--;
    document.getElementById("lives").innerHTML="Remaining lives : "+chance;
    var num=(document.getElementById("input"));
    num=Number(num.value);
    if(num>100){
       alert("Please Enter valid number!");
       
    }
    else if(randomNumber==num){
         location.href="win.html";
    }
    else if(randomNumber>num){
        document.getElementById("message").innerHTML="It's low bruh..";
    }
    else if(randomNumber<num){
        document.getElementById("message").innerHTML="it's high bruh..";
    }
     if(chance==0){
        location.href="loss.html";
    }
   
}



