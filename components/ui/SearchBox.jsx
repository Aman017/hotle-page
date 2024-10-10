"use client"
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/varriants";
import DataPicker from "../DataPicker";
import React from "react";
import GuestSelect from "./GuestSelect";

const SearchBox = () => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0 }}
    className="w-full max-w-[488px] bg-white max-h-max flex flex-col border border-outline rounded-[20px] p-10">
      <div className="mb-[20px]">
        <Label htmlFor="destination">Where are you going</Label>
        <div className="relative flex items-center mb-[20px]">
          <Input id="destination" placeholder='Try "Singapore"' />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>

        {/* Date picker section */}
        <div className="flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0">
          {/* Check in */}
          <div className="flex flex-col flex-1">
            <Label>Check in</Label>
            <DataPicker />
          </div>

          {/* Check out */}
          <div className="flex flex-col flex-1">
            <Label>Check out</Label>
            <DataPicker />
          </div>
        </div>
      </div>

      {/* Guest select, checkbox, and search button */}
      <div className="flex flex-col">
        {/* Select guests */}
        <div className="flex flex-col flex-1 mb-[24px]">
          <Label>Guests</Label>
          <GuestSelect />
        </div>

        {/* Checkbox for payment option */}
        <div className="flex items-center gap-x-3 mb-[24px]">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="font-semibold mb-0">
            Pay When Checking in?
          </Label>
        </div>

        {/* Search button */}
        <Button size="lg" variant="accent">
          Search Hotel
        </Button>
      </div>
    </motion.div>
  );
};

export default SearchBox;
