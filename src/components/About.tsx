import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Us</h2>
                        <div className="w-20 h-1 bg-primary mb-6"></div>
                        <p className="text-muted-foreground text-lg mb-4">
                            With over 15 years of experience, we specialise in restoring and installing a range of flooring to a high standard. The trade was learned in Sydney, working alongside a craftsman with a strong reputation and high end clientele, where quality work and attention to detail were everything.
                        </p>
                        <p className="text-muted-foreground text-lg mb-4">
                            Now based in Cable Bay, the business is family run, with a focus on honest work, reliable service, and results that speak for themselves. We proudly serve clients across New Zealand, from the Far North to Tauranga. Whether it’s a full floor restoration or a new installation, every project is approached with the same care, precision, and pride.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            There’s nothing more rewarding to us than bringing an old floor back to life.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square w-full max-w-xs md:max-w-sm">
                            <Image
                                src="/images/duane-cover.jpg"
                                alt="Duane from Opai Flooring"
                                className="w-full h-full object-cover"
                                fill
                                sizes="(max-width: 768px) 320px, 384px"
                            />
                        </div>
                    </div>              
                </div>
            </div>
        </section>
    );
}
