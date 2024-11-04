import { createRouter, createWebHistory } from 'vue-router';
import EventsView from '../views/EventsView.vue';
import EventDetails from '../views/EventDetails.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetails,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
});

export default router;
