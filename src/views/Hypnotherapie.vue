<template>
    <div id="hypnotherapie">
        <div v-if="wip" class="wip">
            Page en cours de construction
        </div>
        <div v-else>
            Edwardian Script ITC
            <p id="EdwardianScriptITC">L'hypnotherapie c'est super, ça soigne plein de trucs. Exemple de texte, on écrit plein de trucs pour
                voir si c'est joli ou pas. Alors joli ou pas ? Peut être que oui, peut être que non. Tiens essayons un point d'exclamation !
                Ou bien deux petits points : waw. #stylé
            </p>
            Freestyle Script
            <p id="FreestyleScript">L'hypnotherapie c'est super, ça soigne plein de trucs. Exemple de texte, on écrit plein de trucs pour
                voir si c'est joli ou pas. Alors joli ou pas ? Peut être que oui, peut être que non. Tiens essayons un point d'exclamation !
                Ou bien deux petits points : waw. #stylé
            </p>
            Calibri
            <p id="Calibri">L'hypnotherapie c'est super, ça soigne plein de trucs. Exemple de texte, on écrit plein de trucs pour
                voir si c'est joli ou pas. Alors joli ou pas ? Peut être que oui, peut être que non. Tiens essayons un point d'exclamation !
                Ou bien deux petits points : waw. #stylé
            </p>
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
