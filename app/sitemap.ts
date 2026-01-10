import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.privilegedworld.com";

// Function to recursively scan the 'app' directory for routes
function getStaticRoutes(
  dir: string,
  routes: string[] = [],
  base: string = ""
): string[] {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 1. Skip system folders (api, components, etc.) and route groups like (auth)
      if (file.startsWith("_") || file === "api" || file.startsWith("(")) {
        continue;
      }
      // 2. Skip dynamic route folders like [slug] (we handle these via API below)
      if (file.startsWith("[") && file.endsWith("]")) {
        continue;
      }

      getStaticRoutes(fullPath, routes, path.join(base, file));
    } else if (file === "page.tsx" || file === "page.js") {
      // 3. Add the route if a page file exists
      const route = base === "" ? "/" : `/${base.replace(/\\/g, "/")}`;
      routes.push(route);
    }
  }
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // --- PART A: Auto-generate Static Routes from File System ---
  const appDirectory = path.join(process.cwd(), "app");
  const staticPaths = getStaticRoutes(appDirectory);

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  // --- PART B: Fetch Dynamic Routes (e.g., Blog Posts from API) ---
  // Replace this with your actual API call
  // const posts = await fetch('https://api.privilegedworld.com/posts').then(res => res.json());
  const dynamicEntries: MetadataRoute.Sitemap = [];

  /* Example for blog posts:
  const dynamicEntries = posts.map((post: any) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
  */

  return [...staticEntries, ...dynamicEntries];
}
