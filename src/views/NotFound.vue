<template>
  <div>
    <h1>The page you requested was not found</h1>
    <v-btn @click="$router.push('/')" class="primary">Home</v-btn>
  </div>
</template>

<style scoped>
  div {
    text-align: center;
  }

  h1 {
    margin: 2em 0 1em 0;
  }
</style>