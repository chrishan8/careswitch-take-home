import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelSelectSchema } from '../inputTypeSchemas/ChannelSelectSchema';
import { ChannelIncludeSchema } from '../inputTypeSchemas/ChannelIncludeSchema';

export const ChannelArgsSchema: z.ZodType<Prisma.ChannelDefaultArgs> = z.object({
  select: z.lazy(() => ChannelSelectSchema).optional(),
  include: z.lazy(() => ChannelIncludeSchema).optional(),
}).strict();

export default ChannelArgsSchema;
