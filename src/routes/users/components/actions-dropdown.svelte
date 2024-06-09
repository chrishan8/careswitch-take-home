<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuItem
	} from '$lib/components/ui/dropdown-menu';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import type { Row } from '@tanstack/table-core';
	import type { User } from '@prisma/client';
	import Button from '$lib/components/ui/button/button.svelte';
	import DeleteDialog from './delete-dialog.svelte';

	type Props = {
		row: Row<User>;
	};

	let { row }: Props = $props();

	let open = $state(false);

	function editUser(user: User) {
		// Logic to handle editing the user
		console.log('Edit user:', user);
	}

	function deleteUser(user: User) {
		// Logic to handle deleting the user
		console.log('Delete user:', user);
		open = true;
	}

	function onOpenChange(state: boolean) {
		open = state;
	}
</script>

<DeleteDialog {open} {onOpenChange} />
<DropdownMenu>
	<DropdownMenuTrigger>
		<Button variant="outline" size="icon">
			<EllipsisVertical />
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent>
		<DropdownMenuItem on:click={() => editUser(row.original)}>Edit</DropdownMenuItem>
		<DropdownMenuItem on:click={() => deleteUser(row.original)}>Delete</DropdownMenuItem>
	</DropdownMenuContent>
</DropdownMenu>
