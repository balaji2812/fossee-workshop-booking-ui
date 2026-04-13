import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col">

      <section className="bg-blue-800 text-white px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          FOSSEE Workshop Booking
        </h1>
        <p className="text-blue-200 text-base md:text-lg max-w-xl mx-auto mb-8">
          Book free Python and open-source software workshops conducted by IIT Bombay experts at your college.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book" className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Book a Workshop
          </Link>
          <Link to="/workshops" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Workshops
          </Link>
        </div>
      </section>

      <section className="px-6 py-12 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-8">Why FOSSEE?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '🎓', title: 'Free Workshops', desc: 'All workshops are completely free for students and faculty.' },
            { icon: '💻', title: 'Expert Instructors', desc: 'Conducted by IIT Bombay trained instructors.' },
            { icon: '📍', title: 'At Your College', desc: 'Workshops happen at your own institution — no travel needed.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl shadow p-6 text-center">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold text-blue-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">About FOSSEE</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            FOSSEE (Free/Libre and Open Source Software for Education) is a project
            by IIT Bombay under the National Mission on Education through ICT,
            funded by the Ministry of Education, Government of India. Our goal is
            to reduce dependency on proprietary software in educational institutions.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
