<script setup>

import { RouterLink } from 'vue-router';

</script>




<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container px-4">
      <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo de suricata" /></a>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/product">Product</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
