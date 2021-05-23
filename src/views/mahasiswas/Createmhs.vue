<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Mahasiswa </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Mahasiswa</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama  ..." v-model="mahasiswas.nama_mahasiswa">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
    {{ validation.nama_mahasiswa=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Alamat</label>
    <input type="text" class="form-control" placeholder="Masukkan Alamat ..." v-model="mahasiswas.alamat">
  </div>
  <div class="alert alert-danger" v-if="validation.alamat">
    {{ validation.alamat=[0] }}
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Nomor Telepon</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nomor ..." v-model="mahasiswas.no_tlp">
  </div>
  <div class="alert alert-danger" v-if="validation.no_tlp">
    {{ validation.no_tlp=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" class="form-control" placeholder="Masukkan Email ..." v-model="mahasiswas.email">
  </div>
  <div class="alert alert-danger" v-if="validation.email">
    {{ validation.email=[0] }}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  
</template>

<script>
import { reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const mahasiswas = reactive({
      nama_mahasiswa: '',
      alamat: ''
    })
    const validation = ref ([])
    const router = useRouter()
    function store(){
      let nama_mahasiswa = mahasiswas.nama_mahasiswa
      let alamat = mahasiswas.alamat
      axios.post('http://pia.labirin.co.id/api/mahasiswas/', {
        nama_mahasiswa: nama_mahasiswa,
        alamat: alamat,
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      mahasiswas,
      validation,
      router,
      store
    }
  },
}
</script>