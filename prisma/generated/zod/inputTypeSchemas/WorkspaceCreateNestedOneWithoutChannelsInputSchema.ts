import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutChannelsInputSchema } from './WorkspaceCreateWithoutChannelsInputSchema';
import { WorkspaceUncheckedCreateWithoutChannelsInputSchema } from './WorkspaceUncheckedCreateWithoutChannelsInputSchema';
import { WorkspaceCreateOrConnectWithoutChannelsInputSchema } from './WorkspaceCreateOrConnectWithoutChannelsInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';

export const WorkspaceCreateNestedOneWithoutChannelsInputSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutChannelsInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutChannelsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutChannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutChannelsInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional()
}).strict();

export default WorkspaceCreateNestedOneWithoutChannelsInputSchema;
