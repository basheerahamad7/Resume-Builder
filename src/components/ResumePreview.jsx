import './ResumeForm.css'

const ResumePreview = ({ data }) => {
    return (
      <div className="resume-preview" style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
        <h2>{data.name}</h2>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <h3>Education</h3>
        <p>{data.education}</p>
        <h3>Experience</h3>
        <p>{data.experience}</p>
        <h3>Skills</h3>
        <p>{data.skills}</p>
      </div>
    );
  };
  
  export default ResumePreview;