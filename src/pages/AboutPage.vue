<template>
  <q-page class="row items-center justify-evenly">
    <h1>About</h1>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMetaTags } from '../composables/useMetaTags';

// Lifecycle
onMounted(() => {
  useMetaTags({
    title: 'About',
    description: 'This is the about page',
  });
});
</script>
