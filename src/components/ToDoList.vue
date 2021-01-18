<template>
  <div v-if="!tarefas || !tarefas.length">
    🤷 Não há tarefas!
  </div>
  <ul v-else>
    <li v-for="tarefa in tarefas" :key="tarefa.descricao">
      <button
        @click="excluir(tarefa.descricao)"
        :disabled="!tarefa.feito"
      >
        ✖ excluir
      </button>
      <input
        :checked="tarefa.feito"
        type="checkbox"
        @click="toggleTarefa(tarefa)"
      />
      {{ tarefa.descricao }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['tarefas'],
    methods: {
      excluir(tarefa) {
        this.$emit('exclui', tarefa)
      },
      toggleTarefa(tarefa) {
        this.$emit('toggleTarefa', tarefa)
      }
    }
  }
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    padding: 12px 8px 12px 40px;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
    user-select: none;
  }

  ul li:nth-child(odd) {
    background: #f9f9f9;
  }

  ul li:hover {
    background: #ddd;
  }

  ul li.checked {
    background: #888;
    color: #fff;
    text-decoration: line-through;
  }
</style>