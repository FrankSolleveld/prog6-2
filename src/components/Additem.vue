<template id="add">

<div>
    <h3>Add new Item</h3>

    <form v-on:submit.prevent = "createItem">
        <div class="form-group">
            <label for="add-name">Name</label>
            <input v-model="item.name" class="form-control" id="add-name" placeholder="An awesome movie title" required />
        </div>
        <div class="form-group">
            <label for="add-category">Category</label>
            <input v-model="item.category" class="form-control" id="add-category" placeholder="An awesome category" required />
        </div>
        <div class="form-group">
            <label for="add-price">Price</label>
            <input v-model="item.price" class="form-control" id="add-price" placeholder="An awesome movie title" required />
        </div>

        <button type="submit" class="btn btn-xs btn-primary">Create Item </button>
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
    methods: {
        createItem: function() {
            let uri = 'http://localhost:8080/products'

            axios.post(uri, this.item).then((response) => {
                console.log(response)
                this.$router.push({name:'Listitems'})
            })
            .catch(function (error){
                console.log(error)
            })
        }
    }
}

</script>