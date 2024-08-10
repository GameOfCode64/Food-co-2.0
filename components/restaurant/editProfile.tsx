"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UseRestaurant } from "@/hooks/restaurant-popUp";
interface DetailsProps {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  rating: string | null;
}
const EditRestaurantProfile = ({
  id,
  name,
  email,
  phone,
  location,
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
        <div className="w-full relative"></div>
      </DialogContent>
    </Dialog>
  );
};

export default EditRestaurantProfile;
