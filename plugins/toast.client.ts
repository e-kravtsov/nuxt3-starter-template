import Toast, { PluginOptions } from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    // You can set your default options here
  }

  nuxtApp.vueApp.use(Toast, options)
})
