import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WorkspaceOrderByWithRelationInputSchema } from './WorkspaceOrderByWithRelationInputSchema';

export const ChannelOrderByWithRelationInputSchema: z.ZodType<Prisma.ChannelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  workspace: z.lazy(() => WorkspaceOrderByWithRelationInputSchema).optional()
}).strict();

export default ChannelOrderByWithRelationInputSchema;
