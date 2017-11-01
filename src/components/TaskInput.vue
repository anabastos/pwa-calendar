<template lang="html">
  <div class="">
    <md-input-container>
      <label>Red - Textarea</label>
      <md-input type="text" @keyup.enter="addTask" v-model="taskName" maxlength="20"></md-input>
    </md-input-container>
    <md-button class="md-raised md-dense" type="button" name="button" @click="addTask">Dense</md-button>
  </div>
</template>

<script>
import EventBus from './EventBus';

export default {
  name: 'HeaderTask',
  methods: {
    addTask() {
      const obj = { tasks: this.listOfTasks };
      this.listOfTasks.push(this.taskName);
      localStorage.setItem('tasks', JSON.stringify(obj));
      EventBus.$emit('addTask', this.taskName);
      this.taskName = '';
    },
  },
  mounted() {
    this.listOfTasks = JSON.parse(localStorage.getItem('tasks') || {}).tasks || [];
  },
  data() {
    return {
      taskName: '',
      listOfTasks: [],
    };
  },
};
</script>
