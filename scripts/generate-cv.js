import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const resumeData = {
  es: {
    filename: 'cv-hugo-adama-es.pdf',
    title: 'Frontend & Full-Stack Developer | Estudiante de Ingenieria de Sistemas',
    location: 'Lima, Peru',
    sections: {
      profile: 'Perfil Profesional',
      skills: 'Habilidades Tecnicas',
      experience: 'Experiencia Laboral',
      projects: 'Proyectos de Software Destacados',
      education: 'Educacion y Formacion',
      certs: 'Licencias y Certificaciones',
    },
    profileText: [
      'Estudiante de Ingenieria de Sistemas Computacionales (UPN) con formacion previa en Ingenieria de Software (UPC)',
      'y experiencia practica en gestion de almacenes, trazabilidad de existencias y sistemas ERP en Servicios Corporativos Muruhuay.',
      'Especializado en el desarrollo de aplicaciones web escalables y de alto rendimiento (Zero-FOUC) con Astro, TypeScript,',
      'React y CSS Modular, con riguroso enfoque en Core Web Vitals, accesibilidad web (WCAG AA/AAA) y diseno responsivo.',
      'Dominio de ingles tecnico con doble certificacion oficial de Cisco Networking Academy (English for IT 1 & 2).'
    ],
    skills: [
      { label: 'Frontend:', val: 'Astro, TypeScript, React 19, JavaScript (ES6+), CSS3 Modular, Tailwind CSS, HTML5 Semantico.' },
      { label: 'Backend & BD:', val: 'Node.js, Python, PHP, Laravel, REST APIs, MySQL, SQL Server.' },
      { label: 'Herramientas:', val: 'Git, GitHub, Cloudflare Pages, Vercel, Vite, Figma, Linux / Bash, Microsoft Excel avanzado.' },
      { label: 'Idiomas:', val: 'Espanol (Nativo), Ingles (Avanzado - ICPNA, Britanico, Cisco English for IT 1 & 2).' },
    ],
    experience: {
      role: 'Asistente de Operaciones y Almacen',
      company: 'Servicios Corporativos Muruhuay',
      location: 'Lima, Peru',
      date: 'Ene. 2024 - Actualidad',
      bullets: [
        'Direccion y control de inventarios de repuestos automotrices (filtros, aceites, bujias, refrigerantes) asegurando precision de stock.',
        'Registro y administracion operativa continua en el sistema ERP interno de la empresa y hojas de calculo avanzadas en Excel.',
        'Coordinacion integral de logistica: recepcion de mercaderia, preparacion, despacho de pedidos y atencion tecnica a clientes.'
      ]
    },
    projects: [
      {
        name: 'Git Command Web',
        stack: 'Astro, TypeScript, Modular CSS',
        bullets: [
          'Guia interactiva y visual para modelado mental de Git con simulador de terminal en vivo.',
          'Pipeline visual de 4 etapas, resolucion de conflictos (3-way merge) y simulador de Git Bisect con carga sub-segundo.'
        ]
      },
      {
        name: 'BeatNest - Audio Player',
        stack: 'TypeScript, Web Audio API, Canvas 2D',
        bullets: [
          'Reproductor de audio privado con ecualizador parametrico de 5 bandas y visualizador en tiempo real a 60 fps.',
          'Procesamiento 100% en cliente sin telemetria externa, sin cuentas ni dependencias en la nube.'
        ]
      },
      {
        name: 'Once Upon a Timeline',
        stack: 'Astro, React 19, Canvas API',
        bullets: [
          'Archivo interactivo con linea de tiempo discografica dinamica, reproductor integrado y soporte multilingue (ES/EN/KO/JA).',
          'Simulador virtual de lightstick y personalizador 3D de photocards con exportacion grafica via Canvas.'
        ]
      },
      {
        name: 'Kanban Tableau - Task Management',
        stack: 'TypeScript, Native Drag & Drop, WCAG 2.1 AA',
        bullets: [
          'Tablero Kanban accesible con navegacion integral por teclado, historial Undo/Redo y persistencia local sin base de datos.'
        ]
      }
    ],
    education: [
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
    ],
    certs: [
      '• Cisco Networking Academy: English for IT 1 & English for IT 2 (Vocabulario de Ingenieria de Software y Redes)',
      '• University of Michigan: Good with Words - Writing and Editing Specialization',
      '• Vanderbilt University: Introduction to Programming with MATLAB  |  Meta: Publicidad con Meta',
      '• Macquarie University: Excel Skills for Business (Essentials & Intermediate I)  |  Univ. of Pennsylvania: Positive Psychology'
    ]
  },
  en: {
    filename: 'cv-hugo-adama-en.pdf',
    title: 'Frontend & Full-Stack Developer | Systems Engineering Student',
    location: 'Lima, Peru',
    sections: {
      profile: 'Professional Summary',
      skills: 'Technical Skills',
      experience: 'Work Experience',
      projects: 'Featured Software Projects',
      education: 'Education & Training',
      certs: 'Licenses & Certifications',
    },
    profileText: [
      'Systems Engineering student (UPN) with prior Software Engineering coursework (UPC) and hands-on experience in warehouse',
      'operations, inventory traceability, and ERP systems at Servicios Corporativos Muruhuay. Specializes in building modern,',
      'scalable, and ultra-fast JAMstack web applications (Zero-FOUC) with Astro, TypeScript, React 19, and Modular CSS.',
      'Strictly committed to Core Web Vitals optimization, web accessibility standards (WCAG AA/AAA), and responsive design.',
      'Bilingual in professional and technical English with dual Cisco Networking Academy certifications (English for IT 1 & 2).'
    ],
    skills: [
      { label: 'Frontend:', val: 'Astro, TypeScript, React 19, JavaScript (ES6+), Modular CSS, Tailwind CSS, Semantic HTML5.' },
      { label: 'Backend & DB:', val: 'Node.js, Python, PHP, Laravel, RESTful APIs, MySQL, SQL Server.' },
      { label: 'Tools & DevOps:', val: 'Git, GitHub, Cloudflare Pages, Vercel, Vite, Figma, Linux / Bash, Advanced Microsoft Excel.' },
      { label: 'Languages:', val: 'Spanish (Native), English (Advanced - ICPNA, Britanico, Cisco English for IT 1 & 2).' },
    ],
    experience: {
      role: 'Warehouse Operations & Inventory Assistant',
      company: 'Servicios Corporativos Muruhuay',
      location: 'Lima, Peru',
      date: 'Jan. 2024 - Present',
      bullets: [
        'Supervised inventory management and quality tracking for automotive spare parts (filters, oils, spark plugs, coolants).',
        'Maintained continuous operational records using the company internal ERP system and advanced Microsoft Excel spreadsheets.',
        'Coordinated end-to-end logistics workflows: inbound shipment receipt, order staging, packaging, and client dispatch.'
      ]
    },
    projects: [
      {
        name: 'Git Command Web',
        stack: 'Astro, TypeScript, Modular CSS',
        bullets: [
          'Interactive, visual mental-model learning platform for Git featuring an in-browser live terminal simulator.',
          'Built a 4-stage visual pipeline, 3-way merge conflict visualizer, and Git Bisect simulator with sub-second page loads.'
        ]
      },
      {
        name: 'BeatNest - Audio Player',
        stack: 'TypeScript, Web Audio API, Canvas 2D',
        bullets: [
          'Private, client-side web audio player with a 5-band parametric equalizer and real-time 60fps frequency spectrum visualizer.',
          '100% in-browser signal processing without external cloud dependencies, user accounts, or telemetry tracking.'
        ]
      },
      {
        name: 'Once Upon a Timeline',
        stack: 'Astro, React 19, Canvas API',
        bullets: [
          'Interactive multi-language digital archive (ES/EN/KO/JA) featuring dynamic discography timeline and integrated media player.',
          'Engineered virtual lightstick simulator and interactive 3D photocard customizer with client-side Canvas rendering export.'
        ]
      },
      {
        name: 'Kanban Tableau - Task Management',
        stack: 'TypeScript, Native Drag & Drop, WCAG 2.1 AA',
        bullets: [
          'Fully accessible task management board with complete keyboard navigation, state Undo/Redo history, and local persistence.'
        ]
      }
    ],
    education: [
      {
        inst: 'Universidad Privada del Norte (UPN)',
        degree: 'B.S. in Systems Engineering (Ingenieria de Sistemas Computacionales)',
        date: 'Aug. 2026 - Present'
      },
      {
        inst: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        degree: 'Software Engineering / Computer Science Coursework',
        date: 'Mar. 2018 - Dec. 2021'
      },
      {
        inst: 'ICPNA & Asociacion Cultural Peruano Britanica (Britanico)',
        degree: 'Comprehensive English Programs (Basic, Intermediate and Advanced Courses)',
        date: '2015 - Present'
      }
    ],
    certs: [
      '• Cisco Networking Academy: English for IT 1 & English for IT 2 (Software Engineering & Networking Vocabulary)',
      '• University of Michigan: Good with Words - Writing and Editing Specialization',
      '• Vanderbilt University: Introduction to Programming with MATLAB  |  Meta: Meta Certified Digital Marketing',
      '• Macquarie University: Excel Skills for Business (Essentials & Intermediate I)  |  Univ. of Pennsylvania: Positive Psychology'
    ]
  }
};

