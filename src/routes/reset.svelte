<script lang="ts">
	import { counter } from '$lib/counter';
	import Btn from './btn.svelte';
</script>

<Btn onClick={() => counter.set(0)}>reset</Btn>
<Btn onClick={() => ($counter = 0)}>reset</Btn>
