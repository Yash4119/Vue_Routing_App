<script setup>
import { useRouter,useRoute } from "vue-router";
import carsData from "../data.json"
import { ref,watch,onMounted } from "vue";
import Autos from "./Autos.vue";

const router = useRouter(); 
const route = useRoute();

const make = ref("")
const cars = ref(carsData)

onMounted(()=>{
    make.value = route.query.make || ""
})

watch(make, () => {
  if(make.value){
    if(make.value === 'All') cars.value = carsData
    else{
      cars.value = carsData.filter(c => c.make === make.value)
    }
  }
})

const handleChange = ()=>{
  router.push({query:{make:make.value}})
}

</script>

<template>
  <main class="container">
    <Autos/>
    <h1>Ours Cars Collection</h1>
    <select @change="handleChange" v-model="make">
      <option value="All" selected>All</option>
      <option value="Chevrolet">Chevrolet</option>
      <option value="Porsche">Porsche</option>
      <option value="Audi">Audi</option>
    </select>
    <div class="cards">
      <div v-for="car in cars" 
          :key="car.id" 
          class="card"
          @click="router.push(`/car/${car.id}`)"
          >
        <h1>{{ car.make }}</h1>
        <p>Rs {{ car.price }}/-</p>
      </div>
    </div>
  </main>
</template>

<!-- Three steps for performing routing are  -->
<!-- 1. Define the Routing Rules -->
<!-- 2. Tell Vue About the Rules -->
<!-- 3. Define where to Render the Page Components -->

<style scoped>
.container{
  background-color: rgb(228, 247, 200);
}
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}
.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
