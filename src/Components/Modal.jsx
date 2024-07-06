import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { createReferral } from "../services/api";

const Modal = ({ isOpen, closeModal }) => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [referrerPhone, setReferrerPhone] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [courseName, setCourseName] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!referrerName) newErrors.referrerName = "Referrer name is required";
    if (!referrerEmail) newErrors.referrerEmail = "Referrer email is required";
    if (!referrerPhone) newErrors.referrerPhone = "Referrer phone is required";
    if (!refereeName) newErrors.refereeName = "Referee name is required";
    if (!refereeEmail) newErrors.refereeEmail = "Referee email is required";
    if (!courseName) newErrors.courseName = "Course name is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const referralData = {
          referrerName,
          referrerEmail,
          referrerPhone,
          refereeName,
          refereeEmail,
          courseName,
        };
        await createReferral(referralData);
        closeModal();
      } catch (error) {
        console.error("Error creating referral:", error);
      }
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <Dialog.Title className="text-xl font-bold">
            Referral Form
          </Dialog.Title>
          <button onClick={closeModal}>
            <XIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Referrer Name
            </label>
            <input
              type="text"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              className={`w-full mt-1 p-2 border ${
                errors.referrerName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              required
            />
            {errors.referrerName && (
              <p className="mt-1 text-sm text-red-600">{errors.referrerName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Referrer Email
            </label>
            <input
              type="email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              className={`w-full mt-1 p-2 border ${
                errors.referrerEmail ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              required
            />
            {errors.referrerEmail && (
              <p className="mt-1 text-sm text-red-600">
                {errors.referrerEmail}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Referrer Phone
            </label>
            <input
              type="tel"
              value={referrerPhone}
              onChange={(e) => setReferrerPhone(e.target.value)}
              className={`w-full mt-1 p-2 border ${
                errors.referrerPhone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              required
            />
            {errors.referrerPhone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.referrerPhone}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Referee Name
            </label>
            <input
              type="text"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              className={`w-full mt-1 p-2 border ${
                errors.refereeName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              required
            />
            {errors.refereeName && (
              <p className="mt-1 text-sm text-red-600">{errors.refereeName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Referee Email
            </label>
            <input
              type="email"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              className={`w-full mt-1 p-2 border ${
                errors.refereeEmail ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              required
            />
            {errors.refereeEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.refereeEmail}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className={`w-full mt-1 p-2 border ${
                errors.courseName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              required
            />
            {errors.courseName && (
              <p className="mt-1 text-sm text-red-600">{errors.courseName}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default Modal;
