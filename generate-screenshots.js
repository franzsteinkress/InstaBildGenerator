// Copyright (c) 2025 Franz Steinkress
// Licensed under the MIT License - see LICENSE file for details
//

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "screenshots");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const themes = ["gray", "white", "red", "blue", "royal", "green"];
const totalImages = 12;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1080,
    height: 1920,
    deviceScaleFactor: 1,
  });

  await page.goto("file://" + __dirname + "/index.html");

  for (let t = 0; t < themes.length; t++) {
    for (let i = 0; i < totalImages; i++) {
      await page.evaluate((theme, imgIndex) => {
        document.body.className = `theme-${theme}`;
        document.querySelector("img").src = `./assets/bild${imgIndex + 1}.png`;
        document.querySelector("#title").textContent = [
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
          "Python-Beispielsammlung",
        ][imgIndex];
        document.querySelector("#description").textContent = [
          "Bestätigungsdialog",
          "Bildverarbeitung",
          "Blockchain",
          "Blog",
          "Chatbot",
          "Eingabedialog",
          "Finanzdatenanzeige",
          "Funktionsdialog",
          "Funktionswerkzeug",
          "Lizenzpruefer",
          "Notizenverwaltung",
          "Verschluesselung"
        ][imgIndex];
        document.querySelector("#closeBtn").textContent = `Bild ${imgIndex + 1} von 12`;
      }, themes[t], i);

      //await page.waitForTimeout(300); // Warten bis Bild geladen
      await new Promise(resolve => setTimeout(resolve, 300));

      const filename = `${themes[t]}_${i + 1}.png`;
      const filepath = path.join(outputDir, filename);
      await page.screenshot({ path: filepath });
      console.log("Screenshot gespeichert:", filename);
    }
  }

  await browser.close();
})();
