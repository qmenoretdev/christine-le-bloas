<template>
    <div>
        <ul id="diplome">
            <li>Diplomée de l'institut Français d'Hypnose Ericksonienne-Paris</li>
            <li>Certifiée de la Faculté de Médecine de Paris XIII en Naturothérapie</li>
        </ul>
        <br>
        <div class="title-3">Pratiques</div>
        <p id="pratique">Hypnose éricksonienne, PNL . Psychothérapie . Relaxation . Nutrition . Aromathérapie . Micro-immunothérapie</p>
        <br>
        <div class="title-3">Prises en charge courantes</div>
        <ul id="pathologie">
            <li>Dépression - Angoisses - Anxiété - Attaques de panique - Troubles du sommeil - Stress - Manque de confiance en soi</li>
            <li>Chocs - Thérapie post-traumatique</li>
            <li>Lutte contre la douleur - Préparation préopératoire - Suite d'intervention chirurgicale - Soutien durant les traitements médicaux lourds</li>
            <li>Maladies de peau : eczéma, psoriasis...</li>
            <li>Phobies</li>
            <li>Allergies</li>
            <li>Addictions et compulsions</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Presentation'
}
</script>

<style scoped lang="scss">
#diplome {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 20px;
    text-align: left;

    li {
        font-family: var(--font-classic);
        font-size: var(--font-classic-size);
    }
}

#pathologie {
    display: flex;
    flex-direction: column;
    margin: 0px 15px 0px 15px;
    padding: 20px;
    text-align: left;
    //list-style: inside;
    
    li {
        font-family: var(--font-classic);
        font-size: var(--font-classic-size-list);
    }
}

#pratique {
    text-align: center;
    font-family: var(--font-classic);
    font-size: var(--font-classic-size-list);    
}
</style>
