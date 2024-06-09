<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';

	type Props = {
		onOpenChange: (state: boolean) => void;
		open: boolean;
	};

	let { onOpenChange, open }: Props = $props();
</script>

<Dialog {open} {onOpenChange}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Permanently delete user?</DialogTitle>
			<DialogDescription>
				This action cannot be undone. This will permanently delete this user from our servers.
			</DialogDescription>
		</DialogHeader>
		<DialogFooter>
			<Button type="submit" variant="destructive">Delete</Button>
			<Button on:click={() => onOpenChange(false)} variant="outline">Cancel</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
