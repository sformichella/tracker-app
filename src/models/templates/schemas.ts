import { z } from 'zod';

import { SqlTemplate } from './types';

const SqlTemplateSchema: z.ZodType<SqlTemplate> = z.object({
  id: z.string(),
  name: z.string(),
  schema: z.string(),
});

export {
  SqlTemplateSchema,
}
