import EventCard from "@/components/EventCard";
import H1 from "@/components/H1";
import { Event } from "@/types/types";
import axios from "axios";
import React, { cache } from "react";

type EventsPageProps = {
  params: Promise<{
    city: string;
  }>;
};

const getEvents = cache(async (city: string): Promise<Event[]> => {
  const response = await axios.get(
    "https://bytegrad.com/course-assets/projects/evento/api/events",
    {
      params: { city },
    }
  );

  return response.data;
});

async function EventsPage({ params }: EventsPageProps) {
  const { city } = await params;

  const events = await getEvents(city);

  return (
    <React.Fragment>
      <section className="pt-20 text-center sm:pt-28">
        {city === "all" && <H1>All Events</H1>}
        {city !== "all" && (
          <H1>
            Events{" "}
            {`${city.charAt(0).toLocaleUpperCase() + city.slice(1)}`.toString()}
          </H1>
        )}
      </section>
      {/* event listings */}
      <section className="my-10">
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}

export default EventsPage;
