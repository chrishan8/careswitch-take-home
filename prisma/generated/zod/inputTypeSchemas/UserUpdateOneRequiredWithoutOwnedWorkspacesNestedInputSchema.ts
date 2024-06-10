import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutOwnedWorkspacesInputSchema } from './UserCreateWithoutOwnedWorkspacesInputSchema';
import { UserUncheckedCreateWithoutOwnedWorkspacesInputSchema } from './UserUncheckedCreateWithoutOwnedWorkspacesInputSchema';
import { UserCreateOrConnectWithoutOwnedWorkspacesInputSchema } from './UserCreateOrConnectWithoutOwnedWorkspacesInputSchema';
import { UserUpsertWithoutOwnedWorkspacesInputSchema } from './UserUpsertWithoutOwnedWorkspacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutOwnedWorkspacesInputSchema } from './UserUpdateToOneWithWhereWithoutOwnedWorkspacesInputSchema';
import { UserUpdateWithoutOwnedWorkspacesInputSchema } from './UserUpdateWithoutOwnedWorkspacesInputSchema';
import { UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema } from './UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema';

export const UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedWorkspacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedWorkspacesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOwnedWorkspacesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUpdateWithoutOwnedWorkspacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInputSchema;
