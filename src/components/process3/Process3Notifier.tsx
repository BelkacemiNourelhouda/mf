import { Link } from "react-router-dom"

export default function Process3Notifier() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h5 className="text-xl font-bold mb-2 text-green-600">Email envoyé avec succès</h5>
      <p className="mb-4">Une copie de l’acte a été envoyée à l’adresse fournie.</p>

      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Revenir à la première page
      </Link>
    </div>
  )
}
