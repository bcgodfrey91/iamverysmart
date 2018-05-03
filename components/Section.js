function Section({ children, styleClass }) {
  return (
    <section className={`section ${styleClass}`}>
      {children}
      <style jsx>{`
        .section {
          margin: 0 2.5vw;
          height: 100vh;
        }
      `}</style>
    </section>
  );
}

export default Section;
