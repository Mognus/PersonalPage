export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 shadow-inner py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-700 dark:text-gray-300">
                            © {new Date().getFullYear()} FreierFreier23
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            GitHub
                        </a>
                        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}