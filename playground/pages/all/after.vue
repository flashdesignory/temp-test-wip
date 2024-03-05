<script lang="ts" setup>
import { useGoogleAnalytics, useGoogleTagManager } from '#imports'

useGoogleAnalytics({
  id: 'GA-123456789-1',
})

useGoogleTagManager({
  id: 'GTM-MNJD4B',
})
</script>

<template>
  <div>
    <div>
      <GoogleMapsJavaScriptApi
        api-key="AIzaSyCFj8Vni52FfC9L1zpzxqH3ViUPmioa-Dw"
        width="600"
        height="400"
        :center="{ lat: 40.689247, lng: -74.044502 }"
      />
    </div>
    <div>
      <YoutubeEmbed
        videoid="rT1MTP-Rrt8"
        playlabel="Play"
      />
    </div>
  </div>
</template>
