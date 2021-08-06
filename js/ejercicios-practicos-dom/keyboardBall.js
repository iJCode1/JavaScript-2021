export default function keyboardBall(contenedor, pelota){
    const d = document;
    const $pelota = d.querySelector(pelota);
    $pelota.style.top = "0px";
    $pelota.style.right = "0px";
    $pelota.style.bottom = "0px";
    $pelota.style.left = "0px";
    
    // console.log(topBall, rightBall, bottomBall, leftBall);

    d.addEventListener("keydown", (e)=>{
        if(e.key === "ArrowUp"){
            if(parseInt($pelota.style.top) > 0){
                $pelota.style.top = parseInt($pelota.style.top)-20+"px";
            }            
        }
        if(e.key === "ArrowDown"){
            if(parseInt($pelota.style.top) < 320){
                $pelota.style.top = parseInt($pelota.style.top)+20+"px";
            }
        }

        if(e.key === "ArrowRight"){
            if(parseInt($pelota.style.left) < 820){
                $pelota.style.left = parseInt($pelota.style.left)+20+"px";
            }
        }

        if(e.key === "ArrowLeft"){
            if(parseInt($pelota.style.left) > 0){
                $pelota.style.left = parseInt($pelota.style.left)-20+"px"
            }
        }
    });  
}