import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedManyWithoutMembersInputSchema } from './WorkspaceCreateNestedManyWithoutMembersInputSchema';

export const UserCreateWithoutOwnedWorkspacesInputSchema: z.ZodType<Prisma.UserCreateWithoutOwnedWorkspacesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  workspaces: z.lazy(() => WorkspaceCreateNestedManyWithoutMembersInputSchema).optional()
}).strict();

export default UserCreateWithoutOwnedWorkspacesInputSchema;
