document.addEventListener('DOMContentLoaded', function() {

    const sections = document.getElementsByClassName('t-section__content')
    const headings = document.getElementsByClassName('a-pTitle')
    const centerThatWorks = document.getElementsByClassName('align-center')

    for (let i = headings.length; i-->0;) { 
        headings[i].classList.remove('a-pTitle')
    }

    for (let i = sections.length; i-->0;) { 
        sections[i].setAttribute('style', 'margin-top:50px !important;')
    }

    for (let i = centerThatWorks.length; i-->0;) { 
        centerThatWorks[i].setAttribute('style', 'display:flex;justify-content:center;')
    }

})