<template>
    <div>
      <p id="paragraphe" v-bind:style="styleText">
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
        textColor: {
            type: String,
            default: 'black'
        },
        fontFamily: {
            type: String,
            default: 'Bree Serif'
        }
    },
    computed: {
        styleText() {
            return {
                'color': this.textColor,
                'font-family': this.fontFamily
            };
        }
    }
}
</script>

<style scoped>
#paragraphe {
  padding-left: 70px;
  padding-right: 70px;
  text-align: justify;
  text-indent: 30px;
  font-size: large;
}
</style>