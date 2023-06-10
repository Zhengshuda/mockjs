const env: { [name: string]: string } = {};

export const setEnv = (key: string, value: string) => {
  env[key] = value;
}

export const getEnv = (key: string): string => {
  return env[key] || '';
}