<script lang="ts">
	import { counter } from '$lib/counter';
</script>

<button
	class="bg-slate-400 px-3 py-1 rounded shadow-md"
	on:click={() => counter.set(0)}>reset</button
>
<button
	class="bg-slate-400 px-3 py-1 rounded shadow-md"
	on:click={() => ($counter = 0)}>reset</button
>