async function buildPDF(lang) {
  const data = resumeData[lang];
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

  page.drawText(data.title, {
    x: marginX,
    y: cursorY,
    size: 11,
    font: fontBold,
    color: colorAccent,
  });
  cursorY -= 15;

  const contactLine = `${data.location}  |  hugoadama@outlook.com  |  linkedin.com/in/hugoadama  |  github.com/HugoAdama  |  hugoadama.github.io/MyPortfolio`;
  page.drawText(contactLine, {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorMuted,
  });
  cursorY -= 4;

  // --- PERFIL PROFESIONAL ---
  drawSectionHeader(data.sections.profile);
  for (const line of data.profileText) {
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
  drawSectionHeader(data.sections.skills);
  for (const s of data.skills) {
    page.drawText(s.label, {
      x: marginX,
      y: cursorY,
      size: 9,
      font: fontBold,
      color: colorPrimary,
    });
    page.drawText(s.val, {
      x: marginX + 85,
      y: cursorY,
      size: 9,
      font: fontRegular,
      color: colorText,
    });
    cursorY -= 13;
  }

  // --- EXPERIENCIA LABORAL ---
  drawSectionHeader(data.sections.experience);
  
  page.drawText(data.experience.role, {
    x: marginX,
    y: cursorY,
    size: 10,
    font: fontBold,
    color: colorPrimary,
  });
  
  const roleWidth = fontBold.widthOfTextAtSize(data.experience.role, 10);
  page.drawText(`${data.experience.company}  |  ${data.experience.location}`, {
    x: marginX + roleWidth + 12,
    y: cursorY,
    size: 9.5,
    font: fontRegular,
    color: colorMuted,
  });
  page.drawText(data.experience.date, {
    x: width - marginX - 110,
    y: cursorY,
    size: 9,
    font: fontBold,
    color: colorPrimary,
  });
  cursorY -= 14;

  for (const b of data.experience.bullets) {
    page.drawText('•', { x: marginX + 6, y: cursorY, size: 8.5, font: fontRegular, color: colorAccent });
    page.drawText(b, { x: marginX + 18, y: cursorY, size: 9, font: fontRegular, color: colorText });
    cursorY -= 12.5;
  }

  // --- PROYECTOS DESTACADOS ---
  drawSectionHeader(data.sections.projects);

  for (const p of data.projects) {
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
  drawSectionHeader(data.sections.education);
  for (const e of data.education) {
    page.drawText(e.inst, {
      x: marginX,
      y: cursorY,
      size: 9,
      font: fontBold,
      color: colorPrimary,
    });
    page.drawText(e.date, {
      x: width - marginX - 110,
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
  drawSectionHeader(data.sections.certs);
  for (const c of data.certs) {
    page.drawText(c, {
      x: marginX,
      y: cursorY,
      size: 8.5,
      font: fontRegular,
      color: colorText,
    });
    cursorY -= 11.5;
  }

  return await doc.save();
}

async function generateAllCVs() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate Spanish Version
  const pdfBytesEs = await buildPDF('es');
  const pathEs = path.join(publicDir, 'cv-hugo-adama-es.pdf');
  const pathDefault = path.join(publicDir, 'cv-hugo-adama.pdf');
  fs.writeFileSync(pathEs, pdfBytesEs);
  fs.writeFileSync(pathDefault, pdfBytesEs); // Default is Spanish
  console.log(`Saved Spanish CV at: ${pathEs} (${pdfBytesEs.length} bytes)`);
  console.log(`Updated default CV at: ${pathDefault} (${pdfBytesEs.length} bytes)`);

  // Generate English Version
  const pdfBytesEn = await buildPDF('en');
  const pathEn = path.join(publicDir, 'cv-hugo-adama-en.pdf');
  fs.writeFileSync(pathEn, pdfBytesEn);
  console.log(`Saved English CV at: ${pathEn} (${pdfBytesEn.length} bytes)`);
}

generateAllCVs().catch(console.error);
