#!/usr/bin/env bash

echo ""
echo "🌸 ====================================="
echo "🌸 BloomBook Studio - Dev Reset"
echo "🌸 ====================================="
echo ""

echo "🛑 Stopping existing Next.js servers..."
pkill -f "next dev" 2>/dev/null || true

echo "🧹 Cleaning .next cache..."
rm -rf .next

echo "🚀 Starting development server..."
echo ""

npm run dev