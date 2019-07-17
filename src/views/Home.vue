<template>
  <div class="home">
    <!-- <router-view></router-view> -->
    <!-- <HelloWorld msg="Welcome to Your Dojo Customer Information System"/> -->
    <Table msg="Welcome to Your Dojo Customer Information System" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Table from "@/views/Table.vue";

export default {
  // name: 'home',
  // components: {
  //   HelloWorld
  // }
  name: "table",
  components: {
    Table
  }
};
</script>
