import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ChannelCreateWithoutWorkspaceInputSchema: z.ZodType<Prisma.ChannelCreateWithoutWorkspaceInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default ChannelCreateWithoutWorkspaceInputSchema;
