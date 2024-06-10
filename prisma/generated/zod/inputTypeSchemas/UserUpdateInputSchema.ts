import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkspaceUpdateManyWithoutOwnerNestedInputSchema } from './WorkspaceUpdateManyWithoutOwnerNestedInputSchema';
import { WorkspaceUpdateManyWithoutMembersNestedInputSchema } from './WorkspaceUpdateManyWithoutMembersNestedInputSchema';

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownedWorkspaces: z.lazy(() => WorkspaceUpdateManyWithoutOwnerNestedInputSchema).optional(),
  workspaces: z.lazy(() => WorkspaceUpdateManyWithoutMembersNestedInputSchema).optional()
}).strict();

export default UserUpdateInputSchema;
