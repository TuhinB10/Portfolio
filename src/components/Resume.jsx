import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { resumeLink } from "../constants";

const Resume = () => {
  return (
    <section className="mt-20">
      <div className="text-center">
        <p className={styles.sectionSubText}>Resume</p>
        <h2 className={styles.sectionHeadText}>My CV</h2>
      </div>

      <div className="mt-10 mx-auto max-w-3xl bg-black-200 p-8 rounded-3xl border border-white/10 shadow-lg shadow-primary/10">
        <p className="text-secondary text-[17px] leading-[30px] text-center">
          Want to review my full experience, skills, and projects in one place? Click the button below to open my resume in Google Drive.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="bg-tertiary text-white px-8 py-4 rounded-xl text-[16px] font-bold hover:bg-white/10 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Resume, "resume");
