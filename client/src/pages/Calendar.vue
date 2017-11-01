<template lang="html">
  <div class="calendar">
    <!-- <md-button v-if="selectedEvent._id" @click="removeEvent" class="md-icon-button">
      <md-icon>delete</md-icon>
    </md-button> -->

    <full-calendar ref="calendar" :events="events" v-on:dayClick="selectDay" v-on:eventClick="selectEvent"></full-calendar>
    <md-button class="md-fab md-fab-bottom-right md-warn">
      <md-icon>add</md-icon>
    </md-button>
  </div>



</template>

<script>
import moment from 'moment';

export default {
  name: 'Calendar',
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'event1',
          start: moment().hours(12).minutes(0),
          cssClass: 'common',
          YOUR_DATA: {
            dateAlarm: moment().hours(12).minutes(0),
          },
        },
        {
          id: 2,
          title: 'event2',
          start: moment().add(-1, 'days'),
          end: moment().add(1, 'days'),
          cssClass: 'common',
          allDay: true,
        },
        {
          id: 3,
          title: 'event3',
          start: moment().add(2, 'days'),
          end: moment().add(2, 'days').add(6, 'hours'),
          cssClass: 'common',
          allDay: false,
        },
      ],
      selectedDay: {},
      selectedEvent: {},
    };
  },
  methods: {
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
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #444;
  font-family: sans-serif;
}
</style>
