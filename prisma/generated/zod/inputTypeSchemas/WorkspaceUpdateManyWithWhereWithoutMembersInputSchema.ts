import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceScalarWhereInputSchema } from './WorkspaceScalarWhereInputSchema';
import { WorkspaceUpdateManyMutationInputSchema } from './WorkspaceUpdateManyMutationInputSchema';
import { WorkspaceUncheckedUpdateManyWithoutMembersInputSchema } from './WorkspaceUncheckedUpdateManyWithoutMembersInputSchema';

export const WorkspaceUpdateManyWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceUpdateManyWithWhereWithoutMembersInput> = z.object({
  where: z.lazy(() => WorkspaceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkspaceUpdateManyMutationInputSchema),z.lazy(() => WorkspaceUncheckedUpdateManyWithoutMembersInputSchema) ]),
}).strict();

export default WorkspaceUpdateManyWithWhereWithoutMembersInputSchema;
