import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'https://tareas-5b776-default-rtdb.firebaseio.com';

export var bus = new Vue({
  methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador', numTareas)
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
