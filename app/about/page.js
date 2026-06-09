import AboutClient from './Aboutclient';
import { getPageSeo } from '../../lib/seo-config';

export const metadata = getPageSeo('about');

export default function Page() {
  return <AboutClient />;
}
