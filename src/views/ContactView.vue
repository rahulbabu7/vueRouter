<script setup>
import { useRoute} from 'vue-router'; //used to extract the id from the path
import cars from '../data/cars.json';
const route = useRoute();
//console.log(route.params)
//For example, if your route configuration defines a route like /products/:productId, and you navigate to a URL like /products/123, the params object might look something like { productId: "123" }.

const car = cars.find(carz => carz.id === parseInt(route.params.id));
</script>

<template>

    <main>
        <section v-if="car">
            <h1>
                Contact info
            </h1>
            <p>{{ car.contact.dealer }}</p>
            <p>{{ car.contact.number }}</p>
        </section>
    </main>
</template>