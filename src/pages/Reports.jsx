import React from "react";
import { jsPDF } from "jspdf";

const Reports = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Water Quality Report", 10, 10);
    doc.text("Summary:", 10, 20);
    doc.text("- Total Samples: 10", 10, 30);
    doc.text("- Safe Water: 7", 10, 40);
    doc.text("- Contaminated Water: 3", 10, 50);
    doc.text("Status: Water is Safe ✅", 10, 60);
    doc.save("water_quality_report.pdf");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">Generate Report</h1>
      <button onClick={generatePDF} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Download PDF Report
      </button>
    </div>
  );
};

export default Reports;
