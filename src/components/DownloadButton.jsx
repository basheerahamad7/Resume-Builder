import { jsPDF } from 'jspdf';

const DownloadButton = ({ data }) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFont('Helvetica');

    doc.text(`Name: ${data.name}`, 10, 10);
    doc.text(`Email: ${data.email}`, 10, 20);
    doc.text(`Phone: ${data.phone}`, 10, 30);

    doc.text('Education:', 10, 40);
    doc.text(data.education, 10, 50);

    doc.text('Experience:', 10, 70);
    doc.text(data.experience, 10, 80);

    doc.text('Skills:', 10, 100);
    doc.text(data.skills, 10, 110);

    doc.save('resume.pdf');
  };

  return (
    <button className='db' onClick={handleDownload} style={{ marginTop: '20px' }}>
      Download as PDF
    </button>
  );
};

export default DownloadButton;