<template id="view-item">

<div>
    <h3>{{ item.name }}</h3>

    <div>
        {{ item.category }}<br>
        {{ item.price }}
    </div>
    <span class="glyphicon glyphicon-arrow-left"></span>
    <router-link v-bind:to="{path:'/'}">Back</router-link>
</div>

</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

export default {
  data: function() {
      return {
          item: {
              name: '',
              category: '',
              price: ''
          }
      }
    },
    created: function() {
        let uri = 'http://localhost:8080/products/'
        let id = this.$route.params.id

        console.log(uri + id)

        axios.get(uri + id).then((response) => {
            console.log(response)
            this.item = response.data
        })
        .catch(function (error){
                console.log(error)
        })
    }
}


</script>