import React from "react";

import "./styles/latestTrend.css";
import p1 from "../../../assets/images/tshirtgallery/persch1.jpg";
import p2 from "../../../assets/images/tshirtgallery/persch2.jpg";
import p3 from "../../../assets/images/tshirtgallery/persch3.jpg";
import p4 from "../../../assets/images/tshirtgallery/persch4.jpg";

import { Chip } from "@material-tailwind/react";

const clothes = [
  { src: p1, price: "$50.00", soldout: true },
  { src: p2, price: "$150.00", soldout: false },
  { src: p3, price: "$25.00", soldout: true },
  { src: p4, price: "$60.00", soldout: true },
  { src: p1, price: "$50.00", soldout: false },
  { src: p2, price: "$99.00", soldout: true },
  { src: p3, price: "$60.00", soldout: true },
  { src: p4, price: "$60.00", soldout: false },
  { src: p1, price: "$30.00", soldout: true },
  { src: p2, price: "$300.00", soldout: true },
  { src: p3, price: "$25.00", soldout: false },
  { src: p4, price: "$50.00", soldout: false },
  { src: p1, price: "$45.00", soldout: true },
  { src: p2, price: "$22.00", soldout: true },
  { src: p3, price: "$99.00", soldout: false },
  { src: p4, price: "$65.00", soldout: true },
];

function NewArrivals() {
  return (
    <>
      <div class="">
        <div class="flex flex-wrap h-full">
          {clothes.map((item, index) => (
            <div className="border relative lg:w-1/8 md:w-1/4 sm:w-1/2 overflow-hidden">
              <img
                src={item.src}
                alt=""
                className="sm:h-full md:h-full lg:h-96 w-full object-cover object-center zoom "
              />
              <div class="absolute top-0 left-0">
                {item.soldout ? (
                  <Chip variant="ghost" color="red" value="SOLD OUT"></Chip>
                ) : (
                  <Chip variant="ghost" value="IN STOCK"></Chip>
                )}
              </div>
              <div class="absolute bottom-0 left-0 m-2">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
