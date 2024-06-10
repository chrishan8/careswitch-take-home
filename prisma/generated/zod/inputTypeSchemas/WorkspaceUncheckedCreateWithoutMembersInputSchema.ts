import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutMembersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceUncheckedCreateWithoutMembersInputSchema;
