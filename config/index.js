// Middleware configuration
module.exports = (app) => {
  // Because this is a server that will accept requests from outside and it will be hosted on a server with a `proxy`, express needs to know that it should trust that setting.
  // Services like heroku use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: [process.env.ORIGIN || "http://localhost:3000", "https://action-sequencer.onrender.com"],
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Set the CORS headers for each response
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ORIGIN || 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

  // Your API routes go here
};
