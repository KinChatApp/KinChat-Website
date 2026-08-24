#!/data/data/com.termux/files/usr/bin/bash
set -e
cd ~/kinchat

echo "→ Removing stale backup file"
git rm -f app/page.tsx.backup-before-animated-chat

echo "→ Creating new src/ skeleton"
mkdir -p "src/app/(marketing)/changelog"
mkdir -p "src/app/(marketing)/download"
mkdir -p "src/app/(marketing)/features"
mkdir -p "src/app/(marketing)/privacy"
mkdir -p "src/app/(marketing)/terms"
mkdir -p src/features/home
mkdir -p src/features/animated-chat-demo
mkdir -p src/features/changelog
mkdir -p src/features/download
mkdir -p src/features/legal
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/icons
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p src/types

echo "→ Moving routes into (marketing) group"
git mv app/page.tsx "src/app/(marketing)/page.tsx"
git mv app/changelog/page.tsx "src/app/(marketing)/changelog/page.tsx"
git mv app/download/page.tsx "src/app/(marketing)/download/page.tsx"
git mv app/features/page.tsx "src/app/(marketing)/features/page.tsx"
git mv app/privacy/page.tsx "src/app/(marketing)/privacy/page.tsx"
git mv app/terms/page.tsx "src/app/(marketing)/terms/page.tsx"

echo "→ Root layout stays outside the group (Next.js requirement)"
git mv app/layout.tsx src/app/layout.tsx
git mv app/globals.css src/app/globals.css

echo "→ Moving animated chat feature (whole folder, imports intact)"
git mv components/chat/* src/features/animated-chat-demo/

echo "→ Moving shared ui + layout components"
git mv components/ui/Button.tsx src/components/ui/Button.tsx
git mv components/ui/Container.tsx src/components/ui/Container.tsx
git mv components/layout/Footer.tsx src/components/layout/Footer.tsx
git mv components/layout/Navbar.tsx src/components/layout/Navbar.tsx

echo "→ Preserving empty dirs (home, icons) with .gitkeep"
touch src/features/home/.gitkeep
touch src/components/icons/.gitkeep

echo "→ Moving lib and types"
git mv lib/constants.ts src/lib/constants.ts
[ -d types ] && [ "$(ls -A types 2>/dev/null)" ] && git mv types/* src/types/ || touch src/types/.gitkeep

echo "→ Cleaning up empty old folders"
rmdir components/chat components/ui components/layout components/icons components/home lib types app/changelog app/download app/features app/privacy app/terms app 2>/dev/null || true
rmdir components 2>/dev/null || true

echo "→ Updating @/* path alias to point into src/"
sed -i 's#"@/\*": \["\./\*"\]#"@/*": ["./src/*"]#' tsconfig.json

echo "→ Fixing chat import paths across codebase"
grep -rl "@/components/chat" src 2>/dev/null | xargs -r sed -i 's#@/components/chat#@/features/animated-chat-demo#g'

echo "✅ Restructure done. Now run: npm run dev"
