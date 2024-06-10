import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelWhereUniqueInputSchema } from './ChannelWhereUniqueInputSchema';
import { ChannelUpdateWithoutWorkspaceInputSchema } from './ChannelUpdateWithoutWorkspaceInputSchema';
import { ChannelUncheckedUpdateWithoutWorkspaceInputSchema } from './ChannelUncheckedUpdateWithoutWorkspaceInputSchema';
import { ChannelCreateWithoutWorkspaceInputSchema } from './ChannelCreateWithoutWorkspaceInputSchema';
import { ChannelUncheckedCreateWithoutWorkspaceInputSchema } from './ChannelUncheckedCreateWithoutWorkspaceInputSchema';

export const ChannelUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => ChannelWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChannelUpdateWithoutWorkspaceInputSchema),z.lazy(() => ChannelUncheckedUpdateWithoutWorkspaceInputSchema) ]),
  create: z.union([ z.lazy(() => ChannelCreateWithoutWorkspaceInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default ChannelUpsertWithWhereUniqueWithoutWorkspaceInputSchema;
