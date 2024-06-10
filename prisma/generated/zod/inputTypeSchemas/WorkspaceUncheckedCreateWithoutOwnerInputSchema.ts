import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema } from './UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema';
import { ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => UserUncheckedCreateNestedManyWithoutWorkspacesInputSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceUncheckedCreateWithoutOwnerInputSchema;
