"use client";
import {featuredata} from "@/constant/index"
import { Button } from "./ui/button";
// import Image from "next/image";

interface FeaturesItem {
    id: number;
    src: string;
    bigText: string;
    smallText: string;
}

export default function Heroe() {
    console.log("featuredata:", featuredata);

    return (
        <div className="w-full">
            <div className="max-w-96 h-24 border border-black rounded-2xl bg-red-600 flex flex-wrap justify-center gap-4 p-4">
                Hello
                <p className="bg-red-500 border rounded">Hi</p>
                {/* {featuredata.map((item) => (
                    <div 
                        key={item.id}
                        className="flex flex-col item-center"
                    >
                        <Image 
                            src={item.src} 
                            alt={item.bigText} 
                            width="60"
                            height="60"
                            className="object-cover"
                        />
                        <h2>{item.bigText}</h2>
                        <Button>{item.buton}</Button>
                        <p>{item.smallText}</p>
                        <Button>Open</Button>
                    </div>
                ))} */}
            </div>
        </div>
    )
}