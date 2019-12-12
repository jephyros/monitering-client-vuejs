<template>
    <main class="mt-5 pt-5">
        <div class="container">
            <!--Section: Cards-->
            <section class="text-center">
                <!--Grid row-->
                <div class="row mb-4 wow fadeIn">
                    <Signup />
                </div>
            </section>
        </div>
    </main>
</template> 

<script>
import Signup from "@/components/login/Signup.vue";

export default {
    created() {},
    components: {
        Signup
    },

    data() {
        return {};
    },

    methods: {}
};
</script>