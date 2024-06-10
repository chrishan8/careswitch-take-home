import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedManyWithoutOwnerInputSchema } from './WorkspaceCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserCreateWithoutWorkspacesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  ownedWorkspaces: z.lazy(() => WorkspaceCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateWithoutWorkspacesInputSchema;
