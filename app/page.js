import EmailBox from "@/components/EmailBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-center pt-20 overflow-hidden px-4">
      <div className="mt-20 md:mt-24 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          The Living System
        </h1>

        <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base px-2 md:px-0">
          Rasakan cara baru untuk belajar, berkolaborasi, dan berkembang di satu tempat.
          <br className="hidden md:block" />
          Daftar untuk menjadi yang pertama mencoba Posnod.
        </p>

        <a
          href="#"
          className="text-purple-700 text-xs md:text-sm font-semibold no-underline active:underline block mt-5 md:mt-6"
        >
          Dapatkan Early Access
        </a>

        <div className="mt-4 md:mt-6">
          <EmailBox />
        </div>
      </div>
    </main>
  );
}
