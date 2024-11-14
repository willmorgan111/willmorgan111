import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface FieldCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  amenities: string[];
  image: string;
}

export const FieldCard = ({ id, name, description, price, amenities, image }: FieldCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg animate-fade-in">
      <CardHeader>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardTitle className="mt-4">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenity) => (
            <Badge key={amenity} variant="secondary">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-semibold">${price}/hour</p>
        <Button onClick={() => navigate(`/field/${id}`)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};