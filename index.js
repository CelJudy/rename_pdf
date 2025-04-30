const fs = require('fs');
const { PdfReader } = require("pdfreader");

let linea="";
fs.readdir("original", (err, files) => {
    files.forEach(file => {
        fs.readFile(`original/${file}`, (err, pdfBuffer) => {
            // pdfBuffer contains the file content
            new PdfReader().parseBuffer(pdfBuffer, (err, item) => {

                if (err) console.error("error:", err);
                else if (!item){
                    //console.warn(linea);
                    copyFile(`original/${file}`, `new/${linea}.pdf`);
                }else if (item.text){
                    //console.log(item.text);
                    linea=item.text;
                } 
            });
        });
    });
});

async function copyFile(sourcePath, destinationPath) {
    try {
      await fs.promises.copyFile(sourcePath, destinationPath);
      console.log(`File copied successfully from ${sourcePath} to ${destinationPath}`);
    } catch (err) {
      console.error(`An error occurred sourcePath in file ${sourcePath}:`, err);
    }
  }

 
