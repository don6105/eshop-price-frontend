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

<script>
export default {
  name: "App",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    closeMenu() {
      if(this.showMenu) {
        this.showMenu = false;
      }
    }
  },
  mounted() {
    const menu_item = document.querySelectorAll('.home-btn, .dropdown-menu a');
    let _this = this;
    for(let i = 0; i < menu_item.length; i++) {
      menu_item[i].addEventListener('click', function(){
        _this.showMenu = false;
      });
    }
  },
};
</script>

<style src="@/styles/Navbar.css"></style>

<style scoped>
.container {
  @apply mx-auto px-1 mt-12 mb-12 lg:mt-16;
}
</style>