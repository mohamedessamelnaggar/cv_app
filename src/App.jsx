import { useState } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import CVPreview from "./Components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  const [editing, setEditing] = useState(true);

  return (
    <div>
      <h1>CV Application</h1>

      {editing ? (
        <>
          <GeneralInfo
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />

          <Education
            education={education}
            setEducation={setEducation}
          />

          <Experience
            experience={experience}
            setExperience={setExperience}
          />

          <button onClick={() => setEditing(false)}>
            Submit
          </button>
        </>
      ) : (
        <>
          <CVPreview
            generalInfo={generalInfo}
            education={education}
            experience={experience}
          />

          <button onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default App;