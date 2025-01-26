import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"


const PropertyImageCarousel = ({images}: {images: string[]}) => {
  return <Carousel className="w-full max-w-sm flex-center">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="shadow-xl">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image}
                        alt="image"
                        width={1000}
                        height={1000}
                        className="object-cover object-center w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
}
export default PropertyImageCarousel