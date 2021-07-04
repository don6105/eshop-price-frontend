<template>
  <div class="wallpaper">
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
    <div class="input-group">
      <button class="login-btn" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      password_field_type: "password",
      email_warning: false,
      password_warning: false
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
    login() {
      // checking email at the last because of focus.  
      let valid_password = this.validate_password();
      let valid_email    = this.validate_email();

      if (valid_email && valid_password) {
        console.log('succ');
      }
    }
  },
};
</script>

<style scoped src="@/styles/Login.css"></style>
