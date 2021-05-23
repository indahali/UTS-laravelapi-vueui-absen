<template>
    <div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Createmhs">Tambah Data Mahasiswa</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Alamat</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Email</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(ab, index) in mahasiswas" :key="index">
      <td>{{ ab.nama_mahasiswa }}</td>
      <td>{{ ab.alamat }}</td>
      <td>{{ ab.no_tlp }}</td>
      <td>{{ ab.email }} </td>
      <td> 
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger"> Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
//import Slider from '@/components/Slider.vue'
import { onMounted, ref } from 'vue'
  
export default {
  name: 'Home',
  components: {
    
        
  },
  setup(){
    let mahasiswas = ref([])
    onMounted(() => {
      axios.get('http://pia.labirin.co.id/')
      .then(response => {
        mahasiswas.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function mahasiswasDelete(id){
      axios.delete(`http://pia.labirin.co.id/${id}`)
      .then(() =>{
        let x = this.mahasiswas.map(mahasiswas => mahasiswas.id).indexOf(id);
        this.mahasiswas.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }
    return  {
      mahasiswas,
      mahasiswasDelete
    }
  }
    
};
</script>