import { useState } from 'react';

import './Shortener.css';
import labels from '../../constants/labels';
import { generateSlug } from '../../utils/shortener';

export default () => {
  const [url, setUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [successVisible, setSuccessVisible] = useState<boolean>(false);

  const handleShorten = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const slug = await generateSlug(url);
    setShortUrl(slug.url);
    setSuccessVisible(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="shortener-component-container">
      <h1 className="shortener-component-container-title">{labels.components.ShortenerForm.title}</h1>
      <p>{labels.components.ShortenerForm.subtitle}</p>
      <div className="shortener-form-container">
        <form className="shortener-form" onSubmit={handleShorten}>
          <label htmlFor="url">{labels.components.ShortenerForm.label}</label>
          <br />
          <input
            className="shortener-form-url-input"
            type="text"
            value={url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
          />
          <button type="submit" className="shortener-form-submit-button">
            Shorten
          </button>
        </form>
      </div>

      {successVisible && (
        <div className="success-block">
          <p className="success-block-title">{labels.components.ShortenerForm.success}</p>
          <div className="success-block-results">
            <a className="success-block-url" target="_blank" rel="noopener noreferrer" href={shortUrl}>
              {shortUrl}
            </a>
            <button className="success-block-url-copy-button" onClick={handleCopy}>
              {labels.components.ShortenerForm.copy}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
