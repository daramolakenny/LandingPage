import { BsHouseDoorFill } from "react-icons/bs";
import { BiSolidInbox } from "react-icons/bi";
import { HiVideoCamera } from "react-icons/hi";
import { BiSolidMagicWand } from "react-icons/bi";
import { BsHammer } from "react-icons/bs";
import { BsDiagram2 } from "react-icons/bs";
import { BiSolidFolder } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";

export const navlink1 = {
   home: <BsHouseDoorFill />,
   box: <BiSolidInbox />,
   video: <HiVideoCamera />,
   ward: <BiSolidMagicWand />,
   hammer: <BsHammer />,
   diagram: <BsDiagram2 />,
   folder: <BiSolidFolder />
}

export const navlink2 = {
   box: <BiSolidInbox />,
   earpieces: <BiSupport />,
   alarm: <BiSolidBell />,
}

export const featuredata = [
 {
    id: 0,
    src: "/images/bg4.jpeg",
    bigText : "Image",
    buton: "New",
    smallText : "Generate images with custom styles in flux and ideogram.",
    button: "Open",
 },
 {
    id: 1,
    src: "/images/bg4.jpeg",
    bigText : "Video",
    smallText : "Generate videos with Mecus, Pica, Runway, Luna and more.",
    button: "Open",
 },
 {
    id: 2,
    src: "/images/bg4.jpeg",
    bigText : "RealTime",
    smallText : "Realtime AI rendering on a canvass. Instant feedback loops.",
    button: "Open",
 },
 {
    id: 3,
    src: "/images/bg4.jpeg",
    bigText : "Enhancer",
    buton: "New",
    smallText : "Lipscafe and enhance images and videos up to 22k.",
    button: "Open",
 },
 {
    id: 4,
    src: "/images/bg4.jpeg",
    bigText : "Edit",
    buton: "New",
    smallText : "Add objects, change style or suspend photos and generators.",
    button: "Open",
 },
 {
    id: 5,
    src: "/images/bg4.jpeg",
    bigText : "Video Lipsync",
    buton: "New",
    smallText : "Lip sync any video to any audio."
 },
 {
    id: 6,
    src: "/images/bg4.jpeg",
    bigText : "Motion Transfer",
    buton: "New",
    smallText : "Transfer motion to images and animate characters.",
    button: "Open",
 },
 {
    id: 7,
    src: "/images/bg4.jpeg",
    bigText : "Train",
    smallText : "Teach Krea to replicate your style, products, or characters.",
    button: "Open",
 }
];
