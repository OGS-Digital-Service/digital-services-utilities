document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('nysds-service-search-input');
    const submitSearch = document.getElementById('nysds-service-search-form');
    const searchHero = document.getElementById('nysds-search-hero');
    const container = searchHero.closest(".o-wysiwyg");
    if (container) {
        container.style.maxWidth = '100%';
        container.style.padding = "0px";
    }
    function searchServices (e) {
        e.preventDefault();
        var searchTerm = searchInput.value; 
        if (!searchTerm) {
           window.location.href ="https://nygovd8stg.prod.acquia-sites.com/all-services-listing"
        }
        else {
            window.location.href ="https://nygovd8stg.prod.acquia-sites.com/all-services-listing?search_api_fulltext_tablet=&search_api_fulltext="+searchTerm+"&items_per_page=10#views-exposed-form-filter-frame-services"
        } 
    }
    submitSearch.addEventListener("submit", searchServices)
}) // url is manually updated here