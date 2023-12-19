import { defineComponent, h } from 'vue'
import { useGoogleMapsLoader } from '../thirdParties/googleMapsLoader'
import { validateRequiredOptions } from '../util'

function uuid() {
    let uuid = "";
    for (let i = 0; i < 32; i++) {
        const random = (Math.random() * 16) | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20)
            uuid += "-";

        let currentNumber = random;
        if (i === 12)
            currentNumber = 4;
        else if (i === 16)
            currentNumber = 8 | (random & 3);
        uuid += currentNumber.toString(16);
    }
    return uuid;
}

export const GoogleMapsApi = defineComponent({
    name: "GoogleMapsApi",
    props: {
        apiKey: { type: String, required: true },
        /**
         * Defines map marker location.
         *
         * @example City Hall, New York, NY
         */
        q: { type: String, required: false, default: "" },
        /**
         * Defines center of the map view.
         *
         * @example 37.4218,-122.0840
         */
        center: { type: Object, required: false, default: undefined },
        /**
         * Sets initial zoom level of the map.
         *
         * @example 10
         */
        zoom: { type: Number, required: false, default: 15 },
        /**
         * Defines the width of the map.
         */
        width: { type: String, required: false, default: "100%" },
        /**
         * Defines the height of the map
         */
        height: { type: String, required: false, default: "100%" },
      },
    setup(props) {
        const id = "google-maps-api"
        const elementId = `google-maps-instance-${uuid()}}`;

        validateRequiredOptions(id, props, ['apiKey'])

        const { $script } = useGoogleMapsLoader({
            apiKey: props.apiKey,
            trigger: "idle",
            // skipEarlyConnections: true,
        })

        function createMap({ google, options }: { google: any, options: any }) {
            const map = new google.maps.Map(document.getElementById(elementId), {
                ...options,
                zoom: props.zoom,
            });

            return map;
        }

        function createMarker({ position, google, map}: {position: any, google: any, map: any}) {
            if (!position) return;

            const marker = new google.maps.Marker({
                map,
                position,
            });

            return marker;
        }

        function createMapWithQuery({ google }: { google: any}) {
            const map = createMap({ google, options: {
                ...(props.center && {center: props.center}),
                zoom: props.zoom,
            }})

            const request = {
                query: props.q,
                fields: ["name", "geometry"],
            };

            const service = new google.maps.places.PlacesService(map);
            service.findPlaceFromQuery(request, (results: any, status: any) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                for (let i = 0; i < results.length; i++) {
                    createMarker({ position: results[i].geometry.location, google, map});
                }

                map.setCenter(results[0].geometry.location);
                }
            });
        }

        function createMapWithCenter({ google }: { google: any }) {
            const map = createMap({ google, options: {
                ...(props.center && {center: props.center}),
                zoom: props.zoom,
            }})

            createMarker({ position: props.center, google, map})
        }

        $script.waitForLoad().then(({ google }) => {
            if (props.q) {
                createMapWithQuery({ google })
            } else {
                createMapWithCenter({ google })
            }
        });

        return () => h('div', { class: 'google-maps-container', id: elementId, innerHTML: `${props.apiKey}`, style: {width: `${props.width}px`, height:  `${props.height}px`} })
      },
})
