<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit absenssi </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Waktu absen</label>
    <input type="text" class="form-control"  placeholder="Masukkan Waktu absens ..." v-model="absenss.waktu_absen">
  </div>
  <div class="alert alert-danger" v-if="validation.waktu_absen">
    {{ validation.waktu_absen=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Mahasiswa ID</label>
    <input type="text" class="form-control" placeholder="Masukkan Mahasiswa ID ..." v-model="absenss.mahasiswa_id">
  </div>
  <div class="alert alert-danger" v-if="validation.mahasiswa_id">
    {{ validation.mahasiswa_id=[0] }}
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Mata Kuliah ID</label>
    <input type="text" class="form-control" placeholder="Masukkan Matakuliah ID ..." v-model="absenss.matakuliah_id">
  </div>
  <div class="alert alert-danger" v-if="validation.matakuliah_id">
    {{ validation.matakuliah_id=[0] }}
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Keterangan</label>
    <input type="text" class="form-control" placeholder="Masukkan Keterangan ..." v-model="absenss.keterangan">
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
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {
    const absens = reactive({
      waktu_absen: '',
      mahasiswa_id: '',
      matakuliah_id: '',
      sks: '',
      keterangan: ''
    })
    const validation = ref ([])
    const router = useRouter()
    const route = useRoute()
    onMounted(() =>{
      axios.get(`http://pia.labirin.co.id${route.params.id}`)
      .then(response => {
        absens.waktu_absen = response.data.data.waktu_absen
        absens.mahasiswa_id = response.data.data.mahasiswa_id
        absens.matakuliah_id = response.data.data.matakuliah_id
        absens.sks = response.data.data.sks
        absens.keterangan = response.data.data.keterangan
      }).catch(error =>{
        console.log(error)
      })
    })
    function update(){
      let waktu_absen = absens.waktu_absen
      let mahasiswa_id = absens.mahasiswa_id
      let matakuliah_id = absens.matakuliah_id
      let sks = absens.sks
      let keterangan = absens.keterangan
      axios.put(`http://pia.labirin.co.id${route.params.id}`, {
        waktu_absen: waktu_absen,
        mahasiswa_id: mahasiswa_id,
        matakuliah_id: matakuliah_id,
        sks: sks,
        keterangan: keterangan
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      absens,
      validation,
      router,
      update,
      route
    }
  },
}
</script>