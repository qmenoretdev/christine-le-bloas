<template>
  <div>
    <ul id="navigation">
      <li
        v-bind:class="isActive(page.id)"
        v-for="page in listPages"
        :key="page.id"
        @click="changePage(page.id)"
      >
        {{ page.nameDisplay }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlobMenu",
  props: {
    listPages: {}
  },
  methods: {
    changePage(indexPage) {
      this.$emit('change-page',indexPage);
    },
    isActive(indexPage) {
      return indexPage === this.$store.getters['getIndexPage'] ? "active" : "not-active" ;
    }
  }
}
</script>

<style lang="scss" scoped>
#navigation {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 10px;
}

#navigation li {
  padding: 10px;
  border-radius: 15px;
}

.active {
  background: #b9f2fa85 ;
  border: 3px solid var(--active-color);
  margin-bottom: 8px;
}

.not-active {
  background: var(--background-color) ;
  border: 2px solid black;
  margin-bottom: 10px;
}

#navigation li:hover, #navigation li:focus {
  background: #b9f2fa85 ;
  border: 3px solid black;
  margin-bottom: 8px;
  cursor: pointer;
}
</style>