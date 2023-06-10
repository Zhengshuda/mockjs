import { getEnv } from "../mock/env"

const logger = (info: string): void => {
  if(getEnv('NODE_ENV') === 'development') {
    console.info(info);
  }
}

export default logger;