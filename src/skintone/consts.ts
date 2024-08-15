import { SkinToneType } from "./skintone";

export const skinToneOptions: ReadonlyArray<{
    label: string;
    value: SkinToneType;
}> = [
    { label: "👍🏻 Casper's Thumb", value: "white" },
    { label: "👍🏼 Creamy Crunch", value: "creamWhite" },
    { label: "👍🏽 Latte Lifter", value: "lightBrown" },
    { label: "👍🏾 Java Jive", value: "darkBrown" },
    { label: "👍🏿 Chocolate Chomp", value: "brown" },
    { label: "👍 Plain Jane", value: "none" },
];
