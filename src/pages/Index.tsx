import { MapView } from "@/components/MapView";
import { FieldCard } from "@/components/FieldCard";
import { FIELDS } from "@/lib/constants";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Overland Park Baseball Fields</h1>
        <p className="text-lg text-muted-foreground">
          Find and book premium baseball fields in Overland Park, Kansas
        </p>
      </div>

      <div className="mb-12">
        <MapView />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FIELDS.map((field) => (
          <FieldCard
            key={field.id}
            id={field.id}
            name={field.name}
            description={field.description}
            price={field.price}
            amenities={field.amenities}
            image={field.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;