export function formatDate(value: string | Date) {
  const date = new Date(value);
  return date.toLocaleDateString();
}

export function calculateHealthScore(score: number) {
  return Math.min(100, Math.max(0, score));
}

export const APP_CONSTANTS = {
  appName: 'OmniPulse',
  version: '0.1.0',
};
