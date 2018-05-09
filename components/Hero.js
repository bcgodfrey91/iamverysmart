import Section from '../components/Section';
// import '../style.css';

function Hero() {
  return (
    <Section className='hero' styleClass="hero-tile">
      <h1>hero</h1>
      <div className="example">helloooooooo</div>
      <h1>hello</h1>
      <style jsx>{`
        @import './style.css';

        .example {
          background: var(--some-background);
          color: var(--some-color);
          font-size: var(--some-size);
          border: var(--some-border);
          border-radius: var(--some-radius);
        }
      `}</style>
    </Section>
  );
}

export default Hero;
