---
layout: layout.njk
title: NYSDS FOIL Dropdown
url: digital-services-utilities.dev/dropdown
domain: digital-services-utilities.dev
facebook:
    title:  NYSDS FOIL Dropdown
    description: NYSDS FOIL Dropdown
    image: nygov-logo.png
twitter:
    title: NYSDS FOIL Dropdown
    description: NYSDS FOIL Dropdown
    image: nygov-logo.png
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks,sponsor  %}
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
    }
</style>    
<section class="nysds-linklist">
        <label class="nysds-linklist_label " for="foil-list">Agency Freedom of Information Law (FOIL) Request Link List</label>
            <select 
            class="nysds-linklist_select" 
            name="Agency Freedom of Information Request Link List" 
            id="foil-list">
                <option disabled selected>Please Choose an Agency</option>
                <option value="https://ogs.ny.gov">Office of General Services </option>
                <option value="https://dol.ny.gov">Department of Labor </option>
                <option value="https://health.ny.gov">Department of Health</option>
            </select>
            <button class="nysds-linklist_button" type="button" id="foil-submit">Go to Agency FOIL Page</button>
</section>
<script> 
    var foilList = document.getElementById("foil-list");
    var foilSubmit = document.getElementById("foil-submit");
    foilSubmit.onclick = function(){
        window.location = foilList.value;
    }
</script>
