<template>
  <div class="background">
    <Header class="header"/>
    <div class="container">
      <Reference class="reference"/>
      <CentralPage v-bind:listParagraphe="this.listParagraphe" />
      <div class="pagination">
          <BlobMenu v-bind:listPages="this.listPagesData" @change-page="changePage"/>
      </div>      
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Reference from '@/views/Reference.vue'
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
import BlobMenu from '@/components/BlobMenu.vue';
import CentralPage from '@/components/CentralPage.vue';
import listParagraphePage1Data from '@/data/presentation'
import listParagraphePage2Data from '@/data/hypnotherapie'
export default {
  name: 'Home',
  components: {
    Reference,
    Header,
    Footer,
    BlobMenu,
    CentralPage
  },
  data: () => ({
      listPagesData: [
          {
              nameDisplay: 'Page1',
              listParagraphe: listParagraphePage1Data,
              id: 1
          },
          {
              nameDisplay: 'Page2',
              listParagraphe: listParagraphePage2Data,
              id: 2
          }
      ],
      indexPage: 1
  }),
  computed: {
    listParagraphe() {
      return this.listPagesData.find(page => page.id === this.indexPage).listParagraphe;
    }
  },
  methods: {
    changePage(indexPage) {
      this.indexPage = indexPage;
    }
  }
}
</script>

<style scoped>
</style>