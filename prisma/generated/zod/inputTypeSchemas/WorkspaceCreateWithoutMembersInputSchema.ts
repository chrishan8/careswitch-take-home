import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutOwnedWorkspacesInputSchema } from './UserCreateNestedOneWithoutOwnedWorkspacesInputSchema';
import { ChannelCreateNestedManyWithoutWorkspaceInputSchema } from './ChannelCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceCreateWithoutMembersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedWorkspacesInputSchema),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateWithoutMembersInputSchema;
