<template>
    <ul class="list-group">
        <li v-for="(tarea, indice) of tareas" :key="tarea" class="list-group-item" v-bind:class="{terminada: tarea.terminada}"> 
            {{tarea.texto}}
            <span class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-success" v-on:click="tarea.terminada = !tarea.terminada"></button>
                <button type="button" class="btn btn-danger" v-on:click="borrar(indice)"></button>
            </span>
        </li>   
    </ul>
</template>

<script>
export default {
   props:['tareas'],
   methods: {
       borrar(indice){
           this.tareas.splice(indice,1);
       }
   }
}
</script>

<style scoped>
.terminada{
    color:gray;
    text-decoration: line-through;
}
</style>