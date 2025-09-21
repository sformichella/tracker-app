type CustomErrorSeverity = 'INFO' | 'UNEXPECTED' | 'CRITICAL';

interface ICustomError extends Error {
  severity: CustomErrorSeverity;
  code?: string | undefined;
  debug?: any;
}

type CustomErrorArgs = {
  code?: string | undefined;
  message?: string | undefined;
  severity?: CustomErrorSeverity | undefined;
  debug?: any;
};

type CustomErrorJson = {
  message: string;
  severity: string;
  code?: string | undefined;
  debug?: string | undefined;
}

export type {
  CustomErrorSeverity,
  ICustomError,
  CustomErrorArgs,
  CustomErrorJson,
};
