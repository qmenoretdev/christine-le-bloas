<template>
  <div>
    <ul class="reference">
      <li>
        <a :href="adresseLink" target="_blank">
        {{ address.city }} ({{ address.departement }}), {{ address.postalCode }}
        <br/>
        {{ address.numero }} {{ address.street }}
        </a>
      </li>
      <li>{{ phoneNumber }}</li>
      <li>{{ mail }}</li>
    </ul>
    <div class="img-container">
      <img src="@/assets/img/left.jpg">
    </div>
  </div>
</template>

<script>
export default {
    name: 'Reference',
    props: {
      address: {},
      phoneNumber: {
        type: String,
        default: ''
      },
      mail: {
        type: String,
        default: ''
      }
    },
    computed: {
      adresseLink() {
        const adressFull = this.constructAdress(this.address);
        return 'https://www.google.ca/maps/place/'+adressFull;
      }
    },
    methods: {
      constructAdress(address) {
         return address.numero+' '+address.street+', '+address.postalCode+' '+address.city;
      }
    }
}
</script>

<style scoped lang="scss">
.img-container {
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  img {
    height: 400px;
    border-radius: 10px;
  }

  @media (max-width: 1000px) {
    img {
      display: none;
    }
  }
}
</style>