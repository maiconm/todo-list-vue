<template>
  <nav>
    <div class="container">
      <router-link
        to="/"
        id="logo"
      >
        to do list
      </router-link>
      <div class="float-right">
        <router-link
          v-slot="{ href, navigate, isExactActive }"
          to="/"
          class="menu"
        >
          <a
            :href="href"
            @click="navigate"
            :class="[isExactActive && 'active']"
          >
            Home
          </a>
        </router-link>
        <router-link
          v-slot="{ href, navigate, isExactActive }"
          to="nova-tarefa"
          class="menu"
        >
          <a
            :href="href"
            @click="navigate"
            :class="[isExactActive && 'active']"
          >
            Nova tarefa
          </a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #1f223acc;
  }
  #logo {
    font-size: 1.25em;
    color: #bd793a;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
  .menu {
    text-decoration: none;
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
    color: #bd7c40;
  }
</style>