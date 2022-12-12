var balls = document.getElementsByClassName("ball");
document.onmousemove=function(){
    var x = Event.clientX * 100 / window.innerWidth + "%";
    var x = Event.clientY * 100 / window.innerHeight + "%";


    for(var i=0;i<2;i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform="translate(-"+x+",-"+y+"));
    }
    )

}