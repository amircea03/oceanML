import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './WaveHeight.scss';

interface FormData {
    latitude: string;
    longitude: string;
}

const WaveHeight: React.FC = () => {
    // State to hold the form data
    const [formData, setFormData] = useState<FormData>({
        latitude: '',
        longitude: '',
    });

    // Event handler for form input changes
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Event handler for form submission
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //Add logic here -- API calls?

        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="dashboard-container">
            <div className="top-bar">
                <h2>Wave Height</h2>
            </div>
            <Link to="/" className="box box1">
                Dashboard
            </Link>
            <div className="wh-text-container">
                <h1>OceanML "Machine Learning"</h1>
                <p>OceanML's Machine Learning Platform</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="latitude">Latitude:</label>
                    <input
                        type="text"
                        id="latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="longitude">Longitude:</label>
                    <input
                        type="text"
                        id="longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </div>
            </form>
            <div className="footer">
                <p>&copy; 2023 OceanML. All rights reserved.</p>
            </div>
        </div>
    );
};

export default WaveHeight;
