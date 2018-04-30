<template>
  <div class="col-sm-12">
    <div v-for="(obj, userId, tidx) in products" :key="userId" class="row">
      <div v-for="(eobj, email, eidx) in products[userId]" :key="email" >
       <div v-for="location in getJoinedShops" :key="location" >
          <div v-for="(uobj, url, uidx) in products[userId][email][location]" :key="url">
      <div class="col-sm-3" v-for="(prod, idx) in uobj.product" :key="prod.title">
        <h3> {{ prod.title }}</h3>
        <img :src="prod.imgUrl" class="img-responsive"/>
        <div v-html="prod.description"></div>
        <h4> ${{prod.amount / 100}} </h4>
        <form action="charge.php" method="POST">
          <stripe-checkout
            :formId="location +  eidx + uidx + tidx + idx"
            :options="options"
            stripe-key="pk_test_5cQYArKzzFMqm4LZbptu9EPe"
            :product="getProduct(prod)">
          </stripe-checkout>
          <input type="hidden" name="amount" :value="prod.amount" />
          <input type="hidden" name="cid" :value="uobj.stripeConnectAccount" />
        </form>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { StripeCheckout } from 'vue-stripe'

export default {
  data () {
    return {
      products: {}
    }
  },
  computed: {
    options () {
      return {
        shippingAddress: true,
        billingAddress: true
      }
    },
    getJoinedShops: input => {
      return window.joinedShops
    }
  },
  methods: {
    getProduct (prod) {
      return {
        name: 'welcome',
        description: 'desc',
        amount: prod.amount
      }
    }
  },
  components: {
    StripeCheckout
  },
  created: function () {
    var user = firebase.database().ref('users')
    var _this = this
    user.on(
      'value',
      function (snapshot) {
        console.log(typeof snapshot.val())
        _this.products = snapshot.val()
      },
      function (error) {
        console.log(error)
      }
    )
  }
}
</script>
