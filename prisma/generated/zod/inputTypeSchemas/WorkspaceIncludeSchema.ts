import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ChannelFindManyArgsSchema } from "../outputTypeSchemas/ChannelFindManyArgsSchema"
import { WorkspaceCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkspaceCountOutputTypeArgsSchema"

export const WorkspaceIncludeSchema: z.ZodType<Prisma.WorkspaceInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  channels: z.union([z.boolean(),z.lazy(() => ChannelFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkspaceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default WorkspaceIncludeSchema;
