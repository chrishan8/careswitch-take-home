import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChannelCreateWithoutWorkspaceInputSchema } from './ChannelCreateWithoutWorkspaceInputSchema';
import { ChannelUncheckedCreateWithoutWorkspaceInputSchema } from './ChannelUncheckedCreateWithoutWorkspaceInputSchema';
import { ChannelCreateOrConnectWithoutWorkspaceInputSchema } from './ChannelCreateOrConnectWithoutWorkspaceInputSchema';
import { ChannelUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './ChannelUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { ChannelCreateManyWorkspaceInputEnvelopeSchema } from './ChannelCreateManyWorkspaceInputEnvelopeSchema';
import { ChannelWhereUniqueInputSchema } from './ChannelWhereUniqueInputSchema';
import { ChannelUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './ChannelUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { ChannelUpdateManyWithWhereWithoutWorkspaceInputSchema } from './ChannelUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { ChannelScalarWhereInputSchema } from './ChannelScalarWhereInputSchema';

export const ChannelUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.ChannelUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChannelCreateWithoutWorkspaceInputSchema),z.lazy(() => ChannelCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => ChannelUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => ChannelUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChannelCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => ChannelCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChannelUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => ChannelUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChannelCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChannelWhereUniqueInputSchema),z.lazy(() => ChannelWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChannelUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => ChannelUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChannelUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => ChannelUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChannelScalarWhereInputSchema),z.lazy(() => ChannelScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ChannelUpdateManyWithoutWorkspaceNestedInputSchema;
