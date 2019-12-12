<template>
  <div class="position-relative" :style=" 'left: ' + left +'px;top:'+top+'px;height:1px'">
    <transition name="fade">
      <div class="badge " :class="badgetype" v-if="msgstatus">{{msg}}</div>
    </transition>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  created() {},
  computed: {
    ...mapGetters({
      msgstatus: "toastmessage/getMsgstatus",
      msg: "toastmessage/getMsg",
      left: "toastmessage/getLeft",
      top: "toastmessage/getTop",
      badgetype: "toastmessage/getBadgetype"
      
    })
  },

  data() {
    return {
        
    };
  },

  methods: {
    ...mapActions({
      setMessage: "toastmessage/setMessage",      
    }),
    showmessage: function(msg) {
      let payload = {
        timeout: 1000,
        msg: msg
      };
      this.setMessage(payload);
     
     
    }
  }
};
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
    opacity: 0;
    }
</style>