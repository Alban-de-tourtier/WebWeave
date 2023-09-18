'use client'
import AboutMe from '@/app/_component/homeComponent/AboutMe/AboutMe';
import Header from '@/app/_component/homeComponent/Header/Header';
import ServiceProviding from '@/app/_component/homeComponent/ServiceProviding/ServiceProviding';

const AdminPanel = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div>
                <Header />
                <AboutMe />
                <ServiceProviding />
            </div>
        </main>
    )
}

export default AdminPanel;