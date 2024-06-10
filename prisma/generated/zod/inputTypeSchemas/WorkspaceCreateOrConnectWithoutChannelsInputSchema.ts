import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceCreateWithoutChannelsInputSchema } from './WorkspaceCreateWithoutChannelsInputSchema';
import { WorkspaceUncheckedCreateWithoutChannelsInputSchema } from './WorkspaceUncheckedCreateWithoutChannelsInputSchema';

export const WorkspaceCreateOrConnectWithoutChannelsInputSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutChannelsInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutChannelsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutChannelsInputSchema) ]),
}).strict();

export default WorkspaceCreateOrConnectWithoutChannelsInputSchema;
