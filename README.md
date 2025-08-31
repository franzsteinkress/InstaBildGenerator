# InstagramBildGenerator

![Puppeteer](https://img.shields.io/badge/Puppeteer-21.x-40B5A4?logo=puppeteer&logoColor=white) ![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=white) ![PNG](https://img.shields.io/badge/Image-PNG-FFFFFF?logo=png&logoColor=black) ![VS Code](https://img.shields.io/badge/Editor-VS%20Code-007ACC?logo=visualstudiocode&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-green)

Hilfsmittel zur Gestaltung und automatisierten Erzeugung von Instagram-Story-Highlights im 9:16-Format (1080 × 1920 px) aus HTML + CSS.

## Voraussetzungen

* Eine vorhandene `index.html` mit eingebetteter oder verlinkter CSS-Datei
* Layout auf 9:16-Verhältnis optimiert
* Optional: Node.js + Puppeteer für automatisierte Screenshots

## Ziel: Instagram-Highlight-Bild

| Eigenschaft    | Wert                               |
| -------------- | ---------------------------------- |
| **Format**     | Hochformat (9:16)                  |
| **Größe**      | 1080 px × 1920 px                  |
| **Typ**        | PNG oder JPG                       |
| **Verwendung** | Instagram Story Cover / Highlights |

## HTML-Layout im 9:16-Verhältnis

Die `overlay-box` muss im CSS exakt im 9:16-Verhältnis angezeigt werden – entweder in Vorschaugröße oder mit voller Auflösung.

### CSS für Vorschaugröße (360×640)

```css
.overlay-box {
    width: 360px;
    height: 640px; /* 360 : 640 = 9 : 16 */
}
```

### CSS für volle Auflösung (1080×1920)

```css
.overlay-box {
    width: 1080px;
    height: 1920px;
}
```

> Verwende einen weißen Seitenhintergrund und zentriere das Layout, um einen sauberen Screenshot zu erzeugen.

## Automatisierte Screenshot-Erzeugung mit Puppeteer

### Setup

```bash
npm init -y
npm install puppeteer
```

> Es werden automatisch `node_modules`, `package.json` und `package-lock.json` erstellt.

### `screenshot.js`: Ein Screenshot einer HTML-Datei

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1920 });
  await page.goto('file://' + __dirname + '/index.html');

  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
```

### Ausführen

```bash
node screenshot.js
```

Screenshot wird als `screenshot.png` gespeichert.


## Screenshots stapelweise generieren: `generate-screenshots.js`

Falls du mehrere Varianten rendern willst:

```bash
npm init -y
npm install puppeteer
node generate-screenshots.js
```

> Die Datei muss dafür vorbereitet sein, z. B. mit einer Schleife durch Varianten wie `"theme1"`, `"theme2"` usw.


## Verwendete Bibliotheken

* [Puppeteer](https://pptr.dev/) – Headless Chrome zur automatisierten Screenshot-Erzeugung
* HTML & CSS – Für das 9:16-Layout der Highlights


## Lizenz

Dieses Repository steht unter der [MIT-Lizenz](./LICENSE). Erstellt zu Lern- und Demonstrationszwecken. Inhalte und Code dürfen frei verwendet und angepasst werden.

