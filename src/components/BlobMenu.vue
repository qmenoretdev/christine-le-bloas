<template>
  <div>
    <ul id="navigation">
      <li
        v-bind:class="isActive(page.id)"
        v-for="page in listPages"
        :key="page.id"
        @click="changePage(page)"
      >
        {{ page.title }}
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

  li {
    padding: 10px;
    border-radius: 15px;
    font-family: var(--font-classic);
    font-size: var(--font-classic-size-min);
  }
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

.img-container {
  display: flex;
  flex-direction: column;

  img {
    min-height: 220px;
    max-height: 220px;
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    img {
      display: none;
    }
  }
}
</style>