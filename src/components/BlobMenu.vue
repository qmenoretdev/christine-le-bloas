<template>
  <div>
    <ul id="navigation">
      <li
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
      this.$emit('change-page',indexPage)
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
  background: yellow ;
  padding: 10px;
}

#navigation li a:hover, .navigation li a:focus, .navigation li a:active {
  background: #900 ;
}
</style>