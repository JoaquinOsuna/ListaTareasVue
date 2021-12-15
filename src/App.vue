<template>
  <div id="app" class="container">
      <div class="jumbotron">
        <titulo :titulo="titulo"></titulo>
        <nueva-tarea v-bind:tareas="tareas" :actualizarContador='actualizarContador'></nueva-tarea>
        <lista-tarea v-bind:tareas="tareas"></lista-tarea>
      </div>
  </div>
</template>

<script>
import Titulo from './titulocomponent.vue'
import NuevaTarea from './nuevatareacomponent.vue'
import ListaTarea from './listatareacomponents.vue'
export default {
    components: {
      Titulo, 
      NuevaTarea,
      ListaTarea
    },
    data() {
      return {
        titulo: '=Lista de tareas=',
        tareas: [
          {
            texto: 'Aprender Vue.js',
            terminada: false
          },
          {
            texto: 'Aprenedr Angular2',
            terminada: false
          },
          {
            texto: 'Aprender Ionic',
            terminada: false
          }
        ]
      }
    },
    methods: {
      actualizarContador(){
        this.numTareas++;
      }
    }
}
</script>

<style>

</style>
