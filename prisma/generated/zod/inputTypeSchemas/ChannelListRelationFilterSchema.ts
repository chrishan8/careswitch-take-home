import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelWhereInputSchema } from './ChannelWhereInputSchema';

export const ChannelListRelationFilterSchema: z.ZodType<Prisma.ChannelListRelationFilter> = z.object({
  every: z.lazy(() => ChannelWhereInputSchema).optional(),
  some: z.lazy(() => ChannelWhereInputSchema).optional(),
  none: z.lazy(() => ChannelWhereInputSchema).optional()
}).strict();

export default ChannelListRelationFilterSchema;
