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
      localStorage.removeItem('login_user');
      localStorage.removeItem('token');
      this.login_user = "";
    },
    logout() {
      let _this   = this;
      let api_url = `${API}/api/v1/logout`;
      let token   = localStorage.getItem('token');
      let headers = {
        "Accept"       : "application/json",
        "Authorization": `Bearer ${token}`
      };
      axios
        .post(api_url, null, {headers: headers})
        .finally(() => {
          _this.clearLogin();
          _this.login_msg = true;
        });
    }
  },
  mounted() {
    let login_user = localStorage.getItem('login_user');
    this.login_user = (login_user !== null)? login_user : '';

    const menu_item = document.querySelectorAll('.home-btn, .dropdown-menu a');
    let _this = this;
    for(let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener('click', function(){
      _this.showMenu = false;
    });
    }
  },
};