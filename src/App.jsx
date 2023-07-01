import "./index.css";

function App() {
  return (
    <>
      <main className="card">
        <Avatar />
        <Intro />
        <SkillList />
      </main>
    </>
  );
}
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return (
    <div className="avatar">
      <img
        className="avatar"
        src="/muhsin.jpg"
        alt="Picture of Muhsin who is a frontend developer"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Muhsin Ibrahim Mohamed</h1>
      <p>
        Front-end developer and a strudent at Oaknet Business Limited. When not
        glued on the screen coding, I love to play football, cook (and eat
        haha!), or just to restore my enery with a little nap.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}

      {/* <Skill skill="HTML + CSS" emoji="👌" color="red" />
      <Skill skill="Javascript" emoji="💣" color="yellow" />
      <Skill skill="Web Design" emoji="🤞" color="pink" />
      <Skill skill="Git and Github" emoji="🤟" color="gray" />
      <Skill skill="React" emoji="💣" color="blue" /> */}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
