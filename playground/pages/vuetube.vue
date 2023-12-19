<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
    components: { YouTube },
    methods: {
        onReady() {
            // this.$refs.youtube.playVideo()
            console.log("vuetube ready")
        },
    },
})
</script>

<template>
  <div>
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
    <YouTube
      ref="youtube"
      src="https://www.youtube.com/watch?v=rT1MTP-Rrt8"
      @ready="onReady"
    />
  </div>
</template>