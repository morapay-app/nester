"use client";

import { AppShell } from "@/components/app-shell";
import { BankAccountsSection } from "@/components/settings/bank-accounts-section";
import { useWallet } from "@/components/wallet-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SettingsPage() {
  const { isConnected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.replace("/");
    }
  }, [isConnected, router]);

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-black tracking-tight">Settings</h1>
          <p className="text-sm text-black/50 mt-1">
            Manage payout preferences and saved bank accounts.
          </p>
        </div>
        <BankAccountsSection />
      </div>
    </AppShell>
  );
}
