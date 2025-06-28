// Move the Home component to a new file HomeClient.js and import it here
import HomeClient from './HomeClient';

export const metadata = {
  title: 'Home | CodeCatalyst',
  description: 'We build digital experiences that spark growth. From MVPs to scalable apps, CodeCatalyst empowers your web journey.',
};

export default function Page() {
  return <HomeClient />;
}
