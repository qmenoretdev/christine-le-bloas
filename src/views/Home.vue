<template>
  <div>
    <Header 
      v-bind:nameFull="nameFull" 
      v-bind:profession="reference.profession"
    />
    <div class="container">
      <Reference 
        v-bind:address="reference.address"
        v-bind:phoneNumber="reference.phoneNumber"
        v-bind:mail="reference.mail"
      />
      <CentralPage />
      <div class="pagination">
          <BlobMenu v-bind:listPages="this.navigation" @change-page="changePage"/>
      </div>
    </div>
    <p class="lastUpdate">Dernière mise à jour : {{ getLastUpdate }}</p>
  </div>
</template>

<script>
import Reference from '@/views/Reference.vue'
import Header from '@/views/Header.vue'
import BlobMenu from '@/components/BlobMenu.vue';
import CentralPage from '@/components/CentralPage.vue';
import referenceData from '@/data/reference'
import navigation from '@/data/navigation';
export default {
  name: 'Home',
  components: {
    Reference,
    Header,
    BlobMenu,
    CentralPage
  },
  computed: {
    reference() {
      return referenceData;
    },
    nameFull() {
      return this.reference.firstName + ' ' + this.reference.name;
    },
    navigation() {
      return navigation;
    },
    getLastUpdate() {
      return '06/02/2023';
    }
  },
  methods: {
    changePage(page) {
      this.$store.dispatch('setIndexPage', page.id);
      this.$router.push(page.path);
    }
  }
}
</script>