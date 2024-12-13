import H1 from "@/components/H1";
import { Event } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import React, { cache } from "react";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const getEvent = cache(async (slug: string): Promise<Event> => {
  const response = await axios.get(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  return response.data || {};
});

async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const event = await getEvent(slug);

  return (
    <React.Fragment>
      <section className="flex relative items-center justify-center py-8 sm:py-0 left-0 md:h-[360px] overflow-hidden w-full min-w-full">
        <Image
          src={event?.imageUrl}
          alt={event?.name}
          className="object-cover z-o blur-md w-full h-full"
          fill //? fill the image
          quality={50}
          priority //? gave priority to load images
          sizes="100vw"
        />
        <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
          <Image
            src={event?.imageUrl}
            alt={event?.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event?.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event?.name}
            </H1>

            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by{" "}
              <span className="italic">{event?.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 hover-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </React.Fragment>
  );
}

export default EventPage;

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
