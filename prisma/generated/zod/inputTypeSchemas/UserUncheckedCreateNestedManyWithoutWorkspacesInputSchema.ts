import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutWorkspacesInputSchema } from './UserCreateWithoutWorkspacesInputSchema';
import { UserUncheckedCreateWithoutWorkspacesInputSchema } from './UserUncheckedCreateWithoutWorkspacesInputSchema';
import { UserCreateOrConnectWithoutWorkspacesInputSchema } from './UserCreateOrConnectWithoutWorkspacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutWorkspacesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWorkspacesInputSchema),z.lazy(() => UserCreateWithoutWorkspacesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutWorkspacesInputSchema),z.lazy(() => UserCreateOrConnectWithoutWorkspacesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema;
