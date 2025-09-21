import { CustomError } from "../../../utils";

import { SqlTemplateSchema } from "../schemas";
import { parseSqlTemplate } from "../utils";

import { GetTemplateArgs } from "./types";

const getTemplateById = async (args: GetTemplateArgs) => {
  const {
    ajvInstance,
    sqlClient,
    templateId,
  } = args;

  const query = `
    SELECT * FROM templates
    WHERE id = $1
  `;

  const result = await sqlClient`${query}`;

  if (result.count === 0) {
    return null;
  }

  if (result.count > 1) {
    throw new CustomError({
      message: 'Failed to fetch template',
      debug: `Can't get template by ID. Found ${result.count} templates with id ${templateId}`
    });
  }

  const parsed = SqlTemplateSchema.safeParse(result[0]);

  if (!parsed.success) {
    throw new CustomError({
      message: 'Failed to fetch template',
      debug: {
        message: 'Unexpected data from database',
        error: parsed.error,
      },
    });
  }

  return parseSqlTemplate(ajvInstance, parsed.data);
};

export {
  getTemplateById,
};
