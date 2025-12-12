#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Temas disponibles
const temas = [
  'tiempo-eternidad',
  'identidad-memoria',
  'realidad-sueno',
  'muerte-transcendencia',
  'vida-existencia',
  'lenguaje-significado',
  'soledad-comunidad',
  'destino-liber-albedrio',
  'belleza-arte',
  'amor-dolor',
  'infinito-limites',
  'etica-moral',
  'conocimiento-verdad',
  'libertad-responsabilidad',
  'naturaleza-humano',
  'dios-sagrado',
  'sufrimiento-resignificacion',
  'poder-justicia',
  'tecnologia-humanidad',
  'silencio-vacio'
];

// Plantilla de obra
function generarPlantillaObra(titulo, autor) {
  const id = titulo.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  const fecha = new Date().toISOString().split('T')[0];
  
  return `---
id: ${id}
titulo: "${titulo}"
autor: "${autor}"
fecha: ${fecha}
tipo: "poema"  # poema | cuento | ensayo | microficcion
temas_principales: 
  - "tiempo-eternidad"
temas_secundarios: []
resumen: "Breve descripción de la obra y su enfoque filosófico."
cita_destacada: "Cita destacada de la obra (opcional)."
epoca: "contemporanea"  # antigua | medieval | moderna | contemporanea
region: "latinoamericana"  # occidental | oriental | latinoamericana | otra
dificultad: "intermedio"  # introductorio | intermedio | avanzado
publicado: true
orden: 50
---

## Texto del [tipo]

[Aquí va el texto completo de la obra literaria]

## Análisis Filosófico

### Tema Principal: [Nombre del tema]

[Análisis detallado del primer tema filosófico]

### Subtema: [Nombre del subtema]

[Análisis del segundo aspecto filosófico]

### Conexiones con Otras Obras/Filósofos

- Relación con [filósofo u obra relacionada]
- Influencias detectables
- Diferencias importantes

## Preguntas para la Reflexión

1. ¿Cómo se relaciona este texto con tu experiencia personal?

2. ¿Qué preguntas filosóficas te genera esta obra?

3. ¿Cómo cambiaría tu lectura con diferentes perspectivas filosóficas?

## Ejercicio de Aplicación

[Propuesta de ejercicio práctico o de escritura]

## Referencias Cruzadas

- **En este sitio:** [Obra relacionada en el sitio]
- **Filosóficas:** [Obra filosófica relevante]
- **Literarias:** [Obra literaria similar]

---

*Análisis preparado para Reflexiones Filosóficas*`;
}

// Ejecución
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Uso: node generar-obra.js "Título de la obra" "Nombre del Autor"');
  console.log('Temas disponibles:');
  temas.forEach((tema, i) => {
    console.log(`  ${i + 1}. ${tema}`);
  });
  process.exit(1);
}

const titulo = args[0];
const autor = args[1];
const plantilla = generarPlantillaObra(titulo, autor);

const rutaArchivo = path.join(__dirname, '..', 'src', 'content', 'obras', `${titulo.toLowerCase().replace(/ /g, '-')}.md`);
fs.writeFileSync(rutaArchivo, plantilla);

console.log(`✅ Obra creada: ${rutaArchivo}`);
console.log('📝 Recuerda editar los temas principales y completar el contenido.');