<script lang="ts">
import * as redis from 'redis';
const client = redis.createClient(6379, 'localhost');
client.on('error', console.error);

</script>

<main>
  <h1>Vite + Svelte</h1>
</main>

<style>
</style>