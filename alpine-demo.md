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

<h1 class="nysds-text-36 font-extrabold mb-4 w-full">Find Services</h1>





<section x-data="{ q1: '', q2: '', q3: ''}" class="flex flex-col items-center m-auto"> <!-- data wrap -->
    <span class="text-sm oswald uppercase tracking-widest"> Step 1 of 3 </span>
    <h2 class="font-bold text-2xl my-4">Tell us about yourself</h2>
        <fieldset class="w-full md:w-2/3">
            <legend>Are you unemployed, furloughed, or working reduced hours?</legend>
            <div class=" flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q1no.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third')" x-ref="q1yes">
                <input type="radio" value="yes" x-model="q1" id="q1-yes" >
                <label for="q1-yes" class="w-full p-4">Yes</label>
            </div>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl" @click="$refs.q1yes.classList.remove('bg-admin-third');$el.classList.add('bg-admin-third')" x-ref="q1no">
                <input type="radio" value="no" x-model="q1" id="q1-no">
                <label for="q1-no" class="w-full p-4">No</label>
            </div>
        </fieldset>
        <fieldset class="w-full md:w-2/3">
            <legend>Are you having trouble paying for your rent, mortgage, or home maintenance fees?</legend>
            <div class=" flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl">
                <input type="radio" value="yes" x-model="q2" id="q2-yes" >
                <label for="q2-yes" class="w-full p-4">Yes</label>
            </div>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl">
                <input type="radio" value="no" x-model="q2" id="q2-no">
                <label for="q2-no" class="w-full p-4">No</label>
            </div>
        </fieldset>
        <fieldset class="w-full md:w-2/3">
            <legend>Are you having trouble purchasing enough food to feed yourself or your family?</legend>
            <div class=" flex flex-row items-center border border-admin-second my-2 pl-4  rounded-xl">
                <input type="radio" value="yes" x-model="q3" id="q3-yes" >
                <label for="q3-yes" class="w-full p-4">Yes</label>
            </div>
            <div class="flex flex-row items-center border border-admin-second my-2 pl-4 rounded-xl">
                <input type="radio" value="no" x-model="q3" id="q3-no">
                <label for="q3-no" class="w-full p-4">No</label>
            </div>
        </fieldset> 
    <div x-data="{ open: false }">
        <button @click="open = ! open" class="nysds-exclude bg-admin-first hover:bg-black hover:underline focus:bg-black focus:underline m-4 p-4 rounded-xl text-white font-bold text-center ">Continue to Step 2</button>
        <template x-if="open">
            <div class="">
            </div>
        </template>
    </div>
    <div x-data="{ open: false }">
        <button @click="open = ! open" class="nysds-exclude bg-admin-first hover:bg-black hover:underline focus:bg-black focus:underline m-4 p-4 rounded-xl text-white font-bold text-center ">See Results</button>
        <template x-if="open">
            <div class="">
                <span x-text="q1"></span>
                <span x-text="q2"></span>
                <span x-text="q3"></span>
            </div>
        </template>
    </div>
</section>


