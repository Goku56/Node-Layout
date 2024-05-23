import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
  try {
    const { PORT } = Config;
    app.listen(PORT, () => logger.info(`Server listening on ${PORT}`));
  } catch (err: unknown) {
    if (err instanceof Error) {
      logger.error(err.message);
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
};

startServer();
