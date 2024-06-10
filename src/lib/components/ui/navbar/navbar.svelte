<script lang="ts">
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils.js';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuShortcut,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import WorkspaceSwitcher from '../workspace-switcher/workspace-switcher.svelte';
	import type { Workspace } from '@prisma/client';

	type Props = {
		className?: string;
		workspaces: Workspace[];
	};

	let { className, workspaces }: Props = $props();

	const href = '/users';

	function goBack() {
		if ($page.url.pathname === '/') {
			goto('/');
		} else {
			history.back();
		}
	}
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		{#if $page.url.pathname !== '/'}
			<Button variant="ghost" on:click={goBack}>
				<ArrowLeft />
			</Button>
		{/if}
		<WorkspaceSwitcher data={workspaces} />
		<nav class={cn('mx-6 flex items-center space-x-4 lg:space-x-6', className)}>
			<a
				{href}
				class:active={$page.url.pathname === href}
				class="text-sm font-medium transition-colors hover:text-primary">Users</a
			>
		</nav>
		<div class="ml-auto flex items-center space-x-4">
			<DropdownMenu>
				<DropdownMenuTrigger asChild let:builder>
					<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
						<Avatar class="h-8 w-8">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent class="w-56" align="end">
					<DropdownMenuLabel class="font-normal">
						<div class="flex flex-col space-y-1">
							<p class="text-sm font-medium leading-none">shadcn</p>
							<p class="text-xs leading-none text-muted-foreground">m@example.com</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Profile
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	</div>
</div>

<style lang="postcss">
	.active {
		@apply text-primary;
	}
</style>
