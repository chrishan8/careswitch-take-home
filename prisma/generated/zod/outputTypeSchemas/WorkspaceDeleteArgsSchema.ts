import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceIncludeSchema } from '../inputTypeSchemas/WorkspaceIncludeSchema'
import { WorkspaceWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ChannelFindManyArgsSchema } from "../outputTypeSchemas/ChannelFindManyArgsSchema"
import { WorkspaceCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkspaceCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceSelectSchema: z.ZodType<Prisma.WorkspaceSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  channels: z.union([z.boolean(),z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkspaceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WorkspaceDeleteArgsSchema: z.ZodType<Prisma.WorkspaceDeleteArgs> = z.object({
  select: WorkspaceSelectSchema.optional(),
  include: WorkspaceIncludeSchema.optional(),
  where: WorkspaceWhereUniqueInputSchema,
}).strict() ;

export default WorkspaceDeleteArgsSchema;
