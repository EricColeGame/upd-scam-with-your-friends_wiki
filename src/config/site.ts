export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Upd Scam With Your Friends Wiki",
  shortName: "Upd Scam With Your Friends",
  logoText: "U",
  tagline: "Guides, Codes, Trading Strategies & Tips",
  description: "Upd Scam With Your Friends Wiki with trading guides, codes, items, negotiation strategies, and updates for Roblox players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://upd-scam-with-your-friends.wiki",
  supportEmail: "support@upd-scam-with-your-friends.wiki",
  gameUrl: "https://www.roblox.com/games/93539470484676/Scam-With-Your-Friends",
  heroVideoId: "q80XOTb0SQM", // Scam With Your Friends multiplayer gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/watch?v=q80XOTb0SQM",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
