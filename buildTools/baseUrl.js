export default function getBaseUrl() {
  // Set this to false if you want to hit a real, locally hosted API.
  const useMockAPI = true;
  const inDevelopment = window.location.hostname === 'localhost';

  if (inDevelopment) {
    if (useMockAPI) {
      // Use mock data stored in api/db.json.
      // Port configured in start-mockapi script in package.json
      return 'http://localhost:3002';
    } else {
      // Note that this baseUrl assumes you're running Vinconnect APIs
      // via IIS at vinconnect.com via a hosts file entry.
      return 'http://vinconnect.com/CarDashboard/';
    }
  } else {
    // In other environments, a relative URL works fine.
    return '/CarDashboard/';
  }
}
