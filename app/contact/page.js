import ContactClient from './Contactclient';
import { getPageSeo } from '../../lib/seo-config';

export const metadata = getPageSeo('contact');


export default function Page() {
  return <ContactClient />;
}
