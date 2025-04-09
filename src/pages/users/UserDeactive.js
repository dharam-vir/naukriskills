import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';  // For CSV Export
import * as XLSX from 'xlsx';  // For Excel Export
import { Link } from 'react-router-dom';
// import jsPDF from 'jspdf';  // For PDF Export
// import 'jspdf-autotable';  // Ensure this is imported after jsPDF

// Expanded component for showing details of a row
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

// Define columns for the DataTable
const columns = [
  {
    name: 'Rendering engine',
    selector: row => row.renderingengine,
    sortable: true,
  },
  {
    name: 'Browser',
    selector: row => row.browser,
    sortable: true,
  },
  {
    name: 'Platform(s)',
    selector: row => row.platform,
    sortable: true,
  },
  {
    name: 'Engine version',
    selector: row => row.version,
    sortable: true,
  },
  {
    name: 'CSS grade',
    selector: row => row.grade,
    sortable: true,
  },
];

// Sample data
const data = [
  { id: 1, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '1' },
  { id: 2, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '3' },
  { id: 3, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '5' },
  { id: 4, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '7' },
  { id: 5, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '6' },
  { id: 6, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '8' },
  { id: 7, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 8, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 9, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 10, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 11, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 12, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 13, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 14, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  { id: 15, renderingengine: 'Beetlejuice', browser: '1988', platform: '1988', version: '2.0', grade: '4' },
  // Add more rows as needed
];

const UserDeactive = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the data based on the search query
  const filteredData = data.filter(row =>
    row.renderingengine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.browser.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to export data as Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData); // Convert JSON data to Excel sheet
    const wb = XLSX.utils.book_new(); // Create a new Excel workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); // Append the sheet to the workbook
    XLSX.writeFile(wb, 'table-data.xlsx'); // Export the workbook as an Excel file
  };

  // Function to export data as PDF
//   const exportToPDF = () => {
//     const doc = new jsPDF();
//     doc.autoTable({
//       head: [['Rendering engine', 'Browser', 'Platform(s)', 'Engine version', 'CSS grade']],
//       body: filteredData.map(row => [row.renderingengine, row.browser, row.platform, row.version, row.grade]),
//     });
//     doc.save('table-data.pdf'); // Save as PDF file
//   };

  return (
    <Layout>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DataTables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                      style={{ width: '300px', marginTop: '10px', float: 'right' }}
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className="mt-3">
                      <button className="btn btn-success" onClick={exportToExcel}>Export to Excel</button>
                      {/* <button className="btn btn-danger ml-2" onClick={exportToPDF}>Export to PDF</button> */}
                      <CSVLink data={filteredData} filename="table-data.csv">
                        <button className="btn btn-primary ml-2">Export to CSV</button>
                      </CSVLink>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <DataTable
                      id="table-id"
                      columns={columns}
                      data={filteredData}
                      selectableRows
                      className="table table-bordered table-hover"
                      pagination
                      responsive
                      expandableRows
                      expandableRowsComponent={ExpandedComponent}
                    />
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </Layout>
  );
};

export default UserDeactive;
