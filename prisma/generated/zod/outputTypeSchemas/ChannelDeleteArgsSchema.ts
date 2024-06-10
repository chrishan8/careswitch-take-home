import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelIncludeSchema } from '../inputTypeSchemas/ChannelIncludeSchema'
import { ChannelWhereUniqueInputSchema } from '../inputTypeSchemas/ChannelWhereUniqueInputSchema'
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChannelSelectSchema: z.ZodType<Prisma.ChannelSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
}).strict()

export const ChannelDeleteArgsSchema: z.ZodType<Prisma.ChannelDeleteArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
}).strict() ;

export default ChannelDeleteArgsSchema;
