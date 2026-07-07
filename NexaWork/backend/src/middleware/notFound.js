// 404 handler for unmatched routes. Must be registered before errorHandler.

function notFound(req, res, next) {
  res.status(404).json({
    success: false,
    error: {
      message: `Route not found: ${req.method} ${req.originalUrl}`,
    },
  });
}

export default notFound;
