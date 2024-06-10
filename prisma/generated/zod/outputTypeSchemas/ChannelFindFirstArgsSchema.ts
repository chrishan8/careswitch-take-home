import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelIncludeSchema } from '../inputTypeSchemas/ChannelIncludeSchema'
import { ChannelWhereInputSchema } from '../inputTypeSchemas/ChannelWhereInputSchema'
import { ChannelOrderByWithRelationInputSchema } from '../inputTypeSchemas/ChannelOrderByWithRelationInputSchema'
import { ChannelWhereUniqueInputSchema } from '../inputTypeSchemas/ChannelWhereUniqueInputSchema'
import { ChannelScalarFieldEnumSchema } from '../inputTypeSchemas/ChannelScalarFieldEnumSchema'
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

export const ChannelFindFirstArgsSchema: z.ZodType<Prisma.ChannelFindFirstArgs> = z.object({
  select: ChannelSelectSchema.optional(),
  include: ChannelIncludeSchema.optional(),
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChannelScalarFieldEnumSchema,ChannelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ChannelFindFirstArgsSchema;
