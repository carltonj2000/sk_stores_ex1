<script lang="ts">
	import { countInitial, counter } from '$lib/counter';
	import Minus from './minus.svelte';
	import Plus from './plus.svelte';
	import Reset from './reset.svelte';

	let count = 0;
	const unsubscribe = counter.subscribe((value) => {
		count = value;
	});

	// unsubscribe(); // on destroy ... etc
</script>

<div
	class="flex flex-col items-center h-screen justify-center bg-slate-300 gap-2"
>
	<h1 class="text-3xl font-semibold">
		The Count Is {count} and {$counter} initial {countInitial}
	</h1>
	<div class="flex gap-2">
		<Plus />
		<Minus />
		<Reset />
	</div>
	<input bind:value={$counter} class="rounded px-2 py-1 text-right" />
</div>
