'use client'
import AboutMe from '@/app/_component/homeComponent/AboutMe/AboutMe';
import ClientSay from '@/app/_component/homeComponent/ClientSay/ClientSay';
import Header from '@/app/_component/homeComponent/Header/Header';
import Projects from '@/app/_component/homeComponent/Projects/Projects';
import ServiceProviding from '@/app/_component/homeComponent/ServiceProviding/ServiceProviding';
import WorkExperiences from '@/app/_component/homeComponent/WorkExperiences/WorkExperiences';
import Footer from './_component/Footer/Footer';
import NavBar from './_component/NavBar/Navbar';

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div>
                <NavBar />
                <Header />
                <AboutMe />
                <ServiceProviding />
                <WorkExperiences />
                <Projects />
                <ClientSay />
                <Footer />
            </div>
        </main>
    )
}

export default Home;