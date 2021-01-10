<template>
  <div v-if="!tarefas || !tarefas.length">
    🤷 Não há tarefas!
  </div>
  <ul v-else>
    <li v-for="tarefa in tarefas" :key="tarefa.descricao">
      <input
        type="checkbox"
        v-model="tarefa.feito"
      />
      {{ tarefa.descricao }}
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        tarefas: [
          {feito: true, descricao: 'fazer lição de casa'},
          {feito: false, descricao: 'lavar as roupas'},
          {feito: false, descricao: 'lavar o carro'},
        ],
      }
    }
  }
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
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