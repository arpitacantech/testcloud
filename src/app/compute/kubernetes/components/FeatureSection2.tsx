"use client";
import React from "react";
import Image from "next/image";

export default function FeatureSection2() {
  return (
    <section className="py-14 md:py-16 lg:py-20">
                <div className="md:px-8 text-center">

                    <h2 className="cc-h2">
                       What you get with Cantech Managed Kubernetes
                    </h2>
                    <p className="subtitle">
                        Cantech offers cloud compute solutions that focus on performance, flexibility and security that ensures reliable operations while enabling scalable and efficient growth.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/3Cd1qIpK57EaM3E6bmDPd5xQ4.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Fully Managed Kubernetes</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Cantech cloud compute manages cluster setup, control plane management, and updates, to free up your space so you can prioritize building and deploying applications.
                            </p>
                        </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy" decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Top Notch Performance</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Built on strong infrastructure, Cantech’s enterprise-grade managed kubernetes offers a 99.97% uptime SLA to deliver smooth uninterrupted application availability.
                            </p>
                        </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy" decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/36QlWRG5xFqx3DaY9IWO4wgp98.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Multi-Cloud Deployment</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Deploy various workloads such as public, private and hybrid cloud environments without any kind of complexity.
                            </p>
                        </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy" decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Dedicated GPU Clusters for AI and ML workloads</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Take advantage of dedicated GPU clusters optimized for AI and ML workloads to improve training and computation heavy tasks.
                            </p>
                        </div>
                        </div> 
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                            <img
                                src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                                loading="lazy" decoding="async"
                            />

                            <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                                {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                    alt="icon"
                                    className="w-6 h-6 md:w-7 md:h-7"
                                    loading="lazy" decoding="async" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                                </div>

                                <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">High-End Security</h3>
                                <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                                Get Kubernetes-native security features like Role-Based Access Control (RBAC), encrypted connections, network policies and sensitive data management.
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                            <img
                                src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                                loading="lazy" decoding="async"
                            />

                            <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                                {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                    alt="icon"
                                    className="w-6 h-6 md:w-7 md:h-7"
                                    loading="lazy" decoding="async" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                                </div>

                                <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Auto-Scaling of Kubernetes Node Groups</h3>
                                <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                                Automatically adjust your node groups based on your workload needs. In case the application traffic spikes, new nodes are added automatically to maintain high performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}