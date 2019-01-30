<template id="delete">

<div>
    <h3>Delete item {{ item.name }}</h3>

    <form v-on:submit.prevent = "deleteItem">
        <p>This action cannot be undone.</p>
        <button class="btn btn-xs btn-danger" type="submit">Delete</button>
        <router-link class="btn btn-xs btn-primary" v-bind:to="'/'"></router-link>
    </form>

</div>

</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

export default {
    data:function(){
        return {
            item: {
                name: '', 
                category: '', 
                price: ''
            }
        }
    },

    created:function() {
            let uri = 'http://localhost:8080/products/'
            let id = this.$route.params.id

            axios.get(uri + id).then((response) => {
                console.log(response)
                this.item = response.data
            })
            .catch(function (error){
                console.log(error)
            })
    },

    methods: {
        deleteItem: function() {
            let uri = 'http://localhost:8080/products/'
            let id = this.$route.params.id

            axios.delete(uri + id, this.item).then((response) => {
                console.log(response)
                this.$router.push({name: 'Listitems'})
            })
            .catch(function (error){
                console.log(error)
            })
        }
    }
}

</script>