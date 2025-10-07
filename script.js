const playlistSongs = document.getElementById('playlist-songs')
const playButton = document.getElementById('play')
const pauseButton  = document.getElementById('pause')
const nextButton  = document.getElementById('next')
const previousButton  = document.getElementById('previous')
const shuffleButton  = document.getElementById('shuffle')
const loopButton  = document.getElementById('loop')

const audioNegative  = document.querySelector('.audio-adjuster-negative')
const audioPositive  = document.querySelector('.audio-adjuster-positive')
const allSongs = [
    {
        id: 6,
        title: "Hymn 6 All Ye That Fear Jehovah's Name",
        artist: "TRBCC Hymns",
        duration: "3:36",
        src: "/hymns/Hymn 6 All Ye That Fear Jehovah_s Name.mp3",
        content: `
                </br>1 All ye that fear Jehovah’s Name,
               </br> His glory tell, His praise proclaim;
               </br> Ye children of His chosen race,
               </br> Stand ye in awe before His face.
               </br>
               </br> 2 The suffering one He has not spurned
               </br> Stand ye in awe before His face.
               </br> Who to Him for support has turned;
               </br> From him He has not hid His face,
               </br> But answered his request in grace.
               </br>
               </br> 3 O LORD, Thy goodness makes me raise
               </br> Amid Thy people songs of praise;
               </br> Before all them that fear Thee, now
               </br> I worship Thee and pay my vow.
               </br>
               </br> 4 For all the meek You will provide,
               </br> They shall be fed and satisfied;
               </br> All they that seek the LORD shall live
               </br> And never-ending praises give.
               </br>
               </br> 5 The ends of all the earth shall hear
               </br> And turn unto the Lord in fear;
               </br> All kindreds of the earth shall own
               </br> And worship Him as God alone.
               </br>
               </br> 6 For His the kingdom, His of right,
               </br> He rules the nations by His might;
               </br> All earth to Him her homage brings,
               </br> The LORD of lords, the King of kings.
               </br>
               </br> 7 Both rich and poor, both bond and free,
               </br> Shall worship Him with bended knee,
               </br> And children’s children shall proclaim
               </br> The glorious honor of His name.
               </br>
               </br> 8 The LORD’s unfailing righteousness
               </br> All generations shall confess,
               </br> From age to age shall men be taught
               </br> What wondrous works the Lord has wrought.</p> <p></p> `
    },
     {
        id: 82,
        title: "Hymn 82 Unto The Hills Around Do I Lift Up",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 82 Unto The Hills Around Do I Lift Up.mp3",
        content: `
                </br>
                    Unto the hills around do I lift up
                     </br>My longing eyes;
                    </br> O whence for me shall my salvation come,
                    </br> From whence arise?
                    </br> From God the Lord doth come my certain aid,
                    </br> From God the Lord, who heav’n and earth hath made.
                    </br> 2
                    </br> </br> He will not suffer that thy foot be moved:
                    </br> Safe shalt thou be.
                    </br> No careless slumber shall His eyelids close,
                    </br> Who keepeth thee.
                    </br> Behold, He sleepeth not, He slumbereth ne’er,
                    </br> Who keepeth Israel in His holy care.
                    </br> 3
                    </br> Jehovah is Himself thy keeper true,
                    </br> Thy changeless shade;
                    </br> Jehovah thy defense on thy right hand
                     </br>Himself hath made.
                     </br>And thee no sun by day shall ever smite;
                    </br> No moon shall harm thee in the silent night.
                    </br> 4
                    </br> From every evil shall He keep thy soul,
                     </br>From every sin;
                    </br> Jehovah shall preserve thy going out,
                     </br>Thy coming in.
                     </br>Above thee, watching, He whom we adore
                     </br>Shall keep thee henceforth, yea, for evermore. `
    },
     {
        id: 13,
        title: "Hymn 13 O Worship The King",
        artist: "TRBCC Hymns",
        duration: "3:21",
        src: "/hymns/Hymn 13 O Worship The King.mp3",
        content: `
                </br> 1 O worship the King all-glorious above,
                </br>O gratefully sing his power and his love:
                </br>our shield and defender, the Ancient of Days,
                </br>pavilioned in splendor and girded with praise.
                </br>
                </br>2 O tell of his might and sing of his grace,
                </br>whose robe is the light, whose canopy space.
                </br>His chariots of wrath the deep thunderclouds form,
                </br>and dark is his path on the wings of the storm.
                </br>
                </br>3 Your bountiful care, what tongue can recite?
                </br>It breathes in the air, it shines in the light;
                </br>it streams from the hills, it descends to the plain,
                </br>and sweetly distills in the dew and the rain.
                </br>
                </br>4 Frail children of dust, and feeble as frail,
                </br>in you do we trust, nor find you to fail.
                </br>Your mercies, how tender, how firm to the end,
                </br>our Maker, Defender, Redeemer, and Friend!
                </br>
                </br>5 O measureless Might, unchangeable Love,
                </br>whom angels delight to worship above!
                </br>Your ransomed creation, with glory ablaze,
                </br>in true adoration shall sing to your praise!
                </br>Psalter Hymnal, (Gray)`
    },
     {
        id: 23,
        title: "Hymn 23 O Light That Knew No Dawn",
        artist: "TRBCC Hymns",
        duration: "3:26",
        src: "/hymns/Hymn 23 O Light That Knew No Dawn.mp3",
        content: `
                </br> 1 O Light that knew no dawn,
              </br>  that shines to endless day,
              </br>  all things in earth and heav'n
              </br>  are lustered by thy ray;
              </br>  no eye can to thy throne ascend,
              </br>  nor mind thy brightness comprehend.
              </br>

              </br>  2 Thy grace, O Father, give,
              </br>  that I may serve in fear;
              </br>  above all boons, I pray,
              </br>  grant me thy voice to hear;
              </br>  from sin thy child in mercy free,
              </br>  and let me dwell in light with thee:
              </br>

              </br>  3 That, cleansed from stain of sin,
              </br>  I may meet homage give,
              </br>  and, pure in heart, behold
              </br>  thy beauty while I live;
              </br>  clean hands in holy worship raise,
              </br>  and thee, O Christ my Savior, praise.

              </br>  4 In supplication meek
              </br>  to thee I bend the knee;
              </br>  O Christ, when thou shalt come,
              </br>  in love remember me,
              </br>  and in thy kingdom, by thy grace,
              </br>  grant me a humble servant's place.
              </br>
              </br>  5 Thy grace, O Father, give,
              </br>  I humbly thee implore;
              </br>  and let thy mercy bless
              </br>  thy servant more and more.
              </br>  All grace and glory be to thee,
              </br>  from age to age eternally.
</br>
              </br>  Source: Trinity Psalter Hymnal #221`
    },
     {
        id: 30,
        title: "Hymn 30 Let Us With A Gladsome Mind",
        artist: "TRBCC Hymns",
        duration: "2:54",
        src: "/hymns/Hymn 30 Let Us With A Gladsome Mind.mp3",
        content: `
                </br> 1 Let us with a gladsome mind
              </br>  praise the Lord, for he is kind:
              </br>  for his mercies shall endure,
              </br>  ever faithful, ever sure.
</br>
              </br>  2 Let us sound his name abroad,
              </br>  for of gods he is the God:
              </br>  for his mercies shall endure,
              </br>  ever faithful, ever sure.
</br>
              </br>  3 He, with all-commanding might,
              </br>  filled the new-made world with light:
              </br>  for his mercies shall endure,
              </br>  ever faithful, ever sure.
</br>
              </br>  4 All things living he doth feed,
              </br>  his full hand supplies their need:
              </br>  for his mercies shall endure,
              </br>  ever faithful, ever sure.
              </br>  
              </br>  5 Let us then with gladsome mind
              </br>  praise the Lord, for he is kind:
              </br>  for his mercies shall endure,
              </br>  ever faithful, ever sure.
</br>
              </br>  Source: Trinity Psalter Hymnal#221`
    } ,
     {
        id: 108,
        title: "Hymn 108 Praise Ye, Praise Ye The Lord (to be changed)",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 108 Praise Ye, Praise Ye The Lord.mp3",
        content: `
                </br>1 Praise ye, praise ye the Lord
             </br>   In yonder heav'nly height;
             </br>   Ye angels, all his hosts,
             </br>   In joyful praise unite;
             </br>   O sun and moon, declare his might,
             </br>   Show forth his praise, ye stars of light.
</br>
             </br>   2 Praise him, ye highest heav'ns,
             </br>   Praise him, ye clouds that roll,
             </br>   Created by his pow'r
             </br>   And under his control,
             </br>   Ye heavens that stand eternally,
             </br>   Established by his firm decree.
</br>
             </br>   3 Ye creatures in the sea
             </br>   And creatures on the earth,
             </br>   Your mighty Maker praise
             </br>   And tell his matchless worth;
             </br>   Praise him, ye stormy winds that blow,
             </br>   Ye fire and hail, ye rain and snow.
</br>
             </br>   3 Ye hills and mountains, praise,
             </br>   Each tree and beast and bird;
             </br>   Ye kings and realms of earth,
             </br>   Now let your praise be heard;
             </br>   By high and low, by young and old,
             </br>   Be all his praise and glory told.
</br>
             </br>   4 By all let God be praised,
             </br>   For he alone is great;
             </br>   Above the earth and heav'n
             </br>   He reigns in glorious state;
             </br>   Praise him, ye saints, who know his grace
             </br>   And ever dwell before his face.
</br>
             </br>   Amen. `
    },
     {
        id: 376,
        title: "Hymn 376 Thou Whose Almighty Word",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 376 Thou Whose Almighty Word.mp3",
        content: `
                </br> Thou, whose almighty word
               </br> Chaos and darkness heard,
               </br> And took their flight,
               </br> Hear us, we humbly pray;
               </br> And, where the gospel's day
               </br> Sheds not its glorious ray,
               </br> Let there be light.
</br>
               </br> Thou, who didst come to bring
               </br> On thy redeeming wing
               </br> Healing and sight,
               </br> Health to the sick in mind,
               </br> Sight to the inly blind,
               </br> O now to all mankind
               </br> Let there be light.
</br>
               </br> Spirit of truth and love,
               </br> Lifegiving, holy Dove,
               </br> Speed forth thy flight;
               </br> Move o'er the waters' face,
               </br> Bearing the lamp of grace
               </br> And in earth's darkest place
               </br> Let there be light.
</br>
               </br> Holy and blessed Three,
               </br> Glorious Trinity,
               </br> Wisdom, Love, Might!
               </br> Boundless as ocean's tide,
               </br> Rolling in fullest pride
               </br> Through the world far and wide
               </br> Let there be light.`
    },
     {
        id: 432,
        title: "Hymn 432 Jesus What A Friend For Sinners",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 432 Jesus What A Friend For Sinners.mp3",
        content: `
                </br> Jesus! what a Friend for sinners!
              </br>  Jesus! Lover of my soul;
              </br>  friends may fail me, foes assail me;
              </br>  He, my Saviour, makes me whole.
              </br>  Hallelujah! what a Savior!
              </br>  Hallelujah! what a Friend!
              </br>  Saving, helping, keeping, loving,
              </br>  He is with me to the end.
</br>
              </br>  Jesus! what a Strength in weakness!
              </br>  Let me hide myself in Him;
              </br>  tempted, tried, and sometimes failing,
              </br>  He, my Strength, my vict’ry wins.
              </br>  Hallelujah! what a Saviour!
              </br>  Hallelujah! what a Friend!
              </br>  Saving, helping, keeping, loving;
              </br>  He is with me to the end.
</br>
              </br>  Jesus! what a Help in sorrow!
              </br>  While the billows o’er me roll,
              </br>  even when my heart is breaking,
              </br>  He, my Comfort, helps my soul.
              </br>  Hallelujah! what a Saviour!
              </br>  Hallelujah! what a Friend!
              </br>  Saving, helping, keeping, loving;
              </br>  He is with me to the end.
</br>
              </br>  Jesus! what a Guide and Keeper!
              </br>  While the tempest still is high,
              </br>  storms about me, night o’ertakes me,
              </br>  He, my Pilot, hears my cry.
              </br>  Hallelujah! what a Saviour!
              </br>  Hallelujah! what a Friend!
              </br>  Saving, helping, keeping, loving;
              </br>  He is with me to the end.
</br>
              </br>  Jesus! I do now receive Him,
              </br>  more than all in Him I find;
              </br>  He hath granted me forgiveness;
              </br>  I am His, and He is mine!
              </br>  Hallelujah! what a Saviour!
              </br>  Hallelujah! what a Friend!
              </br>  Saving, helping, keeping, loving;
              </br>  He is with me to the end.

`
    } ,
     {
        id: 762,
        title: "Hymn 762 Of Mercy And Of Justice (First Tune)",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 762 Of Mercy And Of Justice (First Tune).mp3",
        content: `
                </br>1 Of mercy and of justice
             </br>   My thankful song shall be;
             </br>   O Lord, in joyful praises
             </br>   My song shall rise to Thee.
             </br>   Within my house I purpose
             </br>   to walk in wisdom's way;
             </br>   O Lord, I need Thy presence;
             </br>   How long wilt Thou delay?
</br>
             </br>   2 On what is base and evil
             </br>   I will not set my heart;
             </br>   Transgressor's ways abhorring,
             </br>   With them I take no part.
             </br>   No froward man or evil
             </br>   Shall my companion be;
             </br>   I will not suffer slander
             </br>   Or pride or treachery.
</br>
             </br>   3 The faithful and the upright
             </br>   Shall minister to me;
             </br>   Thy lying and deceitful
             </br>   My favor shall not see.
             </br>   I will in daily judgment
             </br>   All wickedness reward,
             </br>   And cleanse from evil-doers
             </br>   The city of the Lord.
 `
    },
     {
        id: 763,
        title: "Hymn 763 Unto The Lord Life Thankful Voices",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 763 Unto The Lord Life Thankful Voices.mp3",
        content: `
                </br> 
                  </br>  Verse 1
                  </br>  Unto the Lord lift thankful voices,
                  </br>  Come, worship while your soul rejoices;
                  </br>  Make known His doings far and near
                  </br>  That peoples all His Name may fear,
                  </br>  And tell, in many joyful lay,
                  </br>  Of all His wonders day by day.
</br>
                  </br>  Verse 2
                  </br>  In joyful song your hearts uniting,
                  </br>  His works most marvelous reciting,
                  </br>  Now glory in His holy Name;
                  </br>  Let those that seek Him spread His fame,
                  </br>  Incline their hearts to sing His praise,
                  </br>  And unto Him their anthems raise.
</br>
                  </br>  Verse 3
                  </br>  Seek ye Jehovah and His power,
                  </br>  Seek ye His presence every hour.
                  </br>  His works, so marvelous and great,
                  </br>  Remember still, and meditate
                  </br>  Upon the wonders of His hands,
                  </br>  The judgments which His mouth commands.
</br>
                  </br>  Verse 4
                  </br>  Ye seed from Abraham descended,
                  </br>  To whom His favors were extended,
                  </br>  And Jacob's children, whom the Lord
                  </br>  Has chosen, hearken to His word.
                  </br>  He is the Lord, our Judge divine;
                  </br>  In all the earth His glories shine.
</br>
                  </br>  Verse 5
                  </br>  Jehovah's truth will stand forever,
                  </br>  His covenant-bonds He will not sever;
                  </br>  The word of grace which He commands
                  </br>  To thousand generations stands;
                  </br>  The covenant made in days of old
                  </br>  With Abraham He doth uphold.
</br>
                  </br>  Verse 6
                  </br>  The Lord His covenant people planted
                  </br>  In lands of nations which He granted,
                  </br>  That they His statutes might observe,
                  </br>  Nor from His laws might ever swerve.
                  </br>  Let songs of praise to Him ascend,
                  </br>  And hallelujahs without end.`
    } ,
     {

        // with coughing sound
        id: 765,
        title: "Hymn 765 My Heart is Firmly Fixed (to be changed)",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 765 My Heart is Firmly Fixed.mp3",
        content: `
                </br>
             </br>   1 My heart is firmly fixed;
             </br>   to God my song I raise.
             </br>   Awake, O harp, in joyful strains;
             </br>   awake, my soul, to praise.
</br>
             </br>   2 Among the nations, LORD,
             </br>   to you my song will rise.
             </br>   Your faithfulness outshines the heavens,
             </br>   your mercies reach the skies.
</br>
             </br>   3 How great your love, O LORD:
             </br>   we praise your matchless worth.
             </br>   Your glory be exalted high
             </br>   and cover all the earth.
</br>
             </br>   4 Stretch forth your mighty hand
             </br>   in answer to our prayer,
             </br>   and let your own beloved ones
             </br>   your great salvation share.
</br>
             </br>   5 God speaks: ""All lands are mine,
             </br>   to serve me and obey;
             </br>   my people and their foes will serve
             </br>   my glory day by day.""
</br>
             </br>   6 O who will lead us on
             </br>   in triumph on this day?
             </br>   LORD, why do you reject your own
             </br>   and turn your face away?
</br>
             </br>   7 An army's help is vain;
             </br>   to God for help we plead.
             </br>   With God we shall do valiantly;
             </br>   with God we shall succeed.`
    },
     {
        id: 532,
        title: "Hymn 532 Savior Thy Dying Love",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 532 Savior Thy Dying Love.mp3",
        content: `
                </br> 
                </br> 1 Savior, Thy dying love
                </br> Thou gavest me,
                </br> Nor should I aught withhold,
                </br> Dear Lord, from Thee:
                </br> In love my soul would bow,
                </br> My heart fulfill its vow,
                </br> Some off'ring bring Thee now,
                </br> Something for Thee.
                </br> 
                </br> 2 At the blest mercy seat,
                </br> Pleading for me,
                </br> My feeble faith looks up,
                </br> Jesus, to Thee:
                </br> Help me the cross to bear,
                </br> Thy wondrous love declare,
                </br> Some song to raise, or pray'r,
                </br> Something for Thee.
                </br> 
                </br> 3 Give me a faithful heart,
                </br> Likeness to Thee,
                </br> That each departing day
                </br> Henceforth may see
                </br> Some work of love begun,
                </br> Some deed of kindness done,
                </br> Some wand'rer sought and won,
                </br> Something for Thee.
                </br> 
                </br> 4 All that I am and have,
                </br> Thy gifts so free,
                </br> In joy, in grief, thro' life,
                </br> Dear Lord, for Thee!
                </br> And when Thy face I see,
                </br> My ransom'd soul shall be,
                </br> Thro' all eternity,
                </br> Something for Thee.
                </br> Baptist Hymnal, 1991`
    },
     {
        id: 34,
        title: "Hymn 34 All That I Am I Owe ",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 34 All That I Am I Owe.mp3",
        content: `
                </br>
                </br>1 All that I am I owe to Thee;
                </br>Thy wisdom, LORD, has fashioned me;
                </br>I give my Maker thankful praise,
                </br>Whose wondrous works my soul amaze.
                </br>
                </br>2 E're into being I was brought,
                </br>Your eye did see, and in Your thought
                </br>My life in all its perfect plan
                </br>Was ordered e're my days began.
                </br>
                </br>3 Your thoughts, O God, how manifold,
                </br>More precious unto me than gold!
                </br>I think on their infinity,
                </br>Awaking I am still with Thee.
                </br>
                </br>4 The wicked You will surely slay;
                </br>From me let sinners turn away;
                </br>They speak against the Name divine;
                </br>I count God's enemies as mine.
                </br>
                </br>5 Search me, O God, my heart discern,
                </br>Try me, my inmost thought to learn;
                </br>And lead me, if in sin I stray,
                </br>To choose the everlasting way.
                `
    },
     {
        id: 282,
        title: "Hymn 282 For All The Saints ",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 282 For All The Saints.mp3",
        content: `
                </br>
                </br>1 For all the saints who from their labors rest,
                </br>who Thee by faith before the world confessed;
                </br>Thy name, O Jesus, be forever blest.
                </br>Alleluia, Alleluia!
                </br>
                </br>2 Thou wast their Rock, their Fortress and their Might;
                </br>Thou, Lord, their Captain in the well-fought fight;
                </br>Thou, in the darkness drear, their one true Light.
                </br>Alleluia, Alleluia!
                </br>
                </br>3 O blest communion, fellowship divine!
                </br>We feebly struggle, they in glory shine;
                </br>yet all are one in Thee, for all are Thine.
                </br>Alleluia, Alleluia!
                </br>
                </br>4 And when the strife is fierce, the warfare long,
                </br>steals on the ear the distant triumph song,
                </br>and hearts are brave again, and arms are strong.
                </br>Alleluia, Alleluia!
                </br>
                </br>5 But then there breaks a still more glorious day:
                </br>the saints triumphant rise in bright array;
                </br>the King of glory passes on His way.
                </br>Alleluia, Alleluia!
                </br>
                </br>6 From earth's wide bounds, from ocean's farthest coast,
                </br>through gates of pearl streams in the countless host,
                </br>in praise of Father, Son, and Holy Ghost.
                </br>Alleluia, Alleluia!
                 `
    }  ,
     {
        id: 505,
        title: "Hymn 505 All the Way My Savior Leads Me ",
        artist: "TRBCC Hymns",
        duration: "4:16",
        src: "/hymns/Hymn 505 All the Way My Savior Leads Me.mp3",
        content: `
                </br> 
               </br> 1. All the way my Savior leads me.
               </br> What have I to ask beside?
               </br> Can I doubt his tender mercy,
               </br> Who thru' life has been my Guide?
               </br> Heav'nly peace, divinest comfort,
               </br> Here by faith in him to dwell!
               </br> For I know, whate’er befall me,
               </br> Jesus fashions all things well.
               </br> 
               </br> 2. All the way my Savior leads me,
               </br> Cheers each winding path I tread;
               </br> Gives me grace for ev’ry trial,
               </br> Feeds me with the living Bread.
               </br> Tho' my weary steps may falter,
               </br> And my soul athirst may be,
               </br> Gushing from the Rock before me,
               </br> Lo! A spring of joy I see.
               </br> 
               </br> 3. All the way my Savior leads me;
               </br> Oh, the fullness of His love!
               </br> Perfect rest to me is promised
               </br> In my Father’s house above.
               </br> When my spirit, cloth'd immortal,
               </br> Wings its flight to realms of day
               </br> This my song thru' endless ages:
               </br> Jesus led me all the way.`
    } 
    // ,
    //  {
    //     id: 00,
    //     title: "Hymn ",
    //     artist: "TRBCC Hymns",
    //     duration: "4:16",
    //     src: "/hymns/.mp3",
    //     content: `
    //             </br> `
    // }          
    
]


