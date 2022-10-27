---
layout: layout-nonav.njk
title: PAWS Ticket review
---
{% from './_includes/_components.njk' import ticket  %}
<section class="flex flex-col items-center">
{{ ticket({
    title:"Global Navigation Edits",
    type:"enhancement",
    content:"We'd like to remove the current global navigation items in favor of using the gray subtitle bar for inner app navgiation. We would leave the orange global bar along with the Office of General Services header in place to anchor the application in the OGS digital footprint, but navigation items would move below the orange bar to be clearly within the application similar to COMET.",
    image:"global.png",
    imagealt:"global navigation"
})
}} 
{{ ticket({
    title:" Filter options spacing and formatting",
    type:"style",
    content:"Tighten up the filter options display to take up less space and look more polished. ",
    image:"filter.png",
    imagealt:"filter options"
})
}}
{{ ticket({
    title:"Search results text formatting incorrect",
    type:"style",
    content:"Style the search results text and results number to match the design system specifications. ",
    image:"search-results.png",
    imagealt:"search results" 
})
}}
{{ ticket({
    title:"Consider using radio buttons for OR filter criteria",
    type:"enhancement",
    content:"For filter options that are exclusive (ex. this OR that), where results are not meaningful if multiple options are checked, we'd like to consider using a radio button instead of a checkbox. This will align the users expectation with possible search results. ",
    image:"radio.png",
    imagealt:"filter criteria" 
})
}}
{{ ticket({
    title:"Repurpose the gray title bar as the app subnavigation",
    type:"enhancement",
    content:"Similar to the COMET portal, we'd like to move the current navigation items that are in the orange global navigation down to the gray title bar to be in line with formatting from the COMET portal. We also believe that this will unify the navigation experience for users while doing in-app business vs. navigating elsewhere on the website. ",
    image:"gray.png",
    imagealt:"gray title bar" 
})
}}
{{ ticket({
    title:"Set minimum heights for page templates",
    type:"bug",
    content:"Some page templates do not have a minimum height set and as a result when there is little content on a page or subpage the left navigation or page content is overlapped in a non-ideal way. Pages should be relatively uniform in size to allow for ease of navigation. ",
    image:"height.png",
    imagealt:"page showing weird overlap of footer" 
})
}}
{{ ticket({
    title:"Format Breadcrumbs",
    type:"style",
    content:"Breadcrumbs are not styled correctly and need several style and functionality improvements to better align with user experience guidelines. We'd like to remove some levels of breadcrumb (back to previous page only) in favor of a more prominent title on the contractor information page as well as style the breadcrumb to be smaller and less obtrusive to the page content. In the screenshot below, this would result in a larger title for 1st Run Computer Services Inc and a smaller breadcrumb with arrow allowing the user to return to the contractor information table. The other breadcrumbs pictured here are unnecessary and confusing.",
    image:"breadcrumb.png",
    imagealt:"breadcrumbs formatting" 
})
}}
{{ ticket({
    title:"Tab sections null behavior",
    type: "functionality",
    content:"For sections that have sub-navigation tabs, if the tab is empty (blank) or if a table within a tab section is empty (no rows of data), the tab or table should not display. Tables without content violate accessibilty standards and blank tabs are confusing for the user.",
    image:"",
    imagealt:"breadcrumbs formatting" 
})
}}
{{ ticket({
    title:"Table formatting",
    type:"style",
    content:"Table heading sort arrows are inverted which is a non-standard design pattern and the main template tables (ex. award search table) could we wider to better accommodate information.",
    image:"tablehead.png",
    imagealt:"tableheader with inverted arrows " 
})
}}
{{ ticket({
    title:"Left side navigation should always be the entire height of the page",
    type:"Bug",
    content:"On some pages the left navigation is too short and should extend to be the full height of the page template. ",
    image:"leftnav.png",
    imagealt:"left navigation not spanning entire height of page" 
})
}}
{{ ticket({
    title:"Alternate template for award and contractor updates",
    type:"enhancement",
    content:"The award and contractor updates page templates could benefit for a general styling change as there are rarely ever any filter criteria associated with these types. We'd like to propose a new template for these pages that removes the filter options in favor of just the table and the search, with the search box positioned above the table. ",
    image:"contractor.png",
    imagealt:"contractor update page" 
})
}}
{{ ticket({
    title:"Responsive sizing for tables embedded in tabs",
    type:"enhancement",
    content:"Tables that are used in tabs on any page always extend to the full width of the tab content area. This creates awkward tables when table content has a limited number of columns. We'd suggest creating some style or javascript logic to allow tables to collapse to the size of their content when they have fewer columns. The example below has only two columns of content, but is the same width as a table with 5 or 6 columns of content, which results in an awkward table and poor user experience.",
    image:"tablecols.png",
    imagealt:"table with few columns" 
})
}}
{{ ticket({
    title:"Unstyled or incorrectly styled buttons",
    type:"style",
    content:"Some buttons do not have the correct button formatting or have none at all.",
    image:"buttons.png",
    imagealt:"button with no format" 
})
}}
{{ ticket({
    title:"Global footer needs updates",
    type:"style",
    content:"The global footer needs some refinement along with the correct icons for social media accounts.",
    image:"footer.png",
    imagealt:"footer" 
})
}}
</section>

