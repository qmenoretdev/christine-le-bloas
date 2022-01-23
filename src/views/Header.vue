<template>
    <div>
        <div class="header">
          <div class="title-1">{{ nameFull }}</div>
          <div class="title-2">{{ profession }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        nameFull: {
          type: String,
          default: ''
        },
        profession: {
          type: String,
          default: ''        
        }
    }
}
</script>