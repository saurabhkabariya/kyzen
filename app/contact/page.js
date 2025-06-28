// Move the Home component to a new file HomeClient.js and import it here
import ContactClient from './Contactclient';

export const metadata = {
  title: 'Contact Us | CodeCatalyst',
  description: 'Get in touch with CodeCatalyst for web development, consultancy, and support.',
};


export default function Page() {
  return <ContactClient />;
}
