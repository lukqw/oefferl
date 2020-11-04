<template>
  <div v-if="icon!==''" class="d-flex justify-content-center align-items-center">
    <div id="temp"> {{ temp }} C° </div>
    <img :src="'http://openweathermap.org/img/wn/' + icon + '@2x.png'"/>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data: function () {
    return {
      temp: "",
      icon: "",
      wind: ""
    }
  },
  created() {
    this.getWeather();
    this.updateWeather();
  },
  methods: {
    getWeather() {
      this.getRequest();
    },
    updateWeather() {
      setInterval(() => {
        this.getRequest();
      }, 300000);
    },
    getRequest() {
      this.axios.get('', {
        headers: {
          'Target-URL': 'http://api.openweathermap.org/data/2.5/weather?id=2761369&units=metric&appid='
        }
      }).then(response => {
            this.temp = Math.trunc(response.data.main.temp);
            this.icon = response.data.weather[0].icon;
            this.wind = response.data.wind.speed;
          });
    }
  }
}
</script>

<style scoped>
div {
  margin: 10px;
}
img {
  width: 70px;
}
#temp {
  width: 70px;
  text-align: end;
}
</style>
