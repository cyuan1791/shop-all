<template>
  <div>
    <ul v-for="(obj, key) in products" :key="key">
      <li v-for="prod in obj.product" :key="prod.title">
        <h3> {{ prod.title }} ${{prod.price}}</h3>
        <img :src="prod.imgUrl" />
      <div v-html="prod.desc"></div>
      </li></ul>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      products: {}
    }
  },
  created: function () {
    console.log('mounted')
    var shop = firebase.database().ref('shops')
    var _this = this
    shop.on('value', function (snapshot) {
      console.log(typeof (snapshot.val()))
      _this.products = snapshot.val()
      // console.log(typeof (this.products))
    })
  }
}
</script>
