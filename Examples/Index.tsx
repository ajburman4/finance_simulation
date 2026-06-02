import { motion, useScroll, useTransform } from "framer-motion";
import { useClientInputs } from "@/hooks/useClientInputs";
import { InputsPanel } from "@/components/futurepath/InputsPanel";
import { ProjectionPanel } from "@/components/futurepath/ProjectionPanel";
import { ScenariosPanel } from "@/components/futurepath/ScenariosPanel";
import { SummaryPanel } from "@/components/futurepath/SummaryPanel";
import { StatusBadge } from "@/components/futurepath/StatusBadge";
import { SectionHeader } from "@/components/futurepath/SectionHeader";
import { SectionNav } from "@/components/futurepath/SectionNav";
import { AnimatedNumber } from "@/components/futurepath/AnimatedNumber";
import { formatCurrency } from "@/lib/projection";
import { Compass, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { inputs, update, reset, projection, scenarios } = useClientInputs();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const scrollToInputs = () => {
    document.getElementById("inputs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-surface text-foreground overflow-x-clip">
      {/* Aurora background */}
      <div className="fixed inset-0 bg-gradient-aurora pointer-events-none" />
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-50" />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-primary origin-left z-50 no-print"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Top header */}
      <header className="fixed top-0 left-0 right-0 z-40 no-print">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Compass className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-foreground">FuturePath</h1>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Simulator</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 glass rounded-full px-4 py-2">
            <div className="text-right">
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground">At retirement</div>
              <div className="text-sm font-semibold tabular-nums text-foreground">
                <AnimatedNumber value={projection.endingBalance} format={(n) => formatCurrency(n)} />
              </div>
            </div>
            <StatusBadge status={projection.status} />
          </div>
        </div>
      </header>

      <SectionNav />

      <main className="relative">
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary mb-8"
            >
              <Sparkles className="h-3 w-3" />
              For advisor–client conversations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-balance"
            >
              See the<br />
              <span className="text-gradient">future of savings</span><br />
              before it arrives.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-balance leading-relaxed"
            >
              A live simulator that turns compounding, fees, inflation, and what-ifs into a single, beautiful conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={scrollToInputs}
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow gap-2 h-12 px-7 rounded-full font-semibold"
              >
                Start the simulation <ArrowDown className="h-4 w-4" />
              </Button>
              <div className="text-xs text-muted-foreground tabular-nums">
                Live preview · {formatCurrency(projection.endingBalance)} projected
              </div>
            </motion.div>
          </motion.div>

          {/* scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-10 w-6 items-start justify-center rounded-full border border-border/60 p-1.5"
            >
              <span className="h-1.5 w-1 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:pl-32 space-y-32 pb-32">
          <section id="inputs" className="scroll-mt-24">
            <SectionHeader
              num="01"
              eyebrow="Inputs"
              title="Set the stage."
              description="Capture where the client is today. Every projection across the page reacts instantly."
            />
            <InputsPanel inputs={inputs} update={update} reset={reset} />
          </section>

          <section id="projection" className="scroll-mt-24">
            <SectionHeader
              num="02"
              eyebrow="Projection"
              title="Watch compounding work."
              description="Decades of savings, employer match, and investment growth — visualized as one clear arc."
            />
            <ProjectionPanel inputs={inputs} projection={projection} />
          </section>

          <section id="scenarios" className="scroll-mt-24">
            <SectionHeader
              num="03"
              eyebrow="What if"
              title="Pull the levers."
              description="A few small changes can reshape the entire outcome. See which moves matter most."
            />
            <ScenariosPanel scenarios={scenarios} inputs={inputs} />
          </section>

          <section id="summary" className="scroll-mt-24">
            <SectionHeader
              num="04"
              eyebrow="Summary"
              title="A page worth sharing."
              description="A printable plain-English wrap-up for the client to take home."
            />
            <SummaryPanel inputs={inputs} projection={projection} scenarios={scenarios} />
          </section>
        </div>

        <footer className="relative pb-10 text-center text-xs text-muted-foreground no-print">
          For educational planning conversations only. Not financial, tax, legal, or investment advice.
        </footer>
      </main>
    </div>
  );
};

export default Index;
