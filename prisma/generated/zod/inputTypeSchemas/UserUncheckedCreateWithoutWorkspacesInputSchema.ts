import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema } from './WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema';

export const UserUncheckedCreateWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWorkspacesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  ownedWorkspaces: z.lazy(() => WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutWorkspacesInputSchema;
