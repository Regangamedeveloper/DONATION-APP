import React, { useState } from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf'; 
import * as XLSX from "xlsx";
import "./documents.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Nav from "../../components/nav/Nav";
import Adminfooter from "../../../Admin/components/Adminfooter"

// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const Documents = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedPdf(file);
    }
  };

  const handleCreateExcel = () => {
    const data = [
      ["Name", "Email", "Age"],
      ["John Doe", "johndoe@example.com", 28],
      ["Jane Doe", "janedoe@example.com", 24],
      ["John Doe", "johndoe@example.com", 28],
      ["Jane Doe", "janedoe@example.com", 24],
      ["John Doe", "johndoe@example.com", 28],
      ["Jane Doe", "janedoe@example.com", 24],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    XLSX.writeFile(workbook, "UserList.xlsx");
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="documents">
        <Sidebar/>
        <div className="documentsContainer">
            <Nav/>
            <div className="bottom">
      <div className="upload-section">
      <h2>Upload PDF and Create Excel</h2>
        <label htmlFor="pdfUpload" className="upload-label">Upload PDF</label>
        <input type="file" id="pdfUpload" accept="pdf" onChange={handlePdfUpload} />
      </div>


      <div className="create-excel-section">
        <button onClick={handleCreateExcel} className="create-excel-btn">Create Excel</button>
      </div>
      </div>
      
      <Adminfooter />
      </div>
    </div>
  );
};

export default Documents;
