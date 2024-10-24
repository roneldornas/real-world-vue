<script setup>
  import {ref, onMounted} from 'vue';
  import EventCard from '@/components/EventCard.vue';
  import EventService from '@/services/EventService';

  const events = ref(null);
  onMounted(() => {
    EventService.getEvents()
      .then(response => events.value = response.data)
      .catch(err => console.log(err));
  })
</script>

<template>
  <h1>Events for good</h1>
  <div class="home">
    <EventCard v-for="(event, index) in events" :event="event" :key="index"/>
  </div>
</template>


<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
