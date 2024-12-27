import Banner from "@/components/Banner";
import PetsDetails from "@/components/PetsDetails";
import PetsList from "@/components/PetsList";
import SearchForm from "@/components/SearchForm";
import Stat from "@/components/Stat";

export default function Dasboardpage() {
  return (
    <main>
      <section className="flex flex-col gap-y-6 py-4 sm:flex-row justify-between sm:items-center">
        <Banner />
        <Stat title="2" description="Total Quests" />
      </section>
      <section className="grid grid-cols-1 mt-5 sm:mt-0 gap-5 sm:grid-cols-3 sm:grid-rows-[45px_1fr] sm:h-[450px]">
        <SearchForm />
        <PetsList />
        <PetsDetails />
      </section>
    </main>
  );
}
