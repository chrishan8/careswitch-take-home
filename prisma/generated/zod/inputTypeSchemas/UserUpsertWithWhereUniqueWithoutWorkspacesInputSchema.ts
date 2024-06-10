import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutWorkspacesInputSchema } from './UserUpdateWithoutWorkspacesInputSchema';
import { UserUncheckedUpdateWithoutWorkspacesInputSchema } from './UserUncheckedUpdateWithoutWorkspacesInputSchema';
import { UserCreateWithoutWorkspacesInputSchema } from './UserCreateWithoutWorkspacesInputSchema';
import { UserUncheckedCreateWithoutWorkspacesInputSchema } from './UserUncheckedCreateWithoutWorkspacesInputSchema';

export const UserUpsertWithWhereUniqueWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutWorkspacesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWorkspacesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema) ]),
}).strict();

export default UserUpsertWithWhereUniqueWithoutWorkspacesInputSchema;
