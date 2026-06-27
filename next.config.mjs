/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 Next.js 15+ me eslint block block ke andar ignoreDuringBuilds ab support nahi hota
  // Agar aapko error bypass karna hai, toh aap custom webpack ya build pipes use karte hain
  // Lekin iska sabse best aur clean substitute Tarika 2 hai.
};

export default nextConfig;