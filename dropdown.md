---
layout: layout.njk
title: NYSDS FOIL Dropdown
url: digital-services-utilities.dev/dropdown
domain: digital-services-utilities.dev
data: openfoil
facebook:
    title:  NYSDS FOIL Dropdown
    description: NYSDS FOIL Dropdown
    image: nygov-logo.png
twitter:
    title: NYSDS FOIL Dropdown
    description: NYSDS FOIL Dropdown
    image: nygov-logo.png
---

<style>
    .nysds-linklist {
        display: flex;
        flex-direction: column;
        align-items:center;
    }
    .nysds-linklist_label {
        font-weight: bold;
        margin: 0.5rem;
    }
    .nysds-linklist_select {
        border: 1px solid #62666a;
        padding: 0.5rem;
        margin: 1rem;
        max-width:90%;
    }
    .nysds-linklist_button{
        background: #154973;
        padding: 20px;
        font-family: "Proxima Nova", sans-serif;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 2px;
        color: #ffffff;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 15px;
        border: none;
    }
    .nysds-linklist_button:hover {
        background: #000;
    }
    .nysds-linklist_button:focus {
        background: #000;
    }
</style>    
<section class="nysds-linklist">
        <label class="nysds-linklist_label " for="foil-list">Agency Freedom of Information Law (FOIL) Request Link List</label>
            <select 
            class="nysds-linklist_select" 
            name="Agency Freedom of Information Request Link List" 
            id="foil-list">
                <option disabled selected>Please Choose an Agency</option>
                {% for agency in openfoil %}<option value="{{agency.link}}" class="">{{agency.Agency}}</option>{% endfor %}
            </select>
            <input class="nysds-linklist_button" type="button" id="foil-submit" value="Go To Agency FOIL Page">
</section>
<script> 
    var foilList = document.getElementById("foil-list");
    var foilSubmit = document.getElementById("foil-submit");
    foilSubmit.onclick = function(){
        window.location = foilList.value;
    }
</script>