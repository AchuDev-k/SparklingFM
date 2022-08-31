<template>
<div class="body">
 <div class="header">
    
  </div>
</div>
</template>

<script setup>
const props = defineProps(["fields"]);
</script>

<style scoped>
.body{
  background: black !important;
}
.header{
  background: url('assets/images/background.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 4rem;
  width: 100%;
  height: 650px;
}

</style>
