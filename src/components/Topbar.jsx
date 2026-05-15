import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <header className="erp-topbar">
      <div className="top-title">Shivaji College</div>
      <div className="top-actions">
        <button type="button" aria-label="Notifications"><span className="material-symbols-outlined">notifications</span></button>
        <button type="button" aria-label="Settings"><span className="material-symbols-outlined">settings</span></button>
        <strong>Student</strong>
      </div>
    </header>
  );
};

export default Topbar;
