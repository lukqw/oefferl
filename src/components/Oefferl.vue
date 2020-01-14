<template>
    <div class="d-flex flex-column">
        <div v-for="line in lines" :key="line.name">
            <list-entry :line="line">
            </list-entry>
        </div>
    </div>
</template>

<script>
    import ListEntry from "@/components/ListEntry";

    export default {
        name: 'Oefferl',
        components: {ListEntry},
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
        },
        methods: {
            getRoutes() {
                setInterval(() => {
                    this.lines.forEach(line => {
                        this.getRequest(line);
                    });
                }, 5000);
            },
            getRequest(line) {
                this.axios.get('', {
                    headers: {
                        'Target-URL': 'http://www.wienerlinien.at/ogd_realtime/monitor?rbl=' + line.rbl
                    }
                }).then(response => {
                    if (response.data.data.monitors.length > 0) {
                        line.name = response.data.data.monitors[0].lines[0].name;
                        line.towards = response.data.data.monitors[0].lines[0].towards.split(',')[0];
                        line.type = response.data.data.monitors[0].lines[0].type;
                        line.countdowns = response.data.data.monitors[0].lines[0].departures.departure
                            .filter(departure => departure.departureTime.countdown !== 0)
                            .map(departure => departure.departureTime.countdown).splice(0, 3);
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
