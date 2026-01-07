interface PrivacySubSection {
  subtitle: string;
  intro?: string;
  points?: string[];
}

interface PrivacySection {
  title: string;
  paragraphs?: string[];
  subtitle?: string;
  intro?: string;
  points?: string[];
  subsections?: PrivacySubSection[];
}

const sections: PrivacySection[] = [
  {
    title: "The Cantech Cloud Privacy Policy",
    paragraphs: [
      "This privacy policy sets out how Cantech Networks Pvt Ltd uses and protects any information that you give to Cantech Networks Pvt Ltd when you use this website.",
      "Cantech Cloud is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.",
      "Cantech Cloud may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 01/11/2024.",
    ],
  },
  {
    title: "Personal Information Collection",
    subsections: [
      {
        subtitle: "What we collect",
        intro: "We may collect the following information:",
        points: [
          "Name and job title",
          "Contact information including email address",
          "Information about transactions carried out over this website",
          "Information provided for subscribing to services",
          "Demographic information such as postcode, preferences and interests",
          "Other information relevant to customer surveys and/or offers",
        ],
      },
      {
        subtitle: "Why we require this information",
        intro:
          "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:",
        points: [
          "Internal record keeping",
          "Improving our products and services",
          "Sending promotional emails about new products, special offers or other information",
          "Contacting you for market research purposes",
          "Customising the website according to your interests",
        ],
      },
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
    ],
  },
  {
    title: "How do we use Cookies?",
    paragraphs: [
      "A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website. Links to other websites Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website.",
      "Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question. Controlling your personal information You may choose to restrict the collection or use of your personal information in the following ways: whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes Cantech Cloud will store all the personal information you provide on its secure servers.",
      "Information relating to electronic transactions entered into via this website will be protected by encryption technology.",
      "If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.",
    ],
  },
  {
    title: "Cross-border data transfers",
    paragraphs: [
      "Information that Cantech Cloud collects may be stored and processed in and transferred between any of the countries in which Cantech Cloud operates to enable the use of the information in accordance with this privacy policy.",
      "In addition, personal information that you submit for publication on the website will be published on the internet and may be available around the world. You agree to such cross-border transfers of personal information.",
    ],
  },
  {
    title: "Updating this statement",
    paragraphs: [
      "Cantech Cloud may update this privacy policy by posting a new version on this website. You should check this page occasionally to ensure you are familiar with any changes.",
    ],
  },
  {
    title: "Other websites",
    paragraphs: [
      "This website contains links to other websites. Cantech Cloud is not responsible for the privacy policies or practices of any third party.",
    ],
  },
  {
    title: "Disclaimer Policy",
    paragraphs: [
      "The information contained in this website is for general information purposes only. The information is provided by Cantech Cloud Pvt Ltd and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Through this website you are able to link to other websites which are not under the control of [business name]. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, Cantech Cloud Pvt Ltd takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.",
    ],
  },
];

const PrivacyContent = () => {
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
                    <h3 className="mt-8 text-lg font-semibold text-foreground">
                      {sub.subtitle}
                    </h3>

                    {sub.intro && (
                      <p className="mt-3 text-muted-foreground">
                        {sub.intro}
                      </p>
                    )}

                    {sub.points && (
                      <ul className="mt-6 space-y-3">
                        {sub.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
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

export default PrivacyContent;