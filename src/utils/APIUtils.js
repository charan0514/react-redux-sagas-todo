import Cookies from 'js-cookie';
import get from 'lodash/get';

export const GetAPIRoutes = (apiFile) => {
    const APIROUTES_DIR = "api-routes";
    return require('../' + APIROUTES_DIR + "/" + apiFile); 
}

export const RemoveTokenFromCookie = () => {
    //Cookies.remove('access-token');
    sessionStorage.removeItem('access-token')
}

export const GetTokenFromCookie = () => {
    //return Cookies.get('access-token');
    return sessionStorage.getItem('access-token')
}

export const AddTokenFromCookie = (accessToken) => {
    //Cookies.set('access-token', accessToken, { expires: 1 });
    sessionStorage.setItem('access-token', accessToken)
}