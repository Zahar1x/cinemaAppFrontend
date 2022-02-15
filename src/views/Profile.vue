<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.name}}</strong>
        Ваш профиль
      </h3>
    </header>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Role:</strong> {{currentUser.role}}

<!--    <b-list-group>-->
<!--      <b-list-group-item-->
<!--      :key="index"-->
<!--      v-for="(ticket, index) in tickets"-->
<!--      >-->
<!--        {{ticket}}-->
<!--      </b-list-group-item>-->
<!--    </b-list-group>-->
  </div>
</template>

<script>
import TicketService from '@/services/ticket-service'

export default {
  name: 'Profile',
  data() {
    return {
      tickets: [],
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    } else {
      console.log(this.$store.state.auth.user.id)
      TicketService.findAllTicketsByCustomerId(this.$store.state.auth.user.id)
      .then(
          response => {
            this.tickets = response.data;
            console.log(this.tickets)
          },
          error => {
            this.content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      )
    }
  }
};
</script>