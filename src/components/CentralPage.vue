<template>
    <div class="central-page">
      <router-view />
    </div>
</template>

<script>
export default {
  name: 'CentralPage',
  props: {
    listParagraphe: {},
    titrePage: {
      type: String,
      default: ''
    }
  }
}
</script>