<template>
    <div class="central-page">
      <router-view />
    </div>
</template>

<script>
import Paragraphe from '@/components/Paragraphe'
export default {
  name: 'CentralPage',
  components: {
    Paragraphe
  },
  props: {
    listParagraphe: {},
    titrePage: {
      type: String,
      default: ''
    }
  }
}
</script>