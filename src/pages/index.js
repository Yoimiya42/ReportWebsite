import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import partners from '@site/src/data/partners';
import teamMembers from '@site/src/data/teamMembers';
import styles from './index.module.css';

function normalizeExternalUrl(url) {
  if (!url) {
    return '';
  }

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  return `https://${url}`;
}

function getInitials(name) {
  if (!name) {
    return '?';
  }

  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm16 2.2-8 5.2-8-5.2V17h16V7.2Z"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.46-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.89 1.5 2.33 1.07 2.9.82.09-.64.35-1.07.64-1.32-2.21-.25-4.53-1.1-4.53-4.88 0-1.08.39-1.96 1.02-2.66-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.01A9.6 9.6 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.9-1.28 2.74-1.01 2.74-1.01.55 1.37.2 2.39.1 2.64.63.7 1.02 1.58 1.02 2.66 0 3.79-2.32 4.63-4.53 4.88.36.31.67.92.67 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
      <path
        fill="currentColor"
        d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.6 9.67h2.68V18H5.6V9.67Zm4.22 0h2.57v1.14h.04c.36-.68 1.23-1.4 2.54-1.4 2.71 0 3.21 1.78 3.21 4.1V18H15.5v-3.96c0-.95-.02-2.16-1.32-2.16-1.32 0-1.52 1.03-1.52 2.1V18H9.82V9.67Z"
      />
    </svg>
  );
}

function IconLink({href, label, children}) {
  if (!href) {
    return (
      <span className={styles.iconLinkDisabled} aria-label={`${label} unavailable`}>
        {children}
      </span>
    );
  }

  const isMail = href.startsWith('mailto:');

  return (
    <a
      className={styles.iconLink}
      href={href}
      aria-label={label}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noreferrer'}>
      {children}
    </a>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={`Home | ${siteConfig.title}`} description="COMP0016 project website home page.">
      <main>
        <section className={styles.projectHeroSection}>
          <div className={`container ${styles.projectHeroContainer}`}>
            <div className={styles.projectHeroContent}>
              <p className={styles.projectEyebrow}>COMP0016 Team 9 Project</p>
              <h1 className={styles.projectTitle}>
                <span className={styles.projectTitleWarm}>FunShapes</span>
                <span className={styles.projectAmpersand}>&amp;</span>
                <span className={styles.projectTitleCool}>FunBreathing</span>
              </h1>
              <div className={styles.projectSubtitleRow}>
                <span className={styles.projectSubtitleLine} aria-hidden="true" />
                <p className={styles.projectSubtitle}>Cardio &amp; Calming</p>
                <span className={styles.projectSubtitleLine} aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our Partners</h2>
            <div className={styles.partnerGrid}>
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  className={styles.partnerLogo}
                  src={partner.src}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Abstract</h2>
            <p className={styles.paragraph}>
              This section should include three clear paragraphs covering the problem statement,
              your proposed solution, and the final achievement and impact.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Introduction Video</h2>
            <div className={styles.videoWrapper}>
              <div className={styles.videoPlaceholder}>
                Embed an 8-minute project introduction video and demonstrate finished features.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <p className={styles.teamCaption}>UCL Year2 2025-2026 COMP0016 Team 9</p>
            <div className={styles.memberRow}>
              {teamMembers.map((member) => {
                const emailHref = member.email ? `mailto:${member.email}` : '';
                const githubUrl = normalizeExternalUrl(member.github);
                const linkedinUrl = normalizeExternalUrl(member.linkedin);

                return (
                  <article key={member.email || member.name} className={styles.memberCard}>
                    <div className={styles.memberAvatar}>
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={`${member.name} avatar`}
                          className={styles.memberAvatarImage}
                        />
                      ) : (
                        <span className={styles.memberInitials}>{getInitials(member.name)}</span>
                      )}
                    </div>

                    <div className={styles.memberContent}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberEmail}>{member.email || 'No email provided'}</p>

                      <div className={styles.iconRow}>
                        <IconLink href={emailHref} label={`Email ${member.name}`}>
                          <MailIcon />
                        </IconLink>
                        <IconLink href={githubUrl} label={`${member.name} GitHub`}>
                          <GithubIcon />
                        </IconLink>
                        <IconLink href={linkedinUrl} label={`${member.name} LinkedIn`}>
                          <LinkedinIcon />
                        </IconLink>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Project Management</h2>
            <div className={styles.projectManagementGrid}>
              <div className={styles.ganttPlaceholder}>
                Add your project Gantt chart here (Oct 20, 2025 to Mar 27, 2026).
              </div>
              <div className={styles.milestoneCard}>
                <h3 className={styles.milestoneTitle}>Milestones</h3>
                <ul className={styles.milestoneList}>
                  <li>Requirement finalization with partner.</li>
                  <li>Prototype and feature development iterations.</li>
                  <li>Testing, feedback integration, and stabilization.</li>
                  <li>Final report website and artefact delivery.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Home Development Checklist (Part 2)</h2>
            <ul className={styles.checklist}>
              <li>Show project title clearly.</li>
              <li>
                Provide an abstract in three paragraphs: problem statement, solution, and
                achievement/impact.
              </li>
              <li>Include an 8-minute introduction video with finished functionalities.</li>
              <li>
                Introduce development team members with photos where possible, plus name,
                email, and role/main contribution.
              </li>
              <li>
                Include project management evidence, including a readable Gantt chart (Oct 20,
                2025 to Mar 27, 2026).
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
