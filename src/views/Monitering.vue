<template>
    <main class="mt-5 pt-5">
        <main class="mt-5 pt-5">
        <div class="container">
            <!--Section: Cards-->
            <section class="text-center">
                <!--Grid row-->                
                <div class="row mb-4 wow fadeIn">
                    <!--Grid column-->    
                        
                        <div class="col-md-6 mb-4">
                            <Monitering/>
                        </div>
                        <div class="col-md-6 mb-4">
                            <MapGoogle/>
                        </div>
                        
                </div>                
            </section>
        </div>
    </main>
    </main>
</template>

<script>
import Monitering from "@/components/Monitering.vue";
import MapGoogle from "@/components/MapGoogle.vue";

export default {
    created() {},      
    components: {
        Monitering,MapGoogle
    },
    data() {
        return {};
    },

    methods: {}
};
</script>