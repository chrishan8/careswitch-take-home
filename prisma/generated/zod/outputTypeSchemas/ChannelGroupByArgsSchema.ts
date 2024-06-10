import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChannelWhereInputSchema } from '../inputTypeSchemas/ChannelWhereInputSchema'
import { ChannelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ChannelOrderByWithAggregationInputSchema'
import { ChannelScalarFieldEnumSchema } from '../inputTypeSchemas/ChannelScalarFieldEnumSchema'
import { ChannelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ChannelScalarWhereWithAggregatesInputSchema'

export const ChannelGroupByArgsSchema: z.ZodType<Prisma.ChannelGroupByArgs> = z.object({
  where: ChannelWhereInputSchema.optional(),
  orderBy: z.union([ ChannelOrderByWithAggregationInputSchema.array(),ChannelOrderByWithAggregationInputSchema ]).optional(),
  by: ChannelScalarFieldEnumSchema.array(),
  having: ChannelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ChannelGroupByArgsSchema;
