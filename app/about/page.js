// Move the Home component to a new file HomeClient.js and import it here
import AboutClient from './Aboutclient';

export const metadata = {
  title: 'About Us | CodeCatalyst',
  description: 'Learn about CodeCatalyst\'s vision and mission to empower businesses with modern web solutions.',
};

export default function Page() {
  return <AboutClient />;
}
