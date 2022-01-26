<template>
    <div>
        <ul id="diplome">
            <li><img src="@/assets/img/diploma_32.png"><div>Diplomée de l'institut Français d'Hypnose Ericksonienne-Paris</div></li>
            <li><img src="@/assets/img/diploma_32.png"><div>Certifiée de la Faculté de Médecine de Paris XIII en Naturothérapie</div></li>
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
        display: flex;
        flex-direction: row;
        font-family: var(--font-classic);
        font-size: var(--font-classic-size);

        img {
            padding-right: 5px;
        }
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
