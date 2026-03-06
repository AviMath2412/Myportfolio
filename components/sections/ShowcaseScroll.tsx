"use client";

import React from "react";
import { ContainerTextScroll } from "@/components/ui/container-text-scroll";
import Image from "next/image";

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
                <div className="relative h-full w-full bg-black/40 group overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
                        alt="AI Architecture"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
            </ContainerTextScroll>
        </section>
    );
}
