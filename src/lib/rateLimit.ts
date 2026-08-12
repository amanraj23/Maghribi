type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function isRateLimited(key: string) {
  const windowMs = Number(process.env.LEAD_RATE_LIMIT_WINDOW_MS || 60000);
  const max = Number(process.env.LEAD_RATE_LIMIT_MAX || 5);
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > max;
}
