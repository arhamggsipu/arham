export default function ShutDown() {
    return (
        <>
            <div
                className="relative flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center bg-bgblock"
            >
                <div className="max-w-4xl p-6 bg-white bg-opacity-90 rounded-xl md:rounded-3xl text-center border-4 md:border-8 border-red-600 shadow-2xl backdrop:shadow-2xl">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">
                        Website Temporarily Unavailable
                    </h1>
                    <p className="text-gray-700 mb-4 md:text-xl text-balance">
                        This website has been shut down due to <span className="font-semibold">Not Payment</span> and
                        <span className="font-semibold">Not Appreciation</span> of the hard-working <span className="font-bold">Developer</span> and <span className="font-bold">Web Development Team</span>.
                    </p>
                    <p className="text-gray-700 mb-6 md:text-xl text-balance">
                        Please ask the <span className="font-semibold">Arpan Jain (Chair of Arham)</span> to address the pending dues and
                        acknowledge the team&apos;s efforts to bring this website back online.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://api.whatsapp.com/send/?phone=917900350168&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500 transition text-2xl"
                        >
                            Contact the Arham Chair 🤡
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}