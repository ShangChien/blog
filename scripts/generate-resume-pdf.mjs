import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { readFile, stat } from "node:fs/promises";
import { chromium } from "playwright";

const root = resolve("dist");
const outDir = resolve("public");
const port = 4329;
const origin = `http://127.0.0.1:${port}`;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
};

async function resolveFile(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const safePath = decodedPath.replace(/^\/+/, "");
  const requested = resolve(root, safePath);

  if (!requested.startsWith(root)) {
    return null;
  }

  try {
    const fileStat = await stat(requested);
    if (fileStat.isFile()) return requested;
    if (fileStat.isDirectory()) return join(requested, "index.html");
  } catch {
    return join(requested, "index.html");
  }
}

function createStaticServer() {
  return createServer(async (req, res) => {
    try {
      const filePath = await resolveFile(req.url ?? "/");
      if (!filePath) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      const body = await readFile(filePath);
      res.writeHead(200, {
        "content-type":
          mimeTypes[extname(filePath)] ?? "application/octet-stream",
      });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
}

async function listen(server) {
  await new Promise((resolveListen) => server.listen(port, resolveListen));
}

async function printResume(page, path, output) {
  await page.goto(`${origin}${path}`, { waitUntil: "networkidle" });
  await page.pdf({
    path: join(outDir, output),
    format: "A4",
    printBackground: true,
    margin: {
      top: "12mm",
      right: "12mm",
      bottom: "12mm",
      left: "12mm",
    },
  });
}

const server = createStaticServer();
await listen(server);

const browser = await chromium.launch();
const page = await browser.newPage();

try {
  await printResume(page, "/resume/", "resume.pdf");
  await printResume(page, "/resume/en/", "resume-en.pdf");
} finally {
  await browser.close();
  server.close();
}
