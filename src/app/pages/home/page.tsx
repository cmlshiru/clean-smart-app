
import Navbar from "@/app/components/Navbar/Navbar";
import PriceCard from "@/app/components/PriceCard/PriceCard";
import Image from "next/image";

export default function Home() {
  const cardsContent = [

    {
      id: 4,
      title: "Free",
      price: "$0",
      texts: [
        "Access to the both lenguages",
     
      ],
      buttonTexts: ["3 Payments of $250", "Free 5-day Trial"],
    },
    {
      id: 1,
      title: "Basic Gold",
      price: "$699",
      texts: [
        "Access the course in English only",
       
      ],
      buttonTexts: ["3 Payments of $250", "Free 5-day Trial"],
    },

    {
      id: 3,
      title: "Basic Silver",
      price: "$699",
      texts: [
        "Access the course in Spanish only",
     
      ],
      buttonTexts: ["3 Payments of $250", "Free 5-day Trial"],
    },
    {
      id: 2,
      title: "Platinum",
      price: "$999",
      texts: [
        "Access both courses Spanish & English",
       
      ],
      buttonTexts: ["3 Payments of $350", "Free 5-day Trial"],
    },
    
    {
      id: 5,
      title: "Diamond",
      price: "$699",
      texts: [
        "Unlimited Access",
    
      ],
      buttonTexts: ["3 Payments of $250", "Free 5-day Trial"],
    },
  ];

  return (
    <div className="text-center d-block justify-content-center">
      <Navbar />
      <div className="w-100 h-100 text-center pt-5 d-flex justify-content-center">
        <div className="home-page">
          <div className="col-12 d-flex justify-content-center py-5 px-5">
            <div className="col-8  my-auto  p-5">
              <h1 className="home-h1">Train your cleaning team with us</h1>
              <p className="home-p">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit magna
                netus blandit interdum iaculis sed, pulvinar platea at luctus
                mauris. Commodo eu quisque lacinia et integer laoreet ac nostra
                sem luctus iaculis imperdiet mollis suscipit, nam sociis non
                tortor semper quam libero cursus cum interdum molestie sed.
                Dapibus facilisi ridiculus ut posuere turpis nibh pulvinar
                magnis dis, dui ultrices eros duis dictum elementum sociosqu
                commodo.
              </p>
            </div>
            <div className="col-4 p-4">
              <Image
                src="/imgs/Bella and Professor poster.jpg"
                alt="jumping"
                width={0}
                height={0}
                sizes="100vw"
                className="w-100 h-100 home-img"
              />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center price-card-container">
            {cardsContent.map((cardContent) => (
              <div key={cardContent.id} className="col-3 p-3">
                <PriceCard
                  cardTitle={cardContent.title}
                  cardPrice={cardContent.price}
                  cardText={cardContent.texts}
                  buttonTexts={cardContent.buttonTexts}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
