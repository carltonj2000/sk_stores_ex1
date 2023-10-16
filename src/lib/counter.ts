import { derived, get, writable } from 'svelte/store';

type subscriberT = (value: number) => void;
type updateT = (value: number) => number;

export function writableCJ(value: number) {
	const _subscribers = new Set<subscriberT>();

	const subscribe = (subscriber: subscriberT) => {
		_subscribers.add(subscriber);
		return () => _subscribers.delete(subscriber);
	};

	const update = (updater: updateT) => {
		set(updater(value));
	};

	const set = (newValue: number) => {
		value = newValue;
		_subscribers.forEach((subscriber) => subscriber(value));
	};

	const get = () => value;
	return { subscribe, update, set, get };
}

export const counter = writable(0, (set, update) => {
	set(10);
	update((c) => c + 5);
	console.log('Got a subscriber');
	return () => console.log('No more subscribers');
});

counter.subscribe((count) => console.log(count));
export const countInitial = get(counter); // read store without subscribing

const doubled = derived(counter, (count) => count * 2);

doubled.subscribe((count) => console.log(count));

const quin = derived([counter, counter], ([a, b]) => a * 2 + b * 3);
quin.subscribe((count) => console.log(count));

export function createCounter(count: number) {
	const { subscribe, update, set } = writable(count);
	const increment = () => update((count) => count + 1);
	const decrement = () => update((count) => count - 1);
	const reset = () => set(0);
	return { subscribe, increment, decrement, reset };
}

export const counter2 = createCounter(5);
