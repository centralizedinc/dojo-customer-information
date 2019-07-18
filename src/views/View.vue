<template>
  <a-card title="Customer Details">
    <p>{{customer.name}}</p>
    <p>card content</p>
    <p>card content</p>
    <a-row>
      <a-col :span="2" :style="{ textAlign: 'right' }">
        <a-button :style="{ marginLeft: '8px' }" @click="Cancel">Back</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      customer: {}
    };
  },

  created() {
    this.init();
  },
  methods: {
    init() {
      this.customer = this.$store.state.selectedCustomer;
    },
    Cancel() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