const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0
}
const getAudioDuration = () => {
    audio.addEventListener('loadedmetadata', handleDurationChange);
    audio.addEventListener('durationchange', handleDurationChange);
}

function handleDurationChange() {
    if (isFinite(audio.duration)) {
        const audioDuration = audio.duration;
        const formattedDuration = formatDuration(audioDuration);
        console.log(`Duration: ${formattedDuration}`);
    } else {
        console.log("Duration is not finite");
    }
}

function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

audioPositive.addEventListener('click', () => getAudioDuration)


const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id)
    audio.src = song.src;
    audio.title = song.title;
    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0
    } else {
        audio.currentTime = userData?.songCurrentTime
    }

    userData.currentSong = song
    playButton.classList.add('playing')
    audio.play()
    highlightCurrentSong()
    setPlayerDisplay()
    setPlayButtonAccessibleText()
}

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime
    console.log(userData.currentSong + userData.songCurrentTime)
    playButton.classList.remove(".playing")
    audio.pause()
}

pauseButton.addEventListener('click', pauseSong)

const renderSongs = (array) => {
    // The map() method is used to iterate through an array and return a new array.
    const songsHTML = array.map((song) => {return ` 
    
    <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
            <span class="playlist-song-title">${song.title}</span>
            <span class="playlist-song-artist">${song.artist}</span>
            <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button class="playlist-song-delete" aria-label="Delete${song.title}" onclick="deleteSong(${song.id})">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
    </li>
`}).join("") 

playlistSongs.innerHTML = songsHTML


}


