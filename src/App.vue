<template>
  <div id="nav">
    <router-link 
      :to="{name: 'GameList'}" 
      class="home-btn">
      <img src="@/assets/rabbit.png"/>
      <div>Home</div>
    </router-link>

    <div class="menu-btn" v-click-away="closeMenu">
      <div 
        class="menu-icon" 
        :class="{ active: showMenu }" 
        v-on:click="showMenu = !showMenu"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

      <div :class="{ active: showMenu }" class="dropdown-menu">
        <a href="#">About</a>
        
        <router-link 
          v-if="login_user.length > 0" 
          :to="{name: 'GameGroup'}"
        >
          Admin:GameGroup
        </router-link>

        <a v-if="login_user.length > 0" @click="logout">Logout</a>
        
        <router-link 
          v-if="login_user.length === 0" 
          :to="{name: 'Login'}"
        >
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

<style>
html, body , #app {
  @apply w-full h-full bg-gray-100;
}
body {
  @apply pt-10;
}
.container {
  @apply mx-auto pt-2 px-1;
}
</style>