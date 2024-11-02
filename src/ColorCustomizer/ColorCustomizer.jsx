import React, { useState, useEffect } from 'react';
import './ColorCustomizer.css';

const ColorCustomizer = () => {
  const [theme, setTheme] = useState('theme-default');

  // Apply the selected theme to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="color-customizer">
      <div className="clearfix color-chooser text-center">
        {/* <h4 className="text-theme font-w-8 mb-4">
          Hectolab With <span className="text-black font-w-5">Awesome Colors</span>
        </h4> */}
        <ul className="colorChange clearfix">
          <li
            className={`theme-default ${theme === 'theme-default' ? 'selected' : ''}`}
            title="theme-default"
            data-style="theme-default"
            onClick={() => setTheme('theme-default')}
          ></li>
          <li
            className={`theme-blue ${theme === 'theme-blue' ? 'selected' : ''}`}
            title="theme-blue"
            data-style="theme-blue"
            onClick={() => setTheme('theme-blue')}
          ></li>
          <li
            className={`theme-light-blue ${theme === 'theme-light-blue' ? 'selected' : ''}`}
            title="theme-light-blue"
            data-style="theme-light-blue"
            onClick={() => setTheme('theme-light-blue')}
          ></li>
          <li
            className={`theme-sky-blue ${theme === 'theme-sky-blue' ? 'selected' : ''}`}
            title="theme-sky-blue"
            data-style="theme-sky-blue"
            onClick={() => setTheme('theme-sky-blue')}
          ></li>
          <li
            className={`theme-orange ${theme === 'theme-orange' ? 'selected' : ''}`}
            title="theme-orange"
            data-style="theme-orange"
            onClick={() => setTheme('theme-orange')}
          ></li>
        </ul>
        {/* <div className="text-center mt-4">
          <a className="btn-theme btn" href="#">
            <span>Purchase Now</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ColorCustomizer;
