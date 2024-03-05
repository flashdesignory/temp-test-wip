<script setup>
import { useHead } from '#imports'
import googleMapsCommunity from '../maps/google-maps-community.vue';
const gtagID = 'G-MMQSNF1HQ5';
useHead({
    script: [
        {
            key: 'gtag-setup',
            innerHTML: `window.dataLayer=window.dataLayer||[];window.gtag=function gtag() {window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config', ${JSON.stringify(gtagID)})`,
        },
        {
            src: `https://www.googletagmanager.com/gtag/js?id=${gtagID}`,
            onload: (event) => "loaded!" && console.log(event),
        },
    ]
});

const gtmID = 'G-MMQSNF1HQ5';
useHead({
    script: [
        {
            key: 'gtm-setup',
            innerHTML: 'window.dataLayer=window.dataLayer||[];window.dataLayer.push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});',
        },
        {
            src: `https://www.googletagmanager.com/gtm.js?id=${gtmID}`,
            onload: (event) => "loaded!" && console.log(event),
        },
    ]
});
</script>

<template>
  <div>
    <div>
      <googleMapsCommunity />
    </div>
    <div>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/rT1MTP-Rrt8"
          frameborder="0"
        />
      </div>
    </div>
  </div>
</template>
