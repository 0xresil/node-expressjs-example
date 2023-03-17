import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const port = 8080;

// add routes to v1 api
app.use('/v1', routes);

// add cors
const corsOptions = {
  origin: `http://localhost:${port}`
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});
