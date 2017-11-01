<template lang="html">
  <div class="tasks">
    <!-- <TaskInput/> -->
    <TaskList/>

    <md-button class="md-fab md-fab-bottom-right md-warn">
      <md-icon>add</md-icon>
    </md-button>
  </div>

</template>

<script>
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

export default {
  name: 'tasks',
  components: {
    TaskInput,
    TaskList,
  },
};
</script>

<style lang="css">
.tasks {
}

h1 {
  color: #fff;
  font-family: sans-serif;
}
</style>
