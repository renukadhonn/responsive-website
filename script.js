function videoconAnimation(){
var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    
    gsap.to(playbtn,{
       scale:1,
       opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-20,
        top:dets.y-80
        
    })
})
}
videoconAnimation()

function loadinganimation(){
gsap.from("#page1 h1",{
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.2

})

gsap.from("#page1 #video-container",{
    scale:0.8,
    opacity:0,
    delay:1.5,
    duration:0.9,
    

})
}
loadinganimation()