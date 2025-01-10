document.addEventListener('DOMContentLoaded', function() {
    const findServices = document.getElementById('nysds-find-services-highlight-id');
    const container = findServices.closest(".o-wysiwyg");
    if (container) {
        container.style.maxWidth = '100%';
        container.style.padding = "0px";
    }
})