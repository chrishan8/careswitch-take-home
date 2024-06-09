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
	import DeleteDialog from '../delete-dialog/delete-dialog.svelte';

	type Props = {
		user: User;
	};

	let { user }: Props = $props();

	let open = $state(false);

	function editUser() {
		// Logic to handle editing the user
		console.log('Edit user:', user);
	}

	function deleteUser() {
		open = true;
	}

	function onOpenChange(state: boolean) {
		open = state;
	}
</script>

<DeleteDialog {open} {onOpenChange} {user} />
<DropdownMenu>
	<DropdownMenuTrigger>
		<Button variant="outline" size="icon">
			<EllipsisVertical />
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent>
		<DropdownMenuItem on:click={() => editUser()}>Edit</DropdownMenuItem>
		<DropdownMenuItem on:click={() => deleteUser()}>Delete</DropdownMenuItem>
	</DropdownMenuContent>
</DropdownMenu>
