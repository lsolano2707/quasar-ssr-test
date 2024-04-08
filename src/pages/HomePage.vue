<template>
  <q-page class="row">
    <h1>Home</h1>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMetaTags } from '../composables/useMetaTags';

// Lifecycle
onMounted(() => {
  useMetaTags({
    title: 'Home',
    description: 'This is the home page',
  });
});
</script>
