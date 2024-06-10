<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import {
		createColumnHelper,
		getCoreRowModel,
		type RowSelectionState,
		type TableOptions
	} from '@tanstack/table-core';
	import { createSvelteTable, renderComponent } from '$lib/svelte-table';
	import { goto } from '$app/navigation';
	import Pencil from 'lucide-svelte/icons/pencil';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import type { User, Workspace } from '@prisma/client';
	import { writable } from 'svelte/store';
	import WorkspaceTable from './components/workspace-table/workspace-table.svelte';

	type Props = {
		data: {
			user: User & {
				ownedWorkspaces: Workspace[];
				workspaces: Workspace[];
			};
		};
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
		data: data.user.ownedWorkspaces,
		columns,
		enableRowSelection: true,
		getCoreRowModel: getCoreRowModel(),
		state: {
			rowSelection
		}
	});
	const table = createSvelteTable($options);

	function handleEdit() {
		goto(`/users/${data.user.id}/edit`);
	}
</script>

<div class="flex gap-6">
	<Card class="relative h-fit w-80">
		<div class="absolute right-2 top-2">
			<Button on:click={handleEdit} variant="ghost" size="sm">
				<Pencil class="h-4 w-4" />
			</Button>
		</div>
		<CardHeader>
			<div class="flex justify-center">
				<Avatar class="h-24 w-24 rounded-full">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>{data.user.name}</AvatarFallback>
				</Avatar>
			</div>
		</CardHeader>
		<CardContent class="text-center">
			<CardTitle>{data.user.name}</CardTitle>
			<CardDescription>
				<div class="text-sm text-gray-500">{data.user.email}</div>
			</CardDescription>
		</CardContent>
	</Card>
	<div class="flex w-full flex-col gap-6">
		<div class="flex items-center justify-between space-y-2">
			<h2 class="text-3xl font-bold tracking-tight">Workspaces</h2>
		</div>
		<Tabs value="owned-workspaces">
			<TabsList class="grid w-full grid-cols-2">
				<TabsTrigger value="owned-workspaces">Owner</TabsTrigger>
				<TabsTrigger value="member-workspaces">Member</TabsTrigger>
			</TabsList>
			<TabsContent value="owned-workspaces">
				<WorkspaceTable data={data.user.ownedWorkspaces} />
			</TabsContent>
			<TabsContent value="member-workspaces">
				<WorkspaceTable data={data.user.workspaces} />
			</TabsContent>
		</Tabs>
	</div>
</div>
