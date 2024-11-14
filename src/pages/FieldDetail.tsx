import { useParams } from "react-router-dom";
import { FIELDS } from "@/lib/constants";
import { BookingForm } from "@/components/BookingForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FieldDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const field = FIELDS.find((f) => f.id === parseInt(id || ""));

  if (!field) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Field not found</h1>
        <Button onClick={() => navigate("/")}>Back to Fields</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="mb-8"
      >
        ← Back to Fields
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={field.images[0]}
            alt={field.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold mb-4">{field.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">{field.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <p className="text-muted-foreground">{field.address}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {field.amenities.map((amenity) => (
                <Badge key={amenity} variant="secondary">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-8">
            <h2 className="text-2xl font-bold mb-6">Book this Field</h2>
            <BookingForm fieldId={field.id} price={field.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetail;