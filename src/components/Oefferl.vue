<template>
  <div class="d-flex flex-column justify-content-between">
    <Clock/>
    <div v-for="line in lines" :key="line.name">
      <list-entry :line="line">
      </list-entry>
    </div>
    <Weather/>
  </div>
</template>

<script>
import ListEntry from "@/components/ListEntry";
import Weather from "@/components/Weather";
import Clock from "@/components/Clock";

export default {
  name: 'Oefferl',
  components: {Weather, ListEntry, Clock},
  data: function () {
    return {
      lines: [
        {
          countdowns: [],
          rbl: 1633
        },
        {
          countdowns: [],
          rbl: 1738
        }
      ]
    }
  },
  created() {
    this.getRoutes();
    this.updateRoutes();
    this.reloadPage();
  },
  methods: {
    getRoutes() {
      this.lines.forEach(line => {
        this.getRequest(line);
      });
    },
    updateRoutes() {
      setInterval(() => {
        this.getRoutes();
      }, 5000);
    },
    reloadPage() {
      setInterval(() => {
        location.reload();
      }, 3600000);
    },
    getRequest(line) {
      this.axios.get('', {
        headers: {
          'Target-URL': 'http://www.wienerlinien.at/ogd_realtime/monitor?rbl=' + line.rbl
        }
      }).then(response => {
        if (response.data.data.monitors.length > 0) {
          line.name = response.data.data.monitors[0].lines[0].name;
          line.towards = response.data.data.monitors[0].lines[0].towards;
          line.type = response.data.data.monitors[0].lines[0].type;
          line.countdowns = response.data.data.monitors[0].lines[0].departures.departure
              .filter(departure => departure.departureTime.countdown !== 0)
              .map(departure => departure.departureTime.countdown).splice(0, 4);
          line.trafficjam = response.data.data.monitors[0].lines[0].trafficjam;
        }
      });
    }
  }
}
</script>
<style>
body {
  height: 480px;
  width: 320px;
  margin: 0;
}
</style>
