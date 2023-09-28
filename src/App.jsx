import { useState } from 'react';
import { validateForm } from './helpers/generalHelper';

const App = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name } = e.target;
        const val = e.target.value;
        console.log(name, val);
        setFormData((values) => ({ ...values, [name]: val }));
    };

    const handleSubmit = () => {
        event.preventDefault();
        console.log(formData);
        validateForm(formData);
        console.log(formData);
    };

    return (
        <div className="bg-slate-600 grid place-content-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="max-w-md bg-white p-6 mx-auto flex flex-col rounded-md drop-shadow-[0_35px_35px_rgba(0,0,0,6)]"
            >
                <label className="font-mono font-semibold text-lg">
                    Full Name <span className="text-red-700">*</span>
                </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData.fullname}
                    name="fullname"
                    placeholder="e.g: Alok Raj"
                    className="bg-slate-200 p-2 rounded "
                />
                <label className="font-mono font-semibold text-lg">
                    Email<span className="text-red-700">*</span>
                </label>
                <input
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    placeholder="e.g: example@test.com"
                    className="bg-slate-200 p-2 rounded "
                />
                <label className="font-mono font-semibold text-lg">
                    Mobile Number <span className="text-red-700">*</span>
                </label>
                <input
                    type="number"
                    onChange={handleChange}
                    value={formData.mobileNumber}
                    name="mobileNumber"
                    placeholder="e.g: 9865135482"
                    className="bg-slate-200 p-2 rounded "
                />
                <label className="font-mono font-semibold text-lg">
                    Password <span className="text-red-700">*</span>
                </label>
                <input
                    type="password"
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    className="bg-slate-200 p-2 rounded "
                />
                <label className="font-mono font-semibold text-lg">
                    Confirm Password <span className="text-red-700">*</span>
                </label>
                <input
                    type="password"
                    onChange={handleChange}
                    name="cpassword"
                    value={formData.cpassword}
                    className="bg-slate-200 p-2 rounded "
                />
                <button
                    type="submit"
                    className="bg-indigo-700 mt-3 h-8 font-serif font-bold text-white hover:bg-indigo-500"
                >
                    {' '}
                    Submit{' '}
                </button>
            </form>
        </div>
    );
};

export default App;
