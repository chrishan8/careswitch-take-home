import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelWhereUniqueInputSchema } from './ChannelWhereUniqueInputSchema';
import { ChannelCreateWithoutWorkspaceInputSchema } from './ChannelCreateWithoutWorkspaceInputSchema';
import { ChannelUncheckedCreateWithoutWorkspaceInputSchema } from './ChannelUncheckedCreateWithoutWorkspaceInputSchema';

export const ChannelCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChannelCreateWithoutWorkspaceInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default ChannelCreateOrConnectWithoutWorkspaceInputSchema;
