import { PDFDocument } from 'pdf-lib';

// PDF Creation
const pdfDoc = await PDFDocument.create();
const page = pdfDoc.addPage();
page.drawText('You can create PDFs!');
const pdfBytes = await pdfDoc.save();
document.alert("PDF created!");