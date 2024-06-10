import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelIncludeSchema } from '../inputTypeSchemas/ChannelIncludeSchema'
import { ChannelWhereUniqueInputSchema } from '../inputTypeSchemas/ChannelWhereUniqueInputSchema'
import { ChannelCreateInputSchema } from '../inputTypeSchemas/ChannelCreateInputSchema'
import { ChannelUncheckedCreateInputSchema } from '../inputTypeSchemas/ChannelUncheckedCreateInputSchema'
import { ChannelUpdateInputSchema } from '../inputTypeSchemas/ChannelUpdateInputSchema'
import { ChannelUncheckedUpdateInputSchema } from '../inputTypeSchemas/ChannelUncheckedUpdateInputSchema'
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

export const ChannelUpsertArgsSchema: z.ZodType<Prisma.ChannelUpsertArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereUniqueInputSchema,
  create: z.union([ ChannelCreateInputSchema,ChannelUncheckedCreateInputSchema ]),
  update: z.union([ ChannelUpdateInputSchema,ChannelUncheckedUpdateInputSchema ]),
}).strict() ;

export default ChannelUpsertArgsSchema;
