import "../Styles/Preview.css";

function CVPreview({
  generalInfo,
  education,
  experience,
}) {
  return (
    <div>
      <h2>CV Preview</h2>

      <h3>General Information</h3>

      <p>Name: {generalInfo.name}</p>
      <p>Email: {generalInfo.email}</p>
      <p>Phone: {generalInfo.phone}</p>

      <h3>Education</h3>

      <p>School: {education.school}</p>
      <p>Degree: {education.degree}</p>
      <p>Date: {education.date}</p>

      <h3>Experience</h3>

      <p>Company: {experience.company}</p>
      <p>Position: {experience.position}</p>
      <p>Responsibilities: {experience.responsibilities}</p>
      <p>
        {experience.from} - {experience.to}
      </p>
    </div>
  );
}

export default CVPreview;