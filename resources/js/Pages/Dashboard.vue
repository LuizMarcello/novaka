<template>
  <AppLayout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <!--   <Welcome /> -->
          <Dialog></Dialog>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
/* import PrimeVue from 'primevue/config'; */
import Dialog from "primevue/dialog";
import { createApp } from 'vue';
/* import App from './App.vue'; */

/* const app = createApp(App); */
/* app.use(PrimeVue); */
/* app.component('Dialog', Dialog); */
</script>
