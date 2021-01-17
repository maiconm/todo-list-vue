<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
  .container {
    margin-top: 10px;
    display: grid;
    place-items: center;
  }

  ul { width: 50% }

  @media only screen and (max-width: 600px) {
    ul { width: 100% }
  }

</style>
