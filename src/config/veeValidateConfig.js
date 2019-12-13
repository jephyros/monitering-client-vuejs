import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

import { configure } from 'vee-validate';
configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
})


extend("required",required)
extend("email",email)
extend("min",min)