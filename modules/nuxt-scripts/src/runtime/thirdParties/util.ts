import type { Output } from 'third-party-capital'
import { isExternalScript } from 'third-party-capital'
import type { UseScriptOptions } from '@unhead/schema'
import { useHead, useScript } from '@unhead/vue'
import type { ThirdPartyScriptApi } from '../types'

export interface ConvertThirdPartyCapitalInput<T> {
  data: Output
  mainScriptKey: string
  options: UseScriptOptions<T>
  use: () => T | undefined | null
}

export function convertThirdPartyCapital<T>({ data, mainScriptKey, options, use }: ConvertThirdPartyCapitalInput<T>): ThirdPartyScriptApi<T> {
  const scripts = data.scripts ?? []
  const stylesheets = data.stylesheets ?? []
  let response = null

  for (const stylesheet of stylesheets) {
    const id = stylesheet.substring(stylesheet.lastIndexOf("/") + 1);
    $fetch.raw<string>(stylesheet, {}).then (response => {
      const innerHTML = response._data || "";
      useHead({ style: [{ innerHTML, id }] })
    })
  }

  for (const script of scripts) {
    if (isExternalScript(script)) {
      const { key, url: src } = script
      if (key === mainScriptKey)
        response = useScript<T>({ key, src }, { ...options, use })

      else
        useScript<T>({ key, src }, { ...options })
    }
    else {
      const { key, code: innerHTML, location } = script
      const tagPosition = location === 'body' ? 'bodyOpen' : 'head'
      useHead({ script: [{ key, innerHTML, tagPosition }] })
    }
  }

  if (!response)
    throw new Error('No external main script found!')

  return response
}
