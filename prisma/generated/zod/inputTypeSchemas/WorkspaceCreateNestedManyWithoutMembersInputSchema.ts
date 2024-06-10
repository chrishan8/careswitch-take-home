import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutMembersInputSchema } from './WorkspaceCreateWithoutMembersInputSchema';
import { WorkspaceUncheckedCreateWithoutMembersInputSchema } from './WorkspaceUncheckedCreateWithoutMembersInputSchema';
import { WorkspaceCreateOrConnectWithoutMembersInputSchema } from './WorkspaceCreateOrConnectWithoutMembersInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';

export const WorkspaceCreateNestedManyWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceCreateNestedManyWithoutMembersInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutMembersInputSchema),z.lazy(() => WorkspaceCreateWithoutMembersInputSchema).array(),z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputSchema),z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceCreateNestedManyWithoutMembersInputSchema;
