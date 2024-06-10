import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ChannelUncheckedCreateInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  workspaceId: z.string()
}).strict();

export default ChannelUncheckedCreateInputSchema;
