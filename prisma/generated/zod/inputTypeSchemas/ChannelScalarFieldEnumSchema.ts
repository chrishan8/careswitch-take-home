import { z } from 'zod';

export const ChannelScalarFieldEnumSchema = z.enum(['id','name','description','workspaceId']);

export default ChannelScalarFieldEnumSchema;
