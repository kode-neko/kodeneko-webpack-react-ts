import React from "react";
import { LMTableProductAttrsProps } from "./types";
import styles from "./styles.module.scss";
import { LMColorIcon } from "../../LMColorIcon";
import { LMBox } from "../../LMForm";

const LMTableProductAttrs: React.FC<LMTableProductAttrsProps> = ({
  color,
  size,
}) => {
  return (
    <div className={styles.contAttrs}>
      <div className={styles.color}>
        {color && <LMColorIcon color={color} />}
      </div>
      <div className={styles.size}>
        <LMBox option={size} selected />
      </div>
    </div>
  );
};

export default LMTableProductAttrs;