import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutOwnedWorkspacesInputSchema } from './UserUpdateWithoutOwnedWorkspacesInputSchema';
import { UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema } from './UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema';
import { UserCreateWithoutOwnedWorkspacesInputSchema } from './UserCreateWithoutOwnedWorkspacesInputSchema';
import { UserUncheckedCreateWithoutOwnedWorkspacesInputSchema } from './UserUncheckedCreateWithoutOwnedWorkspacesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutOwnedWorkspacesInputSchema: z.ZodType<Prisma.UserUpsertWithoutOwnedWorkspacesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedWorkspacesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutOwnedWorkspacesInputSchema;
