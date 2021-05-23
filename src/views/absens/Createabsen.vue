<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Absensi </h5>
  <div class="form-group">
    <label for="exampleInputketerangan1">Waktu Absen</label>
    <input type="text" class="form-control"  placeholder="Masukkan Waktu Absen  ..." v-model="mahasiswas.waktu_absen">
  </div>
  <div class="alert alert-danger" v-if="validation.waktu_absen">
    {{ validation.waktu_absen=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Mahasiswa ID</label>
    <input type="text" class="form-control" placeholder="Masukkan mahasiswa_id ..." v-model="mahasiswas.mahasiswa_id">
  </div>
  <div class="alert alert-danger" v-if="validation.mahasiswa_id">
    {{ validation.mahasiswa_id=[0] }}
  </div>
  <div class="form-group">
    <label for="exampleInputketerangan1">Matakuliah ID</label>
    <input type="text" class="form-control"  placeholder="Masukkan Matakuliah ID ..." v-model="mahasiswas.matakuliah_id">
  </div>
  <div class="alert alert-danger" v-if="validation.matakuliah_id">
    {{ validation.matakuliah_id=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Keterangan</label>
    <input type="text" class="form-control" placeholder="Masukkan Keterangan ..." v-model="mahasiswas.keterangan">
  </div>
  <div class="alert alert-danger" v-if="validation.keterangan">
    {{ validation.keterangan=[0] }}
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
      waktu_absen: '',
      mahasiswa_id: '',
      matakuliah_id: '',
      keterangan: ''
    })
    const validation = ref ([])
    const router = useRouter()
    function store(){
      let waktu_absen = mahasiswas.waktu_absen
      let mahasiswa_id = mahasiswas.mahasiswa_id

      axios.post('http://pia.labirin.co.id', {
        waktu_absen: waktu_absen,
        mahasiswa_id: mahasiswa_id,
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