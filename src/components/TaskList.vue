<template lang="html">
  <div class="task-list">
    <h1 class="title md-title">Tarefas</h1>
    <md-table-card>
      <md-table md-sort="">
        <md-table-header>
          <md-table-row>
            <md-table-head>Tarefa</md-table-head>
            <md-table-head width="100px">Prioridade</md-table-head>
            <md-table-head>
              <md-icon>message</md-icon>
              <span>Commentario</span>
            </md-table-head>
            <md-table-head>-</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(row, rowIndex) in listOfTasks" :key="rowIndex" :md-item="row" md-selection>
            <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'name' && columnIndex !== 'comment' && columnIndex !== 'priority'">
              <span v-if="columnIndex === 'comment'">{{ column }}</span>
              <span v-if="columnIndex === 'priority'">{{ column }}</span>

              <span v-if="columnIndex !== 'priority' && columnIndex !== 'comment'">{{ column }}</span>
            </md-table-cell>
            <md-table-cell>
              <div class="icons">
                <md-button class="md-icon-button">
                  <md-icon>edit</md-icon>
                </md-button>
                <md-button class="md-icon-button" @click="deleteTask(rowIndex)">
                  <md-icon>delete</md-icon>
                </md-button>
              </div>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
import {
  prop,
} from 'ramda';

import EventBus from './EventBus';

const format = text => text || '-'; // eslint-disable-line

export default {
  name: 'ListTask',
  mounted() {
    this.listOfTasks = prop('tasks', JSON.parse(localStorage.getItem('tasks'))) || [];
    EventBus.$on('addTask', (task) => {
      const transformations = {
        name: format(task.name),
        priority: format(task.priority),
        comment: format(task.comment),
      };

      this.listOfTasks = [...this.listOfTasks, transformations];
      const obj = { tasks: this.listOfTasks };
      localStorage.setItem('tasks', JSON.stringify(obj));

      this.task = {};
    });
    EventBus.$on('deleteTask', (task) => {
      this.listOfTasks.splice(task, 1);
      const obj = { tasks: this.listOfTasks };
      localStorage.setItem('tasks', JSON.stringify(obj));
      return this.listOfTasks;
    });
  },
  methods: {
    deleteTask(task) {
      EventBus.$emit('deleteTask', task);
    },
    // saveTasks() {
    //   localStorage.setItem('tasks', JSON.stringify(this.listOfTasks));
    //   EventBus.$emit('editTask', this.listOfTasks);
    // },
  },
  data() {
    return {
      listOfTasks: [],
    };
  },
};
</script>

<style lang="css">

.task-list{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.title {
  color: #444;
  font-family: sans-serif;
  margin: 5%;
  text-align: center;
}

.md-table {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.md-icon-button {
  float: right !important;
}
</style>