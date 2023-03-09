import express from 'express';

const app = express();
const port = 8080;

// Define a route that responds to GET requests to the root URL ('/')
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World');
});

// Start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});
