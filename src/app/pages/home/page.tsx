
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import PriceCard from "@/app/components/PriceCard/PriceCard";
import Image from "next/image";

export default function Home() {
  const cardsContent = [
    {
      id: 1,
      title: "English",
      price: "$699",
      texts: [
        "this is the text 1 from de card",
        "this is the text 2 from de card",
        "this is the text 3 from de card",
      ],
      buttonTexts: ["3 Payments of $250", "Free 5-day Trial"],
    },
    {
      id: 2,
      title: "English and Spanish",
      price: "$999",
      texts: [
        "this is the text 1 from de card",
        "this is the text 2 from de card",
        "this is the text 3 from de card",
      ],
      buttonTexts: ["3 Payments of $350", "Free 5-day Trial"],
    },
    {
      id: 3,
      title: "Spanish",
      price: "$699",
      texts: [
        "this is the text 1 from de card",
        "this is the text 2 from de card",
        "this is the text 3 from de card",
      ],
      buttonTexts: ["3 Payments of $250", "Free 5-day Trial"],
    },
    {
      id: 4,
      title: "Free",
      price: "$699",
      texts: [
        "this is the text 1 from de card",
        "this is the text 2 from de card",
        "this is the text 3 from de card",
      ],
      buttonTexts: ["3 Payments of $250", "Free 5-day Trial"],
    },
    {
      id: 5,
      title: "Unlimited Access",
      price: "$699",
      texts: [
        "this is the text 1 from de card",
        "this is the text 2 from de card",
        "this is the text 3 from de card",
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
      <Footer />
    </div>
  );
}
