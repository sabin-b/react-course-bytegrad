import { Event } from "@/types/types";
import Image from "next/image";

type EventCardProps = Event;
export default function EventCard({
  imageUrl,
  city,
  date,
  location,
  name,
  organizerName,
}: EventCardProps) {
  return (
    <li className="h-[300] bg-white/5 overflow-hidden max-w-[400px] rounded-xl">
      <Image
        src={imageUrl}
        alt={name}
        className="aspect-square max-h-[250px] object-cover"
        width={400}
        height={250}
      />
      <div className="text-center p-6">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-400">{organizerName}</p>
        <p className="text-gray-500">
          {location},{city}
        </p>
      </div>
    </li>
  );
}
