import Image from 'next/image';
import Link from 'next/link';


export default async function Home() {
  // Profilbild vom Backend laden
  const profile = {
    name: "Dein Name",
    alias: "FreierFreier23",
    bio: "Dies ist ein Platzhalter für deine Biografie.",
    profile_image_url: null
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Hey, ich bin {profile.alias}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Willkommen auf meiner persönlichen Webseite. Hier teile ich meine Gedanken, Projekte und mehr.
          </p>
          <div className="flex gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Mehr über mich
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Meine Projekte
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600">
            {profile.profile_image_url ? (
              <Image
                src={profile.profile_image_url}
                alt={profile.name || 'Profilbild'}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-2xl">
                FF23
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-bold mb-6">Neueste Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Projekt {i}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Eine kurze Beschreibung des Projekts und der verwendeten Technologien.
                </p>
                <Link href={`/projects/${i}`} className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}