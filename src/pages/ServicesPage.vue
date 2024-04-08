<template>
  <q-page class="row">
    <h1>Services</h1>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMetaTags } from '../composables/useMetaTags';

// Lifecycle
onMounted(() => {
  useMetaTags({
    title: 'Services',
    description: 'This is the services page',
  });
});
</script>
