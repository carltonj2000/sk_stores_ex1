<script lang="ts">
	const classTw = 'bg-slate-400 px-3 py-1 rounded shadow-md';
	export let onClick: () => void;
</script>

<button class={classTw} on:click={onClick}><slot /></button>
