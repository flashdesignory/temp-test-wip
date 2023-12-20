import { defineComponent, h } from 'vue'
import { useAsyncData, useInlineAsset, useProxyAsset } from '#imports'
import { useHead, useScript } from '@unhead/vue'
import { YouTubeEmbed as TPCYoutubeEmbed } from 'third-party-capital'
import { validateRequiredOptions } from '../util'
import { convertThirdPartyCapital } from '../thirdParties/util'

function formatDimensionValue(value: any) {
  return value.slice(-1) === "%" ? value : `${value}px`;
}

export const YoutubeEmbed = defineComponent({
  name: 'YoutubeEmbed',
  props: {
    videoid: { type: String, required: true },
    playlabel: { type: String, required: true },
    width: { type: String, required: false, default: "100%" },
    height: { type: String, required: false, default: "100%" },
    params: { type: String, required: false, default: undefined }
  },
  async setup(props) {
    const { videoid, playlabel } = props
    const yt = TPCYoutubeEmbed({videoid, playlabel });
    validateRequiredOptions(yt.id, props, ['videoid', 'playlabel']);

    
    /* $fetch.raw<string>('https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css', {}).then(response => {
      useHead({
        style: [
          {
            innerHTML: response._data,
            id: 'lite-yt-embed-styles',
          },
        ],
      })

      const { $script } = convertThirdPartyCapital({
        data: yt,
        mainScriptKey: 'lite-yt-embed',
        options: {},
        use: () => {},
      })
  
      $script.waitForLoad().then(() => {
        console.log('youtube script is ready')
      })
    }); */

    /*************************** */

    if (process.client) {
      /* const styles = (await $fetch.raw<string>('https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css', {}))._data || "";
      useHead({
        style: [
          {
            innerHTML: styles,
            id: 'lite-yt-embed-styles',
          },
        ],
      }) */

      const { $script } = convertThirdPartyCapital({
        data: yt,
        mainScriptKey: 'lite-yt-embed',
        options: {},
        use: () => {},
      })
  
      $script.waitForLoad().then(() => {
        console.log('youtube script is ready')
      })
    } 
    
    

    /*************************** */

    /* const { data } =  useAsyncData(
      'ytStyles',
      () => $fetch('https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css')
    )

    useHead({
      style: [
        {
          innerHTML: data,
          id: 'lite-yt-embed-styles',
        },
      ],
    })
    
    const { $script } = convertThirdPartyCapital({
      data: yt,
      mainScriptKey: 'lite-yt-embed',
      options: {},
      use: () => {},
    })

    $script.waitForLoad().then(() => {
      console.log('youtube script is ready')
    }) */

    return () => h('div', { class: 'lite-youtube-container', innerHTML: yt.html, style: {width: formatDimensionValue(props.width), height: formatDimensionValue(props.height)} })
  },
})
