import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Attendance = () => {
  return (
    <div className="erp-layout">
      <Sidebar />
      <div className="erp-main">
        <Topbar />
        <main className="student-content">
          <section className="student-panel compact">
            <section className="simple-section first">
              <h1>Today's Timetable</h1>
              <div className="empty-state">
                <span className="material-symbols-outlined">event_busy</span>
                <strong>No Classes Today</strong>
              </div>
            </section>

            <hr />

            <section className="simple-section">
              <h2>Subject-wise Attendance Summary</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Paper</th>
                      <th>Total Classes</th>
                      <th>Present</th>
                      <th>Attendance</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Business Law</td>
                      <td>52</td>
                      <td>19</td>
                      <td>36.47%</td>
                      <td><span className="pill danger">Below 75%</span></td>
                    </tr>
                    <tr>
                      <td>Financial Accounting</td>
                      <td>48</td>
                      <td>39</td>
                      <td>81.25%</td>
                      <td><span className="pill success">Eligible</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        </main>
        <footer className="erp-footer">Copyright © 2026. All rights reserved by Ayush Kumar.</footer>
      </div>
    </div>
  );
};

export default Attendance;
