import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkspaceUncheckedUpdateManyWithoutOwnerNestedInputSchema } from './WorkspaceUncheckedUpdateManyWithoutOwnerNestedInputSchema';
import { WorkspaceUncheckedUpdateManyWithoutMembersNestedInputSchema } from './WorkspaceUncheckedUpdateManyWithoutMembersNestedInputSchema';

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownedWorkspaces: z.lazy(() => WorkspaceUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  workspaces: z.lazy(() => WorkspaceUncheckedUpdateManyWithoutMembersNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateInputSchema;
