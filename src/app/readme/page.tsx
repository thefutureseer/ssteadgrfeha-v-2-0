import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export default async function ReadmePage() {
  const readMePath = path.join(process.cwd(), 'README.md');
  const fileContents = fs.readFileSync(readMePath, 'utf-8');
  const htmlNow = marked(fileContents)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000013] to-[#0b0c2a] text-white font-orbitron dark">
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-md animate-pulse">
          README
        </h1>
        <div className="mt-8 prose prose-invert" dangerouslySetInnerHTML={{ __html: htmlNow }} />
      </div>
    </div>
  );
}