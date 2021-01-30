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
    maxWidth: 800,
    margin: `${theme.spacing(0)}px auto`,
    padding: theme.spacing(3),
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
              <div className="paper">
                <div className="aboutpic">Praise</div>

                <div className="blackglass">
                  <div className="text">Praise Ministry</div>
                  <div className="leaders">
                    Led by Charles Lim, Joohee Yang, Christian Ro
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Provide
                      sandwiches, conversation, and prayer for the homeless
                      people in downtown Charlottesville
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To share the love of
                      God to those in the area that God has called us to be in
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a>
                      10:30am on Saturdays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why Join:</a>
                      To glorify God, to obey His commandment to love God and
                      love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a>
                      Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="aboutpic">Greeters</div>

                <div className="blackglass">
                  <div className="text">Homeless Outreach Ministry</div>
                  <div className="leaders">
                    Led by Jennifer Cheung & Philip Song
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Provide
                      sandwiches, conversation, and prayer for the homeless
                      people in downtown Charlottesville
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To share the love of
                      God to those in the area that God has called us to be in
                      When we meet: 10:30am on Saturdays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a>
                      To glorify God, to obey His commandment to love God and
                      love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a>
                      Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="aboutpic">Bulletins</div>

                <div className="blackglass">
                  <div className="text">Homeless Outreach Ministry</div>
                  <div className="leaders">
                    Led by Jennifer Cheung & Philip Song
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Provide
                      sandwiches, conversation, and prayer for the homeless
                      people in downtown Charlottesville
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To share the love of
                      God to those in the area that God has called us to be in
                      When we meet: 10:30am on Saturdays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a>
                      To glorify God, to obey His commandment to love God and
                      love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a>
                      Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="aboutpic">Arise</div>

                <div className="blackglass">
                  <div className="text">Homeless Outreach Ministry</div>
                  <div className="leaders">
                    Led by Jennifer Cheung & Philip Song
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Provide
                      sandwiches, conversation, and prayer for the homeless
                      people in downtown Charlottesville
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To share the love of
                      God to those in the area that God has called us to be in
                      When we meet: 10:30am on Saturdays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a>
                      To glorify God, to obey His commandment to love God and
                      love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a>
                      Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="aboutpic">Prayer</div>

                <div className="blackglass">
                  <div className="text">Homeless Outreach Ministry</div>
                  <div className="leaders">
                    Led by Jennifer Cheung & Philip Song
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Provide
                      sandwiches, conversation, and prayer for the homeless
                      people in downtown Charlottesville
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To share the love of
                      God to those in the area that God has called us to be in
                      When we meet: 10:30am on Saturdays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a>
                      To glorify God, to obey His commandment to love God and
                      love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a>
                      Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="aboutpic">Creative Arts (CAM)</div>

                <div className="blackglass">
                  <div className="text">Homeless Outreach Ministry</div>
                  <div className="leaders">
                    Led by Jennifer Cheung & Philip Song
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Provide
                      sandwiches, conversation, and prayer for the homeless
                      people in downtown Charlottesville
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To share the love of
                      God to those in the area that God has called us to be in
                      When we meet: 10:30am on Saturdays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a>
                      To glorify God, to obey His commandment to love God and
                      love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a>
                      Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="aboutpic">Multimedia (MMM)</div>

                <div className="blackglass">
                  <div className="text">Homeless Outreach Ministry</div>
                  <div className="leaders">
                    Led by Jennifer Cheung & Philip Song
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Provide
                      sandwiches, conversation, and prayer for the homeless
                      people in downtown Charlottesville
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To share the love of
                      God to those in the area that God has called us to be in
                      When we meet: 10:30am on Saturdays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a>
                      To glorify God, to obey His commandment to love God and
                      love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a>
                      Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                    </div>
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
            <div className="paper">
              <div className="aboutpic">Text-A-Toasty</div>

              <div className="blackglass">
                <div className="text">Homeless Outreach Ministry</div>
                <div className="leaders">
                  Led by Jennifer Cheung & Philip Song
                </div>
                <div className="snippet">
                  <div className="comment">
                    <a className="underliner">What we do:</a> Provide
                    sandwiches, conversation, and prayer for the homeless people
                    in downtown Charlottesville
                  </div>
                  <div className="comment">
                    <a className="underliner">Vision:</a> To share the love of
                    God to those in the area that God has called us to be in
                    When we meet: 10:30am on Saturdays
                  </div>
                  <div className="comment">
                    <a className="underliner">Why join:</a>
                    To glorify God, to obey His commandment to love God and love
                    others
                  </div>
                  <div className="comment">
                    <a className="underliner">Contact info:</a>
                    Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
            <div className="paper">
              <div className="aboutpic">Live Love</div>

              <div className="blackglass">
                <div className="text">Homeless Outreach Ministry</div>
                <div className="leaders">
                  Led by Jennifer Cheung & Philip Song
                </div>
                <div className="snippet">
                  <div className="comment">
                    <a className="underliner">What we do:</a> Provide
                    sandwiches, conversation, and prayer for the homeless people
                    in downtown Charlottesville
                  </div>
                  <div className="comment">
                    <a className="underliner">Vision:</a> To share the love of
                    God to those in the area that God has called us to be in
                    When we meet: 10:30am on Saturdays
                  </div>
                  <div className="comment">
                    <a className="underliner">Why join:</a>
                    To glorify God, to obey His commandment to love God and love
                    others
                  </div>
                  <div className="comment">
                    <a className="underliner">Contact info:</a>
                    Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
            <div className="paper">
              <div className="aboutpic">Veritas</div>

              <div className="blackglass">
                <div className="text">Homeless Outreach Ministry</div>
                <div className="leaders">
                  Led by Jennifer Cheung & Philip Song
                </div>
                <div className="snippet">
                  <div className="comment">
                    <a className="underliner">What we do:</a> Provide
                    sandwiches, conversation, and prayer for the homeless people
                    in downtown Charlottesville
                  </div>
                  <div className="comment">
                    <a className="underliner">Vision:</a> To share the love of
                    God to those in the area that God has called us to be in
                    When we meet: 10:30am on Saturdays
                  </div>
                  <div className="comment">
                    <a className="underliner">Why join:</a>
                    To glorify God, to obey His commandment to love God and love
                    others
                  </div>
                  <div className="comment">
                    <a className="underliner">Contact info:</a>
                    Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
            <div className="paper">
              <div className="aboutpic">KCC</div>

              <div className="blackglass">
                <div className="text">Homeless Outreach Ministry</div>
                <div className="leaders">
                  Led by Jennifer Cheung & Philip Song
                </div>
                <div className="snippet">
                  <div className="comment">
                    <a className="underliner">What we do:</a> Provide
                    sandwiches, conversation, and prayer for the homeless people
                    in downtown Charlottesville
                  </div>
                  <div className="comment">
                    <a className="underliner">Vision:</a> To share the love of
                    God to those in the area that God has called us to be in
                    When we meet: 10:30am on Saturdays
                  </div>
                  <div className="comment">
                    <a className="underliner">Why join:</a>
                    To glorify God, to obey His commandment to love God and love
                    others
                  </div>
                  <div className="comment">
                    <a className="underliner">Contact info:</a>
                    Philip Song (ps8nu), Jennifer Cheung (jjc4dq)
                  </div>
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
