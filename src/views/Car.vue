<script setup>
import { useRoute,useRouter, RouterView } from 'vue-router'; //used to extract the id from the path
import cars from '../data/cars.json';
const route = useRoute();

//console.log(route.params)
//For example, if your route configuration defines a route like /products/:productId, and you navigate to a URL like /products/123, the params object might look something like { productId: "123" }.
const router = useRouter();  //for redirecting to the path
const car = cars.find(carz => carz.id === parseInt(route.params.id));  //if the id is not present  it will produce a undefined

//  const carId = parseInt(route.params.id);  //another way of redirecting the route
</script>

<template>
    <main>
        <section v-if="car">
            <h1>
                car
            </h1>
            <p>
                {{ car.name }}
                {{ car.year }}
                {{ car.price }}
                <button @click="router.push({ name: 'contact' }); ">
                    Click me for contact
                </button>
                <!-- <button @click="router.push(`/cars/${carId}/contact`); ">
                    Click me for contact
                </button>
                 another way of redirecting the route -->
                <RouterView />
            </p>
             
        </section>
            
           <!-- Checks any children routes associated with this car.vue 
          it goes to /cars/id and then checks the child  routes because the parent is already in a  route
        -->
        <section v-else>
            <h1>
                car not found
            </h1>
           
        </section>
    </main>
</template>