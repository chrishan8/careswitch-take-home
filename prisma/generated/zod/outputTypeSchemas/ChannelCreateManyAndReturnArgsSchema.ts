import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelCreateManyInputSchema } from '../inputTypeSchemas/ChannelCreateManyInputSchema'

export const ChannelCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ChannelCreateManyAndReturnArgs> = z.object({
  data: z.union([ ChannelCreateManyInputSchema,ChannelCreateManyInputSchema.array() ]),
}).strict() ;

export default ChannelCreateManyAndReturnArgsSchema;
