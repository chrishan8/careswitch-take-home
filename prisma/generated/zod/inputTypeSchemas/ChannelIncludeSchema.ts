import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"

export const ChannelIncludeSchema: z.ZodType<Prisma.ChannelInclude> = z.object({
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
}).strict()

export default ChannelIncludeSchema;
