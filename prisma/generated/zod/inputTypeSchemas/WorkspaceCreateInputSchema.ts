import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutOwnedWorkspacesInputSchema } from './UserCreateNestedOneWithoutOwnedWorkspacesInputSchema';
import { UserCreateNestedManyWithoutWorkspacesInputSchema } from './UserCreateNestedManyWithoutWorkspacesInputSchema';
import { ChannelCreateNestedManyWithoutWorkspaceInputSchema } from './ChannelCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateInputSchema: z.ZodType<Prisma.WorkspaceCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedWorkspacesInputSchema),
  members: z.lazy(() => UserCreateNestedManyWithoutWorkspacesInputSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateInputSchema;
