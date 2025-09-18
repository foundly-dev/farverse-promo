"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./carousel";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (images.length === 0) return null;

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-auto pl-2 md:pl-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-muted mx-auto aspect-[400/700] max-h-[200px] w-fit cursor-pointer overflow-hidden rounded-lg border transition-transform hover:scale-[1.02]">
                    <img
                      src={image}
                      alt={`${alt} - Screenshot ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-h-[95vh] max-w-[95vw] border-none bg-transparent p-0">
                  <div className="relative flex items-center justify-center">
                    <img
                      src={image}
                      alt={`${alt} - Fullscreen`}
                      className="max-h-[95vh] max-w-[95vw] rounded-lg object-cover"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
