<template>
    <main class="mt-5 pt-5">
        <div class="container">
            <!--Section: Cards-->
            <section class="text-center">
                <!--Grid row-->
                <div class="row mb-4 wow fadeIn">
                    <Userlist />
                   
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import Userlist from "@/components/user/Userlist.vue";


export default {
    created() {},
    components: {
        Userlist
        
    },

    data() {
        return {};
    },

    methods: {}
};
</script>