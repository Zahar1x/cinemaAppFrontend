<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark mt-0">
      <a href class="navbar-brand" @click.prevent>Cinema app</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="home" />Главная
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/cinema" class="nav-link">Кинотеатры</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">
            <font-awesome-icon icon="user-plus" />Регистрация
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signin" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Вход
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />Выйти
          </a>
        </li>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
// import Home from './views/Home'
// import Login from "@/views/Login";
// import Register from "@/views/Register";
// import UserBoard from "@/views/UserBoard";
// import Profile from "@/views/Profile";

export default {
  name: 'App',
  components: {
    // Home,
    // Login,
    // Register,
    // Profile,
    // UserBoard
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
