import { jwtDecode } from 'jwt-decode';

export default function checkJwtExpiration(token) {
  console.log('🚀 ~ checkJwtExpiration ~ token:', !token);
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
}
