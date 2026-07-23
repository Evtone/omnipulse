import * as React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <section style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      {title ? <h3>{title}</h3> : null}
      {children}
    </section>
  );
}
