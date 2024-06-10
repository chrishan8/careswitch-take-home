import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateWithoutMembersInputSchema } from './WorkspaceUpdateWithoutMembersInputSchema';
import { WorkspaceUncheckedUpdateWithoutMembersInputSchema } from './WorkspaceUncheckedUpdateWithoutMembersInputSchema';

export const WorkspaceUpdateWithWhereUniqueWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceUpdateWithWhereUniqueWithoutMembersInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkspaceUpdateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputSchema) ]),
}).strict();

export default WorkspaceUpdateWithWhereUniqueWithoutMembersInputSchema;
