import app from './app';
import { Config } from './config';

const startServer = () => {
  try {
    const { PORT } = Config;
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
