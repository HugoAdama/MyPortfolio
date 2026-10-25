import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const doc = await PDFDocument.create();
  
  // A4 dimensions in points: 595.28 x 841.89
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  // Elegant Corporate Palette
  const colorPrimary = rgb(0.06, 0.09, 0.16); // #0F172A (Deep Navy)
  const colorAccent = rgb(0.01, 0.52, 0.78);  // #0284C7 (Corporate Blue)
  const colorText = rgb(0.15, 0.20, 0.28);    // #273347 (High-contrast Slate)
  const colorMuted = rgb(0.38, 0.45, 0.55);   // #61738C (Muted text)
  const colorLine = rgb(0.84, 0.88, 0.93);    // #D6E0ED (Subtle border line)

  const marginX = 40;
  let cursorY = height - 38;

  function drawSectionHeader(title) {
    cursorY -= 13;
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: cursorY,
      size: 10.5,
      font: fontBold,
      color: colorAccent,
    });
    cursorY -= 4;
    page.drawLine({
      start: { x: marginX, y: cursorY },
      end: { x: width - marginX, y: cursorY },
      thickness: 1.2,
      color: colorLine,
    });
    cursorY -= 12;
  }

  // --- HEADER ---
  page.drawText('HUGO ADAMA', {
    x: marginX,
    y: cursorY,
    size: 21,
    font: fontBold,
    color: colorPrimary,
  });
  cursorY -= 17;

  page.drawText('Frontend & Full-Stack Developer | Estudiante de Ingenieria de Sistemas', {
    x: marginX,
    y: cursorY,
    size: 11,
    font: fontBold,
    color: colorAccent,
  });
  cursorY -= 15;

  const contactLine = 'Lima, Peru  |  hugoadama@outlook.com  |  linkedin.com/in/hugoadama  |  github.com/HugoAdama  |  hugoadama.github.io/MyPortfolio';
  page.drawText(contactLine, {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorMuted,
  });
  cursorY -= 4;

  // --- PERFIL PROFESIONAL ---
  drawSectionHeader('Perfil Profesional');
  const summaryText = [
    'Estudiante de Ingenieria de Sistemas Computacionales (UPN) con formacion previa en Ingenieria de Software (UPC)',
    'y experiencia en gestion de almacenes, trazabilidad de existencias y sistemas ERP en Servicios Corporativos Muruhuay.',
    'Especializado en el desarrollo de aplicaciones web de alto rendimiento y arquitectura JAMstack (Zero-FOUC) con Astro,',
    'TypeScript, React y CSS Modular, priorizando Core Web Vitals, accesibilidad estricta y diseno responsivo.',
    'Dominio de ingles tecnico con doble certificacion Cisco Networking Academy (English for IT 1 & 2).'
  ];
  for (const line of summaryText) {
    page.drawText(line, {
      x: marginX,
      y: cursorY,
      size: 9,
      font: fontRegular,
      color: colorText,
    });
    cursorY -= 12.5;
  }

  // --- HABILIDADES TECNICAS ---
  drawSectionHeader('Habilidades Tecnicas');
  const skills = [
    { label: 'Frontend:', val: 'Astro, TypeScript, React 19, JavaScript (ES6+), CSS3 Modular, Tailwind CSS, HTML5 Semantico.' },
    { label: 'Backend & BD:', val: 'Node.js, Python, PHP, Laravel, REST APIs, MySQL, SQL Server.' },
    { label: 'Herramientas:', val: 'Git, GitHub, Cloudflare Pages, Vercel, Vite, Figma, Linux / Bash, Microsoft Excel avanzado.' },
    { label: 'Idiomas:', val: 'Espanol (Nativo), Ingles (Avanzado - ICPNA, Britanico, Cisco English for IT 1 & 2).' },
  ];
  for (const s of skills) {
    page.drawText(s.label, {
      x: marginX,
      y: cursorY,
      size: 9,
      font: fontBold,
      color: colorPrimary,
    });
    page.drawText(s.val, {
      x: marginX + 80,
      y: cursorY,
      size: 9,
      font: fontRegular,
      color: colorText,
    });
    cursorY -= 13;
  }

  // --- EXPERIENCIA LABORAL ---
  drawSectionHeader('Experiencia Laboral');
  
  page.drawText('Asistente de Almacen', {
    x: marginX,
    y: cursorY,
    size: 10,
    font: fontBold,
    color: colorPrimary,
  });
  page.drawText('Servicios Corporativos Muruhuay  |  Lima, Peru', {
    x: marginX + 120,
    y: cursorY,
    size: 9.5,
    font: fontRegular,
    color: colorMuted,
  });
  page.drawText('Ene. 2024 - Actualidad', {
    x: width - marginX - 105,
    y: cursorY,
    size: 9,
    font: fontBold,
    color: colorPrimary,
  });
  cursorY -= 14;

  const expBullets = [
    'Recepcion y control de inventario de repuestos automotrices (filtros, aceites, bujias), asegurando la precision de existencias.',
    'Registro y gestion operativa continua en el sistema ERP interno de la empresa y hojas de calculo Microsoft Excel.',
    'Preparacion y despacho de pedidos, gestion documental de almacen y coordinacion de atencion directa a clientes.'
  ];
  for (const b of expBullets) {
    page.drawText('•', { x: marginX + 6, y: cursorY, size: 8.5, font: fontRegular, color: colorAccent });
    page.drawText(b, { x: marginX + 18, y: cursorY, size: 9, font: fontRegular, color: colorText });
    cursorY -= 12.5;
  }

  // --- PROYECTOS DESTACADOS ---
  drawSectionHeader('Proyectos de Software Destacados');

  const projects = [
    {
      name: 'Git Command Web',
      stack: 'Astro, TypeScript, Modular CSS',
      bullets: [
        'Guia interactiva y visual para modelado mental de Git con simulador de terminal en vivo.',
        'Pipeline visual de 4 etapas, resolucion de conflictos (3-way merge) y simulador de Git Bisect con carga sub-segundo.'
      ]
    },
    {
      name: 'BeatNest – In-Browser Audio Player',
      stack: 'TypeScript, Web Audio API, Canvas 2D',
      bullets: [
        'Reproductor de audio privado con ecualizador parametrico de 5 bandas y visualizador en tiempo real a 60 fps.',
        'Procesamiento 100% en cliente sin dependencias externas en la nube ni envio de telemetria.'
      ]
    },
    {
      name: 'Once Upon a Timeline – TWICE Archive',
      stack: 'Astro, React 19, Canvas API',
      bullets: [
        'Plataforma interactiva con linea de tiempo discografica dinamica, reproductor integrado y soporte multilingue (ES/EN/KO/JA).',
        'Simulador virtual de lightstick y personalizador 3D de photocards con exportacion grafica via Canvas.'
      ]
    },
    {
      name: 'Kanban Tableau – Task Management',
      stack: 'TypeScript, Native Drag & Drop, WCAG 2.1 AA',
      bullets: [
        'Tablero Kanban totalmente accesible con navegacion integral por teclado, historial Undo/Redo y persistencia local.'
      ]
    }
  ];

  for (const p of projects) {
    page.drawText(p.name, {
      x: marginX,
      y: cursorY,
      size: 9.5,
      font: fontBold,
      color: colorPrimary,
    });
    page.drawText(`|  ${p.stack}`, {
      x: marginX + fontBold.widthOfTextAtSize(p.name, 9.5) + 6,
      y: cursorY,
      size: 9,
      font: fontOblique,
      color: colorMuted,
    });
    cursorY -= 13;

    for (const b of p.bullets) {
      page.drawText('•', { x: marginX + 6, y: cursorY, size: 8.5, font: fontRegular, color: colorAccent });
      page.drawText(b, { x: marginX + 18, y: cursorY, size: 9, font: fontRegular, color: colorText });
      cursorY -= 12;
    }
    cursorY -= 3;
  }

  // --- EDUCACION ---
  drawSectionHeader('Educacion');
  const edu = [
    {
      inst: 'Universidad Privada del Norte (UPN)',
      degree: 'Grado en Ingenieria de Sistemas Computacionales',
      date: 'Ago. 2026 - Actualidad'
    },
    {
      inst: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      degree: 'Ingenieria de Software, Computer Science',
      date: 'Mar. 2018 - Dic. 2021'
    },
    {
      inst: 'ICPNA & Asociacion Cultural Peruano Britanica (Britanico)',
      degree: 'Cursos Basicos, Intermedios y Avanzados de Idioma Ingles',
      date: '2015 - Actualidad'
    }
  ];
  for (const e of edu) {
    page.drawText(e.inst, {
      x: marginX,
      y: cursorY,
      size: 9,
      font: fontBold,
      color: colorPrimary,
    });
    page.drawText(e.date, {
      x: width - marginX - 105,
      y: cursorY,
      size: 8.5,
      font: fontRegular,
      color: colorMuted,
    });
    cursorY -= 11.5;
    page.drawText(e.degree, {
      x: marginX,
      y: cursorY,
      size: 8.5,
      font: fontRegular,
      color: colorText,
    });
    cursorY -= 12.5;
  }

  // --- CERTIFICACIONES ---
  drawSectionHeader('Licencias y Certificaciones');
  const certs = [
    '• Cisco Networking Academy: English for IT 1 & English for IT 2 (Vocabulario de Ingenieria de Software y Redes)',
    '• University of Michigan: Good with Words - Writing and Editing Specialization',
    '• Vanderbilt University: Introduction to Programming with MATLAB  |  Meta: Publicidad con Meta',
    '• Macquarie University: Excel Skills for Business (Essentials & Intermediate I)  |  Univ. of Pennsylvania: Positive Psychology'
  ];
  for (const c of certs) {
    page.drawText(c, {
      x: marginX,
      y: cursorY,
      size: 8.5,
      font: fontRegular,
      color: colorText,
    });
    cursorY -= 11.5;
  }

  console.log(`Final cursorY: ${cursorY.toFixed(1)} pt (bottom margin: ${cursorY.toFixed(1)} pt)`);
  const pdfBytes = await doc.save();
  const targetPath = path.resolve('public', 'cv-hugo-adama.pdf');
  fs.writeFileSync(targetPath, pdfBytes);
  console.log(`CV generated successfully at: ${targetPath} (${pdfBytes.length} bytes)`);
}

generateCV().catch(console.error);
