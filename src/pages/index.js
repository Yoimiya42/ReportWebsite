import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our Partners</h2>
            <div className={styles.partnerGrid}>
              <img className={styles.partnerLogo} src="/img/partners/MotionInput.png" alt="MotionInput" />
              <img className={styles.partnerLogo} src="/img/partners/UCL.png" alt="UCL" />
              <img className={styles.partnerLogo} src="/img/partners/NAS.jpg" alt="NAS" />
              <img className={styles.partnerLogo} src="/img/partners/IBM.png" alt="IBM" />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Abstract</h2>
            <p className={styles.paragraph}>
              This section provides a concise summary of the project goals,
              methods, and outcomes.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Introduction Vedio</h2>
            <div className={styles.videoWrapper}>
              <div className={styles.videoPlaceholder}>
                Introduction video will be embedded here.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Teams</h2>
            <p className={styles.paragraph}>
              This section introduces the team members and their roles.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
