<template>
  <div>
    <h1>{{ reference.firstname }} {{ reference.name }}</h1>
    <h1>{{ reference.address }}</h1>
    <h1>{{ reference.phoneNumber }}</h1>
    <h1>{{ reference.mail }}</h1>
  </div>
</template>

<script>
import referenceData from '@/data/reference'
export default {
    name: 'Reference',
    computed: {
      reference() {
        return referenceData;
      }
    }
}
</script>

<style scoped>
</style>>