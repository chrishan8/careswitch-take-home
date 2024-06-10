import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelWhereInputSchema } from './ChannelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { WorkspaceRelationFilterSchema } from './WorkspaceRelationFilterSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const ChannelWhereUniqueInputSchema: z.ZodType<Prisma.ChannelWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChannelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChannelWhereInputSchema),z.lazy(() => ChannelWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  workspace: z.union([ z.lazy(() => WorkspaceRelationFilterSchema),z.lazy(() => WorkspaceWhereInputSchema) ]).optional(),
}).strict());

export default ChannelWhereUniqueInputSchema;
