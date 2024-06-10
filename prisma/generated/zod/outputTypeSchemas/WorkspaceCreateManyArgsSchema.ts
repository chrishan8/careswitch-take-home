import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateManyInputSchema } from '../inputTypeSchemas/WorkspaceCreateManyInputSchema'

export const WorkspaceCreateManyArgsSchema: z.ZodType<Prisma.WorkspaceCreateManyArgs> = z.object({
  data: z.union([ WorkspaceCreateManyInputSchema,WorkspaceCreateManyInputSchema.array() ]),
}).strict() ;

export default WorkspaceCreateManyArgsSchema;
