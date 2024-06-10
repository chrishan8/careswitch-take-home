import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelUpdateManyMutationInputSchema } from '../inputTypeSchemas/ChannelUpdateManyMutationInputSchema'
import { ChannelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ChannelUncheckedUpdateManyInputSchema'
import { ChannelWhereInputSchema } from '../inputTypeSchemas/ChannelWhereInputSchema'

export const ChannelUpdateManyArgsSchema: z.ZodType<Prisma.ChannelUpdateManyArgs> = z.object({
  data: z.union([ ChannelUpdateManyMutationInputSchema,ChannelUncheckedUpdateManyInputSchema ]),
  where: ChannelWhereInputSchema.optional(),
}).strict() ;

export default ChannelUpdateManyArgsSchema;