//  Display current time and duration

const durationField = document.querySelector('.player-audio-duration-field');
const durationText = document.querySelector('.player-audio-duration-text');

// Update the duration display
function updateAudioTimeDisplay() {
    if (audio && durationField) {
        const current = formatDuration(audio.currentTime || 0);
        const total = isFinite(audio.duration) ? formatDuration(audio.duration) : "--:--";
        durationText.textContent = `${current} / ${total}`;
    }
}

// Update display as audio plays
audio.addEventListener('timeupdate', updateAudioTimeDisplay);
audio.addEventListener('loadedmetadata', updateAudioTimeDisplay);
audio.addEventListener('durationchange', updateAudioTimeDisplay);

// Seek -10 seconds
audioPositive.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

// Seek +10 seconds
audioNegative.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration || audio.currentTime + 10, audio.currentTime + 10);
});

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0]
    playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play")
}



// Utility to format seconds as mm:ss
function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Load and set actual durations for all songs
function loadAllSongDurations() {
    let loadedCount = 0;
    allSongs.forEach((song, idx) => {
        const tempAudio = new Audio(song.src);
        tempAudio.addEventListener('loadedmetadata', () => {
            if (isFinite(tempAudio.duration)) {
                song.duration = formatDuration(tempAudio.duration);
            } else {
                song.duration = "--:--";
            }
            loadedCount++;
            // When all durations are loaded, re-render the playlist
            if (loadedCount === allSongs.length) {
                renderSongs(userData.songs);
            }
        });
        // In case of error loading audio
        tempAudio.addEventListener('error', () => {
            song.duration = "--:--";
            loadedCount++;
            if (loadedCount === allSongs.length) {
                renderSongs(userData.songs);
            }
        });
    });
}

