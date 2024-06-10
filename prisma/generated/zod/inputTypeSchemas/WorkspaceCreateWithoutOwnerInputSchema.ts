import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedManyWithoutWorkspacesInputSchema } from './UserCreateNestedManyWithoutWorkspacesInputSchema';
import { ChannelCreateNestedManyWithoutWorkspaceInputSchema } from './ChannelCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => UserCreateNestedManyWithoutWorkspacesInputSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateWithoutOwnerInputSchema;
