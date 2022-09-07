import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import "./ministries.css";

import sg from "../images/dsun_small_group.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0),
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(0)}px auto`,
    padding: theme.spacing(5),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function Ministries() {
  const classes = useStyles();

  return (
    <div>
      <div className="banner ministries">
        <Fade duration="1000">
          <p className="ministries_title">Ministries</p>
        </Fade>
      </div>
      <div className="notice">
        NOTE: With the recent relaxation of CDC, Virginia, and UVA guidelines, all meetings and events are
        IN PERSON, with masks strongly encouraged while indoors until further notice.
      </div>
      <div class="column">
        <div className="ministries_subtitle">
          Small Groups</div>
        <Fade left duration="1000">
          <div className="subtitle_container">
            <div className="subtitle_underliner"></div>
          </div>
        </Fade>
        <Fade cascade left duration="1000">
          <div className={classes.root}>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="smallGroup">
                <p className="sgText">
                  Small Groups are a vital part of Grace Christian Fellowship.
                  Small Groups meet once a week where members come together for
                  a time of bible study, mutual encouragement, and closer
                  fellowship.
                </p>
                <img src={sg} alt="small group" className="sgImage" />
              </div>
            </Grid>
          </div>
        </Fade>
      </div>
      <div class="column2">
        <div className="ministries_subtitle">Inreach</div>
        <Fade left duration="1000">
          <div className="subtitle_container">
            <div className="subtitle_underliner"></div>
          </div>
        </Fade>
        <Fade cascade left duration="1000">
          <div className={classes.root}>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container praise_pic">Praise</div>

                <div className="blackglass">
                  <div className="text">Praise Team</div>
                  <div className="leaders">
                    Led by Yujin Oh, Nathan Park, Joseph Lee
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Praise God through worship and praise and
                      serve the body of GCF
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> The purpose of
                      praise team is to use the gifts and talents God has given
                      us to serve and love the body of Christ through our praise
                      and worship. We seek to view Praise Team as a community to
                      encourage everyday personal and corporate worship and
                      serving the body in order to prepare ourselves to serve in
                      other ways. We also want to emphasize that leading the
                      congregation begins with worshipping God ourselves in that
                      moment and that a Spirit-filled heart can do much more.
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> We meet 2 hours before
                      Friday Large Groups to pray and prepare our hearts as well
                      as practice for the set that day. And we also have weekly
                      meetings on Saturday mornings
                    </div>
                    <div className="comment">
                      <a className="underliner">Why Join:</a> Join if you want
                      to glorify God with music and praise and learn what our
                      worship means and how it should be Christ-centered and
                      Christ-filled.
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Yujin Oh
                      (yo9ksx), Nathan Park (ngp7ce), Joseph Lee (jyl9wbp)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container greeters_pic">Greeters</div>

                <div className="blackglass">
                  <div className="text">Greeters Ministry</div>
                  <div className="leaders">Led by Joseph Kang</div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> We greet people
                      before Friday Large Group by opening doors, greeting, and 
                      having conversations with people.
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To welcome and greet
                      people into the body of GCF by loving them with the love
                      God first showed us.
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> We meet 30 min before
                      LG, usually 6:30-45pm on Fridays to pray and start 
                      greeting before people get there
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> People should join
                      Greeters Ministry because it's a way to challenge yourself
                      to step outside of your comfort zone and live out what it
                      means to love the body of GCF as Christ loves us. It's
                      also a good way to get to know people you otherwise
                      wouldn't talk to and foster a greater sense of community
                      within GCF
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Joseph Kang
                      (jdk7ham)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            {/* <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container bulletins_pic">Bulletins</div>

                <div className="blackglass">
                  <div className="text">Bulletins Ministry</div>
                  <div className="leaders">
                    Led by James Yubin Lim & Jisu Kim
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> We edit, print,
                      cut/fold, and deliver the bulletins every week for Sunday
                      Chapel
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> We hope to provide
                      nicely organized and informative bulletins every week so
                      that people can see an overview of what is going on in
                      chapel and GCF as a fellowship and know who to contact for
                      further information.
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> We meet Sunday
                      mornings at around 11:45 to go print bulletins at the
                      Newcomb Info desk. Rides are provided! (Editors also edit
                      from home so you can do it at any time that is convenient)
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> If you are looking
                      for a way to serve behind the scenes or wish to simply get
                      plugged into a ministry Bulletins Ministry is for you!
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Jisu Kim
                      (jk5nc), James Lim (yl2vv)
                    </div>
                  </div>
                </div>
              </div>
            </Grid> */}
            {/* <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container arise_pic">Arise</div>

                <div className="blackglass">
                  <div className="text">Arise Ministry</div>
                  <div className="leaders">Led by Haley Chae & Shua Jeong</div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> We praise and
                      honor God with our body!
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To fully experience
                      joy and freedom in Christ, to be more rooted in His words,
                      to reach out to the lost
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> Saturday 9pm
                      (tentative)
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> If you want to try
                      to praise God in a different way and also want to know
                      what it means to worship
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Shua
                      Jeong(sj6xa), Haley Chae (hjc2cc)
                    </div>
                  </div>
                </div>
              </div>
            </Grid> */}
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container prayer_pic">Prayer</div>

                <div className="blackglass">
                  <div className="text">Prayer Ministry</div>
                  <div className="leaders">Led by Kaylin Yang & Ashley Woo</div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> We pray and
                      intercede for ourselves, each other, GCF, for those
                      serving beyond where our eyes can see, the church of
                      Christ, those who have yet to know Him, and for His
                      Kingdom to come.
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> The purpose of this
                      ministry is to allow a venue where individuals can come
                      and be held accountable in prayer in whatever capacity
                      they desire, but also to have a consistent group of
                      members praying for GCF. The vision is that God would use
                      this ministry to foster faithful men and women of prayer
                      who will also pray consistently in their personal time and
                      in all aspects of their lives. And that this heart of
                      prayer would be contagious and spread throughout all of
                      GCF.
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> 30 minutes before
                      Large Group on Friday and on Sunday afternoons. Occasionally,
                      we will meet outside of these times to also prepare for
                      praise and prayer nights. We also go to retreat centers
                      early (the day of departure) to pray at the venues.
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> Prayer itself is
                      important because God tells us to pray in the Bible. It
                      says in Scripture to pray without ceasing, and not just
                      for yourself, but also to pray for one another-- for
                      leaders, for the unsaved, for the persecuted church, and
                      for fellow believers. It's also just an amazing
                      opportunity and privilege to commune with our heavenly
                      Father. Prayer ministry is where we can practice praying
                      on a deeper level, share requests, and pray in one voice
                      and mind. We encourage you to join to enrich your own
                      prayer life and to grow your heart for God's people
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Kaylin Yang
                      (ky9pej), Ashley Woo (hja9dn)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container cam_pic">Canvases</div>

                <div className="blackglass">
                  <div className="text">Canvases Ministry</div>
                  <div className="leaders">
                    Led by Anna Lee
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> CAM is split into
                      three main subgroups of a graphic design team, video making/
                      editing team, and a photography team. Our primary task is to
                      help spread the word of weekly GCF events/outreach, generate
                      amazing creative content, and capture moments to share with others.
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> Our goal is to bring more 
                      people to Christ and His community by using the creative gifts 
                      that God has given us. As much as we want to bring new community,
                      we hope that CAM is also a community for you to be surrounded by
                      others with similar interests. We consider all ideas no matter how
                      impossible or improbable they may seem in the moment.
                      
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> Tentatively planning to meet
                      weekly or bi-weekly depending on need.
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> Do you have a passion for 
                      creating? Do you enjoy making videos, graphic design, taking pictures
                      or just using your talents to bring to life the dreams of others? CAM 
                      is the ministry for you! As boundless as God's love for us is, the
                      possibilities are endless with CAM. Our style is ever-changing with
                      the times and people, but our identity in Christ and sharing His love
                      through the innovative & artistic gifts He has given us is firm. WE
                      WANT YOU!
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Anna Lee
                      (ael8mx)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container mmm_pic">Multimedia (MMM)</div>

                <div className="blackglass">
                  <div className="text">Multimedia Ministry</div>
                  <div className="leaders">
                    Led by Austin Huang & Victoria Ok
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> We present slides
                      during our weekly Friday Large Groups (announcements, guest
                      speakers, etc.) as well as help lead the congregation in 
                      praise with lyric slides. We will also be managing and maintaining
                      the GCF website.
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> This year, we want to expand
                      our ministry to be the encompassing technology ministry within the
                      fellowship. We would like to be a linking bridge for the fellowship
                      by supporting other ministries (and the body as a whole) technologically.
                      Ultimately, it is a joy to see the parts of Christ's body working in 
                      union. No matter if the ways in which we serve are "easy" or "hard", or
                      if our members are many or few, God can still do so much in any situation.
                      We want to be a ministry that glorifies God and loves on the body by
                      leading the congregation from the back-end.
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> We have weekly planning meetings 
                      on Saturdays and also meet prior to Friday Large Groups at around 5:30-6:00pm
                      to set up.
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> Join MMM if you would like to
                      actively serve and glorify God while managing the behind-the-scenes
                      work.
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Austin Huang
                      (alh2ggp), Victoria Ok (vyo7tv)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </Fade>
      </div>
      <div class="column">
        <div className="ministries_subtitle">Outreach</div>
        <Fade left duration="1000">
          <div className="subtitle_container">
            <div className="subtitle_underliner"></div>
          </div>
        </Fade>
        <Fade cascade left duration="1000">
          <div className={classes.root}>
            {/*<Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container tat_pic">Text-A-Toasty</div>

                <div className="blackglass">
                  <div className="text">Text-A-Toasty Ministry</div>
                  <div className="leaders">Led by Carmen Mew & Phil Choi</div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> We host events
                      where UVA students can send in any questions about God,
                      faith, or Christianity. We receive the questions and
                      discuss them amongst ourselves in an apartment, referring
                      to the Bible as our source of truth, and then go in teams
                      to deliver a grilled cheese sandwich and an answer to the
                      student who asked the question.
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> We are an outreach
                      ministry that seeks to spread God’s love and make His name
                      known through sharing food and having discussions with the
                      greater UVA community!
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> Meeting tri-weekly on
                      thursdays at 9:15PM - 12AM (can leave before that too)
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> People should join
                      to fulfill our calling to spread His word and His love,
                      and to have an opportunity to have fruitful discussions
                      and conversations with GCF/Cru people and with the UVA
                      community.
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Carmen Mew
                      (cem6dp), Phil Choi (psc3yh)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>*/}
            {/*<Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container livelove_pic">BcHeFirst</div>

                <div className="blackglass">
                  <div className="text">BcHeFirst Ministry</div>
                  <div className="leaders">
                    Led by Joseph Lee
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
                      <a className="underliner">When:</a> We meet at 10:30am on 
                      Saturdays to go downtown.
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> To glorify God, to
                      obey His commandment to love God and love others
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Joseph 
                      Lee (jl5ag)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container veritas_pic">Veritas</div>

                <div className="blackglass">
                  <div className="text">Veritas Ministry</div>
                  <div className="leaders">
                    Led by James Yubin Lim & Sung Joon Park & Sung-Ki Lee
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> Evangelism
                      ministry
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> We equip our members
                      to go out and share the gospel with UVA students
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> We meet at 4pm on
                      Fridays
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> You should join if
                      you want to get a better understanding of the gospel,
                      share the gospel, and be challenged to still love God and
                      his people even when it's hard
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> James Lim
                      (yl2vv), Sung Joon Park (sp3bk), Sung-Ki Lee (sl7ta)
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs wrap="nowrap" spacing={2} className={classes.paper}>
              <div className="paper">
                <div className="pic_container kcc_pic">KCC</div>

                <div className="blackglass">
                  <div className="text">KCC Ministry</div>
                  <div className="leaders">
                    Led by Bryan Kim (Children) & Hannah Lee (Youth)
                  </div>
                  <div className="snippet">
                    <div className="comment">
                      <a className="underliner">What we do:</a> We go to the
                      local Korean Community Church and serve in their
                      children/youth ministries. For children (pre-K to 5th
                      grade) we help out with body worship and crafts that
                      correlate with the sermon for that week. For youth
                      (6th-12th grade), we serve as Bible study leaders for the
                      sermon that the pastor informs us about.
                    </div>
                    <div className="comment">
                      <a className="underliner">Vision:</a> To serve the local
                      community through the children/youth ministries, and help
                      teach children the word of God
                    </div>
                    <div className="comment">
                      <a className="underliner">When:</a> Meetings are either at
                      1910 Apt 22 or Apt 23 @ 10:30am on Saturdays, and we serve
                      at KCC’s Sunday service in the mornings before Chapel
                    </div>
                    <div className="comment">
                      <a className="underliner">Why join:</a> People should join
                      in hopes to branch out to the local Charlottesville
                      community and for them to feed the children the Word of
                      God! Just the simple act of serving in this way could help
                      children grow into beautiful men/women of God and being
                      with them along the process is very rewarding!
                    </div>
                    <div className="comment">
                      <a className="underliner">Contact info:</a> Bryan Kim
                      (bjk3yf), Hannah Lee (hel3sb)
                    </div>
                  </div>
                </div>
              </div>
                      </Grid>*/}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Ministries;
