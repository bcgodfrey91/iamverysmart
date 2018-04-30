function Section({ children, styleClass }) {
  return (
    <section className={`section ${styleClass}`}>
      <style jsx>{`
        .section {
          margin: 0 auto;
          height: 100vh;
        }

        .hero-tile {
          border: 3px solid black
        }
      `}</style>
    </section>
  );
}

export default Section;
