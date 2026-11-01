import { useState } from 'react';
import '../styles/biasSeries.css';

const members = [
  {
    name: 'Individual One',
    focus: 'Computer Vision',
    school: 'University of Calgary',
    image: '/images/members/member-one.jpg',
    quote: 'Learning to build models taught me that curiosity is a skill you can practice.',
  },
  {
    name: 'Member Two',
    focus: 'NLP',
    school: 'University of Calgary',
    image: '/images/members/member-two.jpg',
    quote: 'HerAI gave me a room full of women who ask the questions I was too shy to ask.',
  },
  {
    name: 'Member Three',
    focus: 'Machine Learning',
    school: 'University of Calgary',
    image: '/images/members/member-three.jpg',
    quote:
      'I never thought I’d find a community like this in tech. HerAI showed me I can be technical, creative, and fully myself.',
  },
  {
    name: 'Member Four',
    focus: 'Data Science',
    school: 'University of Calgary',
    image: '/images/members/member-four.jpg',
    quote: 'There is real power in learning alongside women who understand the journey.',
  },
  {
    name: 'Member Five',
    focus: 'AI Ethics',
    school: 'University of Calgary',
    image: '/images/members/member-five.jpg',
    quote: 'Building responsibly is something we practice together.',
  },
];

const stories = [
  {
    tag: 'Workshops',
    title: 'Finding confidence through hands-on ML',
    excerpt: 'My first workshop showed me I am capable of more than I thought.',
    byline: 'By Member Name',
    date: 'Nov 12, 2025',
    image: '/images/stories/story-one.jpg',
  },
  {
    tag: 'Industry',
    title: 'From networking night to first co-op',
    excerpt: 'One conversation at a HerAI event changed the direction of my career.',
    byline: 'By Member Name',
    date: 'Oct 3, 2025',
    image: '/images/stories/story-two.jpg',
  },
  {
    tag: 'Community',
    title: 'More than a club',
    excerpt: 'I didn’t just find a club. I found a community.',
    byline: 'By Member Name',
    date: 'Sep 20, 2025',
    image: '/images/stories/story-three.jpg',
  },
];

function Arrow({ direction = 'right' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="ms-arrow-icon" fill="none">
      <path
        d={direction === 'right' ? 'M4 10h11m-4-4 4 4-4 4' : 'M16 10H5m4-4-4 4 4 4'}
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillButton({ children, light = false, href = '#' }) {
  return (
    <a href={href} className={`ms-pill ${light ? 'ms-pill--light' : ''}`}>
      {children}
      <Arrow />
    </a>
  );
}

function BiasSeries() {
  const [active, setActive] = useState(2);
  const current = members[active];

  const move = (amount) => {
    setActive((index) => (index + amount + members.length) % members.length);
  };

  return (
    <div className="ms">
      {/* ---------- HER spotlight ---------- */}
      <section className="ms-hero">
        <div className="ms-hero-top">
          <div>
            <p className="ms-eyebrow">AI Spotlight Series </p>
            <h1 className="ms-display ms-hero-title">
              Women who
              <br />
              <em>build</em> us.
            </h1>
          </div>

          <div className="ms-hero-side">
            <p>Different journeys.</p>
            <p>Shared purpose.</p>
            <p>A stronger community.</p>
          </div>
        </div>

        <div className="ms-stage">
          <div className="ms-row">
            {members.map((member, index) => {
              const isActive = index === active;
              return (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show ${member.name}'s story`}
                  className={`ms-profile ${isActive ? 'ms-profile--active' : 'ms-profile--side'}`}
                >
                  <div className="ms-photo">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.focus}`}
                      onError={(e) => {
                        e.currentTarget.style.visibility = 'hidden';
                      }}
                    />
                  </div>
                  {!isActive && (
                    <div className="ms-profile-label">
                      <p className="ms-display ms-profile-name">{member.name}</p>
                      <p className="ms-profile-meta">
                        {member.focus} · {member.school}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous profile"
            className="ms-nav ms-nav--prev"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next profile"
            className="ms-nav ms-nav--next"
          >
            <Arrow />
          </button>

          <div className="ms-info">
            <h2 className="ms-display ms-info-name">{current.name}</h2>
            <p className="ms-info-meta">
              {current.focus} · {current.school}
            </p>
            <p className="ms-info-quote">{current.quote}</p>
            <PillButton>Read {current.name.split(' ')[0]}’s Story</PillButton>
          </div>
        </div>

        <div className="ms-dots">
          {members.map((member, index) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to ${member.name}`}
              className={`ms-dot ${index === active ? 'ms-dot--on' : ''}`}
            />
          ))}
        </div>
      </section>

      {/* ---------- Community stories ---------- */}
      <section className="ms-stories">
        <p className="ms-eyebrow">Community stories</p>
        <div className="ms-stories-head">
          <h2 className="ms-display ms-section-title">
            Real stories.
            <br />
            Bigger <em>impact.</em>
          </h2>
          <p className="ms-stories-blurb">
            These are the stories of women and underrepresented groups building their futures in AI and machine learning.
          </p>
          <div className="ms-stories-cta">
            <PillButton>View All Stories</PillButton>
          </div>
        </div>

        <div className="ms-story-grid">
          {stories.map((story) => (
            <article key={story.title} className="ms-story">
              <div className="ms-story-img">
                <img src={story.image} alt="" />
                <span className="ms-tag">{story.tag}</span>
              </div>
              <div className="ms-story-body">
                <h3 className="ms-display ms-story-title">{story.title}</h3>
                <p className="ms-story-excerpt">{story.excerpt}</p>
                <div className="ms-story-foot">
                  <p>
                    {story.byline} <span>·</span> {story.date}
                  </p>
                  <a href="#" aria-label={`Read ${story.title}`} className="ms-story-link">
                    <Arrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Share your story ---------- */}
      <section className="ms-share">
        <div className="ms-ring ms-ring--left" />
        <div className="ms-ring ms-ring--right" />
        <div className="ms-share-grid">
          <div>
            <p className="ms-eyebrow">Share your story</p>
            <h2 className="ms-display ms-share-title">
              Your journey
              <br />
              <em>matters.</em>
            </h2>
          </div>
          <div className="ms-share-copy">
            <p>
              Have a story to share? Whether it’s a big achievement or a small moment, your
              experience can inspire another woman in AI.
            </p>
            <PillButton light>Share Your Story</PillButton>
          </div>
          <p className="ms-handwritten ms-share-note">
            Real Stories
            <br />
            Stronger Together
            <br />
            Same Purpose
          </p>
        </div>
      </section>
    </div>
  );
}

export default BiasSeries;