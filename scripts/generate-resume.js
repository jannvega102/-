/**
 * Generates a Word (.docx) resume from portfolio content.
 * Run: node scripts/generate-resume.js
 */

import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, convertInchesToTwip } from 'docx'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '..', 'public', 'Resume.docx')

const spacing = { after: 120 }
const spacingSmall = { after: 80 }

const doc = new Document({
  sections: [{
    properties: {
      page: {
        margin: {
          top: convertInchesToTwip(0.6),
          right: convertInchesToTwip(0.6),
          bottom: convertInchesToTwip(0.6),
          left: convertInchesToTwip(0.6),
        },
      },
    },
    children: [
      // Title
      new Paragraph({
        text: 'Resume',
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Full Stack Developer | 7+ Years Experience', bold: true, size: 24 }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
      }),

      // Professional Summary
      new Paragraph({
        children: [new TextRun({ text: 'Professional Summary', bold: true, size: 28 })],
        heading: HeadingLevel.HEADING_1,
        spacing,
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: 'Full Stack Developer with 7+ years of experience delivering robust, scalable software solutions. Focus on the VILT stack (Vue, Inertia, Laravel, Tailwind). Independently verified by TestDome—top 10% globally for both PHP and JavaScript. Certified Digital Marketer with expertise in the Google ecosystem (Search Console, AdSense). Bridges technical architecture, UI/UX design (Figma/Photoshop), and search engine performance to build commercially successful products.',
            size: 22,
          }),
        ],
        spacing: { after: 300 },
      }),

      // Professional Experience
      new Paragraph({
        children: [new TextRun({ text: 'Professional Experience', bold: true, size: 28 })],
        heading: HeadingLevel.HEADING_1,
        spacing,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Full Stack Web Developer', bold: true, size: 24 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Split Second Research (SSR) | 2018 – Present', italics: true, size: 22 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: 'Designed and developed full-stack web applications using Laravel and Vue 3. Architected and implemented SPA systems using Inertia.js. Built internal development tools to automate project setup and testing workflows. Developed simulation systems for executing research testing phases. Improved database performance and reduced load times by up to 40%. Led feature development from requirements gathering to production deployment. Conducted code reviews and mentored junior developers. Collaborated with cross-functional teams including researchers, QA, and designers.',
            size: 22,
          }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Tech Stack: ', bold: true, size: 22 }),
          new TextRun({ text: 'Laravel, Vue 3, Inertia, TailwindCSS, MySQL, Docker.', size: 22 }),
        ],
        spacing: { after: 300 },
      }),

      // Technical Skills
      new Paragraph({
        children: [new TextRun({ text: 'Technical Skills', bold: true, size: 28 })],
        heading: HeadingLevel.HEADING_1,
        spacing,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '• Laravel & Backend — 95%', size: 22 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '• Vue 3 & Frontend — 90%', size: 22 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '• MySQL & Database — 85%', size: 22 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '• DevOps (Git, Docker, CI/CD) — 80%', size: 22 }),
        ],
        spacing: { after: 300 },
      }),

      // Technical & Strategic Ecosystem
      new Paragraph({
        children: [new TextRun({ text: 'Technical & Strategic Ecosystem', bold: true, size: 28 })],
        heading: HeadingLevel.HEADING_1,
        spacing,
      }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 1 },
          bottom: { style: BorderStyle.SINGLE, size: 1 },
          left: { style: BorderStyle.SINGLE, size: 1 },
          right: { style: BorderStyle.SINGLE, size: 1 },
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Category', bold: true })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Primary Stack', bold: true })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Marketing & Growth', bold: true })] })] }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Backend' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Laravel (Expert), PHP 8.x, Django, Node.js' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '—' })] })] }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Frontend' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Vue 3 (Pinia), Inertia.js, Tailwind, Native JS' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Yoast SEO, Digital Marketing Strategy' })] })] }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Design' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Figma, Adobe Photoshop, Canva' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'UI/UX Prototyping, Video Editing' })] })] }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Mobile & CMS' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Ionic/Cordova, WordPress (Custom Plugins)' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Elementor, daisyUI, Flowbite' })] })] }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'DevOps' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Docker, Git, Bash Scripting, Laragon' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'XAMPP, RESTful API Design' })] })] }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Specialized' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Leaflet.js, GeoJSON, SQL, JSON, XML' })] })] }),
              new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Google Maps API, Schema Markup' })] })] }),
            ],
          }),
        ],
      }),

      // Verified Credentials
      new Paragraph({ text: '', spacing: { after: 200 } }),
      new Paragraph({
        children: [new TextRun({ text: 'Verified Technical Credentials', bold: true, size: 28 })],
        heading: HeadingLevel.HEADING_1,
        spacing,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '• PHP (Hard): Top 10% Score — TestDome', size: 22 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '• JavaScript: Top 10% Score — TestDome', size: 22 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '• Digital Marketing: Fundamentals of Digital Marketing (Google/IAB)', size: 22 }),
        ],
        spacing: { after: 300 },
      }),

      // Notable Projects
      new Paragraph({
        children: [new TextRun({ text: 'Notable Projects', bold: true, size: 28 })],
        heading: HeadingLevel.HEADING_1,
        spacing,
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Impact', bold: true, size: 24 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: 'Market research platform that measures which design assets grab attention. Analyses reaction times to show which pack or product visuals are most attention-grabbing, helping optimise packaging and advertising strategies.',
            size: 22,
          }),
        ],
        spacing: { after: 200 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Impulse', bold: true, size: 24 }),
        ],
        spacing: spacingSmall,
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: 'Moment-by-moment testing platform that captures emotional reactions to audio-visual content—from ads and trailers to speeches and training videos. Analyses up to six emotions per test and delivers downloadable insights to optimise campaigns and content.',
            size: 22,
          }),
        ],
        spacing: { after: 200 },
      }),
    ],
  }],
})

const buffer = await Packer.toBuffer(doc)
writeFileSync(outputPath, buffer)
console.log('Resume saved to:', outputPath)
