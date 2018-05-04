import Section from '../components/Section';

function Hero() {
  return (
    <Section className='hero' styleClass="hero-tile">
      <h1>hero</h1>
      <div className="example">helloooooooo</div>
      <style jsx>{`
        @import '../style.css'
      `}</style>
    </Section>
  );
}

export default Hero;
