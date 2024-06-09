import type { Actions } from "./$types";
import { createId } from '@paralleldrive/cuid2';
import { fail, redirect } from "@sveltejs/kit";
import { prisma } from '$lib/server/db';
import { superValidate } from "sveltekit-superforms";
import { UserModel } from "$prisma/zod/user";
import { zod } from "sveltekit-superforms/adapters";
 
export const load = async ({ params: { id } }) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  console.log('user', user)
  return {
    form: await superValidate(user, zod(UserModel)),
  };
};

export const actions: Actions = {
  upsertUser: async (event) => {
    const form = await superValidate(event, zod(UserModel));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    const data = {
      ...form.data,
      id: form.data.id === 'new' ? createId() : form.data.id,
    }
    console.log('data', form)
    await prisma.user.upsert({
      where: {
        id: data.id,
      },
      update: data,
      create: data,
    })
    throw redirect(303, `/users`)
  },
  deleteUser: async ({ params }) => {
		await prisma.user.delete({
			where: { id: params.id },
		});
    throw redirect(303, '/users')
	}
};