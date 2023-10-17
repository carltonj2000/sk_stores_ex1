import { counter } from '$lib/counter';

export async function load() {
	counter.subscribe((count) => console.log(count));

	counter.update((count) => count + 1); // avoid mutating on server
	return { count: 10 };
}
