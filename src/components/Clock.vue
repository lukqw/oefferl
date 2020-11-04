<template>
  <div class="datetime">
    <div class="time">
      {{ time }}
    </div>
    <div class="date">
    {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data: function() {
    return {
      time: "",
      date: ""
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
      let time = "";
      if (today.getHours() < 10) {
        time += "0";
      }
      time += today.getHours() + ":";
      if (today.getMinutes() < 10) {
        time += "0";
      }
      time += today.getMinutes() + ":";
      if (today.getSeconds() < 10) {
        time += "0";
      }
      time += today.getSeconds();
      this.time = time;
      this.date = date;
    }
  }
}
</script>

<style scoped>
  .datetime {
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .date {
    margin: 0 2px 5px 2px;
  }
  .time {
    font-size: 30px;
    margin: 5px;
  }
</style>
