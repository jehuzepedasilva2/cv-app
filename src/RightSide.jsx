import './RightSide.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function RightSide() {

  const handleDownload = () => {
    const buttons = document.querySelectorAll('button:not(.ind-del)');
    const editables = document.querySelectorAll('.editable');
    buttons.forEach(button => button.style.visibility = 'hidden');
    editables.forEach(edit => {
      if (edit.classList.contains('clicked')) {
        edit.classList.remove('clicked');
        edit.classList.remove('caret-on');
      }
    });
  
    const input = document.getElementById('pdf-document');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
  
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('new-resume.pdf'); // Name of the downloaded PDF file
    }).finally(() => {
      buttons.forEach(button =>  button.style.visibility = 'visible');
    }).catch((error) => {
      console.error("Error generating PDF:", error);
    });
  };
  
  

  return (
    <button
      className='download-button'
      onClick={handleDownload}
    >
      Download PDF
    </button>
  );
}