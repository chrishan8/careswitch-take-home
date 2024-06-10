import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelCreateManyWorkspaceInputSchema } from './ChannelCreateManyWorkspaceInputSchema';

export const ChannelCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.ChannelCreateManyWorkspaceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChannelCreateManyWorkspaceInputSchema),z.lazy(() => ChannelCreateManyWorkspaceInputSchema).array() ]),
}).strict();

export default ChannelCreateManyWorkspaceInputEnvelopeSchema;
