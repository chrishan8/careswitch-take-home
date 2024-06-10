<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import UserForm from '../components/user-form/user-form.svelte';
	import type { User } from '@prisma/client';

	type Props = {
		data: {
			form: SuperValidated<User>;
		};
	};

	let { data }: Props = $props();
</script>

<UserForm data={data.form} />
