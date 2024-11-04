<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup>
  import {ref, onMounted} from 'vue';

  import EventService from '@/services/EventService';

  const props = defineProps({
    id: {
      required: true,
      type: String,
    }
  })
  const event = ref(null);

  onMounted(() => {
    EventService.getEvent(props.id)
      .then(response => event.value = response.data)
      .catch(err => console.log(err));
  });
</script>
