document.addEventListener('DOMContentLoaded', function() {
// NYSDS lazy load video with placeholder


// get the data-video attribute and construct the image and video urls
const videoframes = document.getElementsByClassName('video-area')
const playbuttons = document.getElementsByClassName('video-play')
const placeholder = document.getElementsByClassName('placeholder-area')
const placearr = Array.from(placeholder)
const videoarr = Array.from(videoframes)
const playarr = Array.from(playbuttons)

for(let i=0; i<videoarr.length; i++) {
    var videoID = videoarr[i].getAttribute('data-video')
    var videosrc = 'https://www.youtube.com/embed/' + videoID + '?&autoplay=1'
    var videoimage = "https://img.youtube.com/vi/" + videoID + "/0.jpg"
    var videoembed = '<iframe width="560" height="315" src="' + videosrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    console.log(videoimage)
    console.log(videoembed)
    placearr[i].id = videoID
    }
for(let i=0; i<playarr.length; i++) {
    playarr[i].addEventListener('click', hide)
    function hide(){
        placearr[i].classList.add("hidden");
    }
}
    
    
   
// for(let i=0; i<playarr.length; i++) {
    
//   }  

//   console.log(videoID)




  
// videoarr.forEach(function() {
    //   var playID = document.getElementById(videoID)
    // console.log(playID)

    // playID.addEventListener('click', playvideo)
    // function playvideo () {
    // playID.classList.add("hidden");
    
// });


// var playbutton = 
// playbutton.addEventListener("click", playvideo);

// function playvideo () {
//     document.getElementById().classList.add("hidden");
// // videoarea.insertAdjacentHTML('afterbegin', videoembed)
// }








// let videoID = videoarr[0].dataset.video
// var videosrc = 'https://www.youtube.com/embed/' + videoID + '?&autoplay=1'
// var videoimage = "https://img.youtube.com/vi/" + videoID + "/0.jpg"
// var videoembed = '<iframe width="560" height="315" src="' + videosrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

   

// for (let i = 0; i < videoarr.length; i++) {
  
// }

// console.log(videoimage)
// console.log(videosrc)

// var playbutton = document.querySelectorAll('.video-play')
// for (let i = 0; i < playbutton.length; i++) {
//     .addEventListener("click", loadvideo);
//     function loadvideo () {

//     }
// }

// function playvideo () {
    
//     this.getAttribute('placeholder-area').classList.add("hidden");
    
// }

// console.log(playbutton)

// let videoID2 = videoarr.dataset.video
//     var videosrc = 'https://www.youtube.com/embed/' + videoID2 + '?&autoplay=1'
//     var videoembed = '<iframe width="560" height="315" src="' + videosrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     video += videoembed
//     console.log(videoembed)
// var playbutton = document.getElementById('video-play');
// if(playbutton){
// playbutton.addEventListener("click", loadvideo);
// function loadvideo () {
// document.getElementById('placeholder-area').classList.add("hidden");
// videoarea.insertAdjacentHTML('afterbegin', videoembed)
// }
// }


// let videoID2 = videoarea.getAttribute('data-video');
// let videosrc = 'https://www.youtube.com/embed/' + videoID + '?&autoplay=1'
// let videoembed = '<iframe width="560" height="315" src="' + videosrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
// console.log(videoID2);
// console.log(videosrc);
// console.log(videoembed);


  
    
})

 

 