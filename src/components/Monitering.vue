<template>
    <!--Card-->
    <div class="card">
        <!--Card image-->
        <div class="view overlay"></div>

        <!--Card content-->
        <div class="card-body" >
            <!--Title-->
            <h4 class="card-title">모니터링</h4>
            <line-chart :chart-data="datacollection" ></line-chart>
            <button @click="fillData()">Randomize</button>
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
           
        };
    },
    computed: {
       
    },
    mounted() {
        this.fillData();
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: [
                    this.getR(),
                    this.getR(),
                    this.getR(),
                    this.getR(),
                    this.getR(),
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
                ],
                datasets: [
                    {
                        label: "온도",
                        backgroundColor: "#f87979",
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
                        backgroundColor: "#4DDF5F",
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
