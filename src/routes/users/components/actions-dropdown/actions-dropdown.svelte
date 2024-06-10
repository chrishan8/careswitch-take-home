<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import DeleteDialog from '../delete-dialog/delete-dialog.svelte';
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuItem
	} from '$lib/components/ui/dropdown-menu';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import { goto } from '$app/navigation';
	import type { User } from '@prisma/client';

	type Props = {
		user: User;
	};

	let { user }: Props = $props();

	let open = $state(false);

	function editUser() {
		goto(`/users/${user.id}/edit`);
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
