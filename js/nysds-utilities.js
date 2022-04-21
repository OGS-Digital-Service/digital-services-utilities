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
const submenulink = document.getElementsByClassName('nysds-submenu-link');
const submenu = document.getElementsByClassName('nysds-submenu');

mobilemenu.addEventListener("click", mobiletoggle) //mobile menu show hide and aria-expanded
function mobiletoggle () {
    if (menu.classList.contains("hidden")) {
        menu.classList.toggle("hidden")
        mobilemenu.setAttribute('aria-expanded', true)
    }
    else {
        menu.classList.toggle("hidden")
        mobilemenu.setAttribute('aria-expanded', false)
    } 
}
document.addEventListener('click', function(e) {
    if (e.target.classList.contains("nysds-mobile-button")) {
    }
    else {
    menu.classList.add("hidden");
    mobilemenu.setAttribute('aria-expanded', false);
    }
    e.stopPropagation();
});




for (let i = 0; i < submenu.length, i < submenubutton.length  ; i++) {
   submenubutton[i].addEventListener("click", subtoggle ); //submenu show hides and aria expanded
   const sublist = submenu[i];
   const lastli = sublist.lastElementChild;
   lastli.addEventListener("focusout", subtoggle) // last list item on focusout closes menu
    function subtoggle() {
        if (submenu[i].classList.contains("hidden")) {
            submenu[i].classList.toggle("hidden");
            submenubutton[i].setAttribute('aria-expanded', true)
        }
        else {
            submenu[i].classList.toggle("hidden");
            submenubutton[i].setAttribute('aria-expanded', false)
        }
        }

        // click anywhere else closes menus
        document.addEventListener('click', function(e) {
            if (e.target === submenubutton[i]) {
            } else {
              submenu[i].classList.add("hidden");
              submenubutton[i].setAttribute('aria-expanded', false);
            }
            e.stopPropagation();
          });

        // mobile only menu hides 
        submenubutton[i].addEventListener("click", mobiletoggle);
        function mobiletoggle() {
            if (window.innerWidth < 1024) {
                
                console.log('this is mobile')


            }
            else {
                console.log('this is def not mobile')
            }
        }     
}// end giant for loop for menus


})// end anon function for pageload

