import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema } from './WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema';
import { WorkspaceUncheckedCreateNestedManyWithoutMembersInputSchema } from './WorkspaceUncheckedCreateNestedManyWithoutMembersInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  ownedWorkspaces: z.lazy(() => WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  workspaces: z.lazy(() => WorkspaceUncheckedCreateNestedManyWithoutMembersInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
