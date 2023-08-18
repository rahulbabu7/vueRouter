<template>
 <header>
    <h1>
        Home 
    </h1>
 </header>
 <main>
    <section v-for="car in cars" :key="car.id">
        <section>
         <RouterLink :to="`/cars/${car.id}`">
            <!-- dynamically binding the car.id  so we use template literals and  -->
            {{ car.name }}
         </RouterLink>
        </section>

    </section>
 </main>
</template>
<script setup>
import cars from '../data/cars.json'
import { RouterLink } from 'vue-router';

</script>

<style scoped>
main{
    display: flex;
}
a{
    text-decoration: none;
    color: black;
    width: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0,0.388);
    margin: 10px;
}
</style>