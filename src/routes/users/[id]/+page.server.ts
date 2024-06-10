import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";
import { prisma } from '$lib/server/db';
 
export const load = async ({ params: { id } }) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      ownedWorkspaces: true,
      workspaces: true,
    },
  });
  return {
    user,
  };
};

export const actions: Actions = {
  deleteUser: async ({ params }) => {
		await prisma.user.delete({
			where: { id: params.id },
		});
    throw redirect(303, '/users')
	}
};