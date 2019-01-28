<template id="item-list">
  <div class="row">
    <div class="pull-right">
        <router-link class="btn btn-xs btn-primary">
            <span class="glyphicon glyphicon-plus"></span>Add new Movie
        </router-link>
      
    </div><br><br>

    <table class="table table-bordered">

        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th class="col-md-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item._id">
                <td>{{ item._id }}</td>
                <td> {{ item.name }} </td>
                <td> {{ item.category}} </td>
                <td> {{ item.price }}</td>
                <td>
                    <router-link class="btn btn-info btn-xs" v-bind:to="{name: 'Viewitem', params: {id:item._id}}">Show</router-link>
                    <router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'Edititem', params: {id:item._id}}">Edit</router-link>
                    <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'Deleteitem', params: {id:item._id}}">Delete</router-link>
                </td>
            </tr>
        </tbody>
    
    </table>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },

  mounted: function() {
    this.axios
      .get("http://localhost:8080/products")
      .then(response => {
        this.items = response.data.items;
        console.log(response.data.items);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
