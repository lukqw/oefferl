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
                        name: "60",
                        direction: "Westbahnhof",
                        countdown: 0,
                        type: "tram",
                        rbl: 1633
                    },
                    {
                        name: "62",
                        direction: "Karlsplatz",
                        countdown: 0,
                        type: "tram",
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
                this.axios.get('http://localhost:3000', {
                    headers: {
                        'Target-URL': 'http://www.wienerlinien.at/ogd_realtime/monitor?rbl=' + line.rbl
                    }
                }).then(response => {
                        if(response.length > 0) {
                            line.countdown = response.data.data.monitors[0].lines[0].departures.departure[0].departureTime.countdown;
                        }
                    }
                );
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