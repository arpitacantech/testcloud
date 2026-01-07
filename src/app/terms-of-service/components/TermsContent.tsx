interface TermsSubSection {
  subtitle: string;
  intro?: string;
  points?: string[];
}

interface TermsSection {
  title: string;
  paragraphs?: string[];
  subtitle?: string;
  intro?: string;
  points?: string[];
  subsections?: TermsSubSection[];
}

const sections: TermsSection[] = [
  {
    title: "",
    paragraphs: [
      "Access to and use of the Cantech Cloud website is provided subject to the following terms and conditions which may be amended from time to time at our sole discretion.PLEASE READ THESE TERMS CAREFULLY AS USE OF THIS SITE CONSTITUTES ACCEPTANCE OF THESE TERMS AND CONDITIONS.",
    ],
  },
  {
    title: "Copyright",
    paragraphs: [
      'The information, artwork, text, video, audio or pictures (collectively "Information") contained on the Cantech Cloud.com Web site are the copyrighted works.',
    ],
  },
  {
    title: "Use",
    paragraphs: [
      'Except as otherwise indicated, you may view, copy, print and distribute the Information available on the Cantech Cloud Web site subject to the following conditions:',
      'The Information may be used solely for personal, non-commercial or educational purposes. You may not modify or alter the Information in any way without express written permission from Cantech Cloud. Any copy of any information or any portion thereof must include the copyright notice originally included with the Information. Any computer software downloadable or otherwise available from Cantech Cloud is licensed subject to the terms of the applicable license agreement. The Information does not include design or layout of the Cantech Cloud Web site, elements of which are protected by law and cannot be copied or imitated.',
    ],
  },
  {
    title: "Warranties & Disclaimers",
    paragraphs: [
      'Except as expressly provided otherwise herein, all information on this web site is provided "as is" without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. cantech cloud assumes no responsibility for errors or omissions in the information or other documents which are referenced by or linked to this web site. references to corporations, their services and products, are provided "as is" without warranty of any kind, either express or implied.',
      'In no event shall cantech cloud or any of its affiliates, employees, officers, directors, agents or representatives be liable for any special, incidental, indirect or consequential or other damages of any kind including, without limitation, those resulting from damage to or loss of use of computer hardware, data or information or loss of profits, whether or not advised of the possibility of damage, and on any theory of liability, arising out of or in connection with the use or performance of this information or service.',
    ],
  },
  {
    title: "Links To Third Party Sites",
    paragraphs: [
      'The Cantech Cloud Web site may contain links to third-party Web sites, which are not under the control of Cantech Cloud. Cantech Cloud provides these links as a convenience only and Cantech Cloud does intend these links to be endorsements or referrals of these linked sites. Cantech Cloud does not accept any responsibility for the content or uses of these linked Web sites.',
    ],
  },
  {
    title: "Copyright Policy And Copyright Agent",
    paragraphs: [
      "It is Cantech Cloud's policy to respect the copyright and intellectual property rights of others. Cantech Cloud may remove content that appears to infringe the copyright or other intellectual property rights of others. If you believe that Cantech Cloud or any user of our site has infringed your copyright in any material way, please notify Cantech Cloud's Abuse Department ( info@cantech.in ), and provide the following information:",
      "A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright interest. An identification of the copyrighted work claimed to have been infringed. An identification of the material that you claim is infringing so that we may locate it on the site. Your address, telephone number and email address. A statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent or the law. A statement by you that the above information in your Notice is accurate, made under penalty of perjury, and that you are authorized to act on behalf of the owner of the copyright interest involved.",
    ],
  },
  {
    title: "LATE FEES",
    paragraphs: [
      "Invoices overdue for over 5 days will be charged a late fee/interest upto 5% per month.",
    ],
  },
  {
    title: "Governing Law And Jurisdiction",
    paragraphs: [
      "The Cantech Cloud Web site (excluding linked sites) is controlled by Cantech Cloud.com . All matters relating to your access to, or use of, this Website shall be governed by the statutes and laws of India and the United States of America, without regard to the conflicts of laws principles thereof.",
    ],
  },
  {
    title: "Trademark Information",
    paragraphs: [
      "Cantech Cloud and the Cantech Cloud logo are trademarks of Cantech Cloud. Some of these trademarks are registered in certain jurisdictions. All other brand and product names are trademarks or registered trademarks of their respective companies",
      "You may not use any of Cantech Clouds trademarks without express written permission of Cantech Cloud. If you are interested in using our trademarks, please contact us.",
    ],
  },
];

const TermsContent = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-20">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="animate-fade-in-up"
            style={{ ["--delay" as string]: `${index * 0.1}s` }}
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {section.title}
            </h2>

            {/* Paragraphs */}
            {section.paragraphs && (
              <div className="space-y-4 text-gray-400 leading-relaxed">
                {section.paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            )}

            {/* Subsections */}
            {section.subsections && (
              <div className="space-y-10">
                {section.subsections.map((sub, i) => (
                  <div key={i}>
                    <h3 className="mt-8 text-lg font-semibold text-foreground">
                      {sub.subtitle}
                    </h3>

                    {sub.intro && (
                      <p className="mt-3 text-gray-400">
                        {sub.intro}
                      </p>
                    )}

                    {sub.points && (
                      <ul className="mt-6 space-y-3">
                        {sub.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                            <span className="text-gray-400">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Divider */}
            {index < sections.length - 1 && (
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsContent;