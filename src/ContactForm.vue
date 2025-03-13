<template>
  <div class="kiire-form-register">
    <FormKit
      id="contactoForm"
      type="form"
      @submit="submit"
      :actions="false"
      #default="{ disabled }"
    >
      <div class="alert" :class="[`${alert.type}`]" v-if="alert.show">
        {{ alert.message }}
      </div>

      <div class="tw-flex tw-gap-x-4 tw-gap-y-12 tw-flex-wrap tw-box-border">
        <FormKit
          type="text"
          id="name"
          name="name"
          label="Nombre completo *"
          placeholder="Nombre completo"
          validation="required"
          :validation-messages="{
          required: 'Tu nombre es necesario',
        }"
        />

        <FormKit
          type="text"
          id="phone"
          name="phone"
          label="Celular *"
          placeholder="Número de celular"
          validation="required"
          :validation-messages="{
          required: 'Tu celular es necesario',
        }"
        />

        <FormKit
          type="text"
          id="secondPhone"
          name="phone"
          label="Segundo número de celular y/o telefono de confianza *"
          placeholder="Número de celular"
          validation="required"
          :validation-messages="{
          required: 'El segundo celular es necesario',
        }"
        />

        <FormKit
          type="text"
          id="email"
          name="email"
          label="Email o Correo *"
          placeholder="Email o Correo"
          validation="required"
          :validation-messages="{
          required: 'Tu correo electrónico es necesario',
        }"
        />

        <FormKit
          type="select"
          label="Solución de pago de tu interés"
          id="product"
          name="product"
          :options="[
          'KiirePro',
          'MiniDatáfono',
          'Recibe pagos con tu cel',
          'Link de pagos',
        ]"
        />

        <FormKit
          type="text"
          id="address"
          name="address"
          label="Dirección *"
          placeholder="Dirección con departamento y ciudad"
          validation="required"
          :validation-messages="{
          required: 'El nombre de tu negocio es necesario',
        }"
        />

        <FormKit
          type="text"
          id="business"
          name="business"
          label="¿Cuál es el nombre de tu empresa o negocio? *"
          placeholder="Nombre de la empresa"
          validation="required"
          :validation-messages="{
          required: 'El nombre de tu negocio es necesario',
        }"
        />

        <div class="tw-flex tw-w-full">
          <FormKit
            id="conditions"
            name="conditions"
            type="checkbox"
            label="* Acepto la Política - Aviso de Privacidad y doy el consentimiento para el tratamiento de mis datos personales."
            :value="false"
            validation="accepted"
            validation-visibility="dirty"
          />

          <FormKit
            class="button justify-center mt-10"
            type="submit"
            :disabled="disabled"
          >
            <div class="circle-button"></div>
            Comunícate conmigo
          </FormKit>
        </div>
      </div>
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
