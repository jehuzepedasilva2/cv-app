import './styles/DownloadPDF.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function DownloadPDFButton() {
  const handleDownload = () => {
    const buttons = document.querySelectorAll('button:not(.ind-del):not(.ind-del-list)');
    const editables = document.querySelectorAll('.editable');
    buttons.forEach(button => button.style.visibility = 'hidden');
    editables.forEach(edit => {
      if (edit.classList.contains('clicked')) {
        edit.classList.remove('clicked');
        edit.classList.remove('caret-on');
      }
    });
  
    const input = document.getElementById('pdf-document');
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const pdfWidth = 595.28; // A4 page width in points
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
  
      const scale = pdfWidth / canvasWidth; // Scale to fit the width of an A4 page
      const pdfHeight = canvasHeight * scale; // Scale the height proportionally
  
      const pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]); // Custom size for the entire content
  
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
      pdf.save('new-resume.pdf'); // Name of the downloaded PDF file
    }).finally(() => {
      buttons.forEach(button => button.style.visibility = 'visible');
    }).catch((error) => {
      console.error("Error generating PDF:", error);
    });
  };  

  return (
    <button
      className="download-button"
      onClick={handleDownload}
    >
      Download PDF
    </button>
  );
}
