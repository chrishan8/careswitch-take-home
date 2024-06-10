import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema } from './UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema';

export const WorkspaceUncheckedCreateWithoutChannelsInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutChannelsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema).optional()
}).strict();

export default WorkspaceUncheckedCreateWithoutChannelsInputSchema;
