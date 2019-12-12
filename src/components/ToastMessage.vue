<template>
    <div class="position-relative " :style=" 'left: ' + left +'px;top:'+top+'px'">        
        <div class="badge badge-warning ">{{message}}</div>
            
    </div>
</template>

<script>
export default {
    created(){

    },

    data(){
        return{
            message : "경고메세지입니다.가나다라바마바",
            left : "0",
            top : "0"

            
        }
    },

    methods:{

    }
    
}
</script>