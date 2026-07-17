import { getTokenExpiry } from "@/lib/jwt";

let refreshTimer: ReturnType<typeof setTimeout> | null = null;

export function scheduleTokenRefresh(
  token: string,
  refreshFn: () => Promise<void>,
): void {
  clearScheduledRefresh();

  const expiry = getTokenExpiry(token);
  if (expiry === null) return;

  const refreshAt = expiry - Date.now() - 60_000;

  if (refreshAt <= 0) {
    refreshFn();
    return;
  }

  refreshTimer = setTimeout(refreshFn, refreshAt);
}

export function clearScheduledRefresh(): void {
  if (refreshTimer !== null) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }
}
