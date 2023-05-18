import {EscapeRoomMember} from "../hooks/useEscapeRoomBookings";
import {Grid} from "@mui/material";
import {BookingSlot} from "./BookingSlot";
import React from "react";

interface BookingSlotListProps {
    members: EscapeRoomMember[];
    userId: number;

    onSelect(index: number): void
}

export const BookingSlotList = ({members, userId, onSelect}: BookingSlotListProps) => {
    function handleMemberChange(index: number) {
        onSelect(index)
    }

    return <>
        {
            members.map((member, index) => <Grid item xs={1} key={index}>
                <BookingSlot userId={userId} member={member} onClick={() => (!member || member.id.toString()===userId.toString()) && handleMemberChange(index)}/>
            </Grid>)
        }
    </>
}