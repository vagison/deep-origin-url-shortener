import { Link } from 'react-router-dom';

import './NotFound.css';
import labels from '../../constants/labels';

const NotFound = () => {
  return (
    <div className="not-found main-section-container">
      <div className="main-section-title-container">
        <h1 className="main-section-title">{labels.pages.NotFound.sectionTitle}</h1>
      </div>
      <p className="main-section-content not-found-section-content">
        <Link to="/">{labels.pages.NotFound.returnTitle}</Link>
      </p>
    </div>
  );
};

export default NotFound;
