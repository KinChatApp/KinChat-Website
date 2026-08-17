import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { Download, AlertCircle } from "lucide-react";

export const metadata = { title: "Download" };

export default function DownloadPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Download className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Get KinChat for Android</h1>
          <p className="text-zinc-400 mb-8">
            Current Version: <span className="text-white font-medium">{SITE_CONFIG.version}</span>
            <br />
            Last Updated: {SITE_CONFIG.lastUpdated}
          </p>

          {SITE_CONFIG.apkAvailable ? (
            <div className="space-y-6">
              <Button href={`/apk/${SITE_CONFIG.apkFileName}`} className="w-full sm:w-auto">
                Download APK <Download className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-sm text-zinc-500">
                You might need to enable "Install from Unknown Sources" in your device settings.
              </p>
            </div>
          ) : (
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl inline-block text-left max-w-sm mx-auto">
              <div className="flex items-center gap-3 text-amber-500 mb-2">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">Coming Soon</span>
              </div>
              <p className="text-sm text-zinc-400">
                The APK file is currently being prepared for release. Please check back later.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
