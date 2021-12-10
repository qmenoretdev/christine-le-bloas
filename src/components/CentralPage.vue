<template>
    <div class="central-page">
      <h2>{{ titrePage }}</h2>
      <Paragraphe 
        v-for="(paragraphe,index) in listParagraphe" :key="index"
        v-bind:contenu="paragraphe.contenu"
        v-bind:styleText="paragraphe.styleText"
      />
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