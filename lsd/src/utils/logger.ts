import { getEnv } from "./env"

const debug = (info: string): void => {
  if(getEnv('NODE_ENV') === 'development') {
    console.info(info);
  }
}

const error = (err: string): void => {
  console.error(err);
}

const logger = {
  debug,
  error
}

export default logger;