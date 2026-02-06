import {
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaUserAstronaut,
  FaBolt,
  FaShieldAlt,
  FaRocket,
  FaDatabase,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function Card({ icon, title, desc }: CardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-3xl text-purple-600 mb-3">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative flex flex-col items-center text-center overflow-hidden">

      {/* HERO */}
      <section id="top" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-white px-6">

        <p className="uppercase tracking-widest text-sm text-purple-600 font-semibold mb-4">
          FULL-STACK DEVELOPER • AI • DATA
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
          Toğrul Abbasov
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Müasir veb tətbiqlər, mobil sistemlər və süni intellekt əsaslı analitik həllər qururam.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <a
            href="#contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
          >
            Mənimlə Əlaqə
          </a>

          <a
            href="https://github.com/parabourne"
            target="_blank"
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition"
          >
            GitHub Profilim
          </a>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-600">20+</h3>
            <p className="text-sm text-gray-500">Layihə</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-sm text-gray-500">Texnologiya</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-pink-600">AI</h3>
            <p className="text-sm text-gray-500">Fokus</p>
          </div>
        </div>
      </section>

      {/* HAQQIMDA */}
      <section className="mt-24 max-w-4xl px-6 scroll-mt-32">
        <FaUserAstronaut className="text-4xl text-purple-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-6">Mənim haqqımda</h2>
        <p className="text-gray-600">
          Veb, mobil sistemlər, data analitika və süni intellekt sahəsində performanslı və istifadəçi yönümlü həllər hazırlayıram.
        </p>
        <div className="flex justify-center gap-10 mt-8 text-purple-600 text-2xl">
          <FaBolt />
          <FaShieldAlt />
          <FaRocket />
        </div>
      </section>

      {/* XİDMƏTLƏR */}
      <section id="projects" className="scroll-mt-32 mt-32 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Xidmətlər</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card icon={<FaMobileAlt />} title="Mobil Tətbiqlər" desc="Flutter ilə Android & iOS" />
          <Card icon={<FaCode />} title="Veb Sistemlər" desc="Next.js, React" />
          <Card icon={<FaServer />} title="Backend" desc="Firebase, Node.js" />
          <Card icon={<FaDatabase />} title="Data Analitika" desc="R, Python, SQL" />
          <Card icon={<FaBrain />} title="Machine Learning" desc="Model qurulması" />
          <Card icon={<FaChartLine />} title="Vizualizasiya" desc="RStudio, matplotlib" />
        </div>
      </section>

      {/* BACARIQLAR */}
      <section id="skills" className="scroll-mt-32 mt-32 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Texniki Bacarıqlarım</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-blue-600 mb-3">Frontend</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML / CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-green-600 mb-3">Backend</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Node.js</li>
              <li>Firebase</li>
              <li>REST API</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-purple-600 mb-3">UI / UX</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Modern UI</li>
              <li>Responsive Design</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ƏLAQƏ */}
      <section id="contact" className="scroll-mt-32 mt-32 mb-20 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-10">Əlaqə</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a href="mailto:info@bybourne.xyz" className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <FaEnvelope className="text-3xl text-purple-600" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-600">info@bybourne.xyz</p>
            </div>
          </a>

          <a href="https://wa.me/994555556963" target="_blank" className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <FaWhatsapp className="text-3xl text-green-600" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-gray-600">055 555 69 63</p>
            </div>
          </a>

          <a href="https://github.com/parabourne" target="_blank" className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <FaGithub className="text-3xl" />
            <div>
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-gray-600">github.com/parabourne</p>
            </div>
          </a>

          <a href="https://www.facebook.com/bybourne1" target="_blank" className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <FaFacebook className="text-3xl text-blue-600" />
            <div>
              <p className="font-semibold">Facebook</p>
              <p className="text-sm text-gray-600">bybourne1</p>
            </div>
          </a>
        </div>
      </section>

    </main>
  );
}
