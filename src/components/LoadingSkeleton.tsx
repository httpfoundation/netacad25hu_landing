import {Skeleton, Stack} from "@mui/material";
import React from "react";

export const LoadingSkeleton = () => {
    const COUNT = 6;
    return <Stack gap={2}>
        {
            Array.from({length: COUNT}).map((_, idx) => <Skeleton key={idx} variant="rounded" height={46} width="100%"/>)
        }
    </Stack>
}