import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedManyWithoutOwnerInputSchema } from './WorkspaceCreateNestedManyWithoutOwnerInputSchema';
import { WorkspaceCreateNestedManyWithoutMembersInputSchema } from './WorkspaceCreateNestedManyWithoutMembersInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  ownedWorkspaces: z.lazy(() => WorkspaceCreateNestedManyWithoutOwnerInputSchema).optional(),
  workspaces: z.lazy(() => WorkspaceCreateNestedManyWithoutMembersInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
