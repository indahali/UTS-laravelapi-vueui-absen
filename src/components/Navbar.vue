<template>
    <div class="container">
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Absensi Mahasiswa</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"> 
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/mahasiswas">Mahasiswa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/absens">Absensi</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/matkul">Mata Kuliah</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/Jadwals">Jadwal</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/kontrakmatakuliahs">kontrak Matakuliah</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/semesters">Semester</router-link>
          </li>
         
          
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>