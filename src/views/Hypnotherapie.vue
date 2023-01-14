<template>
    <div id="hypnotherapie">
        <div v-if="wip" class="wip">
            Page en cours de construction
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hypnotherapie',
    data: () => ({
        wip: true
    })
}
</script>

<style scoped lang="scss">
#hypnotherapie {
    #EdwardianScriptITC {
        font-family: Edwardian Script ITC;
        font-size: 200%;
    }
    #FreestyleScript {
        font-family: Freestyle Script;
        font-size: 200%;
    }
    #Calibri {
        font-family: Calibri;
        font-size: 200%;       
    }
}
</style>
