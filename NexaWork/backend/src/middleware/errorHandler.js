// Centralized Express error handler.
// Place after all routes via `app.use(errorHandler)`.

function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  res.status(status).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV !== "production" && err.stack
        ? { stack: err.stack }
        : {}),
    },
  });
}

export default errorHandler;
