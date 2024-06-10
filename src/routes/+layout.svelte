<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/ui/navbar/navbar.svelte';

	let { children, data } = $props();
</script>

<ModeWatcher />
<Navbar workspaces={data.workspaces} />
<div class="p-8 pt-6">
	{@render children()}
</div>
