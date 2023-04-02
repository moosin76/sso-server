<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
	mounted() {
		this.$socket.emit('room:join', 'myRoom');
	}
})
</script>
