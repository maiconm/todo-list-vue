<template>
  <div id="app">
    <Header />
    <div class="container">
      <ToDoList />
      <div>Criar a lista vai aqui</div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import ToDoList from './components/ToDoList'
export default {
  name: 'App',
  components: {
    ToDoList,
    Header
  }
}
</script>

<style scoped>
  .container {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

</style>
