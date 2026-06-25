<script setup>
  import ProjectTable from '@/components/common/ProjectTable.vue'

  defineEmits(['removeProject'])

  defineProps({
    projects: {
      type: Array,
      required: true,
    },
  })
</script>

<template>
  <ProjectTable :projects="projects" @removeProject="$emit('removeProject', $event)" />
</template>
