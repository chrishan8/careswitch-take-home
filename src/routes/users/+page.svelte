<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { createColumnHelper, getCoreRowModel } from '@tanstack/table-core';
	import { createSvelteTable, renderComponent } from '$lib/svelte-table';
	import FlexRender from '$lib/svelte-table/flex-render.svelte';
	import { Input } from '$lib/components/ui/input';
	import Plus from 'lucide-svelte/icons/plus';
	import {
		Table,
		TableHead,
		TableRow,
		TableHeader,
		TableBody,
		TableCell
	} from '$lib/components/ui/table';
	import type { User } from '@prisma/client';

	import ActionsDropdown from './components/actions-dropdown.svelte';

	type Props = {
		data: {
			users: User[];
		};
	};

	let { data }: Props = $props();

	const columnHelper = createColumnHelper<User>();

	const columns = [
		columnHelper.accessor('id', {
			header: 'ID'
		}),
		columnHelper.accessor('name', {
			header: 'Name'
		}),
		columnHelper.display({
			id: 'actions',
			cell: ({ row }) => renderComponent(ActionsDropdown, { row })
		})
	];

	const table = createSvelteTable({
		data: data.users,
		columns,
		getCoreRowModel: getCoreRowModel()
	});
</script>

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
	User Management
</h1>
<div class="flex gap-2">
	<Input type="text" placeholder="Search" />
	<Button>
		<Plus />
		Add User
	</Button>
</div>
<Table>
	<TableHeader>
		{#each table.getHeaderGroups() as headerGroup}
			<TableRow>
				{#each headerGroup.headers as header}
					<TableHead colspan={header.colSpan}>
						<FlexRender content={header.column.columnDef.header} context={header.getContext()} />
					</TableHead>
				{/each}
			</TableRow>
		{/each}
	</TableHeader>
	<TableBody>
		{#each table.getRowModel().rows as row}
			<TableRow>
				{#each row.getVisibleCells() as cell}
					<TableCell>
						<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
					</TableCell>
				{/each}
			</TableRow>
		{/each}
	</TableBody>
</Table>
