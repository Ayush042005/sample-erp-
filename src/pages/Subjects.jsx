import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Subjects = () => {
  return (
    <div className="erp-layout">
      <Sidebar />
      <div className="erp-main">
        <Topbar />
        <div className="subjects-page">
          <h1>My Subjects</h1>

          <div className="subjects-panel">
            <div className="subject-filter">
              <label>
                Semester
                <select>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                </select>
              </label>
              <button className="find-dark" type="button">Find</button>
            </div>

            <div className="table-tools">
              <div className="export-buttons" aria-label="Export options">
                <button>Copy</button>
                <button>Excel</button>
                <button>PDF</button>
                <button>Print</button>
              </div>
              <label className="entries-control">
                Show
                <select>
                  <option>20</option>
                  <option>10</option>
                  <option>50</option>
                </select>
                entries
              </label>
              <label className="search-control">
                Search:
                <input type="search" />
              </label>
            </div>

            <div className="table-wrap">
              <table className="subjects-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Paper Type</th>
                    <th>Subjects</th>
                    <th>Discipline Type</th>
                    <th>Credits</th>
                    <th>Allotment Date/Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Skill Enhancement Course</td>
                    <td><strong>( UPC : 2346000005)</strong> BASIC IT TOOLS</td>
                    <td>-</td>
                    <td>Lecture - 0, Practical - 2, Tutorial - 0</td>
                    <td>29/Apr/2026 12:34:38</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Discipline Specific Course</td>
                    <td>
                      <strong>( UPC : 2412082401)</strong> BUSINESS STATISTICS (Section : NONE)<br />
                      <strong>( UPC : 2412082402)</strong> COST ACCOUNTING (Section : A)<br />
                      <strong>( UPC : 2412082403)</strong> INTERNATIONAL BUSINESS (Section : A)
                    </td>
                    <td>-<br />-<br />-</td>
                    <td>
                      Lecture - 3, Practical - 1, Tutorial - 0<br />
                      Lecture - 3, Practical - 0, Tutorial - 1<br />
                      Lecture - 3, Practical - 0, Tutorial - 1
                    </td>
                    <td>
                      29/Apr/2026 12:35:17<br />
                      29/Apr/2026 12:37:16<br />
                      29/Apr/2026 13:52:02
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Value Added Course</td>
                    <td><strong>( UPC : 6967000027)</strong> DIGITAL EMPOWERMENT (Section : VAC-DE)</td>
                    <td>-</td>
                    <td>Lecture - 0, Practical - 2, Tutorial - 0</td>
                    <td>29/Apr/2026 12:38:04</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Generic Elective</td>
                    <td><strong>( UPC : 2344002004)</strong> INTRODUCTION TO WEB PROGRAMMING (Section : A)</td>
                    <td>-</td>
                    <td>Lecture - 3, Practical - 1, Tutorial - 0</td>
                    <td>29/Apr/2026 13:52:08</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Ability Enhancement Course</td>
                    <td><strong>( UPC : 2051002002)</strong> Jansanchar aur Rachnatmak Lekhan (Hindi B)</td>
                    <td>-</td>
                    <td>Lecture - 2, Practical - 0, Tutorial - 0</td>
                    <td>29/Apr/2026 13:53:08</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-footer">
              <span>Showing 1 to 5 of 5 entries</span>
              <div className="pagination">
                <button>Prev</button>
                <button className="current">1</button>
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="erp-footer">Copyright © 2026. All rights reserved by Ayush Kumar.</footer>
      </div>
    </div>
  );
};

export default Subjects;
