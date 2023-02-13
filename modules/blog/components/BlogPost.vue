<template>
  <div>
    {{ blog }} ADDED SOME CAPS TEXT TO SHOW THAT BLOG_POST COMPONENT WORKS
  </div>
</template>

<script setup lang="ts">
defineProps({
  blog: {
    type: String,
    required: true
  }
})
</script>
