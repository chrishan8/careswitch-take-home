import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelCreateManyInputSchema } from '../inputTypeSchemas/ChannelCreateManyInputSchema'

export const ChannelCreateManyArgsSchema: z.ZodType<Prisma.ChannelCreateManyArgs> = z.object({
  data: z.union([ ChannelCreateManyInputSchema,ChannelCreateManyInputSchema.array() ]),
}).strict() ;

export default ChannelCreateManyArgsSchema;
