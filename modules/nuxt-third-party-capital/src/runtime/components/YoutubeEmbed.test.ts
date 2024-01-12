import { expect, it, vi } from 'vitest'
import YoutubeEmbed from './YoutubeEmbed';
import { mountSuspended } from '@nuxt/test-utils/runtime';

vi.mock('#imports', () => ({ useStyles: () => vi.importActual('../../../../nuxt-script/src/runtime/composables/useStyles') }))

it('should mount the component', async () => {
    const component = await mountSuspended(YoutubeEmbed, {
        props: {
            videoid: 'd_IFKP1Ofq0',
            playlabel: 'play'
        },
    })

    expect(component.text()).toContain('play');
});