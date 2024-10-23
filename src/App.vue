<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'


</script>

<template>
  <Navbar />
  
  <RouterView></RouterView>
  
  <MediosPago></MediosPago>
  <Footer />

 
</template>
