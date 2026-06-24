<script>
  export default { inheritAttrs: false }
</script>

<script setup>
  const model = defineModel()
  defineProps(['label', 'id'])
</script>

<template>
  <label :for="id" class="form-label">{{ label }}</label>
  <input type="date" class="form-control" v-model="model" :id="id" v-bind="$attrs" />
</template>