"use client";

import React from "react";

const KycContent = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-20">
        <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Dear Valued Customer,</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>As per the recent Cert-In guidelines Cantech Networks Private Limited is validating its customer and conducting eKYC. eKYC is now mandatory for all our service provisioning like Domain Registration, Web hosting packages, Virtual Private server hosting, Cloud service hosting, Dedicated server hosting, SSL Certificate, Email hosting, Backup subscription etc.</p>
            </div>
            <div className="space-y-4 mt-12 leading-relaxed">
                <img className="filter grayscale rounded-sm" src="/assets/images/ekyc-img.webp" alt="eKYC | Cantech Cloud" />
            </div>
            <p className="mt-12 text-muted-foreground">Official Advisory/ Circular Link :</p>
            <a className="underline text-gray-100" target="_blank" href="https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf">https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf</a>
            <p className="mt-12 text-muted-foreground">Cantech Networks Private Limited is conducting eKYC on a state of the art secured portal. We partnered with Digio for the eKYC platform to conduct secured eKYC of our customers. During the process Cantech Networks Private Limited is not asking for any physical documents for the verification.</p>
            <h2 className="text-3xl md:text-4xl mt-12 font-semibold text-foreground mb-6">How to Do eKYC ?</h2>
            <div className="space-y-10">
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3">                        
                        <span className="text-muted-foreground">
                        <span className="text-white">Step 1 :</span> Check your Registered email for eKYC validation request from Cantech Networks Private Limited.
                        </span>
                    </li>
                    <li className="flex items-center gap-3">                        
                        <span className="text-muted-foreground">
                        <span className="text-white">Step 2 :</span> Click on the link and enter your 16 Digit Aadhar Card Number.
                        </span>
                    </li>
                    <li className="flex items-center gap-3">                        
                        <span className="text-muted-foreground">
                        <span className="text-white">Step 3 :</span> You will receive the OTP (One-time Password ) from Aaddhar (UID) platform.
                        </span>
                    </li>
                    <li className="flex items-center gap-3">                        
                        <span className="text-muted-foreground">
                        <span className="text-white">Step 4 :</span> Enter the OTP you received from Aadhar platform.
                        </span>
                    </li>
                </ul>
                <p className="mt-3 text-muted-foreground">The process is very simple and easy, Your details will be validated shortly and Our team will provision your order.</p>
                <div className="flex">
                    <p className="text-muted-foreground"><span className="text-white">Note :</span> In case of international customers we will ask to upload Passport / other Government approved documents to validate customer details. In addition, Selfie with uploaded documents is mandatory.</p>
                </div>
            </div>

            <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default KycContent;