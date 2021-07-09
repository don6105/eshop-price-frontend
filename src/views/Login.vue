<template>
  <div v-if="login_user.length > 0" class="welcome-msg">
    Welcome, {{ login_user }} !
  </div>
  <div v-else class="wallpaper">
    <div class="title">Login</div>
    <div class="input-group">
      <label>Email:</label>
      <input
        v-model="email"
        type="email"
        ref="email"
        class="login-email"
        :class="{ warning: email_warning }"
        placeholder="user@email.com"
        v-on:keyup.enter="login"
      >
    </div>
    <div class="input-group">
      <label>Password:</label>
      <input 
        v-model="password" 
        :type="password_field_type"
        ref="password"
        class="login-password"
        :class="{ warning: password_warning }"
        placeholder="letter(s) & numbers, length > 8"
        v-on:keyup.enter="login"
      >
      <a @click="switchVisibility" class="password-eye">
        <font-awesome-icon v-if="password_field_type === 'text'" icon="eye"/>
        <font-awesome-icon v-if="password_field_type === 'password'" icon="eye-slash"/>
      </a>
    </div>
    <div class="login-msg" :class="{ show: login_msg }">Login fail.</div>
    <div class="input-group">
      <button class="login-btn" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { API } from '@/scripts/Config.js'
import axios from "axios"

export default {
  data() {
    return {
      prevRoute: "",
      login_user: "",
      email: "",
      password: "",
      password_field_type: "password",
      email_warning: false,
      password_warning: false,
      login_msg: false
    };
  },
  watch: {
    email(value) {
      if (value.trim().length === 0) {
        this.email_warning = false;
      }
    },
    password(value) {
      if (value.trim().length === 0) {
        this.password_warning = false;
      }
    }
  },
  methods: {
    switchVisibility() {
      this.password_field_type =
        this.password_field_type === "password" ? "text" : "password";
    },
    validate_email() {
      const regex = /\w+[^@]*@[^@]+\.[^@]+/i;
      if (!regex.test(this.email)) {
        this.$refs.email.focus();
        this.email_warning = true;
        return false;
      }
      return true;
    },
    validate_password() {
      if (this.password.length < 8) {
        this.$refs.password.focus();
        this.password_warning = true;
        return false;
      }
      return true;
    },
    clearLogin() {
      this.$cookies.remove('token');
      this.$cookies.remove('login_user');
      this.login_user = '';
    },
    login() {
      // checking email at the last because of focus.  
      let valid_password = this.validate_password();
      let valid_email    = this.validate_email();
      if (valid_email && valid_password) {
        let _this   = this;
        let api_url = `${API}/api/v1/login`;
        let data    = {"email": this.email, "password": this.password};
        axios
          .post(api_url, data)
          .then((response) => {
            try {
              let token  = response.data.success.token;
              let user   = response.data.success.user;
              let expire = response.data.success.expire;
              expire = new Date(expire).toUTCString();
              _this.$cookies.set('token',      token, expire);
              _this.$cookies.set('login_user', user,  expire);
              _this.login_user = user;
              setTimeout(() => {
                location.href = _this.prevRoute.path;
              }, 2500);
            } catch (error) {
              _this.clearLogin();
              _this.login_msg = true;
            }
          })
          .catch(() => {
            _this.clearLogin();
            _this.login_msg = true;
          });
      }
    }
  },
  mounted() {
    let login_user = this.$cookies.get('login_user');
    this.login_user = (login_user !== null)? login_user : '';
  },
  beforeRouteEnter(to, from, next) {
    next(vm => { vm.prevRoute = from; });
  },
};
</script>

<style scoped src="@/styles/Login.css"></style>
