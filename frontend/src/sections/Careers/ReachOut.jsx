import { ArrowRight } from "lucide-react";

const reachOutTitleSize = "clamp(2.2rem, 1.35rem + 2.8vw, 3.4rem)";
const reachOutBodySize = "clamp(1.2rem, 0.85rem + 0.4vw, 1.2rem)";

const ReachOut = () => {
    return (
        <>
            {/* CTA Section */}
            <section className="container mx-auto px-6 max-w-4xl mb-20 text-center">
                <span className="section-eyebrow mb-6 block">
                    WORK WITH US
                </span>
                <h2
                    className="section-title font-display font-extrabold tracking-tight text-slate-900 mb-2"
                    style={{ fontSize: reachOutTitleSize }}
                >
                    Build the <span className="text-[#FF5A36]">Intelligence Layer</span>
                </h2>
                <h2
                    className="section-title font-display font-extrabold tracking-tight text-slate-900 mb-8"
                    style={{ fontSize: reachOutTitleSize }}
                >
                    Behind Modern Retention.
                </h2>
                <p
                    className="section-description text-slate-600 mb-10 max-w-2xl mx-auto"
                    style={{ fontSize: reachOutBodySize }}
                >
                    Build high-performance backend systems, APIs, and scalable infrastructure powering enterprise-grade solutions.
                </p>
                <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors inline-flex items-center gap-2 shadow-lg shadow-slate-200">
                    Reach Out To Us <ArrowRight className="w-5 h-5" />
                </button>
            </section>
        </>
    );
};

export default ReachOut;
