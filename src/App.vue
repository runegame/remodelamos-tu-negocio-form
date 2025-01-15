<template>
  <div class="kiire-form-register">
    <FormKit
      type="form"
      @submit="submit"
      :actions="false"
      #default="{ disabled }"
    >
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
        id="business"
        name="business"
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

const form = reactive({
  name: '',
  email: '',
  phone: '',
  business: '',
  nit: '',
})

const submit = (fields) => {
  console.log(fields)

  // const data = {
  //   data: [
  //     {...form}
  //   ]
  // };
  //
  // axios.post('https://sheetdb.io/api/v1/c4u8t3m347fpr', data)
  //   .then(response => console.log(response.data))
  //   .catch(error => console.error(error));
}
</script>
