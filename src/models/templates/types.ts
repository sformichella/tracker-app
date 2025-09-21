import type { ValidateFunction } from 'ajv';

type Template = {
  name: string;
  validate: ValidateFunction;
}

type SqlTemplate = {
  id: string;
  name: string;
  schema: string;
}

export type {
  Template,
  SqlTemplate,
}
