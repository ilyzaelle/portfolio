import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <main className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Contact</h1>

            <div className="bg-white rounded-lg shadow-md p-6 space-y-6 transition hover:shadow-lg">

                <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <p className="text-gray-700">
                        <a href="mailto:leo.rodriguez06@outlook.com" className="hover:underline text-blue-600">
                            leo.rodriguez06@outlook.com
                        </a>
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <FaPhoneAlt className="text-blue-600 text-xl" />
                    <p className="text-gray-700">
                        07 82 59 77 39
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <FaLinkedin className="text-blue-600 text-xl" />
                    <p className="text-gray-700">
                        <a
                            href="https://www.linkedin.com/in/léo-rodriguez-/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline text-blue-600"
                        >
                            linkedin.com/in/léo-rodriguez-/
                        </a>
                    </p>
                </div>

            </div>
        </main>
    );
}
