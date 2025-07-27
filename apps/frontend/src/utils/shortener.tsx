import { app } from '../configs/app';
import errorMessages from '../constants/messages/error';
import type { SlugObject } from '../types/slug';

async function generateSlug(urlToShorten: string): Promise<SlugObject> {
  const endpointPath = app.backend.version + '/slug';
  const endpointURL = new URL(endpointPath, app.backend.base);
  const data = { url: urlToShorten };
  const response = await fetch(endpointURL.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();

  if (!response.ok) {
    const errorMessage = result.message.join('\n');
    alert(`${errorMessages.Shortener.generate}:\n${errorMessage}`);
    throw new Error(`${errorMessages.Shortener.request}: ${errorMessage}`);
  }

  return result.slug;
}

export { generateSlug };
