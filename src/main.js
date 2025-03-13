import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import ContactoForm from '@/ContactForm.vue'

// createApp(App).use(plugin, defaultConfig({
//   messages: {
//     en: {
//       form: {
//         incomplete: 'Por favor, completa todos los campos requeridos.',
//       },
//     },
//   },
//   locale: 'en',
// })).mount('#app')

createApp(ContactoForm).use(plugin, defaultConfig({
  messages: {
    en: {
      form: {
        incomplete: 'Por favor, completa todos los campos requeridos.',
      },
    },
  },
  locale: 'en',
})).mount('#contacto')
