import type { Ajv } from "ajv";

import { CustomError } from "../../utils";

import { SqlTemplate, Template } from "./types";

const parseSqlTemplate = (ajv: Ajv, template: SqlTemplate): Template => {
  let validate = ajv.getSchema(template.id);

  if (!validate) {
    let parsed: object;

    try {
      parsed = JSON.parse(template.schema);
    } catch (err) {
      throw new CustomError({
        message: 'Invalid template',
        debug: {
          message: 'Failed to parse template schema as JSON',
          schema: template.schema,
          error: err,
        }
      })
    }

    try {
      validate = ajv.compile(parsed);
    } catch (err) {
      throw new CustomError({
        message: 'Invalid template',
        debug: {
          message: 'Failed to compile template schema',
          schema: parsed,
          error: err,
        }
      });
    }
  }

  return {
    name: template.name,
    validate,
  }
};

export {
  parseSqlTemplate,
};
