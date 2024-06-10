<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import {
		createColumnHelper,
		getCoreRowModel,
		type RowSelectionState,
		type TableOptions
	} from '@tanstack/table-core';
	import { createSvelteTable, FlexRender, renderComponent } from '$lib/svelte-table';
	import {
		Table,
		TableHead,
		TableRow,
		TableHeader,
		TableBody,
		TableCell
	} from '$lib/components/ui/table';
	import type { Workspace } from '@prisma/client';
	import { writable } from 'svelte/store';

	type Props = {
		data: Workspace[];
	};

	let { data }: Props = $props();

	let rowSelection = $state<RowSelectionState>({});

	const columnHelper = createColumnHelper<Workspace>();

	const columns = [
		columnHelper.display({
			id: 'select',
			header: ({ table }) =>
				renderComponent(Checkbox, {
					checked: table.getIsAllRowsSelected(),
					onCheckedChange: table.getToggleAllRowsSelectedHandler()
				}),
			cell: ({ row }) =>
				renderComponent(Checkbox, {
					checked: row.getIsSelected(),
					disabled: !row.getCanSelect(),
					onCheckedChange: row.getToggleSelectedHandler()
				})
		}),
		columnHelper.accessor('id', {
			header: 'ID'
		}),
		columnHelper.accessor('name', {
			header: 'Name'
		})
	];

	const options = writable<TableOptions<any>>({
		data,
		columns,
		enableRowSelection: true,
		getCoreRowModel: getCoreRowModel(),
		state: {
			rowSelection
		}
	});
	const table = createSvelteTable($options);
</script>

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
