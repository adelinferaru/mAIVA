<template>
  <q-page class="flex flex-center">
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { api } from 'boot/axios'
// import { useSettingsStore } from 'stores/settings-store'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    console.log('hellow')
    // const settings = useSettingsStore()
    api.post('/test')
    return {}
  }
})
</script>
