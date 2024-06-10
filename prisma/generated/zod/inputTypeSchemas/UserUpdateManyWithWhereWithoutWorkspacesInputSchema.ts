import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';
import { UserUpdateManyMutationInputSchema } from './UserUpdateManyMutationInputSchema';
import { UserUncheckedUpdateManyWithoutWorkspacesInputSchema } from './UserUncheckedUpdateManyWithoutWorkspacesInputSchema';

export const UserUpdateManyWithWhereWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutWorkspacesInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutWorkspacesInputSchema) ]),
}).strict();

export default UserUpdateManyWithWhereWithoutWorkspacesInputSchema;
