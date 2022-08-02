// some easier way of waiting until pageload probably
document.addEventListener('DOMContentLoaded', function() {
// NYSDS lazy load video with placeholder______________________________________________________________________
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
//end video lazy load__________________________________________________________________________________________


// GLOBAL Navigation Menus_____________________________________________________________________________________
    const mobilemenu = document.getElementById('nysds-mobile-menu');
    const menu = document.getElementById('nysds-list-menu');
    const submenubutton = document.getElementsByClassName('nysds-submenu-button');
    const submenu = document.getElementsByClassName('nysds-submenu');
    const sublink = document.getElementsByClassName('nysds-submenu-link');

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

    // for click ouside the mobile menu hide menu
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains("nysds-mobile-button")) {
        }
        else if (e.target.classList.contains("nysds-menu-back"))  {
        }
        else {
            menu.classList.add("hidden");
            mobilemenu.setAttribute('aria-expanded', false);
                for (let i = 0; i < submenubutton.length; i++) {
                    submenubutton[i].classList.remove("hidden")
                }
                }
        e.stopPropagation();
      });

    // hiding the submenu only at mobile and back button opens the menu again --SUBMENU
    menu.addEventListener('click', hidesubmenu)
        function hidesubmenu(event) { 
            if (window.innerWidth < 1024){
                if (event.target.classList.contains("nysds-submenu-button")) {
                    for (let i = 0; i < submenubutton.length; i++) {
                        submenubutton[i].classList.add("hidden")
                    }
                    for (let i = 0; i < sublink.length; i++) {
                        sublink[i].classList.add("hidden")
                    }
                    menu.classList.add("nysds-h-0")
                }
                if (event.target.classList.contains("nysds-menu-back")){
                    for (let i = 0; i < submenubutton.length; i++) {
                        submenubutton[i].classList.remove("hidden");
                    }
                    for (let i = 0; i < sublink.length; i++) {
                        sublink[i].classList.remove("hidden")
                    }
                    mobilemenu.setAttribute('aria-expanded', true)
                    menu.classList.remove("nysds-h-0")
                }
            }
        }

    for (let i = 0; i < submenu.length, i < submenubutton.length; i++) {
        submenubutton[i].addEventListener("click", subtoggle ); //submenu show hides and aria expanded
        const sublist = submenu[i];
        const lastli = sublist.lastElementChild;
        lastli.addEventListener("focusout", subtoggle) // last list item on focusout closes menu
            function subtoggle() {
                if (submenu[i].classList.contains("hidden")) {
                    submenu[i].classList.toggle("hidden");
                    submenubutton[i].setAttribute('aria-expanded', true);
                }
                else {
                    submenu[i].classList.toggle("hidden");
                    submenubutton[i].setAttribute('aria-expanded', false);
                }
                }
                // click anywhere else closes menus
                document.addEventListener('click', function(e) {
                    if (e.target === submenubutton[i]) {
                    }
                    
                    else {
                    submenu[i].classList.add("hidden");
                    submenubutton[i].setAttribute('aria-expanded', false);
                    menu.classList.remove("nysds-h-0")
                    for (let i = 0; i < sublink.length; i++) {
                        sublink[i].classList.remove("hidden")
                        }
                    }
                    e.stopPropagation();
                });
    }// end giant for loop for menus_________________________________________________________________________
 
})// end anon function for pageload