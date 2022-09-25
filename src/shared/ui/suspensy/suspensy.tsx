import { FC, PropsWithChildren, Suspense } from 'react';

import { Loader } from '@/shared/ui';

export const Suspensy: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);
