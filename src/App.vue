<script setup>
import {RouterView, RouterLink} from "vue-router"
import {ref} from "vue"

const counter = ref(0);

</script>

<template>
  <main>
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <!-- <div>
        {{ counter }}
      </div>
      <button @click="counter++">Click</button> -->
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.links {
  padding: 20px
}
.links a {
  margin: 0 5px
}
.active{
  font-weight: 700;
  color: rgb(14, 219, 42);
  font-size: medium;
}
</style>