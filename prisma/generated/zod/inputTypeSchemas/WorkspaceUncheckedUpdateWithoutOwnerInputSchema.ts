import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateManyWithoutWorkspacesNestedInputSchema } from './UserUncheckedUpdateManyWithoutWorkspacesNestedInputSchema';
import { ChannelUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './ChannelUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';

export const WorkspaceUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  members: z.lazy(() => UserUncheckedUpdateManyWithoutWorkspacesNestedInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional()
}).strict();

export default WorkspaceUncheckedUpdateWithoutOwnerInputSchema;
