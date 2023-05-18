import {EscapeRoomMember} from "../hooks/useEscapeRoomBookings";
import {Avatar, Tooltip} from "@mui/material";
import React from "react";

const getBookingSlotColor = (member?: EscapeRoomMember, userId?: number) => {
    if (member?.id.toString() === userId?.toString()){
        return "primary.main"
    }
    if (member) {
        return "error.light"
    }
    return "primary.dark"
}

interface BookingSlotProps {
    member?: EscapeRoomMember;
    userId: number;

    onClick(): void;
}

export const BookingSlot = ({member, userId, onClick}: BookingSlotProps) => {
    return <Tooltip onClick={onClick} title={member ? member.name : "Szabad hely"}>
        <Avatar variant="rounded" sx={{backgroundColor: getBookingSlotColor(member, userId), cursor: (member && member.id.toString() !== userId.toString()) ? "not-allowed" : "pointer"}}/>
    </Tooltip>
}