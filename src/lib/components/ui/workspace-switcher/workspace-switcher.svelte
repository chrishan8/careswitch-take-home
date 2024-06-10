<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import Check from 'lucide-svelte/icons/check';
	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import { cn } from '$lib/utils.js';
	import {
		Command,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList,
		CommandSeparator
	} from '$lib/components/ui/command';
	import MoveVertical from 'lucide-svelte/icons/move-vertical';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { tick } from 'svelte';
	import type { Workspace } from '@prisma/client';

	type Props = {
		className?: string;
		data: Workspace[];
	};

	let { className, data }: Props = $props();

	let open = $state(false);
	let selectedWorkspace = $state(data[0]);

	function closeAndRefocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => document.getElementById(triggerId)?.focus());
	}
</script>

<Popover bind:open let:ids>
	<PopoverTrigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			role="combobox"
			aria-expanded={open}
			aria-label="Select a team"
			class={cn('w-[200px] justify-between', className)}
		>
			<Avatar class="mr-2 h-5 w-5">
				<AvatarImage
					src="https://avatar.vercel.sh/$personal.png"
					alt="personal"
					class="grayscale"
				/>
				<AvatarFallback>SC</AvatarFallback>
			</Avatar>
			{selectedWorkspace?.name}
			<MoveVertical class="ml-auto h-4 w-4 shrink-0 opacity-50" />
		</Button>
	</PopoverTrigger>
	<PopoverContent class="w-[200px] p-0">
		<Command>
			<CommandInput placeholder="Search workspace..." />
			<CommandList>
				<CommandEmpty>No workspace found.</CommandEmpty>
				{#each data as workspace}
					<CommandGroup heading="Workspaces">
						<CommandItem
							onSelect={() => {
								selectedWorkspace = workspace;
								closeAndRefocusTrigger(ids.trigger);
							}}
							value={workspace.name}
							class="text-sm"
						>
							<Avatar class="mr-2 h-5 w-5">
								<AvatarImage
									src="https://avatar.vercel.sh/$personal.png"
									alt={workspace.name}
									class="grayscale"
								/>
								<AvatarFallback>SC</AvatarFallback>
							</Avatar>
							{workspace.name}
							<Check class={cn('ml-auto h-4 w-4')} />
						</CommandItem>
					</CommandGroup>
				{/each}
			</CommandList>
			<CommandSeparator />
			<CommandList>
				<CommandGroup>
					<CommandItem>
						<CirclePlus class="mr-2 h-5 w-5" />
						Create Workspace
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	</PopoverContent>
</Popover>
