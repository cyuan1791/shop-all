<template>
  <div class="col-sm-12">
    <div v-for="(obj, key) in products" :key="key" class="row">
      <div class="col-sm-3" v-for="prod in obj.product" :key="prod.title">
        <h3> {{ prod.title }} <a :href="obj.url + obj.path"> Buy</a></h3>
        <img :src="prod.imgUrl" class="img-responsive"/>
        <div v-html="prod.desc"></div>
        <h4> ${{prod.price}}</h4>
      </div>
    </div>
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
    var user = firebase.database().ref('users')
    var _this = this
    user.on('value', function (snapshot) {
      console.log(typeof (snapshot.val()))
      _this.products = snapshot.val()
    }, function (error) {
      console.log(error)
    })
  }
}
</script>
