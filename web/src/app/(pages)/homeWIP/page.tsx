'use client'
import AboutMe from '@/app/_component/homeComponent/AboutMe/AboutMe';
import ClientSay from '@/app/_component/homeComponent/ClientSay/ClientSay';
import Header from '@/app/_component/homeComponent/Header/Header';
import Projects from '@/app/_component/homeComponent/Projects/Projects';
import ServiceProviding from '@/app/_component/homeComponent/ServiceProviding/ServiceProviding';
import WorkExperiences from '@/app/_component/homeComponent/WorkExperiences/WorkExperiences';

const AdminPanel = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div>
                <Header />
                <AboutMe />
                <ServiceProviding />
                <WorkExperiences />
                <Projects />
                <ClientSay />
            </div>
        </main>
    )
}

export default AdminPanel;