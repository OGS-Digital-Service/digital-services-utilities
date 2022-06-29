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

<div x-data="{ open: false }">
    <button @click="open = ! open">Expand</button>
    <template x-if="open">
        <div>
            Content...
        </div>
    </template>
</div>

<div x-data="{ title: '<h1>Start Here</h1>', thing: '<p> anotheter </p>',  }">
    <div x-html="title"></div>
    <div x-html="thing"></div>
</div>

<div>
<button x-data="{ open: true }" @click="open = false" x-show="open">
    Hide Me
</button>
</div>
<div x-data="{ foo: { bar: 'baz' }}" x-init="$watch('foo', (value, oldValue) => console.log(value, oldValue))">
    <button @click="foo.bar = 'bob'">Update</button>
</div>