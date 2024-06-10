import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutWorkspacesInputSchema } from './UserUpdateWithoutWorkspacesInputSchema';
import { UserUncheckedUpdateWithoutWorkspacesInputSchema } from './UserUncheckedUpdateWithoutWorkspacesInputSchema';

export const UserUpdateWithWhereUniqueWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutWorkspacesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWorkspacesInputSchema) ]),
}).strict();

export default UserUpdateWithWhereUniqueWithoutWorkspacesInputSchema;
