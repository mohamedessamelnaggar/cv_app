import "../Styles/Experience.css";

function Experience({ experience, setExperience }) {
  return (
    <div>
      <h2>Experience</h2>

      <input
        type="text"
        placeholder="Company"
        value={experience.company}
        onChange={(e) =>
          setExperience({
            ...experience,
            company: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Position"
        value={experience.position}
        onChange={(e) =>
          setExperience({
            ...experience,
            position: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Responsibilities"
        value={experience.responsibilities}
        onChange={(e) =>
          setExperience({
            ...experience,
            responsibilities: e.target.value,
          })
        }
      />

      <input
        type="date"
        value={experience.from}
        onChange={(e) =>
          setExperience({
            ...experience,
            from: e.target.value,
          })
        }
      />

      <input
        type="date"
        value={experience.to}
        onChange={(e) =>
          setExperience({
            ...experience,
            to: e.target.value,
          })
        }
      />
    </div>
  );
}

export default Experience;