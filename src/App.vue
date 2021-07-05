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
        <a href="#">About</a>
        <router-link v-if="login_user.length === 0" to="/login">
          Login
        </router-link>
        <a v-else @click="logout">
          Logout <LoadingIcon/>
        </a>
      </div>
    </div>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<script src="@/scripts/App.js"></script>

<style src="@/styles/Navbar.css"></style>

<style>
html, body {
  @apply bg-gray-100;
}
.container {
  @apply mx-auto px-1 mt-12 mb-12 lg:mt-16;
}
</style>