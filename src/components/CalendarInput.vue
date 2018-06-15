<template lang="html">
  <div class="formCalendar">
    <h2 class=description>Cadastro de novo evento</h2>
    <div class="inputBox">
      <md-input-container>
        <label>Nome</label>
        <md-input type="text" v-model="event.title" maxlength="20"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Local</label>
        <md-input type="text" v-model="event.location" maxlength="20"></md-input>
      </md-input-container>
      <label class="date-label">Horario do alarme</label>
      <datetime type="datetime" :value="event.start" v-model="event.alarm"></datetime>
      <label class="date-label">Horario de inicio</label>
      <datetime type="datetime" :value="event.start" v-model="event.start"></datetime>
      <label class="date-label">Horario de inicio</label>
      <datetime type="datetime" :value="event.start" v-model="event.end"></datetime>
      <md-switch v-model="event.allDay" id="switch" name="switch" class="md-warn">O dia todo?</md-switch>
    </div>
    <md-button class="button-send md-raised md-dense" type="button" name="button" @click="addEvent">
      <router-link to="/events">Enviar</router-link></md-button>
  </div>
</template>

<script>
import moment from 'moment';
import { prop } from 'ramda';

import EventBus from './EventBus';

const format = text => text || '-'; // eslint-disable-line

export default {
  name: 'InputCalendar',
  methods: {
    addEvent() {
      EventBus.$emit('addEvent', this.event);
    },
  },
  mounted() {
    this.events = prop('events', JSON.parse(localStorage.getItem('events'))) || [];
    EventBus.$on('addEvent', (event) => {
      const transformations = {
        name: format(event.name),
        location: format(event.location),
        alarm: moment(event.alarm),
        start: moment(event.start),
        end: moment(event.end),
        allDay: format(event.allDay),
      };

      this.events = [...this.events, transformations];
      const obj = { events: this.events };
      localStorage.setItem('events', JSON.stringify(obj));

      this.event = {};
    });
    EventBus.$on('deleteEvent', (event) => {
      this.events.splice(event, 1);
      const obj = { events: this.events };
      localStorage.setItem('events', JSON.stringify(obj));
      return this.events;
    });
  },
  data() {
    return {
      event: {
        start: '2018-05-17T00:00:00.000Z',
        end: '2018-05-17T00:00:00.000Z',
        alarm: '2018-05-17T00:00:00.000Z',
      },
      events: [],
    };
  },
};
</script>

<style lang="css">

.button-send {
  width: 10%;
}

.formCalendar {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.inputBox {
  width: 80%;
  justify-content: center;
  flex-flow: column wrap;
}

.description {
  color: #A9A9A9;
  margin: 5%;
  font-family: sans-serif;
}

.date-label {
  font-size: 17px;
  color: rgb(0, 0, 0, 0.54);
}

.vdatetime-input {
  font-size: 17px;
  margin: 3%;
}

</style>