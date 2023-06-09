<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('onMounted')
})

onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <div>
    login222
  </div>
</template>
