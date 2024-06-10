import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateManyOwnerInputSchema } from './WorkspaceCreateManyOwnerInputSchema';

export const WorkspaceCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.WorkspaceCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkspaceCreateManyOwnerInputSchema),z.lazy(() => WorkspaceCreateManyOwnerInputSchema).array() ]),
}).strict();

export default WorkspaceCreateManyOwnerInputEnvelopeSchema;
