'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const CustomCursor = dynamic(() => import('@/components/animation/CustomCursor'), {
  ssr: false,
});

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
} 