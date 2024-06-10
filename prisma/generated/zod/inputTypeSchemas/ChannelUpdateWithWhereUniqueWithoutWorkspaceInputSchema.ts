import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelWhereUniqueInputSchema } from './ChannelWhereUniqueInputSchema';
import { ChannelUpdateWithoutWorkspaceInputSchema } from './ChannelUpdateWithoutWorkspaceInputSchema';
import { ChannelUncheckedUpdateWithoutWorkspaceInputSchema } from './ChannelUncheckedUpdateWithoutWorkspaceInputSchema';

export const ChannelUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChannelUpdateWithoutWorkspaceInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutWorkspaceInputSchema) ]),
}).strict();

export default ChannelUpdateWithWhereUniqueWithoutWorkspaceInputSchema;
