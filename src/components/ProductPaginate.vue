<script setup>
 defineProps(["inicio", "final", "logitudProduct"]);

 const emit = defineEmits(["prev", "next"])
</script>   

<template>
    <div class="btn-group" role="group" aria-label="owo">
    <button 
    :disabled ="inicio<=0"
    @click="emit('prev')"
    class="btn btn-outline-primary">
        Anterior
    </button>

    <button 
    :disabled="final>=logitudProduct"
    @click="emit('next')"
    class="btn btn-outline-primary">
        Siguiente
    </button>

    </div>
    
</template>