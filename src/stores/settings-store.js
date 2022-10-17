import { defineStore } from 'pinia'
import getCurrentScript from '@soda/get-current-script'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      config: {}
    }
  },
  getters: {
    // getApiBaseUrl: (state) => state.config.API_BASE_URL
  },
  actions: {
    getApiBaseUrl () {
      return this.config?.API_BASE_URL ?? null
    },
    getCurrentScriptUrl () {
      if (this.config?.currentScriptUrl) {
        // return this.config.currentScriptUrl
      }
      const currentScript = getCurrentScript().src
      console.log('currentScript = ', currentScript)

      if (currentScript) {
        const domainData = (new URL(currentScript))

        this.saveSetting('config', { currentScriptUrl: domainData.protocol + '//' + domainData.host })
        console.log('currentScriptUrl = ', this.config.currentScriptUrl)
        return this.config.currentScriptUrl
      }
      return null
    },
    saveSetting (key, payload) {
      if (this[key] !== undefined) {
        console.log(key, ' is instanceof ', this[key])
        if (typeof this[key] === 'object') {
          if (typeof payload === 'object') {
            for (const payloadKey in payload) {
              this[key][payloadKey] = payload[payloadKey]
            }
          }
        } else {
          this[key] = payload
        }
      } else {
        this[key] = payload
      }
    },
    async retrieveSettings () {
      let currentScriptUrl = this.getCurrentScriptUrl()
      if (!currentScriptUrl.includes('.app') && !currentScriptUrl.includes('.com')) {
        currentScriptUrl += '/config.json'
      } else {
        currentScriptUrl += '/spa-config'
      }
      const response = await fetch(currentScriptUrl)
      const config = await response.json()
      await this.saveSetting('config', config)

      if (this.config?.API_BASE_URL) {
        // call the sanctum route
        await fetch(this.config.API_BASE_URL + '/sanctum/csrf-cookie', {
          credentials: 'include'
        })
      }
    }
  }
})
