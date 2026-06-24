<script>
  export default { inheritAttrs: false }
</script>

<script setup>
  const model = defineModel()
  defineProps(['label', 'id'])
</script>

<template>
  <label v-if="label" :for="id" class="form-label">{{ label }}</label>
  <input class="form-control" v-model="model" :id="id" v-bind="$attrs" />
</template>