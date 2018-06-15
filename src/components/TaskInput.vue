<template lang="html">
  <div class="formTask">
    <h2 class="description">Cadastro de novo lembrete</h2>
    <div class="inputBox">
      <md-input-container>
        <label>Nome</label>
        <md-input type="text" v-model="task.name" maxlength="20"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Prioridade</label>
        <md-input type="text" v-model="task.priority" maxlength="20"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Comentário</label>
        <md-input type="text" v-model="task.comment" maxlength="50"></md-input>
      </md-input-container>
    </div>
    <md-button class="button-send md-raised md-dense" type="button" name="button" @click="addTask">
      <router-link to="/tasks">Enviar</router-link></md-button>
  </div>
</template>

<script>
import {
  prop,
} from 'ramda';

import EventBus from './EventBus';

export default {
  name: 'FormTask',
  methods: {
    addTask() {
      EventBus.$emit('addTask', this.task);
      this.task = {};
    },
  },
  mounted() {
    this.listOfTasks = prop('tasks', JSON.parse(localStorage.getItem('tasks'))) || [];
  },
  data() {
    return {
      task: {},
      listOfTasks: [],
    };
  },
};
</script>

<style lang="css">

.description {
  color: #A9A9A9;
  margin: 5%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.formTask {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.title {
  color: #444;
  font-family: sans-serif;
  margin: 5%;
}

.button-send {
  width: 10%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.inputBox {
  width: 80%;
  justify-content: center;
  flex-flow: column wrap;
}
</style>
