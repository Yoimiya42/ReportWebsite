---
id: requirements
title: Requirements
slug: /requirements
sidebar_position: 1
---

# Requirements

## Partner Introduction and Project Background

>Describe your project partner, the context, and why this problem matters.

This project is developed in collaboration with MotionInput and National Autistic Society (NAS). MotionInput provides gesture-based interaction technology, while NAS contributes domain expertise in accessibility and user needs, particularly for children with diverse cognitive and sensory profiles.

Many existing solutions for autistic and disabled children rely on structured therapies or specialised equipment. While effective in controlled settings, these approaches are often costly, environment-dependent, and difficult to integrate into everyday life. In contrast, many digital tools remain overly passive, offering limited interaction and struggling to sustain long-term engagement.

This project introduces a game box that reframes these functions in a more natural and engaging form. By combining motion-based interaction with a collection of simple, playful experiences, it supports both physical activity and emotional regulation. Movement-focused gameplay encourages exercise, while breathing-based interactions help children calm down and manage stress. In doing so, the system complements traditional approaches by making therapeutic benefits more accessible, continuous, and engaging in everyday contexts.

## Project Goals

List clear and measurable goals for this project.

## Requirement Gathering

Explain how requirements were collected.

- Methods used (meetings, interviews, surveys, observations)
- Survey design and data analysis approach (if a survey was used)
- How final requirements were validated with partners

## Personas

Describe typical users of your project and their goals, pain points, and constraints.

## Use Cases (If Applicable)

Include:

- Use case diagram
- Use case list with actors, triggers, and expected outcomes

## MoSCoW Requirement List

This section consolidates the current requirements for the **FunShapes and FunBreathing** application and presents them using a clearer MoSCoW structure for report writing and review.

<div className="requirement-summary">
  <div className="requirement-summary__item">
    <strong>Project scope</strong>
    <p>A local Windows desktop game hub, combining a launcher, menu, motion input, breathing input, and optional GenAI-supported features.</p>
  </div>
  <div className="requirement-summary__item">
    <strong>Purpose</strong>
    <p>Document the system's user-facing and quality requirements in a format that is easy to scan, compare, and reference in the report.</p>
  </div>
</div>

### MoSCoW Priority Guide

<div className="moscow-legend">
  <div className="moscow-legend__item">
    <span className="moscow-badge moscow-badge--must">Must</span>
    <p>Essential for the current release to function as intended.</p>
  </div>
  <div className="moscow-legend__item">
    <span className="moscow-badge moscow-badge--should">Should</span>
    <p>Important and strongly desired, but the release can still operate without it temporarily.</p>
  </div>
  <div className="moscow-legend__item">
    <span className="moscow-badge moscow-badge--could">Could</span>
    <p>Useful enhancement that adds value but is not critical.</p>
  </div>
  <div className="moscow-legend__item">
    <span className="moscow-badge moscow-badge--wont">Won't</span>
    <p>Explicitly out of scope for the current release.</p>
  </div>
</div>

### Functional Requirements

| ID | Functional Requirement | Priority |
| --- | --- | --- |
| FR1 | The system shall provide a main menu with direct access to **FunShapes**, **FunBreathing**, **Help**, **Settings**, **Credits**, and **Quit**. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR2 | The system shall separate games into the two categories **FunShapes** and **FunBreathing**, and load each catalogue from local configuration files. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR3 | The system shall display a card for each available game, including at least its name and thumbnail, and allow the user to open a dedicated game page. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR4 | The system shall provide a game page showing the game title, large thumbnail, a **Play** action, and tabs for **Help**, **Video Demo**, and **Settings**. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR5 | The system shall launch the selected Windows game executable from the desktop menu environment. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR6 | The system shall pass per-game launch parameters such as motion-input mode, breathing-input requirement, and related runtime flags to the desktop host when a game is started. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR7 | The system shall support breathing-based games by connecting to a local **FunBreathing API** service and enabling breathing input when required by the selected game. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR8 | The system shall support motion-based interaction for applicable games and allow **MotionInput** to be enabled or disabled per game. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR9 | The system shall provide per-game settings and store them locally so they persist between sessions. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR10 | The system shall provide help and navigation support through in-app help pages, back/home navigation, and support information. | <span className="moscow-badge moscow-badge--must">Must</span> |
| FR11 | The system shall provide global menu settings, including preload of the breathing API, preload of the GenAI API, UI zoom level, and reset-to-default behaviour. | <span className="moscow-badge moscow-badge--should">Should</span> |
| FR12 | The system shall allow users or caregivers to rate each game on a 0-5 scale, including half-star values, and reuse those ratings for sorting. | <span className="moscow-badge moscow-badge--should">Should</span> |
| FR13 | For games flagged as GenAI-enabled, the system shall provide an image-generation page with prompt entry, prompt validation, generated-image gallery, and delete capability. | <span className="moscow-badge moscow-badge--should">Should</span> |
| FR14 | The system could support user-added or generated content assets that are stored locally and reused by individual games. | <span className="moscow-badge moscow-badge--could">Could</span> |
| FR15 | The current release will not provide online leaderboards, achievements, or cloud user profiles. | <span className="moscow-badge moscow-badge--wont">Won't</span> |

