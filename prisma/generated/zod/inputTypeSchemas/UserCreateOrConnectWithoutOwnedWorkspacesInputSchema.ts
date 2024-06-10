import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutOwnedWorkspacesInputSchema } from './UserCreateWithoutOwnedWorkspacesInputSchema';
import { UserUncheckedCreateWithoutOwnedWorkspacesInputSchema } from './UserUncheckedCreateWithoutOwnedWorkspacesInputSchema';

export const UserCreateOrConnectWithoutOwnedWorkspacesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedWorkspacesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedWorkspacesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutOwnedWorkspacesInputSchema;
