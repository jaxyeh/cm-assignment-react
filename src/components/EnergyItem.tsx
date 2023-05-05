import React, { FC, useMemo, useState } from "react";
import NutrientItem from "./NutrientItem";
import { Unit } from "../types/recipe";

interface EnergyItemProps {
  energyValue: number;
  energyUnit: Unit;
  defaultUnit?: Unit | undefined;
  displayLabel?: boolean | undefined;
}

const EnergyItem: FC<EnergyItemProps> = ({
  energyValue,
  energyUnit,
  defaultUnit,
  displayLabel,
}) => {
  const [value, setValue] = useState<number>(energyValue);
  const [label, setLabel] = useState<string>("");

  const round = (num: number, decimalPlaces: number = 2) => {
    const p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
  };

  useMemo(() => {
    if (energyUnit !== defaultUnit) {
      if (defaultUnit === Unit.Kilocalorie) {
        setLabel("kCal");
        setValue(round(energyValue / 4.184));
      } else {
        setLabel("kJ");
        setValue(round(energyValue * 4.184));
      }
    } else {
      if (energyUnit === "kilojoule") {
        setLabel("kJ");
      } else {
        setLabel("kCal");
      }
    }
  }, [energyUnit, energyValue, defaultUnit]);

  return (
    <NutrientItem
      name={displayLabel ? label : null}
      value={value}
      className="energy"
    />
  );
};

export default EnergyItem;
