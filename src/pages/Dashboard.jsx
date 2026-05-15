import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="erp-layout">
      <Sidebar />
      <div className="erp-main">
        <Topbar />
        <main className="student-content">
          <div className="page-kicker">
            <h2>Welcome back, Student</h2>
            <p>Here is your academic overview for today.</p>
          </div>
          <section className="student-panel">
            <div className="student-profile">
              <span className="profile-avatar">S</span>
              <h1>Student</h1>
              <p>Course : B.Com (Hons.) | Designation: Student</p>
              <p>College Roll No. - 24/51020 | Examination Roll No. - 24071504001</p>
              <div className="tic-line">
                <span className="person-icon"></span>
                Department Teacher-in-Charge (TIC): <strong>Not Updated</strong>
              </div>
            </div>

            <div className="stat-grid">
              <Link className="stat-tile" to="/attendance">
                <span className="tile-icon material-symbols-outlined">school</span>
                <strong>0 Classes Today</strong>
              </Link>
              <Link className="stat-tile" to="/attendance">
                <span className="tile-icon material-symbols-outlined">analytics</span>
                <strong>Overall Attendance : 36.47%</strong>
                <small>Relaxation Applied (If any)</small>
              </Link>
              <Link className="stat-tile" to="/internal-assessment">
                <span className="tile-icon material-symbols-outlined">assignment</span>
                <strong>0 Assignment Pending</strong>
              </Link>
              <Link className="stat-tile" to="#">
                <span className="tile-icon material-symbols-outlined">person_off</span>
                <strong>0 Staff On Leave Today</strong>
              </Link>
            </div>

            <hr />

            <section className="simple-section">
              <h2>Today's Timetable</h2>
              <div className="empty-state">
                <span className="material-symbols-outlined">event_busy</span>
                <strong>No Classes Today</strong>
              </div>
            </section>

            <section className="simple-section">
              <h2>Subject-wise Attendance Summary</h2>
              <div className="summary-row">
                <span>Business Law</span>
                <strong>36.47%</strong>
              </div>
            </section>
          </section>
        </main>
        <footer className="erp-footer">Copyright © 2026. All rights reserved by UniOne ERP Solutions.</footer>
      </div>
    </div>
  );
};

export default Dashboard;
