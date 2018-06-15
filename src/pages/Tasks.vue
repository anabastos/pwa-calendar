<template lang="html">
  <div class="tasks">
    <TaskList/>

    <router-link to="/tasks/new">
      <md-button class="md-fab md-fab-bottom-right md-warn">
        <md-icon>add</md-icon>
      </md-button>
    </router-link>
  </div>

</template>

<script>
import TaskList from '../components/TaskList';

export default {
  name: 'Tasks',
  components: {
    TaskList,
  },
};
</script>

<style lang="css">

</style>
