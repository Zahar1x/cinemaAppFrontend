<template>
  <div id="#app">
    <h2>Выберите место:</h2>
    <ol>
      <li
          :class="{checked:place.checked, disabled:disablePlace(place)}"
          v-bind:key="index"
          v-for="(place, index) in places"
          @click="toggle(place)"
      >{{index+1}}</li>
    </ol>
    <b-button variant="outline-primary" @click="createTicket">Забронировать места</b-button>
  </div>
</template>

<script>
import PlaceService from '../services/place-service'

export default {
  data() {
    return {
      places: [],
      checkedPlaces: [],
      sessionId: this.$store.state.sessionChosen,
      message: '',
      ticket:{},
    }
  },
  computed: {
    // cost(){
    //   let cost = 0;
    //   this.places.map(place => {
    //     if (place.checked && !place.disabled) {
    //       cost += place.price;
    //     }
    //   });
    //   return cost;
    // }
  },
  methods: {
    toggle: function(place){
      if (!place.disabled) {
        place.checked = !place.checked
        this.chosePlace(place)
      }
    },
    disablePlace(place) {
      if (place.ticket) {
        place.disabled = true
        return true
      }
      return false
    },
    chosePlace(place) {
      if (place.checked) {
        this.checkedPlaces.push(place)
      } else {
        this.checkedPlaces.pop()
      }
    },
    createTicket() {
      console.log(this.checkedPlaces.length)
      if (this.checkedPlaces !== 0) {
        for (let i = 0; i < this.checkedPlaces.length; i++) {
          console.log('Я хочу отправить')
          console.log(this.checkedPlaces[i])
          const ticket = {
            place_id: this.checkedPlaces[i].id,
            customer: this.$store.state.auth.user
          }
          console.log('Я отправляю')
          console.log(ticket)
          this.saveTicket(ticket)
        }
      }
    },
    saveTicket(ticket) {
      if (ticket) {
       this.$store.dispatch('ticket/create', ticket)
      }
    }
  },
  mounted() {
    PlaceService.getPlaces(this.sessionId).then(
        response => {
          this.places = response.data;
          console.log(this.places)
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
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

ol {
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 50px;
  height: 50px;
  border:1px solid black;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
li.checked {background:purple; color: white;}
li.disabled {cursor: default;opacity: 0.5;}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

</style>