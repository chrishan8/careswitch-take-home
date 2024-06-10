import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ChannelOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChannelOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ChannelOrderByRelationAggregateInputSchema;
