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
//end video lazy load




// Global Nav Menu Interactions
const mobilemenu = document.getElementById('nysds-mobile-menu');
const menu = document.getElementById('nysds-list-menu');
const submenubutton = document.getElementsByClassName('nysds-submenu-button');
const submenu = document.getElementsByClassName('nysds-submenu');
const submenuarr = Array.from(submenu);
const submenubuttonarr = Array.from(submenubutton);
mobilemenu.addEventListener("click", mobilemenutriggers) //mobile menu show hide and aria-expanded
function mobilemenutriggers () {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    }
    else {
        menu.classList.add("hidden");
    }
    var mobileariaexpanded = mobilemenu.getAttribute("aria-expanded");
            if (mobileariaexpanded == "false" ){
                mobileariaexpanded = "true" 
            }
            else {
                mobileariaexpanded = "false" 
            }
            mobilemenu.setAttribute("aria-expanded", mobileariaexpanded);
}
for (let i = 0; i < submenuarr.length, i < submenubuttonarr.length ; i++) {
    submenubuttonarr[i].addEventListener("click", subtriggers) //submenu show hides and aria expanded
        function subtriggers (){
            if (submenuarr[i].classList.contains("hidden")) {
                submenuarr[i].classList.remove("hidden");
            }
            else {
                submenuarr[i].classList.add("hidden");
            }
            var subariaexpanded = submenubuttonarr[i].getAttribute("aria-expanded");
            if (subariaexpanded == "false" ){
                subariaexpanded = "true" 
            }
            else {
                subariaexpanded = "false" 
            }
            submenubuttonarr[i].setAttribute("aria-expanded", subariaexpanded);
        }
}



})// end anon function for pageload