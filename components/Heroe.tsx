"use client";

import { nextSlide, prevSlider, dotSlider } from "@/store/slicers";
import { useSelector, useDispatch } from "react-redux";
import { featuredata } from "@/constant";
import { RootState } from "@/app/store";
import Image from "next/image";
import { Button } from "./ui/button";


export default function Heroe() {
    const sliderIndex = useSelector((state: RootState) => state.slider.value);
    console.log("SliderIndex", sliderIndex);
    const dispatch = useDispatch();

    return (
        <div className="relative w-full">
            <div className="ml-10">
                {featuredata.map((item, id) => (
                    <div 
                        key={id}
                        className={(item.id) === sliderIndex ? 'opacity-100 duration-700 ease-in-out scale-100' : 'opacity-0 duration-700 ease-in-out scale-90'}
                    >   
                        <div className="flex justify-center">
                            <Image
                                src={item.src}
                                alt={item.smallText}
                                width={1214}
                                height={10}
                                className="h-[30rem]"
                            />
                        </div>
                        <div className="absolute text-white top-8">
                            <h2 className="ml-10 text-[20px]">{item.bigText}</h2>
                            <div className="flex justify-between mt-40">
                            <h5 className="font-bold text-2xl">{item.smallText}</h5>
                            <Button>{item.button}</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex text-slate-500 left-[30%] md:left-[42%]">
                {featuredata.map((dot, index) => (
                    <div key={index}>
                        <div className={index === sliderIndex ? "bg-black rounded-full p-4 cursor-pointer" : "bg-slate-500 rounded-full p-4 cursor-pointer"}
                        onClick={() => dispatch(dotSlider(index))}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    )
}