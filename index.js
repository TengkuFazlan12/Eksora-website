import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <Head>
        <title>Eksora - Indonesian Export Commodities</title>
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center mb-4">Eksora</h1>
        <p className="text-center mb-12">Trusted Exporter of Indonesian Commodities</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <CommodityCard
            title="Pinang / Areca Nut"
            description="Premium dried areca nut from Indonesia, sorted and packaged for global export."
            image="/images/pinang.jpg"
          />
          <CommodityCard
            title="Vanilla Beans"
            description="High-quality vanilla beans with rich aroma and flavor, ready for international markets."
            image="/images/vanilla.jpg"
          />
          <CommodityCard
            title="Cangkang Sawit / Palm Kernel Shell"
            description="Eco-friendly biomass fuel, efficient and sustainable for industrial use."
            image="/images/sawit.jpg"
          />
        </div>

        <footer className="mt-12 text-center text-sm text-gray-600">
          Contact: <a href="mailto:fazlantengku@gmail.com" className="text-blue-600">fazlantengku@gmail.com</a> | WhatsApp: <a href="https://wa.me/6282386458922" className="text-blue-600">+62 823-8645-8922</a>
        </footer>
      </main>
    </div>
  );
}

function CommodityCard({ title, description, image }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-700 mt-1">{description}</p>
    </div>
  );
}