<template lang="html">
  <div class="newEvent">
    <TaskInput/>
  </div>
</template>

<script>
import TaskInput from '../components/TaskInput';

export default {
  name: 'newTask',
  components: {
    TaskInput,
  },
};
</script>

<style lang="css">
</style>
