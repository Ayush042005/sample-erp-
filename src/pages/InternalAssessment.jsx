import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const InternalAssessment = () => {
  return (
    <div className="erp-layout">
      <Sidebar />
      <div className="erp-main">
        <Topbar />
        <main className="student-content">
          <section className="report-panel">
            <h1>INTERNAL ASSESSMENT REPORT</h1>

            <div className="report-filters">
              <label>
                Academic Year<span>*</span>
                <select>
                  <option>2025-2026</option>
                  <option>2024-2025</option>
                </select>
              </label>
              <label>
                Session<span>*</span>
                <select>
                  <option>Jan - May</option>
                  <option>Jul - Dec</option>
                </select>
              </label>
              <label>
                Semester<span>*</span>
                <select>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                </select>
              </label>
              <button className="primary-button find-button" type="button">Find</button>
            </div>

            <p className="report-warning">
              (In case of any discrepancy in the marks OR Not Marked status. Please contact your subject teacher only.)
            </p>

            <div className="table-wrap">
              <table className="ia-report-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Subject</th>
                    <th>Lecture Marks</th>
                    <th>Practical Marks</th>
                    <th>Tutorial Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>BASIC IT TOOLS (L - 0, P - 2, T - 0)</td>
                    <td>N/A</td>
                    <td>Not Marked</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>BUSINESS STATISTICS (L - 3, P - 1, T - 0)</td>
                    <td>22/30</td>
                    <td>View Restricted</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>COST ACCOUNTING (L - 3, P - 0, T - 1)</td>
                    <td>22/30</td>
                    <td>N/A</td>
                    <td>Not Marked</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>DIGITAL EMPOWERMENT (L - 0, P - 2, T - 0)</td>
                    <td>N/A</td>
                    <td>View Restricted</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>INTERNATIONAL BUSINESS (L - 3, P - 0, T - 1)</td>
                    <td>Not Marked</td>
                    <td>N/A</td>
                    <td>Not Marked</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>INTRODUCTION TO WEB PROGRAMMING (L - 3, P - 1, T - 0)</td>
                    <td>23/30</td>
                    <td>Not Marked</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Jansanchar aur Rachnatmak Lekhan (Hindi B) (L - 2, P - 0, T - 0)</td>
                    <td>Not Marked</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="report-note">Note: Marks will not be displayed for subjects that having only practical component.</p>
          </section>
        </main>

        <footer className="erp-footer">Copyright © 2026. All rights reserved by Ayush Kumar.</footer>
      </div>
    </div>
  );
};

export default InternalAssessment;
