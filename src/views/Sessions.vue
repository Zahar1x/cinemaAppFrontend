<template>
  <div>
    <b-card-group deck>
      <b-card
          v-bind:key="index"
          v-for="(session, index) in sessions"
          header-tag="header"
          footer-tag="footer"
          border-variant="dark"
          class="m-5"
          style="width: 500px"
      >
        <template #header>
          Сеанс
          {{session.date}}
        </template>
        <b-card-text>
          Фильм {{session.movie.name}}
        </b-card-text>
        <b-card-text>
          Зал № {{session.hall.id}}
        </b-card-text>

        <template #footer>
          <b-button variant="outline-primary" @click=showPlaces(session.id)>Выбрать место</b-button>
        </template>

      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import SessionService from '@/services/session-service'

export default {
  name: "Sessions",
  data() {
    return {
      sessions: [],
      content: '',
      cinema: 0,
    }
  },
  methods: {
    showPlaces(sessionId) {
      this.$store.state.sessionChosen = sessionId
      this.$router.push('/places')
    }

  },
  mounted() {
    SessionService.getSessionByCinemaId(this.cinema).then(
        response => {
          this.sessions = response.data;
          console.log(this.sessions)
        },
        error => {
          this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
        }
    );
  },
  created() {
    this.cinema = this.$store.state.cinemaChosen
  }
}
</script>

<style scoped>

</style>