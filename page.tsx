export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
          Jeu de Multiplication Magique
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Bienvenue sur le jeu éducatif de multiplication avec nombres relatifs !
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Prêt à jouer ?
            </h2>
            <p className="text-gray-600">
              Choisissez votre niveau et commencez à pratiquer vos multiplications !
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}