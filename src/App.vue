<template>
  <div id="app" class="container">
      <div class="mt-4 p-5 bg-secondary text-white rounded">
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
        ]
      }
    },
    created(){
      this.$http.get('tareas.json').then(respuesta => {return respuesta.json()}).then(respuestaJson => {
        for(let id in respuestaJson){
          let tarea = {
            id: id,
            texto: respuestaJson[id].texto,
            terminada: respuestaJson[id].terminada

          }
          this.tareas.push(tarea);
        }
      })
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
