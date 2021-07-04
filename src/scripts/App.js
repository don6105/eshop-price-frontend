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