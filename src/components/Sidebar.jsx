import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="erp-sidebar">
      <NavLink className="side-brand" to="/dashboard">
        <button className="back-link" onClick={() => navigate(-1)} aria-label="Go back">&lt;--</button>
        <span className="mini-seal">S</span>
        <span>
          <strong>Student Portal</strong>
          <small>Academic Session 2025-26</small>
        </span>
      </NavLink>
      <nav className="side-nav subject-nav">
        <NavLink
          to="/attendance"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="material-symbols-outlined">calendar_today</span> Attendance
        </NavLink>
        <NavLink
          to="/subjects"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="material-symbols-outlined">menu_book</span> Subjects
        </NavLink>
        <NavLink
          to="/internal-assessment"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="material-symbols-outlined">grade</span> View IA Marks
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
