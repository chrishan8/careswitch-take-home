import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateWithoutMembersInputSchema } from './WorkspaceUpdateWithoutMembersInputSchema';
import { WorkspaceUncheckedUpdateWithoutMembersInputSchema } from './WorkspaceUncheckedUpdateWithoutMembersInputSchema';
import { WorkspaceCreateWithoutMembersInputSchema } from './WorkspaceCreateWithoutMembersInputSchema';
import { WorkspaceUncheckedCreateWithoutMembersInputSchema } from './WorkspaceUncheckedCreateWithoutMembersInputSchema';

export const WorkspaceUpsertWithWhereUniqueWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithWhereUniqueWithoutMembersInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema) ]),
}).strict();

export default WorkspaceUpsertWithWhereUniqueWithoutMembersInputSchema;
