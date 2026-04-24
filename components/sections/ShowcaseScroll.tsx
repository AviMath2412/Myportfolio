"use client";

import React from "react";
import { ContainerTextScroll } from "@/components/ui/container-text-scroll";

export default function ShowcaseScroll() {
    return (
        <section className="flex flex-col overflow-hidden">
            <ContainerTextScroll
                titleComponent={
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl md:text-4xl font-semibold text-white/90">
                            Explore the realm of <br />
                            <span className="text-5xl md:text-[7rem] font-bold mt-2 leading-tight accent-gradient">
                                Intelligent Design
                            </span>
                        </h1>
                        <p className="mt-8 text-zinc-400 max-w-lg mx-auto text-lg">
                            Combining advanced AI capabilities with precision-engineered
                            architectures to build systems that scale.
                        </p>
                    </div>
                }
            >
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.22),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.2),transparent_38%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                    <div className="relative z-10 flex h-full items-end p-8">
                        <p className="max-w-xl font-mono text-sm text-zinc-300">
                            No photo mode enabled. This panel now renders a synthetic
                            research field representing RL, systems, and LLM nodes.
                        </p>
                    </div>
                </div>
            </ContainerTextScroll>
        </section>
    );
}
