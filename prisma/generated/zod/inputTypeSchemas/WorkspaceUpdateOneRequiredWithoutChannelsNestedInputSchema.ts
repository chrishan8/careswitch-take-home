import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutChannelsInputSchema } from './WorkspaceCreateWithoutChannelsInputSchema';
import { WorkspaceUncheckedCreateWithoutChannelsInputSchema } from './WorkspaceUncheckedCreateWithoutChannelsInputSchema';
import { WorkspaceCreateOrConnectWithoutChannelsInputSchema } from './WorkspaceCreateOrConnectWithoutChannelsInputSchema';
import { WorkspaceUpsertWithoutChannelsInputSchema } from './WorkspaceUpsertWithoutChannelsInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateToOneWithWhereWithoutChannelsInputSchema } from './WorkspaceUpdateToOneWithWhereWithoutChannelsInputSchema';
import { WorkspaceUpdateWithoutChannelsInputSchema } from './WorkspaceUpdateWithoutChannelsInputSchema';
import { WorkspaceUncheckedUpdateWithoutChannelsInputSchema } from './WorkspaceUncheckedUpdateWithoutChannelsInputSchema';

export const WorkspaceUpdateOneRequiredWithoutChannelsNestedInputSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutChannelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutChannelsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutChannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutChannelsInputSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutChannelsInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutChannelsInputSchema),z.lazy(() => WorkspaceUpdateWithoutChannelsInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutChannelsInputSchema) ]).optional(),
}).strict();

export default WorkspaceUpdateOneRequiredWithoutChannelsNestedInputSchema;
