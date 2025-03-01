export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Über mich</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <p className="text-gray-700 dark:text-gray-300">
                    Dies ist die "Über mich"-Seite. Hier werden später Informationen über dich, deine Fähigkeiten
                    und Interessen angezeigt. Die Daten werden vom Django-Backend geladen, sobald es verfügbar ist.
                </p>
            </div>
        </div>
    );
}