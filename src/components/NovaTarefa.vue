<template>
  <div>
    <h1>Nova Tarefa</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="submitHandler">
        <validation-provider
          v-slot="{ errors }"
          rules="required|max:20"
        >
          <input
            v-model="tarefa"
            placeholder="ex.: lavar o carro"
            type="text"
          />
          <button
            type="submit"
            :disabled="invalid"
            :class="errors[0] && 'error'"
          >
            Adicionar
          </button>
          <div class="error">
            {{ errors[0] }}
          </div>
        </validation-provider>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  export default {
    components: {
      ValidationObserver,
      ValidationProvider
    },
    data() {
      return {
        tarefa: '',
      }
    },
    methods: {
      submitHandler() {
        this.$emit('cadastroTarefa', this.tarefa)
      }
    },
  }
</script>

<style scoped>
  div {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
  }
  .error {
    color: red;
  }
</style>
