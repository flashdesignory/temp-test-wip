<script setup>
import { useHead } from '#imports'
const id = 'G-MMQSNF1HQ5';
useHead({
    script: [
        {
            key: 'gtm-setup',
            innerHTML: 'window.dataLayer=window.dataLayer||[];window.dataLayer.push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});',
        },
        {
            src: `https://www.googletagmanager.com/gtm.js?id=${id}`,
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