<script lang="ts">
	import { counter } from '$lib/counter';
	import Btn from './btn.svelte';
</script>

<Btn onClick={() => counter.update((count) => count - 1)}>-</Btn>
<Btn onClick={() => ($counter -= 1)}>-</Btn>
