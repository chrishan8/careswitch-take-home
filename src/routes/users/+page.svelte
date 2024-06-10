<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { createColumnHelper, getCoreRowModel, getFilteredRowModel } from '@tanstack/table-core';
	import { createSvelteTable, renderComponent } from '$lib/svelte-table';
	import type { FilterFn, RowSelectionState } from '@tanstack/table-core';
	import FlexRender from '$lib/svelte-table/flex-render.svelte';
	import { goto } from '$app/navigation';
	import { Input } from '$lib/components/ui/input';
	import Plus from 'lucide-svelte/icons/plus';
	import { rankItem } from '@tanstack/match-sorter-utils';
	import {
		Table,
		TableHead,
		TableRow,
		TableHeader,
		TableBody,
		TableCell
	} from '$lib/components/ui/table';
	import type { TableOptions } from '@tanstack/table-core';
	import type { User } from '@prisma/client';
	import { writable } from 'svelte/store';

	import ActionsDropdown from './components/actions-dropdown/actions-dropdown.svelte';
	import UserLinkTableCell from './components/user-link-table-cell/user-link-table-cell.svelte';

	type Props = {
		data: {
			users: User[];
		};
	};

	let { data }: Props = $props();
	let globalFilter = $state('');
	let rowSelection = $state<RowSelectionState>({});

	const columnHelper = createColumnHelper<User>();

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
		columnHelper.display({
			id: 'id',
			header: 'ID',
			cell: ({ row }) => renderComponent(UserLinkTableCell, { user: row.original }),
			filterFn: 'fuzzy'
		}),
		columnHelper.accessor('name', {
			header: 'Name',
			filterFn: 'fuzzy'
		}),
		columnHelper.accessor('email', {
			header: 'Email',
			filterFn: 'fuzzy'
		}),
		columnHelper.display({
			id: 'actions',
			cell: ({ row }) => renderComponent(ActionsDropdown, { user: row.original })
		})
	];

	const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
		const itemRank = rankItem(row.getValue(columnId), value);
		addMeta({ itemRank });
		return itemRank.passed;
	};

	const options = writable<TableOptions<any>>({
		data: data.users,
		columns,
		enableRowSelection: true,
		filterFns: {
			fuzzy: fuzzyFilter
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		globalFilterFn: 'fuzzy',
		state: {
			rowSelection
		}
	});
	const table = createSvelteTable($options);

	function handleNewUser() {
		goto('/users/new');
	}

	function handleKeyUp(e: any) {
		table.setGlobalFilter(String(e?.target?.value));
	}
</script>

<div class="flex-1 space-y-4">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold tracking-tight">User Management</h2>
	</div>
	<div class="flex gap-2">
		<Input bind:value={globalFilter} on:keyup={handleKeyUp} type="text" placeholder="Search" />
		<Button on:click={handleNewUser}>
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
</div>
