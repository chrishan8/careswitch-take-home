import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { prisma } from '$lib/server/db';
import { superValidate } from "sveltekit-superforms";
import { UserSchema } from "$prisma/generated/zod";
import { zod } from "sveltekit-superforms/adapters";

export const load = async () => {
  return {
    form: await superValidate(zod(UserSchema.omit({ id: true }))),
  };
};


export const actions: Actions = {
  default: async event => {
    const form = await superValidate(event, zod(UserSchema.omit({ id: true })));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    await prisma.user.create({ data: form.data })
    throw redirect(303, `/users`)
  },
};