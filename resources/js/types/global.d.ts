import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  // eslint-disable-next-line vars-on-top,no-var
  var route: typeof ziggyRoute;
}
