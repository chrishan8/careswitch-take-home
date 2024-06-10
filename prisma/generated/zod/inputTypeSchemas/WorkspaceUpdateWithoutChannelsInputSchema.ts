import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInputSchema } from './UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInputSchema';
import { UserUpdateManyWithoutWorkspacesNestedInputSchema } from './UserUpdateManyWithoutWorkspacesNestedInputSchema';

export const WorkspaceUpdateWithoutChannelsInputSchema: z.ZodType<Prisma.WorkspaceUpdateWithoutChannelsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInputSchema).optional(),
  members: z.lazy(() => UserUpdateManyWithoutWorkspacesNestedInputSchema).optional()
}).strict();

export default WorkspaceUpdateWithoutChannelsInputSchema;
