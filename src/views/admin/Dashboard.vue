<template>
  <div>
    dasboard
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.first_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

import axios from 'axios';

export default {
  setup() {
    let users = ref([]);

    onMounted(() => {
      axios.get('http://localhost:3000/users')
        .then(usersData => {
          users.value = usersData.data
        })
        .catch(err => console.log(err));
    });

    return {
      users
    }
  }
};
</script>