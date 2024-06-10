import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceFindManyArgsSchema } from "../outputTypeSchemas/WorkspaceFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  ownedWorkspaces: z.union([z.boolean(),z.lazy(() => WorkspaceFindManyArgsSchema)]).optional(),
  workspaces: z.union([z.boolean(),z.lazy(() => WorkspaceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
