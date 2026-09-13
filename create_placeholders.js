import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple minimal valid PDF string helper
function createSimplePDF(title, content) {
  const stream = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 120 >>
stream
BT
/F1 20 Tf
50 720 Td
(${title}) Tj
/F1 12 Tf
0 -30 Td
(${content}) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000224 00000 n 
0000000293 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
460
%%EOF`;

  return Buffer.from(stream);
}

const assetsDir = path.join(__dirname, 'public', 'assets');
const certsDir = path.join(__dirname, 'public', 'certificates');

if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
if (!fs.existsSync(certsDir)) fs.mkdirSync(certsDir, { recursive: true });

// CV PDF
fs.writeFileSync(
  path.join(assetsDir, 'Varun-V-CV.pdf'),
  createSimplePDF('Varun V - Curriculum Vitae', 'B.Tech Biotechnology Student - Lovely Professional University')
);

// Certificates
const certFiles = [
  { name: 'general-chemistry.pdf', title: 'General Chemistry Certificate', org: 'Saylor Academy' },
  { name: 'developer-foundations.pdf', title: 'Developer Foundations Certificate', org: 'NxtWave Academy' },
  { name: 'css-flexbox-tailwind.pdf', title: 'CSS Flexbox & Tailwind Certificate', org: 'NxtWave Academy' },
  { name: 'javascript-essentials.pdf', title: 'JavaScript Essentials Certificate', org: 'NxtWave Academy' },
  { name: 'programming-foundations.pdf', title: 'Programming Foundations Certificate', org: 'NxtWave Academy' },
  { name: 'intro-databases.pdf', title: 'Introduction to Databases Certificate', org: 'NxtWave Academy' },
  { name: 'internship-certificate.pdf', title: 'QC/QA Industrial Internship Certificate', org: 'Triveni Formulations Ltd.' }
];

certFiles.forEach(cert => {
  fs.writeFileSync(
    path.join(certsDir, cert.name),
    createSimplePDF(cert.title, `Issued by ${cert.org} to Varun V`)
  );
});

console.log('Successfully generated placeholder PDFs!');
