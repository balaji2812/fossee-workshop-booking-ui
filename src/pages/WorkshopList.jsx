import { Link } from 'react-router-dom';

const statusColor = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Confirmed: 'bg-green-100 text-green-700',
  Completed: 'bg-gray-100 text-gray-600',
};

function WorkshopList({ workshops }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800">My Workshops</h1>
        <Link
          to="/book"
          className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          + Book New
        </Link>
      </div>

      {workshops.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-12 text-center">
          <div className="text-5xl mb-4">📭</div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">No workshops yet</h2>
          <p className="text-gray-400 text-sm mb-6">
            You haven't booked any workshops. Book one now!
          </p>
          <Link
            to="/book"
            className="bg-blue-800 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Book a Workshop
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {workshops.map((w) => (
            <div
              key={w.id}
              className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <h2 className="font-bold text-blue-800 text-lg">{w.title}</h2>
                <p className="text-gray-500 text-sm">{w.college}</p>
                <p className="text-gray-400 text-xs mt-1">
                  📅 {w.date} &nbsp;|&nbsp; 📍 {w.city}, {w.state}
                </p>
                {w.students && (
                  <p className="text-gray-400 text-xs">👥 {w.students} students</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[w.status]}`}>
                  {w.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkshopList;