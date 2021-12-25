<template>
  <div class="mx-5">
    <h2>Кинотеатры:</h2>

    <b-card-group deck>
      <b-card
          v-bind:key="index"
          v-for="(cinema, index) in cinemas"
          header-tag="header"
          footer-tag="footer"
          border-variant="dark"
          class="m-5"
          style="width: 500px"
      >
        <template #header>
          Кинотеатр
          {{cinema.name}}
        </template>
        <b-card-text>
          {{cinema.address}}
        </b-card-text>

        <template #footer>
          <b-button variant="outline-primary" @click=showSessions(cinema.id)>Посмотреть сеансы</b-button>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import CinemaService from '@/services/cinema-service'

export default {
  name: "Cinemas",
  data() {
    return {
      cinemas: [],
    }
  },
  methods: {
    showSessions(cinemaId) {
      this.$store.state.cinemaChosen = cinemaId
      console.log(this.$store.state.cinemaChosen)
      this.$router.push('/session')
    }
  },
  mounted() {
    CinemaService.getCinemas().then(
        response => {
          this.cinemas = response.data;
        },
        error => {
          this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        }
    );
  }

}
</script>

<style scoped>

</style>