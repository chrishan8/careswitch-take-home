import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutOwnedWorkspacesInputSchema } from './UserCreateWithoutOwnedWorkspacesInputSchema';
import { UserUncheckedCreateWithoutOwnedWorkspacesInputSchema } from './UserUncheckedCreateWithoutOwnedWorkspacesInputSchema';
import { UserCreateOrConnectWithoutOwnedWorkspacesInputSchema } from './UserCreateOrConnectWithoutOwnedWorkspacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutOwnedWorkspacesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedWorkspacesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedWorkspacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedWorkspacesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutOwnedWorkspacesInputSchema;
