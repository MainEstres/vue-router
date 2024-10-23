<script setup>
import CardProduct from '@/components/CardProduct.vue';
import { useRouter } from 'vue-router';

const props = defineProps(
    ["productos"]
)



const router = useRouter();

const volverInico = () => {
    router.push('/');
}



</script>


<template>
    <section class="container">
        <div class="row">
            <CardProduct v-for=" producto in productos" :title="producto.title" :description="producto.description" :image="producto.image"
            :price="producto.price" :amount="producto.amount" ></CardProduct>
        </div>

        <button class="btn btn-primary" @click="volverInico">Volver Inicio</button>

    </section>
</template>