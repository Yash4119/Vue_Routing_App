<script setup>
import { useRoute, RouterView, useRouter } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import cars from "../data.json"
// import {clicks} from "./Autos.vue"

const car = ref(null)
const router = useRouter()

const route = useRoute()
const {id} = route.params
console.log(route.params)

onBeforeMount(() => {
    car.value = cars.find(c => c.id === parseInt(id))
})
// import { ref } from 'vue';
const clicks = ref(null)

</script>

<template>
    <main class="container">
        <div class="temp">
            <button @click="clicks+=1">Click me</button>
            <div>clicks :- {{ clicks }}</div>
        </div>
        <h1>The Car</h1>
        <div v-if="car">
            <h2>{{ car.name }}</h2>
            <p>Make :- {{ car.make }}</p>
            <p>Body :- {{ car.body }}</p>
            <p>Price :- Rs {{  car.price }}/- </p>
            <p>Year :- {{ car.year }}</p>
            <RouterView/>
        </div>
        <div v-else>
            <h1>Car Not Found</h1>
        </div>
        <button @click="router.back()">Go Back</button>
    </main>
</template>

<style scoped>

.temp{
    background-color: aqua;
}

.container{
    margin: auto;
}

</style>