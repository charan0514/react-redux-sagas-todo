
import fetch from '../../utils/FetchAuth';
import {GetAPIRoutes} from  '../../utils/APIUtils';
const { REACT_APP_BASE_SERVICE_URL, REACT_APP_API_ROUTES } = process.env;
const SERVICEAPI = GetAPIRoutes(REACT_APP_API_ROUTES);

export const getUsers = (payload) => {
  return fetch(`${REACT_APP_BASE_SERVICE_URL}${SERVICEAPI.getUsers}`, {
      method: "GET",
  })
}