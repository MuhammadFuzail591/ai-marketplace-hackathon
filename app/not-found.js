export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-6xl font-bold text-gray-400 mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h3>
      <p className="text-gray-600 mb-6">The page  looking for  exist.</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}