<script>
  export default { inheritAttrs: false }
</script>

<script setup>
  const model = defineModel()
  defineProps(['label'])
</script>

<template>
  <button class="btn btn-primary"  v-bind="$attrs">{{ label }}</button>
</template>