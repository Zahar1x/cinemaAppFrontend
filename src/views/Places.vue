<template>
  <div>
    <h2>Выберите место:</h2>
    <ol>
      <li
          :class="{checked:place.checked, disabled:place.disabled}"
          v-bind:key="index"
          v-for="(place, index) in places"
          @click="toggle(place)"
      >{{index}}</li>
    </ol>
    <h2>Стоимость: {{cost}}</h2>
  </div>
</template>

<script>
import PlaceService from '../services/place-service'

export default {
  data() {
    return {
      places: [],
      sessionId: 1,
    }
  },
  computed: {
    cost(){
      let cost = 0;
      this.places.map(place => {
        if (place.checked && !place.disabled) {
          cost += place.price;
        }
      });
      return cost;
    }
  },
  methods: {
    toggle: function(place){
      if (!place.disabled) {
        place.checked = !place.checked
      }
    }
  },
  mounted() {
    PlaceService.getPlaces(this.sessionId).then(
        response => {
          this.places = response.data;
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