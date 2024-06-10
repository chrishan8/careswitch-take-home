import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUncheckedCreateNestedManyWithoutMembersInputSchema } from './WorkspaceUncheckedCreateNestedManyWithoutMembersInputSchema';

export const UserUncheckedCreateWithoutOwnedWorkspacesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOwnedWorkspacesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  workspaces: z.lazy(() => WorkspaceUncheckedCreateNestedManyWithoutMembersInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutOwnedWorkspacesInputSchema;
