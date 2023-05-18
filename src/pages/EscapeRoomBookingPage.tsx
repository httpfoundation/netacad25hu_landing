import {useEscapeRoomBookings} from "../hooks/useEscapeRoomBookings";
import {Alert, Container, Grid, LinearProgress, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import {BookingSlotList} from "../components/BookingSlotList";
import {useMe} from "../hooks/useMe";
import {useRegId} from "../hooks/useRegId";
import {LoadingSkeleton} from "../components/LoadingSkeleton";
import {useBookingMutation} from "../hooks/useBookingMutation";
import {BookingInfo} from "../components/BookingInfo";

export const EscapeRoomBookingPage = () => {
    const {data: bookings, status, error} = useEscapeRoomBookings();
    const regId = useRegId();
    const registration = useMe(regId);
    const updateBooking = useBookingMutation(registration?.dato_token??'');
    const [loading, setLoading] = useState(false);

    if(!regId){
        return <h1>Az url-ben szerepelnie kell a regisztrációs tokennek</h1>
    }

    async function handleMemberChange(bookingId: number, slotIndex: number) {
        setLoading(true)
        const userId = registration?.id?.toString();
        const existing = bookings?.find(booking => {
            return booking.members.some(member => member?.id.toString() === userId);
        })
        if(existing){
            await updateBooking(existing.id, existing.members.map(m => m?.id.toString() === userId ? null : m?.id))
        }
        // Check if the user wants to cancel the reservation (clicked on his own slot)
        if(existing && existing.members.findIndex(m => m?.id.toString() === userId) === slotIndex && bookingId === existing.id){
            setLoading(false)
            return;
        }

        const booking = bookings?.find(b => b.id === bookingId);
        await updateBooking(bookingId, booking?.members.map((member, slot) => {
            if(member && member.id.toString() !== userId) return member.id;
            return slot === slotIndex ? userId : null;
        }) ?? [])
        setLoading(false)
    }

    return <div>
        <Container maxWidth="sm" sx={{py: 6}}>
            <Typography variant="h4" fontWeight="bold">Szabadulószoba foglalás</Typography>
            <Typography variant="body1">Leírás a szabadulószoba foglaláshoz. Lorem impsum...</Typography>
            <Stack mt={3} gap={2}>
                <Grid spacing={2} alignItems="center" container>
                    <Grid fontWeight="bold" item xs={3}>Dátum</Grid>
                    <Grid fontWeight="bold" textAlign="center" item xs={4}>A csapat</Grid>
                    <Grid item xs={1}></Grid>
                    <Grid fontWeight="bold" textAlign="center" item xs={4}>B csapat</Grid>
                </Grid>
                <LinearProgress sx={{visibility: loading ? "visible" : "hidden"}} />
                {status === "connecting" && <LoadingSkeleton /> }
                {error && <Alert variant="filled" color="error">Hiba történt. Próbáld újratölteni az oldalt.</Alert> }
                {
                    bookings?.map(booking => <Grid spacing={2} alignItems="center" container key={booking.id}>
                        <Grid item xs={3} textAlign="left">
                            {new Date(booking.startingTime).toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"})}
                            -
                            {new Date(new Date(booking.startingTime).setMinutes(45)).toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"})}
                        </Grid>
                        <BookingSlotList onSelect={index => handleMemberChange(booking.id, index)} userId={registration?.id??0} members={booking.members.slice(0, 4)}/>
                        <Grid item xs={1} textAlign="left"/>
                        <BookingSlotList onSelect={index => handleMemberChange(booking.id, index+4)} userId={registration?.id??0} members={booking.members.slice(4, 8)}/>
                    </Grid>)
                }
                <BookingInfo />
            </Stack>
        </Container>
    </div>

}