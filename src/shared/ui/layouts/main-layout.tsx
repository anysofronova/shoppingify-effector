import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/ui';

export const MainLayout = () => (
  <div className="flex w-full">
    <Header />
    <Outlet />
  </div>
);
