interface SubSection {
  subtitle: string;
  intro?: string;
  points?: string[];
}

interface Section {
  title: string;
  paragraphs?: string[];
  subtitle?: string;
  intro?: string;
  points?: string[];
  subsections?: SubSection[];
}

const sections: Section[] = [
  {
    title: "Acceptable Usage Policy",
    paragraphs: [
      "Cantech Cloud.com provides services to clients all around the world. Cantech Cloud has the responsibility to protect each client and provide them with the best services available. The following guidelines were designed in an attempt to ensure that we can do such.",
      "Cantech Cloud will be the sole arbiter as to what constitutes a violation of these provisions.",
    ],
  },
  {
    title: "General:",
    paragraphs: [
      'Services provided by Cantech Cloud may be used for lawful purposes only. Transmission, storage, or presentation of any information, data, or material in violation of any United States Federal, State, or City law is prohibited.',
      'The subscriber agrees to indemnify and hold harmless Cantech Cloud from any claims resulting from the use of the service which damages the subscriber or any other party.',
    ],
  },
  {
    title: "Content",
    subsections: [
      {
        subtitle: "",
        intro: "Examples of unacceptable content include, but are not limited to:",
        points: [
          "Copyrighted media, without authority to distribute or display",
          "Unlicensed applications",
          "Cracking programs or key generators",
          "High Yield investment programs or HYIPs and related monitors, toplists etc.",
          "Child pornography or kidnapping material",
          "Fraudulent activity, phishing, pyramid schemes, chain letters, forgery, or impersonation",
          "Terrorist propaganda, racist material, or bomb/weapon instructions",
          "Virus/Virii, Spyware, Malware, or other infectious material",
          "Material protected by trade secret or other statute",
          "Additionally, Cantech Cloud prohibits:",
          "IRC and associated programs (including psybnc, 'bots', etc...)",
          "Game servers, voice servers and related applications.",
          "Scripts commonly used for abuse, attacks, or flooding",
          "Threatening, harrassing, or obscene content",
          "Legal adult content is permitted on all Cantech Cloud product lines. The viewing/downloading or possession of such information/data by Cantech Cloud clientele is not governed by Cantech Cloud policy, and is at your own discretion/free-will, and may be governed by your state/federal government.",
          "Links to unacceptable content, as defined above, are also prohibited.",
        ],
      },
    ],
  },
  {
    title: "Online Activity:",
    paragraphs: [
      'Any attempts to undermine or cause harm to the Cantech Cloud equipment, network, operations, or clientele is STRICTLY prohibited. Cantech Cloud will pursue legal action to the fullest extent for all abuse/violation of such.',
      'Any activity deemed damaging or abusive, whether unlawful or considered to be detrimental to the operations of Cantech Cloud, is prohibited. This includes, but is not limited to:',
    ],
    subsections: [
      {
        subtitle: "",
        intro: "",
        points: [
          "Denial of Service Attacks (DOS/DDOS)",
          "Unnecessary Port Scans",
          "Mail Bombing",
          "Unsolicited Advertising via IM, Forums, Newsgroups, Email, etc..",
        ],
      },
    ],
  },
  {
    title: "Bulk Email:",
    paragraphs: [
      'We understand that bulk email is an important mechanism for keeping people informed. However, spamming (unsolicited advertising), from the Cantech Cloud, or spamvertising (unsolicited advertising of) sites hosted on the Cantech Cloud is STRICTLY prohibited.',
    ],
  },
  {
    title: "Legitimate bulk email meets the following criteria:",
    subsections: [
      {
        subtitle: "",
        intro: "",
        points: [
          "The recipient has confirmed his willingness to be added to the distribution list of the mailing, by responding to a verification email, or, otherwise, verifiably confirming permission. (Evidence of such must be retained and available by request.)",
          "The recipient has confirmed his willingness to be added to the distribution list of the mailing, by responding to a verification email, or, otherwise, verifiably confirming permission. (Evidence of such must be retained and available by request.)",
          "All bulk email senders must post privacy policies, in association with the sending domains. Co-registration is not prohibited, but explanations of the sharing of information must be both publicly available and included in the confirmation mechanism for list subscription.",
          "If Cantech Cloud approaches a client for evidence of confirmation, this request must be honoured within 24 hours.",
          "Failure to meet the acceptable criteria for bulk mail may lead to immediate termination. Additionally, if such actions have caused mail servers or IP address ranges on the Cantech Cloud to be blacklisted, Cantech Cloud reserves the right to terminate customer account and fine the customer.",
        ],
      },
    ],
  },
  {
    title: "Policy Violations:",
    paragraphs: [
      'Cantech Cloud may, at any time, audit systems for any data/activity showing potential policy violations.',
    ],
  },
  {
    title: "Warnings:",
    paragraphs: [
      'The Cantech Cloud Abuse Dept makes an attempt to contact the client, via email, when the first sign of a possible violation is noted. These alerts are a courtesy. Responses to such alerts are required. If an alert is received from any Cantech Cloud staff member, the client is responsible for acknowledging his/her understanding and citing any action planned or taken, within 24 hours of the notice. Failure to do so may lead to suspension. Repeated failure to do so may result in termination.',
    ],
  },
  {
    title: "Suspension/Deactivation:",
    paragraphs: [
      'If any terms or conditions are failed to be followed, the client risks service suspension or termination. Cantech Cloud reserves the right to remove any account, without prior notice. If Cantech Cloud deactivates an account for violating policy, the client will forfeit any rights to a refund. No refunds for advance payments will be granted for deactivated accounts.',
    ],
  },
  {
    title: "Unauthorized Usage:",
    paragraphs: [
      'In any case involving unauthorized parties utilizing a Cantech Cloud service for abuse/violations, the client will be responsible for stopping all affected applications, until the source of the problem is found and corrected. Cantech Cloud may opt to disable all services until the client can perform such an investigation.',
    ],
  },
  {
    title: "Resource Usage:",
    paragraphs: [
      'Cantech Cloud will be the sole arbiter as to what constitutes a violation of resource usage limitations.',
    ],
  },
  {
    title: "Bandwidth:",
    paragraphs: [
      "Overage fees will apply to any service utilizing more than it's assigned bandwidth allocation, except for those unmetered bandwidth vpses and servers. Overages will be calculated based on overall amount of GigaBytes (GB) transferred in a monthly period, unless a service is sold based on Megabits per Second (MBPS). Services sold by MBPS, will be calculated via the industry standard 95% method, unless specified in contract otherwise. Client is responsible for all usage, and any corresponding overages fees, that result from a service that may be hacked and/or flooding. Cantech Cloud may require a deposit should a client utilize/require large amounts of bandwidth beyond their standard bandwidth allocation.",
    ],
  },
  {
    title: "Filtering:",
    paragraphs: [
      "Cantech Cloud reserves the right to block/filter or throttle ports and/or ip address ranges, at its discretion. This may include, for example, blocking Port 6667 (IRC), denying access from a known-spamming IP address range, or limiting the speed of point-to-point file-sharing programs (Kazaa, Limewire, Donkey, etc...). This may also include giving priority to certain traffic types, such as Voice-over-IP (VOIP) phone call transmissions.",
    ],
  },
  {
    title: "Virtual Private Servers (VPS):",
    paragraphs: [
      "To maintain the integrity of our service, VPS service that utilizes heavy amounts of system resources may be required to be upgraded, or, Cantech Cloud may relocate your site to a different server and/or IP address, to reduce the load on the server on which you are currently residing.",
    ],
  },
  {
    title: "Abusive Clientele:",
    paragraphs: [
      "Cantech Cloud may at it's discretion suspend or terminate service of any client that is abusive/harassing to Cantech Cloud and/or Cantech Cloud employees. Examples of such activity include, but are not limited to:",
    ],
    subsections: [
      {
        subtitle: "",
        intro: "",
        points: [
          "Verbal abuse - cursing, yelling, threatening, etc...",
          "Ongoing disregard for warnings or notices",
          "Consistent mistakes/errors/changes causing unnecessary workload",
          "Spamming Cantech Cloud email addresses, ticket systems, or servers",
          "Continuous involvement in flood/DDOS activity, hacked services, or other ongoing non-permitted usage",
          "Consistent late payments or responses",
          "Issuing a chargeback or bouncing a payment",
          "Continuous activation of problematic end-users",
          "Activity which affects the service(s) of other Cantech Cloud clientele",
        ],
      },
    ],
  },
];

const Content = () => {
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
                    {sub.subtitle && (
                    <h3 className="mt-8 text-lg font-semibold text-foreground">
                        {sub.subtitle}
                    </h3>
                    )}

                    {sub.intro && (
                      <p className="mt-3 text-gray-400">
                        {sub.intro}
                      </p>
                    )}

                    {sub.points && (
                      <ul className="mt-6 space-y-3">
                        {sub.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1 h-2 min-w-2 rounded-full bg-primary" />
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

export default Content;