import React, { useState } from "react";

function App() {
  const [activeDrawer, setActiveDrawer] = useState(null); // Track the active drawer

  const openDrawer = (drawer) => setActiveDrawer(drawer);
  const closeDrawer = () => setActiveDrawer(null);

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      {/* Trigger Button */}
      <button
        onClick={() => openDrawer("options")}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Open Drawer
      </button>

      {/* Drawer Animation */}
      <div
        className={`fixed bottom-0 right-0 w-1/3 max-w-md h-full bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${
          activeDrawer === null
            ? "translate-x-full opacity-0" // Hidden state
            : "translate-x-0 opacity-100 animate-slide-in" // Visible with animation
        }`}
      >
        {/* Options Drawer */}
        {activeDrawer === "options" && (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Options</h2>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => openDrawer("inputs")}
                  className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Option 1
                </button>
              </li>
              <li>
                <button
                  onClick={() => openDrawer("inputs")}
                  className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Option 2
                </button>
              </li>
              <li>
                <button
                  onClick={() => openDrawer("inputs")}
                  className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Option 3
                </button>
              </li>
            </ul>
            <button
              onClick={closeDrawer}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        )}

        {/* Input Fields Drawer */}
        {activeDrawer === "inputs" && (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Input Fields</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Field 1</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Field 2</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Field 3</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
            <button
              onClick={closeDrawer}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
