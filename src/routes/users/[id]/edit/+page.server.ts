import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { prisma } from '$lib/server/db';
import { superValidate } from "sveltekit-superforms";
import { UserSchema } from "$prisma/generated/zod";
import { zod } from "sveltekit-superforms/adapters";
 
export const load = async ({ params: { id } }) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return {
    form: await superValidate(user, zod(UserSchema)),
  };
};

export const actions: Actions = {
  default: async event => {
    const form = await superValidate(event, zod(UserSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    const { params } = event
		await prisma.user.update({
			where: { id: params.id },
      data: form.data,
		});
    throw redirect(303, '/users')
	}
};