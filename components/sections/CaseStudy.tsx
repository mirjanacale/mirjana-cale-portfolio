"use client";

import { motion, useReducedMotion } from "framer-motion";

const ARCH_CODE = `// SYSTEM_ARCHITECT: BOOTING_SERVICES...
// ------------------------------------

1. [INGRESS]    -> NGINX_LOAD_BALANCER
2. [SERVICE]    -> GOLANG_WS_HANDLER (CONCURRENCY: ENABLED)
3. [STORAGE]    -> REDIS_CACHE (L1) / POSTGRES_DB (L2)
4. [STREAM]     -> KAFKA_MESSAGE_QUEUE
5. [CONSUMER]   -> MONITORING_WORKER_01
6. [UI]         -> REACT_REALTIME_HOOKS

[STATUS]: OPERATIONAL
[LATENCY]: 42ms
[UPTIME]: 99.99%`;

export default function CaseStudy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 md:px-8 bg-zinc-950/50 border-y border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: Narrative */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <span className="font-space-grotesk text-primary text-xs uppercase tracking-[0.2em] mb-4 block">
              System Deep Dive
            </span>
            <h2 className="font-space-grotesk text-5xl font-bold text-white mb-6 tracking-tight">
              CloudScale Architecture
            </h2>
            <p className="font-inter text-on-surface-variant mb-8 leading-relaxed">
              Exploring the structural integrity of the project that redefined
              infrastructure visibility for our internal teams.
            </p>

            <div className="space-y-5">
              <div className="p-4 rounded-lg border border-outline-variant bg-surface-container-high">
                <h4 className="font-space-grotesk text-xs uppercase text-primary mb-2 tracking-[0.15em]">
                  The Problem
                </h4>
                <p className="font-inter text-sm text-zinc-300 italic leading-relaxed">
                  &ldquo;Fragmented monitoring tools lead to 15-minute response
                  times during critical outages.&rdquo;
                </p>
              </div>
              <div className="p-4 rounded-lg border border-outline-variant bg-surface-container-high">
                <h4 className="font-space-grotesk text-xs uppercase text-primary mb-2 tracking-[0.15em]">
                  The Solution
                </h4>
                <p className="font-inter text-sm text-zinc-300 leading-relaxed">
                  Centralized Golang aggregator with a real-time React dashboard
                  and automated alerting via AWS Lambda.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: IDE code block */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-surface-container rounded-xl border border-outline-variant p-1 overflow-hidden"
          >
            <div className="bg-zinc-900 rounded-lg p-6 font-mono text-xs text-primary overflow-x-auto min-h-[400px] flex flex-col">
              {/* macOS traffic lights */}
              <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-amber-500/60" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/60" aria-hidden="true" />
                <span className="ml-4 text-zinc-500 font-space-grotesk tracking-wide">
                  architecture_flow.sys
                </span>
              </div>

              <pre className="whitespace-pre-wrap flex-1 leading-relaxed">{ARCH_CODE}</pre>

              {/* Animated hub */}
              <div className="mt-8 flex justify-center flex-shrink-0">
                <div className="w-full h-28 relative">
                  <div className="absolute inset-0 bg-primary/5 border border-primary/20 flex items-center justify-center rounded-lg">
                    <span
                      className={`material-symbols-outlined text-4xl text-primary ${
                        prefersReducedMotion ? "" : "animate-pulse"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}
                      aria-hidden="true"
                    >
                      hub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
