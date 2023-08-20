<script setup>
import { useRoute, RouterView } from 'vue-router'; //used to extract the id from the path
import cars from '../data/cars.json';
const route = useRoute();

import Contact from "./Contact.vue"
//console.log(route.params)
//For example, if your route configuration defines a route like /products/:productId, and you navigate to a URL like /products/123, the params object might look something like { productId: "123" }.

const car = cars.find(carz => carz.id === parseInt(route.params.id));

</script>

<template>
    <main>
        <section>
            <h1>
                car
            </h1>
            <article>
                {{ car.name }}
                {{ car.year }}
                {{ car.price }}
            </article>
        </section>
        <section>
           <RouterView/> 
           <!-- Checks any children routes associated with this car.vue 
          it goes to /cars/id and then checks the child  routes because the parent is already in a  route
        -->
        </section>
    </main>
</template>