import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ChannelCreateManyInputSchema: z.ZodType<Prisma.ChannelCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  workspaceId: z.string()
}).strict();

export default ChannelCreateManyInputSchema;
