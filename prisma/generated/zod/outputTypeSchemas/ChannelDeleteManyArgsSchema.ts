import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelWhereInputSchema } from '../inputTypeSchemas/ChannelWhereInputSchema'

export const ChannelDeleteManyArgsSchema: z.ZodType<Prisma.ChannelDeleteManyArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
}).strict() ;

export default ChannelDeleteManyArgsSchema;
