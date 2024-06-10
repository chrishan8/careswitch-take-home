import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  ownedWorkspaces: z.boolean().optional(),
  workspaces: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
