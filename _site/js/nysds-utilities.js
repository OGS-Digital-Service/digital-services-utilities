// some easier way of waiting until pageload probably
document.addEventListener('DOMContentLoaded', function() {
// NYSDS lazy load video with placeholder
const videoframes = document.getElementsByClassName('nysds-video-area');
const playbuttons = document.getElementsByClassName('nysds-video-play');
const placeholder = document.getElementsByClassName('nysds-placeholder-area');
const coverimage = document.getElementsByClassName('nysds-video-image');
const videodescription = document.getElementsByClassName('nysds-video-description');
const placearr = Array.from(placeholder);
const videoarr = Array.from(videoframes);
const playarr = Array.from(playbuttons);
const imagearr = Array.from(coverimage);
const descriptionarr = Array.from(videodescription);

for (let i = 0; i < videoarr.length, i < playarr.length, i < imagearr.length, i < descriptionarr.length; i++) {
    var videoID = videoarr[i].getAttribute("data-video");
    var videosrc = "https://www.youtube.com/embed/" + videoID + "?&autoplay=1";
    var videoimage = "https://img.youtube.com/vi/" + videoID + "/0.jpg";
    var videoembed =
        '<iframe width="560" height="315" src="' + videosrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    var dataembed = videoarr[i].setAttribute("data-video-embed", videoembed);
    var datadescription = videoarr[i].getAttribute('data-video-description')
    var buttontext = descriptionarr[i].insertAdjacentText("afterbegin", datadescription)
    imagearr[i].src = videoimage

    playarr[i].addEventListener("click", hide);
    function hide() {
        placearr[i].classList.add("hidden");
        videoarr[i].classList.remove("hidden");
        var videodata = videoarr[i].getAttribute("data-video-embed");
        videoarr[i].insertAdjacentHTML("afterbegin", videodata);
    }
}

})
// end anon function for pageload

 

 