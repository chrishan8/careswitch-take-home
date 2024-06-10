import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelScalarWhereInputSchema } from './ChannelScalarWhereInputSchema';
import { ChannelUpdateManyMutationInputSchema } from './ChannelUpdateManyMutationInputSchema';
import { ChannelUncheckedUpdateManyWithoutWorkspaceInputSchema } from './ChannelUncheckedUpdateManyWithoutWorkspaceInputSchema';

export const ChannelUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => ChannelScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChannelUpdateManyMutationInputSchema),z.lazy(() => ChannelUncheckedUpdateManyWithoutWorkspaceInputSchema) ]),
}).strict();

export default ChannelUpdateManyWithWhereWithoutWorkspaceInputSchema;
