import { Event } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = Event;
export default function EventCard({
  imageUrl,
  city,
  date,
  location,
  name,
  organizerName,
  slug,
}: EventCardProps) {
  return (
    <Link href={`/event/${slug}`}>
      <li className="h-[300] relative bg-white/5 overflow-hidden max-w-[400px] rounded-xl hover-effects">
        <Image
          src={imageUrl}
          alt={name}
          className="aspect-square max-h-[250px] object-cover"
          width={400}
          height={250}
        />
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-gray-400 text-lg">{organizerName}</p>
          <p className="text-gray-500 mt-2">
            {location},{city}
          </p>
        </div>
        <div className="w-[45px] flex flex-col items-center justify-center text-center h-[45px] bg-black/40 rounded absolute top-[14px] left-[14px]">
          <p className="text-xl font-bold leading-none">
            {new Date(date).toLocaleDateString("en-us", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs text-accent">
            {new Date(date).toLocaleDateString("en-us", {
              month: "short",
            })}
          </p>
        </div>
      </li>
    </Link>
  );
}
