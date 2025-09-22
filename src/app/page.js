import CarCard from "@/components/CarCard/CarCard";
import cars from "@/data/cars";

export default function Page() {
  return (
    <main>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </main>
  );
}
