<template lang="html">
  <div class="calendar">
    <h1 class="title md-title">Calendário</h1>
    <div class="selected trash">
      <md-button v-if="selectedEvent._id" @click="removeEvent" class="md-icon-button">
        <md-icon>delete</md-icon>
      </md-button>
      <div class="selectedText">{{selectedEvent.title}}</div>
    </div>
    
    <full-calendar ref="calendar" :events="events" v-on:dayClick="selectDay" v-on:eventClick="selectEvent"></full-calendar>
    <router-link to="/calendar/new">
      <md-button class="md-fab md-fab-bottom-right md-warn">
        <md-icon>add</md-icon>
      </md-button>
    </router-link>
  </div>
</template>

// <md-button type="submit" class="md-primary md-raised">Open Snackbar</md-button>

//   <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
//     <span>Connection timeout. Showing limited messages.</span>
//     <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Retry</md-button>
//   </md-snackbar>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      events: [],
      selectedDay: {},
      selectedEvent: {},
    };
  },
  methods: {
    mounted() {
      this.events = JSON.parse(localStorage.getItem('events') || {}).events || [];
    },
    removeEvent() {
      this.$refs.calendar.$emit('remove-event', this.selected);
      this.selectedEvent = {};
    },
    selectEvent(event) {
      this.selectedEvent = event;
    },
    selectDay(event) {
      this.selectedEvent = {};
      this.selectedDay = event;
    },
  },
  computed: {
    eventSources() {
      const self = this;
      return [
        {
          events(start, end, timezone, callback) {
            setTimeout(() => {
              callback(self.events.filter(() => Math.random() > 0.5));
            }, 1000);
          },
        },
      ];
    },
  },
};
</script>

<style lang="css">
/* @import '~fullcalendar/dist/fullcalendar.css'; */

.calendar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.trash {
  top: 10px;
  width: 100px;
  float: left;
}

.selectedText {
  top: 5px;
}

.description {
  color: #A9A9A9;
  margin: 5%;
}

.title {
  color: #444;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 5%;
}
</style>
