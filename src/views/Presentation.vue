<template>
    <div>
        <ul id="diplome">
            <li><div>Diplômée de l'Institut Français d'<b>Hypnose Ericksonienne-Paris</b></div></li>
            <li><div>Certifiée de la Faculté de Médecine de Paris XIII en <b>Naturothérapie</b></div></li>
        </ul>
        <div class="title-3">Pratiques</div>
        <ul id="pratique">
            <li>Hypnose éricksonienne, PNL . Psychothérapie . Relaxation</li>
            <li>Nutrition . Aromathérapie . Gemmothérapie . Micro-immunothérapie</li>
        </ul>
        <div class="title-3">Prises en charge courantes</div>
        <ul id="intro-pathologie">
            <li><div>J'exerce à Landerneau en tant que <b>Hypnothérapeute</b> & <b>Naturothérapeute</b> depuis 2009.</div></li>
        </ul>
        <ul id="pathologie">
            <li>Dépression - Angoisses - Anxiété - Attaques de panique - Troubles du sommeil - Stress - Manque de confiance en soi</li>
            <li>Chocs - Thérapie post-traumatique</li>
            <li>Lutte contre la douleur - Préparation pré-opératoire - Suite d'intervention chirurgicale - Soutien durant les traitements médicaux lourds</li>
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
    padding: 20px 20px 0px 20px;
    text-align: left;
    margin-bottom: var(--margin-between-paragraphe);

    li {
        font-family: var(--font-classic);
        font-size: var(--font-classic-size);
    }
}

#intro-pathologie {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 15px 15px 0px 15px;
    text-align: left;

    li {
        font-family: var(--font-classic);
        font-size: var(--font-classic-size-list);
    }
}

#pathologie {
    display: flex;
    flex-direction: column;
    margin: 0px 1px 0px 15px;
    padding: 20px 20px 0px 20px;
    text-align: left;
    
    li {
        font-family: var(--font-classic);
        font-size: var(--font-classic-size-list);
    }
}

#pratique {
    text-align: center;
    font-family: var(--font-classic);
    font-size: var(--font-classic-size-list);
    margin-bottom: var(--margin-between-paragraphe);
    list-style: none;
}

@media (max-width: 1300px) {
    #diplome {
        list-style: square;
        margin-left: 5px;
    }
}

@media (max-width: 1000px) {
   #pathologie {
        padding: 20px;
   } 
}
</style>
