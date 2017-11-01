<template lang="html">
  <div class="">
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">Tasks</h1>
      </md-toolbar>

      <md-table-alternate-header md-selected-label="selected">
        <md-button class="md-icon-button">
          <md-icon>delete</md-icon>
        </md-button>
      </md-table-alternate-header>

      <md-table md-sort="calories">
        <md-table-header>
          <md-table-row>
            <md-table-head md-sort-by="task">Task</md-table-head>
            <md-table-head md-sort-by="priority" width="100px">Priority</md-table-head>
            <md-table-head>
              <md-icon>message</md-icon>
              <span>Comments</span>
            </md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(row, rowIndex) in list" :key="rowIndex" :md-item="row" md-selection>
            <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'task' && columnIndex !== 'comment' && columnIndex !== 'priority'">
              <span v-if="columnIndex === 'comment'">{{ column }}</span>

              <md-button class="md-icon-button" v-if="columnIndex === 'comment'">
                <md-icon>edit</md-icon>
              </md-button>

              <md-select
                placeholder="Priority"
                :name="'priority' + columnIndex"
                :id="'priority' + columnIndex"
                v-model="nutrition[rowIndex].priority"
                v-if="columnIndex === 'priority'">
                <md-option value="high">High</md-option>
                <md-option value="medium">Medium</md-option>
                <md-option value="low">Low</md-option>
              </md-select>

              <span v-if="columnIndex !== 'priority' && columnIndex !== 'comment'">{{ column }}</span>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
import EventBus from './EventBus';

export default {
  name: 'ArticleTask',
  mounted() {
    console.log(localStorage.getItem('tasks'));
    this.list = JSON.parse(localStorage.getItem('tasks')).tasks;
    EventBus.$on('addTask', task => this.list.push(task));
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>
