"use client";

import { useOnlineStatus } from "@/lib/use-online-status";
import { useLang } from "@/lib/i18n";

export function OfflineBanner() {
  const online = useOnlineStatus();
  const { t } = useLang();

  if (online) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4">
      <div
        className="stamp text-stamp-red-bright text-xs"
        style={{ transform: "rotate(0deg)" }}
      >
        {t("common.offlineNotice")}
      </div>
    </div>
  );
}
