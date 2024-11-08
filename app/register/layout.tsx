import { ReactNode } from 'react';
import FrontLayout from '../ui/layouts/front-layout';

export default function Layout({ children }: { children: ReactNode }) {
  return <FrontLayout>{children}</FrontLayout>;
}
