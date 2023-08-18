<script setup>
import { useRoute } from 'vue-router'; //used to extract the id from the path

const route = useRoute();
console.log(route.params)
//For example, if your route configuration defines a route like /products/:productId, and you navigate to a URL like /products/123, the params object might look something like { productId: "123" }.

</script>

<template>

        <h1>
            car
        </h1>

</template>