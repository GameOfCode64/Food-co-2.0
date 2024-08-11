"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UseRestaurant } from "@/hooks/restaurant-popUp";
import ProfileForm from "./ProfileForm";
interface DetailsProps {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  rating: string | null;
  speciality: string | null;
}
const EditRestaurantProfile = ({
  id,
  name,
  email,
  phone,
  location,
  speciality,
  rating,
}: DetailsProps) => {
  const { isOpen, onClose, onOpen } = UseRestaurant();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-2 text-bittersweet-500">
          Edit Restaurant Profile
        </DialogTitle>
        <div className="w-full h-[500px] relative ">
          <div className="w-full h-full fixed overflow-y-scroll scrollbar-none">
            <ProfileForm
              name={name || ""}
              email={email || ""}
              phone={phone || ""}
              location={location || ""}
              rating={rating || ""}
              speciality={speciality || ""}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditRestaurantProfile;
