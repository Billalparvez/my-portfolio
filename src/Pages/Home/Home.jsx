


import About from "./About/About";
import Bannar from "./Bannar/Bannar";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;