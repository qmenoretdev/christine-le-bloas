<template>
  <div class="background">
    <Header class="header" v-bind:nameFull="nameFull" v-bind:profession="reference.profession"/>
    <div class="container">
      <Reference 
        v-bind:address="reference.address"
        v-bind:phoneNumber="reference.phoneNumber"
        v-bind:mail="reference.mail"
      />
      <CentralPage 
        v-bind:listParagraphe="this.listParagraphe"
        v-bind:titrePage="this.titrePage" 
      />
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
import referenceData from '@/data/reference'
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
              nameDisplay: 'Présentation',
              titrePage: 'Titre Présentation',
              listParagraphe: listParagraphePage1Data,
              id: 1
          },
          {
              nameDisplay: 'Hypnothérapie',
              titrePage: 'Titre Hypnothérapie',
              listParagraphe: listParagraphePage2Data,
              id: 2
          }
      ]
  }),
  computed: {
    reference() {
      return referenceData;
    },
    listParagraphe() {
      return this.listPagesData.find(page => page.id === this.$store.getters['getIndexPage']).listParagraphe;
    },
    titrePage() {
      return this.listPagesData.find(page => page.id === this.$store.getters['getIndexPage']).titrePage;
    },
    nameFull() {
      return this.reference.firstName + ' ' + this.reference.name;
    }
  },
  methods: {
    changePage(indexPage) {
      this.$store.dispatch('setIndexPage', indexPage);
    }
  }
}
</script>