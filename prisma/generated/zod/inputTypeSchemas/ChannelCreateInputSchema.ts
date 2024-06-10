import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedOneWithoutChannelsInputSchema } from './WorkspaceCreateNestedOneWithoutChannelsInputSchema';

export const ChannelCreateInputSchema: z.ZodType<Prisma.ChannelCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutChannelsInputSchema)
}).strict();

export default ChannelCreateInputSchema;
