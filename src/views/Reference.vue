<template>
  <div>
    <ul class="reference">
      <li>
        <a :href="adresseLink" target="_blank">
        {{ address.numero }} {{ address.street }}
        <br/>
        {{ address.postalCode }} {{ address.city }}
        </a></li>
      <li>{{ phoneNumber }}</li>
      <li>{{ mail }}</li>
    </ul>
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