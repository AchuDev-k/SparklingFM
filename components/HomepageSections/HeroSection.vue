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
.header{
  margin-top: 4rem;
  width: 100%;
  height: 650px;
}
@media only screen and (max-width: 600px) {
  .header{
    background-position: center;
    background-size: cover;
    margin-top: -0.2rem;
    height: 500px;
  }
}

</style>
