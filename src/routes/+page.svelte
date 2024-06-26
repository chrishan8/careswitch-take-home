<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	let { data } = $props();
</script>

<div class="mx-auto mt-8 max-w-3xl px-4 sm:px-6 lg:px-8">
	<div class="space-y-6 rounded-md border p-4">
		<p>
			Welcome to the Careswitch take-home assignment! If you followed the quickstart guide in the
			README, you should see the table below populated with the seeded users:
		</p>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">ID</Table.Head>
					<Table.Head>Name</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.users as user (user.id)}
					<Table.Row>
						<Table.Cell class="font-medium">{user.id}</Table.Cell>
						<Table.Cell>{user.name}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
		<div>
			Your assignment is to use all the libraries and tools already set up in this project to build
			a simple user management interface. You can use the table above as a starting point, but you
			are encouraged to start from scratch, as long as you follow the requirements below:

			<ul class="mt-4 list-disc space-y-2 pl-4">
				<li>
					<span class="font-semibold">CRUD</span> - You should be able to create, read, update, and delete
					models specified in the schema below, ideally across different routes and pages designed for
					listing, viewing, and updating.
				</li>
				<li>
					<span class="font-semibold">Forms</span> - You should use Shadcn
					<a
						class="underline underline-offset-2"
						target="_blank"
						href="https://shadcn-svelte.com/docs/components/form">Form</a
					>
					components alongside
					<a class="underline underline-offset-2" target="_blank" href="https://superforms.rocks/"
						>Superforms</a
					> to implement your forms and validation. You are generally encouraged to use as many Shadcn
					components as you see fit to build out the interface.
				</li>
				<li>
					<span class="font-semibold">Schema</span> - You are expected to modify the Prisma schema
					and add your own migrations to support the following domain models (you can use the
					<code class="text-sm">`npm run migrate`</code> command to apply your changes):
					<ul class="mt-2 list-disc space-y-2 pl-4">
						<li>
							<span class="font-medium">User</span> - Represents users in the system. A simple starting
							schema is provided for you, but you should expand it as needed.
						</li>
						<li>
							<span class="font-medium">Workspace</span> - Represents a workspace that groups users together.
							A user can belong to multiple workspaces. This is a lot like Slack.
						</li>
					</ul>
				</li>
				<li>
					<span class="font-semibold">Styling</span> - You should use a combination of Shadcn and Tailwind
					CSS to style your components. Put some thought into the design, layout, and navigation of your
					pages.
				</li>
			</ul>
		</div>
	</div>
</div>