durationField.addEventListener('click', function(e) {
    const rect = durationField.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    if (audio && isFinite(audio.duration)) {
        audio.currentTime = percent * audio.duration;
    }
});

// Call this once after defining allSongs and before first render
loadAllSongDurations();


function updateAudioProgressBar() {
    if (audio && durationField && isFinite(audio.duration)) {
        const percent = (audio.currentTime / audio.duration) * 100;
        durationField.style.width = percent + "%";
    } else if (durationField) {
        durationField.style.width = "0%";
    }
}

// Update as audio plays
audio.addEventListener('timeupdate', updateAudioProgressBar);
audio.addEventListener('loadedmetadata', updateAudioProgressBar);
audio.addEventListener('durationchange', updateAudioProgressBar);


const getCurrentSongIndex = () => {
    return userData?.songs.indexOf(userData?.currentSong)
}

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id)
    } else {
        const currentSongIndex = getCurrentSongIndex()
        const nextSong = userData?.songs[currentSongIndex + 1]
        playSong(nextSong.id)
    }
}
nextButton.addEventListener('click', playNextSong)


const playPreviousSong = () => {
    if (userData?.currentSong === null) {
        return
    } else {
        const currentSongIndex = getCurrentSongIndex()
        const previousSong = userData?.songs[currentSongIndex - 1]
        playSong(previousSong.id)
    }
}



