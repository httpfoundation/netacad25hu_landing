import {Box, Stack, Typography} from "@mui/material";
import React from "react";

export const BookingInfo = () => {
    return <Stack direction="row" gap={2} alignItems="center">
        <Stack direction="row" alignItems="center" gap={0.5}>
            <Box sx={{width: 16, height: 16, borderRadius: 1, backgroundColor: "primary.dark"}}></Box>
            <Typography variant="caption">
                Szabad hely
            </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={0.5}>
            <Box sx={{width: 16, height: 16, borderRadius: 1, backgroundColor: "primary.main"}}></Box>
            <Typography variant="caption">
                Te helyed
            </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={0.5}>
            <Box sx={{width: 16, height: 16, borderRadius: 1, backgroundColor: "error.light"}}></Box>
            <Typography variant="caption">
                Foglalt hely
            </Typography>
        </Stack>
    </Stack>
}