<template>
    <!--Card-->
    <div class="card">
        <!--Card image-->
        <div class="view overlay"></div>

        <!--Card content-->
        <div class="card-body">
            <!--Title-->
            <h4 class="card-title">모니터링</h4>
            <line-chart :chart-data="datacollection" :options="options" style="height:400px"></line-chart>
            <button @click="getDeviceLastStatus()">Randomize</button>
        </div>
    </div>
    <!--/.Card-->
</template>

<script>
import LineChart from "@/charts/LineChart.js";

export default {
    components: {
        LineChart
    },
    data() {
        return {
            datacollection: null,
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        };
    },
    computed: {},
    mounted() {
        this.fillData();
        //this.renderChart(this.datacollection, this.options)
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [
                    {
                        label: "온도",
                        fill: false,
                        borderColor: "#f87979",
                        data: [
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR()
                        ]
                    },
                    {
                        label: "배터리",
                        fill: false,
                        borderColor: "#4DDF5F",
                        data: [
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR(),
                            this.getR()
                        ]
                    }
                ]
            };
        },
        getR() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        },
        getDeviceLastStatus() {
            const url = process.env.VUE_APP_API_BASE_URL + "/api/v1/isolarbins/"
            const headers = {
                "x-api-key": process.env.VUE_APP_API_KEY
            }
            const params = {
                deviceids: [
                    "ISOL-KR-SEL-0002",
                    "ISOL-KR-SEL-0003",
                    "ISOL-KR-SEL-0004"
                ]
            };
            this.$http
                .post(url, params,{headers:headers})
                .then(result => {
                    console.log(result);
                })
                .catch(err => {
                    console.log('Error',err.toString())
                });
            //     final String url = ACIAWSAPIBASEURL + "/api/v1/isolarbins/";
            // RestTemplate restTemplate = new RestTemplate();
            // //header
            // HttpHeaders headers = new HttpHeaders();
            // headers.setContentType(MediaType.APPLICATION_JSON);
            // headers.add("x-api-key",ACIAWSAPIKEY);
        }
    }
};
</script>

<style>
.small {
    max-width: 600px;
    margin: 150px auto;
}
</style>
