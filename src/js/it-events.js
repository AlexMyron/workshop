import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
import itEventsTpl from '../templates/it-events.hbs';
import dataEvents from '../data/it-events.json';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

const eventsList = document.querySelector('.events-board');

eventsList.innerHTML = itEventsTpl({
  events: dataEvents.map(event => ({
    ...event,
    time: format(Date.parse(event.time), 'd MMMM yyyy, HH:mm', { locale: uk }),
  })),
});
