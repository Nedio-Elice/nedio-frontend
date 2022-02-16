import React, { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}

function Scene({ children }: Props) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default Scene;
