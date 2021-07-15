import { API } from '@/scripts/Config.js'
import axios from "axios"

export default {
  name: "App",
  data() {
    return {
      login_user: '',
      showMenu: false
    }
  },
  methods: {
    closeMenu() {
      if(this.showMenu) {
        this.showMenu = false;
      }
    },
    clearLogin() {
      this.$cookies.remove('token', '/');
      this.$cookies.remove('login_user', '/');
    },
    reloadLoginState() {
      let login_user = this.$cookies.get('login_user', '/');
      this.login_user = (login_user !== null)? login_user : '';
    },
    logout() {
      let _this   = this;
      let api_url = `${API}/api/v1/logout`;
      let token   = this.$cookies.get('token');
      let headers = {
        "Accept"       : "application/json",
        "Authorization": `Bearer ${token}`
      };
      axios
        .post(api_url, null, {headers: headers})
        .catch(() => {})
        .finally(() => {
          _this.clearLogin();
          _this.reloadLoginState();
          // check permission after login.
          if(location.href.indexOf("/admin/") > -1 && this.login_user == '') {
            _this.$router.push({name: 'GameList'});
          }
        });
    }
  },
  mounted() {
    this.reloadLoginState();

    // check permission before enter page.
    this.$router.beforeEach((to, from, next) => {
      if(to.fullPath.indexOf("/admin/") > -1 && this.login_user == '') {
        next({name: 'Login'});
      }
      next();
    });
  },
  updated() {
    let menu_item = document.querySelectorAll('.dropdown-menu > *');
    let _this = this;
    for(let i = 0; i < menu_item.length; i++) {
      menu_item[i].addEventListener('click', function(){
        _this.showMenu = false;
      });
    }
  }
};