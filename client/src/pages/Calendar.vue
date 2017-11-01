<template lang="html">
  <div class="calendar">
    <h1>Calendar page</h1>
    <md-button class="md-fab md-fab-bottom-right md-warn">
      <md-icon>add</md-icon>
    </md-button>
  </div>



</template>

<script>
export default {
  name: 'Calendar',
};
</script>

<style lang="css">
.calendar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

h1 {
  color: #444;
  font-family: sans-serif;
}
</style>
