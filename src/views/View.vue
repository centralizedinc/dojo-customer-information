<template>
  <a-card>
    {{customer.name}}
  </a-card>

</template>

<script>
export default {
  data(){
    return{
      customer:{}
    }
  },

  created(){
    this.init()
  },
  methods:{
    init(){
      this.customer = this.$store.state.selectedCustomer;
    }
  }

}
</script>

<style>

</style>
