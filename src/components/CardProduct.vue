<script setup>

const props = defineProps({
    title: String,
    description: String,
    image: String,
    price: String,
    amount: String
})


</script>



<template>
    <div class="card m-1" style="width: 20rem;">
        <img :src=image class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: {{ price }}</li>
            <li class="list-group-item">Cantidad: {{ amount }}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
        </div>
    </div>

</template>