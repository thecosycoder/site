import fs from 'fs';
import path from 'path';

export function getRoutes() {
  const routesDir = path.join(process.cwd(), 'src', 'routes');
  const folders = fs.readdirSync(routesDir, { withFileTypes: true });

  const routes = folders
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({
      name: dirent.name,
      path: `/${dirent.name.toLowerCase()}`
    }));

  return routes;
}
