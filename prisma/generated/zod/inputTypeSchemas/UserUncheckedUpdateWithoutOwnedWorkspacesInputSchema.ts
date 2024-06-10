import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkspaceUncheckedUpdateManyWithoutMembersNestedInputSchema } from './WorkspaceUncheckedUpdateManyWithoutMembersNestedInputSchema';

export const UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutOwnedWorkspacesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  workspaces: z.lazy(() => WorkspaceUncheckedUpdateManyWithoutMembersNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutOwnedWorkspacesInputSchema;
