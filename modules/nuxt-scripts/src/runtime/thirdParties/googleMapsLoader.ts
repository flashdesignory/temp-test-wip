import type { ThirdPartyScriptOptions } from '../types'
import { useScript } from '@unhead/vue'

export interface GoogleMapsLoaderOptions {
  apiKey: string;
  libraries?: string[];
}

export interface GoogleMapsLoaderApi {
  google: {
    maps: any;
  }
}

declare global {
  interface Window extends GoogleMapsLoaderApi { }
}

export function useGoogleMapsLoader(options: ThirdPartyScriptOptions<GoogleMapsLoaderOptions, GoogleMapsLoaderApi>) {
  return useScript<GoogleMapsLoaderApi>({
    'key': 'google-maps-loader',
    //'async': true,
    'src': `https://maps.googleapis.com/maps/api/js?libraries=places&key=${options.apiKey}&callback=&callback=Function.prototype`,

  }, {
    ...options,
    use: () => ({ google: window.google }),
  })
}
