// src/App.tsx
import { CssBaseline, Container } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      {/* Header fixo */}
      <Header />
      {/* Conteúdo principal */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <section id="home">
          <Hero />
        </section>

        <section id="sobre">
          <About />
        </section>

        <section id="projetos">
          <Projects />
        </section>

        <section id="experiencias">
          <Experiences />
        </section>
      </Container>
      <section id="contatos">
        <Footer />
      </section>
    </>
  );
}

export default App;
