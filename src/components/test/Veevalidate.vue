<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider name="age" rules="required|email" v-slot="{ classes,errors }">
                <input
                    class="form-control form-control-sm"
                    :class="classes"
                    v-model="value"
                    type="text"
                />
                <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <!-- <button @click="showmessage(invalid,'똑바로 입력하시요.',0,0)">show</button> -->

            <button >Submit</button>
        </form>
    </ValidationObserver>
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";
import { mapActions } from "vuex";

import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

// No message specified.
extend("email", {
    ...email,
    message: "email error"
});

// Override the default message.
extend("required", {
    ...required,
    message: "This field is required"
});

extend("positive", value => {
    if (value >= 0) {
        return true;
    }

    return "The {_field_} field must be a positive number";
});

extend("odd", value => {
    if (value % 2 !== 0) {
        return true;
    }

    return "This field must be an odd number";
});

export default {
    data() {
        return {
            value: ""
        };
    },
    methods: {
        ...mapActions({
            setMessage: "toastmessage/setMessage"
        }),
        showmessage: function(invalid, msg, left, top) {
            if (invalid) {
                let payload = {
                    timeout: 1500,
                    badgetype: "badge-warning", //badge-warning , badge-success, badge-danger
                    msg: msg,
                    left: left,
                    top: top
                };
                this.setMessage(payload);
            }
        },
        save: function() {
            alert("save");
        },
        onSubmit() {
            alert("Form has been submitted!");
        }
    }
};
</script>