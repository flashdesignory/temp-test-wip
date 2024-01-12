<script setup>
import { useHead } from '#imports'
const id = 'G-MMQSNF1HQ5';
useHead({
    script: [
        {
            key: 'gtag-setup',
            innerHTML: `window.dataLayer=window.dataLayer||[];window.gtag=function gtag() {window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config', ${JSON.stringify(id)})`,
        },
        {
            src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
            onload: (event) => "loaded!" && console.log(event),
        },
    ]
});
</script>

<template>
  <div>
    Simple!
  </div>
</template>