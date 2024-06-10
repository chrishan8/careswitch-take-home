import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { WorkspaceUpdateWithoutChannelsInputSchema } from './WorkspaceUpdateWithoutChannelsInputSchema';
import { WorkspaceUncheckedUpdateWithoutChannelsInputSchema } from './WorkspaceUncheckedUpdateWithoutChannelsInputSchema';

export const WorkspaceUpdateToOneWithWhereWithoutChannelsInputSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutChannelsInput> = z.object({
  where: z.lazy(() => WorkspaceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkspaceUpdateWithoutChannelsInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutChannelsInputSchema) ]),
}).strict();

export default WorkspaceUpdateToOneWithWhereWithoutChannelsInputSchema;
