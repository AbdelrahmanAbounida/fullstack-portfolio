import React from "react";
import { LampDemo } from "./acentui/lamp";
import {
  Cloud,
  Computer,
  Facebook,
  LibraryBig,
  WebhookIcon,
} from "lucide-react";
import { MobileIcon } from "@radix-ui/react-icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ALL_SERVICES: ServiceProps[] = [
  {
    title: "API & Web Development",
    description:
      "Developing dynamic web applications, Landing pages, Dashboards, ECommerces, Chat apps, Real-time , LMS, distributed systems, and more.",
    icon: <WebhookIcon />,
  },
  {
    title: "Mobile Applications",
    description:
      "Building cross-platform mobile apps using React Native, GraphQL, and integrating with Supabase, Firebase, or Strapi. ",
    icon: <MobileIcon />,
  },
  {
    title: "Web Scraping and Task Automation",
    description:
      "Automating data extraction and tasks with Crawlee , Scrapy, Playwright, and Puppeteer for efficient processing.",
    icon: <LibraryBig />,
  },
  {
    title: "Social Media Bots",
    description:
      "Creating bots for various platforms including Telegram, Twitter, Slack Discord, Notion, and more. ",
    icon: <Facebook />,
  },
  {
    title: "AI Integration",
    description:
      "Developing and fine-tuning AI models using PyTorch , OpenAI, LangChain, Hugging Face, and LlamaIndex for NLP and computer vision.",
    icon: <Computer />,
  },
  {
    title: "Deployment and Cloud ",
    description:
      "Deploying and managing applications across Heroku DigitalOcean, Vercel, AWS S3, SES, SNS, EC2, Lambda, .. ",
    icon: <Cloud />,
  },
];

const Services = () => {
  return (
    <div className="mt-[400px] relative">
      <img
        src="/services-arrows.svg"
        alt="services-arrows"
        className=" object-cover absolute top-0  w-full "
      />

      <h1 className="text-4xl sm:text-[63px] my-10 py-3 font-bold mx-auto  text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#52525B]">
        Services
      </h1>
      <div className="flex flex-wrap justify-center gap-10  pt-12">
        {ALL_SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

{
  /** TODO:: add Accent Card Here */
}
const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="rounded-xl p-6 w-[384px] h-auto shadow-md relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#030303,_#0D0D0D)] border border-[#1e1e1e]">
      {/* Icon Container */}
      <div className="mb-4">
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary text-white">
          {icon} {/* Placeholder for the icon */}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      {/* Small Decorative Stars */}
    </div>
  );
};
