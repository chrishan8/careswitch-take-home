import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email']);

export default UserScalarFieldEnumSchema;
