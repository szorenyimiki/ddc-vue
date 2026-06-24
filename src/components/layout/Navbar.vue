<script setup>
  import { ref } from 'vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/projects">Projektek Listája</router-link>
          <router-link class="nav-link" to="/projects/new">Új Projekt Hozzáadása</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
