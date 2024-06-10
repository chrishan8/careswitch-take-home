<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { UserSchema } from '$prisma/generated/zod';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	type Props = {
		data: SuperValidated<Infer<typeof UserSchema>>;
	};

	let { data }: Props = $props();

	const form = superForm(data, {
		validators: zodClient(UserSchema.omit({ id: true }))
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<input type="hidden" name="id" bind:value={$formData.id} />
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
