<template id="edit">

<div>
    <h3>Edit Item</h3>

    <form v-on:submit.prevent = "editItem">
        <div class="form-group">
            <label for="edit-name">Name</label>
            <input v-model="item.name" class="form-control" id="edit-name" placeholder="item.name" required />
        </div>
        <div class="form-group">
            <label for="edit-category">Category</label>
            <input v-model="item.category" class="form-control" id="edit-category" placeholder="An awesome category" required />
        </div>
        <div class="form-group">
            <label for="edit-price">Price</label>
            <input v-model="item.price" class="form-control" id="edit-price" placeholder="An awesome movie title" required />
        </div>

        <button type="submit" class="btn btn-xs btn-primary">Edit Item </button>
        <router-link class="btn btn-xs btn-warning" v-bind:to="{path:'/'}">Cancel</router-link>
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

    methods:{
        editItem: function () {
            let uri = 'http://localhost:8080/products/'
            let id = this.$route.params.id

            axios.put(uri + id, this.item).then((response) => {
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