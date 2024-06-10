import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
	const users = await prisma.$transaction(async (txn) => {
		await txn.user.deleteMany();
		return await txn.user.createManyAndReturn({
			data: [{ name: 'Alice', email: 'alice@protonmail.com' }, { name: 'Bob', email: 'bob@protonmail.com' }]
		});
	});

	console.log(`Created users: ${JSON.stringify(users)}`);

	const workspaces = await prisma.$transaction(async (txn) => {
		await txn.workspace.deleteMany()
		return await txn.workspace.createManyAndReturn({
			data: [{ name: 'Workspace 1', ownerId: users[0].id }]
		});
	})

	console.log(`Created workspaces: ${JSON.stringify(workspaces)}`);

	const channels = await prisma.$transaction(async (txn) => {
		await txn.channel.deleteMany()
		return await txn.channel.createManyAndReturn({
			data: [{ name: 'Channel 1', workspaceId: workspaces[0].id }]
		});
	})

	console.log(`Created channels: ${JSON.stringify(channels)}`);
}

seed().finally(async () => {
	await prisma.$disconnect();
});
