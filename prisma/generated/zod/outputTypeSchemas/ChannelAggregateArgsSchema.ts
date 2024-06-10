import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelWhereInputSchema } from '../inputTypeSchemas/ChannelWhereInputSchema'
import { ChannelOrderByWithRelationInputSchema } from '../inputTypeSchemas/ChannelOrderByWithRelationInputSchema'
import { ChannelWhereUniqueInputSchema } from '../inputTypeSchemas/ChannelWhereUniqueInputSchema'

export const ChannelAggregateArgsSchema: z.ZodType<Prisma.ChannelAggregateArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithRelationInputSchema.array(),ChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: ChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ChannelAggregateArgsSchema;
