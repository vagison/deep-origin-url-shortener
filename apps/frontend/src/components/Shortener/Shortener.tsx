import { useState } from 'react';

import './Shortener.css';
import labels from '../../constants/labels';
import { generateSlug } from '../../utils/shortener';

import '../../../public/icons/url.svg';

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
    <div className="shortener-container">
      <div className="shortener-container-title-block">
        <h1 className="shortener-container-title">{labels.components.ShortenerForm.title}</h1>
        <img className="shortener-container-icon" src={'/icons/url.svg'}></img>
      </div>
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
          <br />
          <button type="submit" className="shortener-form-submit-button">
            Shorten
          </button>
        </form>
      </div>

      {successVisible && (
        <div className="success-block">
          <div className="success-block-title-container">
            <p className="success-block-title">{labels.components.ShortenerForm.success}</p>
          </div>
          <div className="success-block-results">
            <div className="success-block-url-container">
              <a className="success-block-url" target="_blank" rel="noopener noreferrer" href={shortUrl}>
                {shortUrl}
              </a>
            </div>
            <div className="success-block-copy-button-container">
              <button className="success-block-copy-button" onClick={handleCopy}>
                <img className="success-block-copy-icon" src={'/icons/copy.svg'}></img>
                {labels.components.ShortenerForm.copy}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
