import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkspaceUpdateOneRequiredWithoutChannelsNestedInputSchema } from './WorkspaceUpdateOneRequiredWithoutChannelsNestedInputSchema';

export const ChannelUpdateInputSchema: z.ZodType<Prisma.ChannelUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutChannelsNestedInputSchema).optional()
}).strict();

export default ChannelUpdateInputSchema;
