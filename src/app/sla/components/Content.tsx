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
    title: "",
    paragraphs: [
      'Cantech Networks Private Limited guarantees a 99.9% monthly network and Power uptime as per this Service Level Agreement (from here on referred to as "SLA"). Please note that terms and conditions apply. Cantech Cloud 99.9% Network Uptime SLA consists of 4 parts:',
      "Cantech Cloud will be the sole arbiter as to what constitutes a violation of these provisions.",
    ],
    subsections: [
      {
        subtitle: "",
        intro: "",
        points: [
          "Global Internet Connectivity This includes connectivity from the Cantech Cloud network to the outside internet.",
          "Private Network Connectivity This includes connectivity between the privately routed network within Cantech Cloud.",
          "Power This includes the power which powers the servers in the datacenter",
          "Client Control Panel This includes the accessibility of the client control panel. This SLA does not guarantee functionality of the client control panel.",
        ],
      },
    ],
  },
  {
    title: "Hardware SLA",
    paragraphs: [
      'For every 4 hours of downtime caused due to Hardware failure, you will get 1 day credit, please note this will be only for Hardware related failure.',
    ],
  },
  {
    title: "Terms and Conditions",
    subsections: [
      {
        subtitle: "",
        intro: "",
        points: [
          "Cantech Cloud extends this SLA to its direct clients only. Cantech Cloud is not liable for downtime caused by a reseller of its services.",
          "Cantech Cloud offers SLA credits for use in future billing cycles only. SLA credits are non­transferrable in any way. SLA credits may not be exchanged for currency of any kind.",
          "SLA credit is calculated from the time a ticket is opened regarding the issue to the time the issue is resolved.",
          "Any Customer account not in good standing on payments is not eligible for SLA credit.",
          "Any Customer account which has had been out of good standing on payments 3 times or more within 12 months prior to the outage is not eligible for SLA credits.",
          "Any Customer server disconnected due to violation of the AUP/TOS is not eligible for SLA credit.",
          "All SLA claims must be made with the sales department, and will be issued as account credits.",
          "All SLA claims must be made within seven days of the network or power downtime. SLA credits may take up to 15 days to authorize, process, and post to the Customer account.",
          "SLA credits may not exceed the full monthly amount of the server they are being applied to.",
          "SLA credit claims can only be made by an authorized user on the account. All other unauthorized claims will be denied.",
          "SLA credits may not be stacked, i.e. claiming SLA credit on both uplink downtime, as well as power downtime during the same incident.",
          "In no way does the Cantech Cloud SLA include software of any sort. Operating system reloads do not qualify in any way for an",
        ],
      },
    ],
  },
  {
    title: "Network and Power SLA",
    subsections: [
      {
        subtitle: "",
        intro: "",
        points: [
          "For every 15 minutes of downtime you will get 1 day credit, please note this will be only for power or network downtime.",
        ],
      },
    ],
  },
  {
    title: "SLA credit",
    subsections: [
      {
        subtitle: "",
        intro: "",
        points: [
          "Any form of management by Cantech Cloud of Customer software is not eligible to be included in the Cantech Cloud SLA.",
          "Faulty hardware qualifies for the Hardware SLA only when 4 hours has passed from the Cantech Cloud Technician officially diagnosing the problem as being related to a particular piece of hardware. Until diagnosis is confirmed, the Hardware SLA is inactive.",
          "Any failure outside of the Cantech Cloud network itself, including bandwidth carrier outages, are not eligible for SLA credit.",
          "Scheduled maintenance of Cantech Cloud network is not eligible for any form of SLA credit.",
          "Acts of God, including weather, natural disaster, or any other disaster outside of the control of Cantech Cloud are not eligible for SLA credit.",
          "The Cantech Cloud SLA is subject to change or revision without notice.",
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
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                      <p className="mt-3 text-muted-foreground">
                        {sub.intro}
                      </p>
                    )}

                    {sub.points && (
                      <ul className="mt-6 space-y-3">
                        {sub.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1 h-2 min-w-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">
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