<script>
  export default { inheritAttrs: false }
</script>

<script setup>
  const model = defineModel()
  defineProps(['label', 'id'])
</script>

<template>
  <label :for="id" class="form-label">{{ label }}</label>
  <textarea class="form-control" v-model="model" :id="id" v-bind="$attrs"></textarea>
</template>