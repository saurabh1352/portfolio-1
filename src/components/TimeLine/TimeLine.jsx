import React from "react";
import {Timeline} from "@mui/lab";
import {TimelineItem} from "@mui/lab";
import {TimelineSeparator} from "@mui/lab";
import {TimelineConnector} from "@mui/lab";
import {TimelineContent} from "@mui/lab";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {TimelineDot} from "@mui/lab";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timeline = [] }) => {

  return (
    <div>
      
      <Timeline position="alternate">
        {timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.white"
            >
            3/27/22
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Title</Typography>
              <Typography>discription</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