const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null
    userData.songCurrentTime = 0
    renderSongs(userData?.songs)
    pauseSong()
    setPlayerDisplay()
    setPlayButtonAccessibleText()
}


const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null
        userData.songCurrentTime = 0
        pauseSong()
        setPlayerDisplay()
    }
    userData.songs = userData?.songs.filter((song) => song.id !== id)
    renderSongs(userData?.songs)
    highlightCurrentSong()
    setPlayButtonAccessibleText()
    if (userData?.songs.length === 0) {
        const resetButton = document.createElement('button')
        const resetText = document.createTextNode("Reset Playlist")
        resetButton.id = "reset"
        resetButton.ariaLabel = "Reset playlist"
        resetButton.appendChild(resetText)
        playlistSongs.appendChild(resetButton)
        resetButton.addEventListener("click", () =>{
            userData.songs = [...allSongs]
            renderSongs(userData?.songs)
            setPlayButtonAccessibleText()
            resetButton.remove()
        })
       
    }
}

shuffleButton.addEventListener('click', shuffle)

audio.addEventListener('ended', () => {
    const currentSongIndex = getCurrentSongIndex()
    const nextSongExists = userData.songs.length - 1 > currentSongIndex
    if (nextSongExists) {
        playNextSong()
    } else {
        userData.currentSong = null
        userData.songCurrentTime = 0
        pauseSong()
        setPlayerDisplay()
        highlightCurrentSong()
        setPlayButtonAccessibleText()
    }
})

