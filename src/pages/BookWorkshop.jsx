import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookWorkshop({ addWorkshop }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    workshopType: '', date: '', students: '',
    college: '', city: '', state: '', remarks: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.workshopType || !form.date || !form.college || !form.city || !form.state) {
      setError('Please fill all required fields.');
      return;
    }

    addWorkshop({
      title: form.workshopType.charAt(0).toUpperCase() + form.workshopType.slice(1) + ' Workshop',
      date: form.date,
      college: form.college,
      city: form.city,
      state: form.state,
      students: form.students,
      remarks: form.remarks,
    });

    navigate('/workshops');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-800 mb-2">Book a Workshop</h1>
      <p className="text-gray-500 text-sm mb-6">Fill in the details to request a workshop at your institution.</p>

      {error && (
        <div className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Workshop Type <span className="text-red-500">*</span>
          </label>
          <select
            name="workshopType"
            value={form.workshopType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a workshop</option>
            <option value="python">Python</option>
            <option value="scilab">Scilab</option>
            <option value="arduino">Arduino</option>
            <option value="openfoam">OpenFOAM</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date <span className="text-red-500">*</span>
            </label>
            <input
              name="date" type="date" value={form.date} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Students</label>
            <input
              name="students" type="number" value={form.students} onChange={handleChange}
              placeholder="e.g. 50"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            College / Institution <span className="text-red-500">*</span>
          </label>
          <input
            name="college" type="text" value={form.college} onChange={handleChange}
            placeholder="Your institution name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              name="city" type="text" value={form.city} onChange={handleChange}
              placeholder="City"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <input
              name="state" type="text" value={form.state} onChange={handleChange}
              placeholder="State"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Remarks (Optional)</label>
          <textarea
            name="remarks" value={form.remarks} onChange={handleChange}
            placeholder="Any special requirements..."
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
        >
          Submit Booking Request
        </button>

      </form>
    </div>
  );
}

export default BookWorkshop;