<template>
    <div>
        <h1>{{ nameFull }}</h1>
        <h1>{{ profession }}</h1>
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