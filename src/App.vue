<template>
  <div class="kiire-form-register">
    <FormKit
      id="registerForm"
      type="form"
      @submit="submit"
      :actions="false"
      #default="{ disabled }"
    >
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
        id="city"
        name="city"
        placeholder="Ciudad de tu negocio *"
        validation="required"
        :validation-messages="{
          required: 'La ciudad de tu negocio es necesaria',
        }"
        help="* Aplican restricciones según la ciudad"
      />

      <FormKit
        type="text"
        id="nit"
        name="nit"
        placeholder="NIT de tu negocio o cédula *"
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
import { getNode } from '@formkit/core';

const alert = reactive({
  message: '',
  show: false,
  type: 'success'
})

const submit = async (fields) => {
  alert.message = ''
  alert.show = false
  alert.type = 'success'

  const data = {
    data: [
      {...fields}
    ]
  };

  axios.post('https://sheetdb.io/api/v1/c4u8t3m347fpr', data)
    .then(response => {
      if (response.data.created === 1) {
        alert.message = 'Ya estás inscrito en Remodelamos tu negocio! Vende con Kiire, y a partir del 15 de febrero participa para ganar'
        alert.show = true
        alert.type = 'success'

        const formNode = getNode('registerForm');
        formNode.reset()
      } else {
        console.log(response)

        alert.message = 'Ocurrió un error, por favor intenta mas tarde'
        alert.show = true
        alert.type = 'error'
      }
    })
    .catch(error => {
      console.log(error)

      alert.message = 'Ocurrió un error, por favor intenta mas tarde'
      alert.show = true
      alert.type = 'error'
    });
}
</script>
