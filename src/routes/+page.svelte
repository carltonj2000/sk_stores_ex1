<script lang="ts">
	import { countInitial, counter, counter2 } from '$lib/counter';
	import Btn from './btn.svelte';
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

	<hr class="w-[300px] bg-gray-900" />

	<h1 class="text-3xl font-semibold">
		The Count Is {$counter2}
	</h1>
	<div class="flex gap-2">
		<Btn onClick={counter2.increment}>+</Btn>
		<Btn onClick={counter2.decrement}>-</Btn>
		<Btn onClick={counter2.reset}>reset</Btn>
	</div>
</div>
