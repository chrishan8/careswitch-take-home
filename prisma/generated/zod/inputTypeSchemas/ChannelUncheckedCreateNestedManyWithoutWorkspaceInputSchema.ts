import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelCreateWithoutWorkspaceInputSchema } from './ChannelCreateWithoutWorkspaceInputSchema';
import { ChannelUncheckedCreateWithoutWorkspaceInputSchema } from './ChannelUncheckedCreateWithoutWorkspaceInputSchema';
import { ChannelCreateOrConnectWithoutWorkspaceInputSchema } from './ChannelCreateOrConnectWithoutWorkspaceInputSchema';
import { ChannelCreateManyWorkspaceInputEnvelopeSchema } from './ChannelCreateManyWorkspaceInputEnvelopeSchema';
import { ChannelWhereUniqueInputSchema } from './ChannelWhereUniqueInputSchema';

export const ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutWorkspaceInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutWorkspaceInputSchema),z.lazy(() => ChannelCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyWorkspaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ChannelUncheckedCreateNestedManyWithoutWorkspaceInputSchema;
