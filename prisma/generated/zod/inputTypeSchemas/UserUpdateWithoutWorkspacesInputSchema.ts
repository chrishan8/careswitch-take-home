import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkspaceUpdateManyWithoutOwnerNestedInputSchema } from './WorkspaceUpdateManyWithoutOwnerNestedInputSchema';

export const UserUpdateWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUpdateWithoutWorkspacesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownedWorkspaces: z.lazy(() => WorkspaceUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutWorkspacesInputSchema;
