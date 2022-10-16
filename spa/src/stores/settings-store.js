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
      let currentScript = getCurrentScript().src
      console.log('currentScript = ', currentScript)

      if (currentScript) {
        if (currentScript.indexOf('?') !== -1) {
          currentScript = currentScript.replace(/\?.*$/g, '')
        }
        this.saveSetting('config', { currentScriptUrl: currentScript.replace('js/app.js', '').replace('/app.js', '') })
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
      const response = await fetch(this.getCurrentScriptUrl() + '/config.json')
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
