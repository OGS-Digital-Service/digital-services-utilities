---
layout: layout.njk
title: NYSDS alpinejs demo
url: digital-services-utilities.dev/alpine-demo
domain: digital-services-utilities.dev
facebook:
    title:  NYSDS alpinejs demo
    description: alpine
    image: nygov-logo.png
twitter:
    title: NYSDS alpinejs demo
    description: alpine
    image: nygov-logo.png
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks,sponsor  %}
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

<h1 class="nysds-text-36 font-extrabold mb-4 w-full">Steps to Prepare and File an Extreme Risk Protection Order Application</h1>

<p class="my-2">An Extreme Risk Protection Order (ERPO) is a court order issued when a person may be dangerous to themselves or others.  An ERPO prohibits a person from purchasing or possessing guns and requires the person to surrender any guns they already own or possess.  An ERPO can also direct the police to search a person, premises or a vehicle for guns and remove them.  An ERPO case may be started by a district attorney, a police officer, a school official, or a member of the person’s family or household.  It is a civil case.  ERPO cases have no criminal charges or penalties.</p>

<p class="my-2">The petitioner is the person filing the ERPO application with the court.  The respondent is the person you are asking the Court to issue an ERPO against.  The petitioner can be a district attorney, a police officer, a school official, or a member of the respondent’s family or household.  No matter who starts the case, you must follow these steps:</p>



<div x-data="{ open: false }">
    <button @click="open = ! open" class="nysds-exclude bg-admin-first hover:bg-black hover:underline focus:bg-black focus:underline m-4 p-4 rounded-xl text-white font-bold text-center w-1/2 md:w-1/3 lg:w-1/4">Next</button>
    <template x-if="open">
        <div>
            1. 
        </div>
    </template>
</div>
