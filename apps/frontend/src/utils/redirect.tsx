import { redirect } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { app } from '../configs/app';
import error from '../constants/messages/error';

const handleSlugRedirect = async ({ request }: LoaderFunctionArgs) => {
  try {
    const slugURL = new URL(request.url);
    const slugPathname = slugURL.pathname;
    const endpointPath = `${app.backend.version}/slug${slugPathname}`;
    const endpointURL = new URL(endpointPath, app.backend.base);
    const response = await fetch(endpointURL.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();

    if (response.ok && result?.url) {
      return redirect(result.url);
    }
  } catch (err) {
    console.error(`${error.Redirect.pathResolving}: ${err}`);
  }

  return null;
};

export { handleSlugRedirect };
