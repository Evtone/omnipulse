import { Button } from '@omnipulse/shared-ui';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>OmniPulse Dashboard</h1>
      <p>Patient and clinical experience in one workspace.</p>
      <Button>Open dashboard</Button>
    </main>
  );
}
