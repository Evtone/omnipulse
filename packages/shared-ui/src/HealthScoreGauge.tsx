import * as React from 'react';

export interface HealthScoreGaugeProps {
  score: number;
}

export function HealthScoreGauge({ score }: HealthScoreGaugeProps) {
  return <div>Health score: {score}</div>;
}
