<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const volverInico = ()=>{
    router.push('/');
}
</script>

<template>
    <section class="container">

        <h1 class="text-center">Contacto</h1>
        <img src="https://ih1.redbubble.net/image.4111534298.7853/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="meme-gatito">

        <button class="btn btn-primary"
            @click="volverInico">Volver Inicio</button>
    </section>

    
</template>