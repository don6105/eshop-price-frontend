<template>
  <div id="nav">
    <router-link to="/" class="home-btn">
      <img src="@/assets/rabbit.png"/>
      <div>Home</div>
    </router-link>

    <div class="menu-icon" :class="{ active: showMenu }" v-on:click="showMenu = !showMenu">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>

    <div v-show="showMenu" class="dropdown-menu">
      <div>
        <a href="#">Team</a>
        <a href="#">Login</a>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showMenu: false,
    }
  }
};
</script>

<style src="@/styles/Navbar.css"></style>