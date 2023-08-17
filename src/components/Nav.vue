<script setup>

import { RouterLink } from 'vue-router'; 
//Router link is used intead of a tag because whenever we add a tag it refreshes the page and set the route
//but this will reset all the states inside the vue app to its default value
//to avoid refreshing the page  we use RouterLink.
//Router link does not update  the page and does not set the states to default
</script>

<template>
    <header>
        <nav>
            <h2>
                <RouterLink active-class="active" to="/">
                    Home
                    <!-- active-class is a prop that is used to show the active class and style the active class -->
                </RouterLink>
            </h2>
            <h2>
                <RouterLink active-class="active" to="/about">
                    About
                </RouterLink>
            </h2>
        </nav>
    </header>
</template>
<style scoped>
.active{
    font-weight: 900;
    color: aqua;
}

</style>
