import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUpdateWithoutChannelsInputSchema } from './WorkspaceUpdateWithoutChannelsInputSchema';
import { WorkspaceUncheckedUpdateWithoutChannelsInputSchema } from './WorkspaceUncheckedUpdateWithoutChannelsInputSchema';
import { WorkspaceCreateWithoutChannelsInputSchema } from './WorkspaceCreateWithoutChannelsInputSchema';
import { WorkspaceUncheckedCreateWithoutChannelsInputSchema } from './WorkspaceUncheckedCreateWithoutChannelsInputSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceUpsertWithoutChannelsInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutChannelsInput> = z.object({
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutChannelsInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutChannelsInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutChannelsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutChannelsInputSchema) ]),
  where: z.lazy(() => WorkspaceWhereInputSchema).optional()
}).strict();

export default WorkspaceUpsertWithoutChannelsInputSchema;
