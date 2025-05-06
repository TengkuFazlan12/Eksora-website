export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-900">Eksora</h1>
        <p className="text-lg mt-2">Indonesian Export Commodities</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <CommodityCard
          title="Pinang / Areca Nut"
          description="Pinang kering berkualitas ekspor untuk pasar global. Diproses dan dikemas dengan standar terbaik."
          image="/images/pinang.jpg"
        />
        <CommodityCard
          title="Vanilla Beans"
          description="Vanili utuh berkualitas tinggi dari Indonesia dengan aroma dan rasa premium."
          image="/images/vanilla.jpg"
        />
        <CommodityCard
          title="Cangkang Sawit / Palm Kernel Shell"
          description="Bahan bakar biomassa ramah lingkungan, efisien untuk kebutuhan industri dan energi."
          image="/images/sawit.jpg"
        />
      </section>

      <section className="bg-blue-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Contact Us</h2>
        <p>Email: <a href="mailto:fazlantengku@gmail.com" className="text-blue-600">fazlantengku@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/6282386458922" className="text-blue-600">+62 823-8645-8922</a></p>
      </section>
    </main>
  );
}

function CommodityCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />
      <h3 className="text-xl font-bold mt-4 text-blue-800">{title}</h3>
      <p className="mt-2 text-gray-700 text-sm">{description}</p>
    </div>
  );
}