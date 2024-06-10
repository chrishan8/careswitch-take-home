import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutOwnedWorkspacesInputSchema } from './UserUpdateWithoutOwnedWorkspacesInputSchema';
import { UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema } from './UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema';

export const UserUpdateToOneWithWhereWithoutOwnedWorkspacesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedWorkspacesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutOwnedWorkspacesInputSchema;
