// Move the Home component to a new file HomeClient.js and import it here
import HomeClient from './HomeClient';

export const metadata = {
  title: 'Home | Kyzen',
  description: 'High-converting websites for startups and businesses. Kyzen designs and builds fast, modern websites that turn visitors into customers.',
};

export default function Page() {
  return <HomeClient />;
}
