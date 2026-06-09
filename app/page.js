import HomeClient from './HomeClient';
import { getPageSeo } from '../lib/seo-config';

export const metadata = getPageSeo('home');

export default function Page() {
  return <HomeClient />;
}