const loop = () => {
    loopButton.classList.toggle('looping')
    audio.loop = !audio.loop;  // Toggle the audio loop property

    if (!audio.loop && userData?.currentSong !== null) {
        // If loop is disabled and there is a current song, update currentTime
        userData.songCurrentTime = audio.currentTime;
    }
    
}

loopButton.addEventListener('click', loop)


const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title")
    const songArtist = document.getElementById("player-song-artist")
    const playingCatechism = document.querySelector(".player-display-song-artist")
    const currentTitle = userData?.currentSong?.title
    const currentArtist = userData?.currentSong?.artist
    const currentContent = userData?.currentSong?.content
    
    // playingSong.textContent = currentTitle ? currentTitle : ""
    // songArtist.textContent = currentArtist ? currentArtist : ""

    playingCatechism.innerHTML = currentContent ? currentContent : ""
    
}
const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`)
    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current")
    })

    if (songToHighlight) {
        songToHighlight.setAttribute("aria-current", "true")
    }
}

previousButton.addEventListener('click', playPreviousSong)




playButton.addEventListener('click', () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id)
        console.log(userData?.songs[0].id)
    }  else {
        playSong(userData?.currentSong.id)
        console.log("no song selected")
      }
        
})

userData?.songs.sort((a,b) => {
    if (a.id < b.id) {
        return -1;
    }

    if (a.id > b.id) {
        return 1;
    }
    return 0; 
})
// optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined.

renderSongs(userData?.songs) 


//adjust audio


