<script lang="ts">
	import type { User } from '@prisma/client';

	type Props = {
		user: User;
	};

	let { user }: Props = $props();
</script>

<a class="text-primary" href={`/users/${user.id}`}>{user.id}</a>
