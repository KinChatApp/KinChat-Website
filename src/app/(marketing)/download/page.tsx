import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { Download, AlertCircle } from "lucide-react";

export const metadata = { title: "Download" };

async function getLatestRelease() {
  try {
    const url = `https://api.github.com/repos/${SITE_CONFIG.githubUsername}/${SITE_CONFIG.githubRepo}/releases/latest`;
    
    const res = await fetch(url, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch GitHub release:", error);
    return null;
  }
}

export default async function DownloadPage() {
  const release = await getLatestRelease();

  // হার্ডকোডেড ডেটার বদলে ডিফল্ট "Coming Soon" এবং "TBD" ব্যবহার করা হয়েছে
  const version = release?.tag_name || "Coming Soon";
  const downloadUrl = release?.assets?.[0]?.browser_download_url;
  const lastUpdated = release?.published_at
    ? new Date(release.published_at).toISOString().split("T")[0]
    : "TBD";

  return (
    <div className="py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Download className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Get KinChat for Android</h1>
          
          <p className="text-zinc-400 mb-8">
            Current Version: <span className="text-white font-medium">{version}</span>
            <br />
            Last Updated: {lastUpdated}
          </p>

          {downloadUrl ? (
            <div className="space-y-6">
              <Button href={downloadUrl} className="w-full sm:w-auto">
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
