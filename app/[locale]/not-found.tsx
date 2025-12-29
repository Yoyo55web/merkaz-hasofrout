
export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-semibold">Page introuvable</h1>
        <p className="mt-2 text-gray-600">
          La page demandée n’existe pas (ou a été déplacée).
        </p>
      </div>
    </main>
  );
}
