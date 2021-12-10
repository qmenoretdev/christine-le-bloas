<template>
    <div>
      <p class="paragraphe" v-bind:style="this.styleText">
          {{ contenu }}
      </p>
    </div>
</template>

<script>
export default {
    name: 'Paragraphe',
    props: {
        contenu: {
            type: String,
            default: ''
        },
        styleText: {
            default: {}
        }
    }
}
</script>