import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"

export const ChannelSelectSchema: z.ZodType<Prisma.ChannelSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
}).strict()

export default ChannelSelectSchema;
