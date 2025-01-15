<template>
  <div class="kiire-form-register">
    <FormKit type="form" @submit="submit" :actions="false" #default="{ disabled }">
      <div class="alert" :class="[`${alert.type}`]" v-if="alert.show">
        {{ alert.message }}
      </div>

      <FormKit
        type="text"
        id="name"
        name="name"
        placeholder="Nombre completo *"
        validation="required"
        :validation-messages="{
          required: 'Tu nombre es necesario',
        }"
      />

      <FormKit
        type="text"
        id="email"
        name="email"
        placeholder="Correo electrónico *"
        validation="required"
        :validation-messages="{
          required: 'Tu correo electrónico es necesario',
        }"
      />

      <FormKit
        type="text"
        id="phone"
        name="phone"
        placeholder="Celular *"
        validation="required"
        :validation-messages="{
          required: 'Tu celular es necesario',
        }"
      />

      <FormKit
        type="text"
        id="business"
        name="business"
        placeholder="Nombre de tu negocio *"
        validation="required"
        :validation-messages="{
          required: 'El nombre de tu negocio es necesario',
        }"
      />

      <FormKit
        type="text"
        id="nit"
        name="nit"
        placeholder="NIT de tu negocio *"
        validation="required"
        :validation-messages="{
          required: 'El NIT de tu negocio es necesario',
        }"
      />

      <FormKit
        class="button justify-center mt-10"
        type="submit"
        label="Quiero participar"
        :disabled="disabled"
      >
        <div class="circle-button"></div>
        Quiero participar
      </FormKit>
    </FormKit>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const alert = reactive({
  message: '',
  show: false,
  type: 'success'
})

const submit = async (fields) => {
  alert.message = ''
  alert.show = false
  alert.type = 'success'

  console.log(fields)

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(5000)
  alert.message = 'Ocurrió un error, por favor intenta mas tarde'
  alert.show = true
  alert.type = 'error'

  // const data = {
  //   data: [
  //     {...fields}
  //   ]
  // };

  // axios.post('https://sheetdb.io/api/v1/c4u8t3m347fpr', data)
  //   .then(response => {
  //     if (response.data.created === 1) {
  //       alert.message = 'Gracias por registrarte'
  //       alert.show = true
  //       alert.type = 'success'
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error)
  //
  //     alert.message = 'Ocurrió un error, por favor intenta mas tarde'
  //     alert.show = true
  //     alert.type = 'error'
  //   });
}
</script>
