import { Ajv } from "ajv";
import { Sql } from "postgres";

type GetTemplateArgs = {
  ajvInstance: Ajv;
  sqlClient: Sql;
  templateId: string;
};

export type {
  GetTemplateArgs,
};
