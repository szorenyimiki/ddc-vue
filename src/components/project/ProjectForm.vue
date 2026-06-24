<script setup>
  import TextInput from '@/components/common/inputs/TextInput.vue'
  import NumberInput from '@/components/common/inputs/NumberInput.vue'
  import DateInput from '@/components/common/inputs/DateInput.vue'
  import Textarea from '@/components/common/inputs/Textarea.vue'
  import Button from '@/components/common/inputs/Button.vue'

  const emit = defineEmits(['submit'])
  const form = defineModel()

  function handleSubmit() {
    emit('submit', form.value)
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <TextInput id="name" label="Projekt neve" v-model="form.name" />
    </div>
    <div class="mb-3">
      <NumberInput id="budget" label="Költségvetés" v-model="form.budget" />
    </div>
    <div class="mb-3">
      <DateInput id="start" label="Kezdési dátum" v-model="form.startDate" />
    </div>
    <div class="mb-3">
      <Textarea rows="10" id="description" label="Leírás" v-model="form.description" />
    </div>
    <div class="mb-3">
      <Button label="Mentés" type="submit" />
    </div>
  </form>
</template>