### Non-Functional Requirements

| ID | Category | Non-Functional Requirement | Priority |
| --- | --- | --- | --- |
| NFR1 | Deployment and Installation | The game shall be easy to start for non-technical users. Users shall be able to launch the game immediately after downloading, without performing complex setup or installation steps. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR2 | System Impact and Portability | The game shall not require users to manually install additional software or runtime environments. All necessary components shall be included within the game distribution where possible. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR3 | Compatibility | The system shall run on 64-bit Windows devices and depend only on bundled or already available local desktop components, such as Windows executables and WebView2 where applicable. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR4 | Performance | The menu shall become usable within an acceptable startup time on target hardware, and normal page-to-page navigation shall feel immediate for local content. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR5 | Performance | Breathing-input data shall be delivered with sufficiently low latency for real-time gameplay in FunBreathing titles. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR6 | Reliability | If a thumbnail, help file, video, or API is unavailable, the system shall fail gracefully with a fallback message or fallback content rather than crashing. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR7 | Usability | The interface shall use a simple navigation structure, large actionable controls, and clear visual labels suitable for autistic children with caregiver support. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR8 | Accessibility | The menu shall support UI zoom scaling and remain usable with keyboard/mouse interaction across all menu pages. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR9 | Safety and Security | Local API communication shall remain limited to local-machine use, and GenAI prompt input shall be validated against unsafe or malformed content patterns. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR10 | Privacy | User preferences, ratings, and generated-content references shall be stored locally and shall not require a cloud account for normal use. | <span className="moscow-badge moscow-badge--must">Must</span> |
| NFR11 | Maintainability | New games should be integrable primarily through configuration files such as `games-index.json` and per-game `game-config.json`, with minimal menu-code changes. | <span className="moscow-badge moscow-badge--should">Should</span> |
| NFR12 | Extensibility | The architecture should allow future games to declare optional capabilities such as help content, video demo, breathing input, motion input, and GenAI support. | <span className="moscow-badge moscow-badge--should">Should</span> |
| NFR13 | Maintainability | Help and instructional content should be maintainable as external Markdown or media assets rather than hard-coded into the UI. | <span className="moscow-badge moscow-badge--should">Should</span> |
| NFR14 | Portability and Scope | The current release will not target macOS, Linux, or cloud-synchronised multi-user deployment. | <span className="moscow-badge moscow-badge--wont">Won't</span> |

### Notes

- The functional requirements reflect the behaviour currently indicated by the desktop menu, local game configuration files, local settings system, and packaged support services.
- Some capabilities such as GenAI support are **game-specific** rather than universal across all games.
- The deployment requirements now make explicit that the packaged game should feel self-contained and removable without a formal installer.
- This requirement list is suitable for direct inclusion in the report or as the basis for a more formal Software Requirements Specification.

## Development Checklist (From COMP0016 Part 2)

- Include partner introduction and project background.
- Include project goals.
- Explain requirement gathering process and analysis.
- Include personas.
- Include use case diagram and use case list where applicable.
- Provide MoSCoW tables for both functional and non-functional requirements.
