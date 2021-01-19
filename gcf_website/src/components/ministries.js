import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import "./ministries.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0),
  },
  paper: {
    maxWidth: 475,
    margin: `${theme.spacing(0)}px auto`,
    padding: theme.spacing(0),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function Ministries() {
  const classes = useStyles();

  return (
    <div>
      <div className="banner ministries">
        <p className="ministries_title">Ministries</p>
      </div>
      <div class="row">
        <div class="column">
          <p>Inreach</p>
          <div className={classes.root}>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="post ministry_sample2">
                <div className="ministry_sample2 height" />
                <div class="post-s">
                  <div className="text">Live Love</div>
                  <div className="type">Homeless Outreach Ministry</div>
                  <p className="snippet">
                    What we do: we host events where UVA students can send in
                    any questions about God, faith, or Christianity. We receive
                    the questions and discuss them amongst ourselves in an
                    apartment, referring to the Bible as our source of truth,
                    and then go in teams to deliver a grilled cheese sandwich
                    and an answer to the student who asked the question.
                    <br />
                    Purpose / Vision: We are an outreach ministry that seeks to
                    spread God’s love and make His name known through sharing
                    food and having discussions with the greater UVA community!
                    <br />
                    When we meet: meeting tri-weekly on thursdays at 9:15PM -
                    12AM (can leave before that too)
                    <br />
                    Why someone should join: people should join to fulfill our
                    calling to spread His word and His love, and to have an
                    opportunity to have fruitful discussions and conversations
                    with GCF/Cru people and with the UVA community.
                    <br />
                    Contact info: Phil Choi (psc3yh), Carmen Mew &nbsp(cem6dp)
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="post ministry_sample">
                <div className="ministry_sample height" />
                <div class="post-s">
                  <div className="text">Live Love</div>
                  <div className="type">Homeless Outreach Ministry</div>
                  <div className="leaders">
                    Led by Jennifer Cheung & Philip Song
                  </div>
                  <div className="snippet">
                    Short description of ministry goal, activity and schedule
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </div>
      <div class="column">
        <p>Outreach</p>
        <div className={classes.root}>
          <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
            <div className="post ministry_sample">
              <div className="ministry_sample height" />
              <div class="post-s">
                <div className="text">Live Love</div>
                <div className="type">Homeless Outreach Ministry</div>
                <div className="leaders">
                  Led by Jennifer Cheung & Philip Song
                </div>
                <div className="snippet">
                  Short description of ministry goal, activity and schedule
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
            <div className="post ministry_sample2">
              <div className="ministry_sample2 height" />
              <div class="post-s">
                <div className="text">Live Love</div>
                <div className="type">Homeless Outreach Ministry</div>
                <div className="leaders">
                  Led by Jennifer Cheung & Philip Song
                </div>
                <div className="snippet">
                  Short description of ministry goal, activity and schedule
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Ministries;
