<template>
  <div id="nav">
    <router-link to="/" class="home-btn">
      <img src="@/assets/rabbit.png"/>
      <div>Home</div>
    </router-link>

    <div 
      class="menu-icon" 
      :class="{ active: showMenu }" 
      v-on:click="showMenu = !showMenu"
      v-click-away="closeMenu"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>

    <div :class="{ active: showMenu }" class="dropdown-menu">
      <div>
        <a href="#">Team</a>
        <router-link to="/login">
          Login
        </router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<script src="@/scripts/App.js"></script>

<style src="@/styles/Navbar.css"></style>

<style scoped>
.container {
  @apply mx-auto px-1 mt-12 mb-12 lg:mt-16;
}
</style>