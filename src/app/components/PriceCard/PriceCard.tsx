import React, { FC } from "react";
import styles from "./PriceCard.module.css";

interface PriceCardProps {
  cardTitle?: string;
  cardPrice?: string;
  cardText?: string[];
  buttonTexts?: string[];
}

const PriceCard: FC<PriceCardProps> = (props: PriceCardProps) => {
  return (
    <div className={styles.PriceCard}>
      <div className="card-head pt-4 d-flex justify-content-center">
        {props.cardTitle}
      </div>
      <div className="card-body py-3">
        <p className="text-center card-price m-0">{props.cardPrice}</p>
        <p className="subtext">
          or {props.buttonTexts?props.buttonTexts[0]:'3 payments'}
        </p>
        {props.cardText?.map((lineText, id) => (
          <p className="text-center" key={id}>
            <i className="fa-solid fa-circle-check"></i>  {lineText}
          </p>
        ))}
        <div className="d-flex justify-content-center my-2">
          <button className="card-button " type="button">
            Buy Now
          </button>
        </div>
        <p className="subtext">
          The subscription renews anually por $99*
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
