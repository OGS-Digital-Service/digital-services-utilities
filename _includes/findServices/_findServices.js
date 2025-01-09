document.addEventListener('DOMContentLoaded', function() {
    const searchHero = document.getElementById('nysds-find-services-highlight');
    const container = searchHero.closest(".o-wysiwyg");
    if (container) {
        container.style.maxWidth = '100%';
        container.style.padding = "0px";
    }
})