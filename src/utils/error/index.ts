import { inspect } from "node:util";

import {
  CustomErrorArgs,
  CustomErrorJson,
  CustomErrorSeverity,
  ICustomError
} from "./types";

class CustomError extends Error implements ICustomError {
  code?: string | undefined;
  severity: CustomErrorSeverity;
  debug?: any;

  constructor(args: CustomErrorArgs) {
    const {
      code,
      message,
      severity,
      debug,
    } = args;

    super(message);

    this.severity = severity || 'UNEXPECTED';
    this.code = code;
    this.debug = debug;
  }

  json(): CustomErrorJson {
    const json: CustomErrorJson = {
      message: this.message,
      severity: this.severity,
    }

    if (this.code) {
      json.code = this.code;
    }

    if (this.debug) {
      json.debug = inspect(this.debug);
    }

    return json;
  }
}

export * from './types';

export {
  CustomError,
}
