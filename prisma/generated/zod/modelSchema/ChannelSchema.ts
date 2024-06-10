import { z } from 'zod';

/////////////////////////////////////////
// CHANNEL SCHEMA
/////////////////////////////////////////

export const ChannelSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  workspaceId: z.string(),
})

export type Channel = z.infer<typeof ChannelSchema>

export default ChannelSchema;
