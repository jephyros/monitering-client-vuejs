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
            <button @click="getDeviceLastStatus()">조회</button>
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
            labels: [1, 2, 3],
            datasets : [
                    {
                        label: "온도",
                        backgroundColor: '#66CC00',
                        fill: true,
                        //borderColor: "#f87979",
                        data: [this.getR(), this.getR(),this.getR()]
                    },
                    {
                        label: "쓰레기양",
                        //fill: true,
                        backgroundColor: '#FF6666',
                        //backgroundColor:"#4DDF5F",
                        data: [this.getR(), this.getR(),this.getR()]
                    }
                ],
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
                labels: this.labels,
                datasets: this.datasets,
            };
        },
        getR() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        },
        dynamicColors() {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgba(" + r + "," + g + "," + b + ",0.8)";
        },
        getDeviceLastStatus() {       
            
            
            // const url = process.env.VUE_APP_API_BASE_URL + "/api/v1/isolarbins"
            // const headers = {                
            //     'X-Api-Key': process.env.VUE_APP_API_KEY
            // }
            // const params = {
            //     devicetype:'ISOL'
            // };
            // this.$http
            //     .get(url,{ params: params,headers:headers })                
            //     .then(result => {
            //         console.log(result);
            //     })
            //     .catch(err => {
            //         console.log('Error',err.toString())
            //     });
            
            const url = process.env.VUE_APP_API_BASE_URL + "/api/v1/isolarbins/"
            const headers = {
                "X-Api-Key": process.env.VUE_APP_API_KEY
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
                    
                    let values = result.data.data
                    let labelArray = new Array();
                    let datasets = new Array();
                    let datasetslocal1 = new Array();
                    let datasetslocal2 = new Array();
                    let totcnt = result.data.data.length
                    let i = 0;
                    values.forEach((value,index) =>{
                        //console.log(value.deviceid)
                        labelArray[index] = value.deviceid
                        datasetslocal1[index] = value.temp_brd
                        datasetslocal2[index] = value.level
                        
                        
                    })
                    datasets[0] = {
                                label: "온도",
                                backgroundColor: '#66CC00',
                                fill: true,
                                //borderColor: "#f87979",
                                data: datasetslocal1
                            }
                    datasets[1] = {
                        label: "쓰레기양",
                        backgroundColor: '#FF6666',
                        fill: true,
                        //borderColor: "#f87979",
                        data: datasetslocal2
                    }
                    

                    this.labels = labelArray
                    this.datasets = datasets

                    this.datacollection = {
                        labels: this.labels,
                        datasets: this.datasets,
                    };
                    
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
