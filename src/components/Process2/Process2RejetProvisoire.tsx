import { Link } from "react-router-dom"

export default function Process2RejetProvisoire() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      <h5 className="text-xl font-bold mb-2 text-red-600">Rejet provisoire envoyé</h5>
      <p className="mb-4 text-center">
        La demande a été rejetée de manière provisoire.<br />
        Une notification a été envoyée à l’adresse email fournie.
      </p>

      <Link
        to="/"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Revenir à la première page
      </Link>
    </div>
  )
}
