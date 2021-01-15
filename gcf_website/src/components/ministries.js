import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import "./ministries.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0),
  },
  paper: {
    maxWidth: 800,
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
      {/* <p className="ministries_title">Ministries</p> */}
      <div class="row">
        <div class="column"><p>Inreach</p>
          <div className={classes.root}>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="post me">
                <div className="me height"/>
                <div class="post-s">
                  <div className="text">Live Love</div>
                  <div className="text">Homeless Outreach Ministry</div>
                    <div className="text">Led By Jennifer Cheung and Philip Song</div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="post me">
                <div className="me height"/>
                <div class="post-s">
                  <div className="text">Live Love</div>
                  <div className="text">Homeless Outreach Ministry</div>
                    <div className="text">Led By Jennifer Cheung and Philip Song</div>
                </div>
              </div>
            </Grid>
          </div>
        </div>
        </div>
        <div class="column"><p>Outreach</p>
        <div className={classes.root}>
          <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
            <div className="post me">
              <div className="me height"/>
              <div class="post-s">
                <div className="text">Live Love</div>
                <div className="text">Homeless Outreach Ministry</div>
                  <div className="text">Led By Jennifer Cheung and Philip Song</div>
              </div>
            </div>
          </Grid>
          <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
            <div className="post me">
              <div className="me height"/>
              <div class="post-s">
                <div className="text">Live Love</div>
                <div className="text">Homeless Outreach Ministry</div>
                  <div className="text">Led By Jennifer Cheung and Philip Song</div>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Ministries;
