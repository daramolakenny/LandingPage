"use client";
import {featuredata} from "@/constant/index"
import { Button } from "./ui/button";
import Image from "next/image";

interface FeaturesItem {
    id: number;
    src: string;
    bigText: string;
    smallText: string;
}

export default function Features(){
    console.log("featuredata:", featuredata);

    return ( 
        <div className="w-full">
                    <div className="p-4 md:px-12">
                        <header className="text-2xl font-bold py-4">Generate</header>
        
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        {/* <div className="max-w-96 h-24 border border-black rounded-2xl bg-red flex flex-wrap justify-center gap-4 p-4"> */}
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Image</h2>
                                        <span className="bg-blue-500 px-2 py-1 rounded-2xl ">Open</span>
                                    </div>
                                    <p>Generate images with custom styles in flux and ideogram.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
                            
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Video</h2>
                                    </div>
                                    <p>Generate videos with Mecus, Pica, Runway, Luna and more.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
        
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Realtime</h2>
                                    </div>
                                    <p>Realtime AI rendering on a canvass. Instant feedback loops.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
        
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Enhancer</h2>
                                        <span className="bg-blue-500 px-2 py-1 rounded-2xl">Open</span>
                                    </div>
                                    <p>Lipscafe and enhance images and videos up to 22k.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
                        {/* </div>
        
                        <div className="flex gap-8 pt-6"> */}
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Edit</h2>
                                        <span className="bg-blue-500 px-2 py-1 rounded-2xl">Open</span>
                                    </div>
                                    <p>Add objects, change style or suspend photos and generators.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
                            
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Video Lipsync</h2>
                                        <span className="bg-blue-500 px-2 py-1 rounded-2xl">Open</span>
                                    </div>
                                    <p>Lip sync any video to any audio.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
        
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Motion Transfer</h2>
                                        <span className="bg-blue-500 px-2 py-1 rounded-2xl">Open</span>
                                    </div>
                                    <p>Transfer motion to images and animate characters.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
        
                            <div className="flex">
                                <Image 
                                    src="/images/bg4.jpeg"
                                    alt="" 
                                    width="60"
                                    height="10"
                                    className="object-cover pr-2"
                                />
                                <div className="">
                                    <div className="flex" >
                                        <h2 className="font-bold p-1">Train</h2>
                                    </div>
                                    <p>Teach Krea to replicate your style, products, or characters.</p>
                                </div>
                                <div className="flex items-center">
                                    <Button className="bg-slate-100 hover:bg-white text-black rounded-2xl p-4 ">open</Button>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </div>
    )
}