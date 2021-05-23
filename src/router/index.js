import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AbsenIndex from '../views/absens/Index.vue'
import MhsIndex from '../views/mahasiswas/Index.vue'
import MatkulIndex from '../views/matakuliahs/Index.vue'
import Createabsen from '../views/absens/Createabsen.vue'
import Createmhs from '../views/mahasiswas/Createmhs.vue'
import Creatematkul from '../views/matakuliahs/Creatematkul.vue'
import Editmhs from '../views/mahasiswas/Editmhs.vue'
import Editabsen from '../views/absens/Editabsen.vue'
import Editmatkul from '../views/matakuliahs/Editmatkul.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/absens',
    name: 'Absens',
    component: AbsenIndex
  },

  {
    path: '/mahasiswas',
    name: 'Mahasiswa',
    component: MhsIndex
  },

  {
    path: '/matkul',
    name: 'Matkul',
    component: MatkulIndex
  },

  {
    path: '/Createabsen',
    name: 'Absen',
    component: Createabsen
  },

  {
    path: '/Createmhs',
    name: 'Mahasiswas',
    component: Createmhs
  },

  {
    path: '/Creatematkul',
    name: 'Mata Kuliah',
    component: Creatematkul
  },

  {
    path: '/Editmhs/:id',
    name: 'Editmhs',
    component: Editmhs
  },

  {
    path: '/Editabsen/:id',
    name: 'Editabsen',
    component: Editabsen
  },

  {
    path: '/Editmatkul/:id',
    name: 'Editmatkul',
    component: Editmatkul
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router