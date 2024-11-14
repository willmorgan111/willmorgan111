import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface BookingFormProps {
  fieldId: number;
  price: number;
}

export const BookingForm = ({ fieldId, price }: BookingFormProps) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(1);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Start Time</Label>
          <Input
            id="time"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="duration">Duration (hours)</Label>
          <Input
            id="duration"
            type="number"
            min="1"
            max="8"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            required
          />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between mb-4">
            <span>Total Price:</span>
            <span className="font-semibold">${price * duration}</span>
          </div>
          <Button type="submit" className="w-full">
            Book Now
          </Button>
        </div>
      </form>
    </Card>
  );
};