'use client'
import Services from '@/app/_component/aboutComponent/Services/Services';
import Header from '@/app/_component/aboutComponent/Header/Header';
import ClientSay from '@/app/_component/homeComponent/ClientSay/ClientSay';

const About = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div>
                <Header />
                <Services />
                <ClientSay />
            </div>
        </main>
    )
}

export default About;