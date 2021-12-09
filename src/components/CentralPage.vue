<template>
    <div class="central-page">
      <Paragraphe 
        v-for="(paragraphe,index) in listParagraphe" :key="index"
        v-bind:contenu="paragraphe.contenu"
        v-bind:textColor="paragraphe.textColor"
        v-bind:fontFamily="paragraphe.fontFamily"
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
    listParagraphe: {}
  }
}
</script>