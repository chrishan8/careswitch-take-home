import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutWorkspacesInputSchema } from './UserCreateWithoutWorkspacesInputSchema';
import { UserUncheckedCreateWithoutWorkspacesInputSchema } from './UserUncheckedCreateWithoutWorkspacesInputSchema';
import { UserCreateOrConnectWithoutWorkspacesInputSchema } from './UserCreateOrConnectWithoutWorkspacesInputSchema';
import { UserUpsertWithWhereUniqueWithoutWorkspacesInputSchema } from './UserUpsertWithWhereUniqueWithoutWorkspacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithWhereUniqueWithoutWorkspacesInputSchema } from './UserUpdateWithWhereUniqueWithoutWorkspacesInputSchema';
import { UserUpdateManyWithWhereWithoutWorkspacesInputSchema } from './UserUpdateManyWithWhereWithoutWorkspacesInputSchema';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';

export const UserUncheckedUpdateManyWithoutWorkspacesNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutWorkspacesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWorkspacesInputSchema),z.lazy(() => UserCreateWithoutWorkspacesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutWorkspacesInputSchema),z.lazy(() => UserCreateOrConnectWithoutWorkspacesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutWorkspacesInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutWorkspacesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutWorkspacesInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutWorkspacesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutWorkspacesInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutWorkspacesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserUncheckedUpdateManyWithoutWorkspacesNestedInputSchema;
