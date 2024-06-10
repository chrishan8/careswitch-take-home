import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutMembersInputSchema } from './WorkspaceCreateWithoutMembersInputSchema';
import { WorkspaceUncheckedCreateWithoutMembersInputSchema } from './WorkspaceUncheckedCreateWithoutMembersInputSchema';
import { WorkspaceCreateOrConnectWithoutMembersInputSchema } from './WorkspaceCreateOrConnectWithoutMembersInputSchema';
import { WorkspaceUpsertWithWhereUniqueWithoutMembersInputSchema } from './WorkspaceUpsertWithWhereUniqueWithoutMembersInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateWithWhereUniqueWithoutMembersInputSchema } from './WorkspaceUpdateWithWhereUniqueWithoutMembersInputSchema';
import { WorkspaceUpdateManyWithWhereWithoutMembersInputSchema } from './WorkspaceUpdateManyWithWhereWithoutMembersInputSchema';
import { WorkspaceScalarWhereInputSchema } from './WorkspaceScalarWhereInputSchema';

export const WorkspaceUpdateManyWithoutMembersNestedInputSchema: z.ZodType<Prisma.WorkspaceUpdateManyWithoutMembersNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutMembersInputSchema),z.lazy(() => WorkspaceCreateWithoutMembersInputSchema).array(),z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputSchema),z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutMembersInputSchema),z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutMembersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutMembersInputSchema),z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutMembersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkspaceUpdateManyWithWhereWithoutMembersInputSchema),z.lazy(() => WorkspaceUpdateManyWithWhereWithoutMembersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkspaceScalarWhereInputSchema),z.lazy(() => WorkspaceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceUpdateManyWithoutMembersNestedInputSchema;
