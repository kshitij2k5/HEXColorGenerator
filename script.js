function colorChange(){
    let colors="#";
    const clr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    for(let i=0;i<6;i++){
        colors=colors+clr[Math.floor(Math.random()*16)];
    }   
        document.getElementById("color").style.backgroundColor=colors;
        document.getElementById("colorName").innerHTML=colors;
    }