import React from "react";

// Images
import SaveGIF from "../images/jwe-redesign/jwe_logo_save.gif";
import OriginalModal from "../images/jwe-redesign/jwe_uploader_og_instructions.png";
import RedesignedModal from "../images/jwe-redesign/jwe_uploader_requirements.png";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import { Container } from "react-bootstrap";
import Title from "../components/Title";
// Utils
import { updateTitle } from "../utils";


export default function JournalEditorUX() {
  const { data: userData } = useGetUsersQuery();
  
  React.useEffect(() => {
    updateTitle(`${userData.name} | Case Study`);
  }, [userData]);
  
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Case Study"} color={"green"}  />
        </Container>

        {/* ---------- HERO ---------- */}
        <section style={{...styles.section, ...styles.heroSection}} >
          <p style={styles.title}>
            Journal Website Editor — UX Redesign
          </p>
          <p style={styles.subtitle}>
            Clarifying image workflows and system feedback in academic publishing software
          </p>

          <p style={styles.meta}>
            Role: Software Engineer (UX-focused)
          <br />
            Team: Head Designer, Tech Lead, Senior Engineers, QA
          </p>
        </section>

        {/* ---------- INTRO ---------- */}
        <section style={styles.section}>
          <h2>Overview</h2>
          <p>
            This case study describes a UX redesign I initiated and executed while working as a software engineer at Scholastica, for the Journal
            Website Editor (JWE) tool used by journal teams to customize their website's look and manage content without writing code.
          </p>
          
          <p>
            Repeated user confusion and support requests around images and previews revealed broader usability breakdowns in how the JWE communicated constraints, feedback, and system behavior. While improving the image workflow was the catalyst, the project evolved into a wider UX redesign aimed at making the JWE experience clearer, more predictable, and better aligned with real user expectations.
          </p>

          <p>
            I led the effort from problem discovery through design, implementation, testing, and shipping to production.
          </p>
        </section>

        {/* ---------- PROBLEM ---------- */}
        <section style={styles.section}>
          <h2>The Problem</h2>
          <p>
            Journal editors were regularly contacting customer support about difficulties with
            the image upload workflow. Several related usability issues emerged:
          </p>

          <ul>
            <li>Upload failures with no clear explanation</li>
            <li>Hidden constraints around file type, size, and dimensions</li>
            <li>Previews that did not match the final published result</li>
            <li>High user frustration and guesswork</li>
          </ul>

          <figure style={styles.figure}>
            <img
              src={OriginalModal}
              alt="Original image upload interface"
              style={styles.image}
            />
            <figcaption style={styles.caption}>
              Original uploader experience with unclear requirements and misleading preview.
            </figcaption>
          </figure>
        </section>

        {/* ---------- GOALS ---------- */}
        <section style={styles.section}>
          <h2>Redesign Goals</h2>
          <p>
            Although triggered by image-related issues, the redesign aimed to strengthen how the JWE communicated rules, feedback, and expectations across the experience.
          </p>

          <ul>
            <li>Make system constraints visible and understandable</li>
            <li>Align preview with published output</li>
            <li>Reduce upload errors and support requests</li>
            <li>Integrate image workflows coherently into the broader JWE experience</li>
            <li>Maintain consistency with established UI patterns and component library</li>

          </ul>
        </section>

        {/* ---------- DESIGN ---------- */}
        <section style={styles.section}>
          <h2>Design & Prototyping</h2>
          <p>
            I worked with the head designer and tech lead to validate the problem framing,
            then produced wireframes and prototypes to clarify requirements and reshape the workflow around user expectations.
          </p>

          <figure style={styles.figure}>
            <img
              src={RedesignedModal}
              alt="Redesigned uploader requirements"
              style={styles.image}
            />
            <figcaption style={styles.caption}>
              Redesigned uploader showing clear, scannable requirements. Screenshot is from user guide.
            </figcaption>
          </figure>
        </section>

        {/* ---------- SYSTEM CONTEXT ---------- */}
        <section style={styles.section}>
          <h2>System Context</h2>
          <p>
            Journal teams use the JWE to manage many aspects of their site, often moving between tasks like layout, branding, and content updates. The image workflow is just one part of a larger editing environment, where the left-hand sidebar served as the primary control center and overlays the website preview area. The redesign needed to integrate existing workflows and UI components while making system behavior clear and predictable.
          </p>

          <p>
            This animation shows how image actions were initiated from the main
            JWE controls and how the updated preview accurately reflected the final published result.
          </p>

          <figure style={styles.figure}>
            <img
              src={SaveGIF}
              alt="Editor sidebar and image workflow"
              style={styles.image}
            />
            <figcaption style={styles.caption}>
              Full editing experience showing image interactions within the system. Uploading a logo image and seeing it reflected in the preview.
            </figcaption>
          </figure>
        </section>

        {/* ---------- IMPLEMENTATION ---------- */}
        <section style={styles.section}>
          <h2>Collaboration & Implementation</h2>
          <p>
            I translated user problems into documented requirements, aligned on solutions
            with design and engineering leadership, and implemented the redesign in production
            code. The work unfolded over several months as the scope expanded and technical constraints emerged.
          </p>

          <ul>
            <li>Wrote user-centered requirements and acceptance criteria</li>
            <li>Built the redesigned interface and system behaviors</li>
            <li>Collaborated with senior engineers to resolve technical blockers and refine the approach</li>
            <li>Added unit, integration, and end-to-end tests</li>
            <li>Partnered closely with QA to identify edge cases, regressions, and usability concerns</li>
          </ul>
        </section>

        {/* ---------- OUTCOME ---------- */}
        <section style={styles.section}>
          <h2>Outcome & Impact</h2>
          <p>
            After release, the company stopped receiving support emails related to the image
            upload workflow. The redesign reduced user confusion, improved task clarity, and
            eliminated a recurring customer pain point.
          </p>
        </section>

        {/* ---------- REFLECTION ---------- */}
        <section style={styles.section}>
          <h2>Reflection</h2>
          <p>
            This project reinforced that UX work is not only visual design. It is problem discovery, systems thinking, cross-functional communication, and translating
            user needs into working software.
          </p>

          <p>
            What began as a targeted usability fix grew into a multi-month redesign effort that required deeper technical planning, 
            collaboration with senior engineers, and ongoing scope negotiation. It sharpened how I think about complexity, feasibility, and sequencing work inside real production environments.
          </p>

          <p>
            This project was completed in an environment without formal UX research infrastructure, so I relied on support data, observed failure patterns, and cross-functional feedback rather than usability testing. It reinforced my interest in working on teams where research and design practices are more thoroughly supported and in UX work centered on clarity, system feedback, and reducing friction in complex information tools.
          </p>
        </section>

      </div>
    </main>
  );
}

/* ---------- Simple styling (optional) ---------- */

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "4rem 1.5rem",
  },
  container: {
    maxWidth: "820px",
    width: "100%",
    lineHeight: 1.6,
    fontFamily: "Monaspace Neon Regular, monospace",
  },
  section: {
    marginBottom: "4rem",
  },
  title: {
    fontSize: "2rem",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: "1.25rem",
    opacity: 0.8,
  },
  meta: {
    marginTop: "1rem",
    fontSize: "0.95rem",
    opacity: 0.7,
  },
  figure: {
    marginTop: "2rem",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
  },
  caption: {
    marginTop: "0.5rem",
    fontSize: "0.9rem",
    opacity: 0.7,
  },
  heroSection: {
    marginTop: "5rem",
  }
};
