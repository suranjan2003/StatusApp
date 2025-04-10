import React from "react";

const EditServiceModal = ({
  selectedService,
  setSelectedService,
  handleSaveEditedService,
  handleCloseEditModal,
}) => {
  if (!selectedService) return null;

  const handleChange = (field, value) => {
    setSelectedService({ ...selectedService, [field]: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-10">
      <div className="bg-white m-2 p-6 rounded-md shadow-lg w-96 relative">
        <h3 className="text-lg font-bold mb-4">Edit Service</h3>
        <form className="space-y-4" onSubmit={handleSaveEditedService}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Name</label>
            <input
              type="text"
              value={selectedService.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2 py-1 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={selectedService.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2 py-1 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={selectedService.status}
              onChange={(e) => handleChange("status", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2 py-1 text-sm"
            >
              <option value="Operational">Operational</option>
              <option value="Degraded">Degraded</option>
              <option value="Partial_Outage">Partial Outage</option>
              <option value="Major_Outage">Major Outage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization ID</label>
            <input
              type="text"
              value={selectedService.organization_id}
              onChange={(e) => handleChange("organization_id", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2 py-1 text-sm"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCloseEditModal}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServiceModal;
