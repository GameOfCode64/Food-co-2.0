"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { UseProfile } from "@/hooks/form-pop";
import getCurrentUser from "@/actions/getUser";
import EditProfileForm from "./EditProfileForm";
interface EditProps {
  email: string;
  address: string;
  phoneNumber: string;
  name: string;
}

const EditProfile = ({ email, address, phoneNumber, name }: EditProps) => {
  const { isOpen, onClose, onOpen } = UseProfile();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-2 text-bittersweet-500">
          Edit Profile
        </DialogTitle>
        <div className="w-full relative">
          <EditProfileForm
            email={email}
            address={address}
            phoneNumber={phoneNumber}
            name={name}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
