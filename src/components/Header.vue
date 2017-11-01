<template lang="html">
  <div>
    <md-toolbar>
    <md-button class="md-icon-button" @click="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>
    <h2 class="md-title" style="flex: 1">PWA Calendar</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <md-avatar class="md-avatar-icon md-large">
            <md-icon>person</md-icon>
          </md-avatar>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item><router-link to="/">
            <md-icon>bookmark</md-icon>
            Calendar
        </router-link></md-list-item>

        <md-list-item><router-link to="/tasks">
            <md-icon>note</md-icon>
            Tasks
        </router-link></md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
  },
};
</script>

<style lang="css">
.md-avatar-icon {
  margin-top: 10%;
}
</style>
