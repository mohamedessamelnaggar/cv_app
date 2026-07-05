import "../Styles/Education.css";

function Education({ education, setEducation }) {
  return (
    <div>
      <h2>Education</h2>

      <input
        type="text"
        placeholder="School"
        value={education.school}
        onChange={(e) =>
          setEducation({
            ...education,
            school: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Degree"
        value={education.degree}
        onChange={(e) =>
          setEducation({
            ...education,
            degree: e.target.value,
          })
        }
      />

      <input
        type="date"
        value={education.date}
        onChange={(e) =>
          setEducation({
            ...education,
            date: e.target.value,
          })
        }
      />
    </div>
  );
}

export default Education;