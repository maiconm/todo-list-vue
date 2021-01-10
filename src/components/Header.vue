<template>
  <nav>
    <div class="container">
      <a
        href="#"
        id="logo"
      >
        to do list
      </a>
      <div class="float-right">
        <a
          href="#"
          class="menu"
        >
          Home
        </a>
        <a
          href="#"
          class="menu"
        >
          Nova tarefa
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  nav {
    padding: 10px;
    background-color: #1f223acc;
  }
  #logo {
    font-size: 1.25em;
    color: #5fa05f;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
  .menu {
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: .5em;
    padding: .5em;
    font-size: .9em;
  }
  .float-right {
    float: right;
  }
  .menu.active {
    color: #467e46;
  }
</style>