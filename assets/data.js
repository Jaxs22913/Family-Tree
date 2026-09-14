/* The Luke–McKinnon Line — shared data
   Every claim carries an evidence grade:
     c  = CONFIRMED  — a primary or near-primary record
     pr = PROBABLE   — a strong circumstantial case, no clincher
     l  = LEAD ONLY  — an online tree or unsourced memorial. Not proof.
     u  = LIVING     — records withheld
*/

const GRADE = {
  c:  ['b-c', 'Confirmed'],
  pr: ['b-p', 'Probable'],
  l:  ['b-l', 'Lead only'],
  u:  ['b-u', 'Living']
};

const S = {
  fg:  u => ({k:'Find a Grave — headstone',            u}),
  ga:  u => ({k:'Georgia Archives — death certificate', u}),
  cen: u => ({k:'U.S. Census — National Archives',      u}),
  fs:  u => ({k:'U.S. Census — via FamilySearch',       u}),
  ob:  u => ({k:'Obituary',                             u}),
  mar: u => ({k:'County marriage index',                u}),
  ss:  u => ({k:'Social Security application',          u}),
  np:  u => ({k:'Georgia Historic Newspapers',          u}),
  bk:  u => ({k:'Published county history',             u}),
  pen: u => ({k:'Confederate pension file',             u}),
  sl:  u => ({k:'U.S. Census slave schedule',           u})
};

/* ============================ CENSUS HOUSEHOLDS ============================ */
const CEN = {

c1850i: {y:'1850', t:'The Luke households of Irwin County',
  pl:'44th Division, Irwin County, Georgia',
  cite:'NARA M432-74 · the pioneer generation, scattered across one county',
  url:'http://us-census.org/pub/usgenweb/census/ga/irwin/1850/',
  cols:['Name','Age','Born','Note'],
  rows:[
    ['Daniel M. Luke','67','Georgia','dwelling 186'],
    ['David P. Luke','24','Georgia','dwelling 185 — next door to Daniel'],
    ['Mack Luke','47','<b>South Carolina</b>','dwelling 266'],
    ['Joshua A. Luke','45','<b>South Carolina</b>','dwelling 409'],
    ['Jasper Luke','37','Georgia','dwelling 79'],
    ['Jesse J. Luke','34','Georgia','dwelling 265'],
    ['James Luke','27','Georgia','dwelling 411']],
  note:'<b>This single page answers where the Lukes came from.</b> The two eldest sons were born in South Carolina about 1803 and 1805; every younger sibling was born in Georgia from about 1813. <b>The family crossed from South Carolina into Georgia between roughly 1806 and 1812.</b> A 1932 county history adds that Daniel Luke "moved from South Carolina on Little Peedee River" — untested, but every other testable claim in that sketch checks out. Note too that <i>every adult Luke male on this census is marked unable to read and write</i>.'},

c1860b: {y:'1860', t:'John Luke household',
  pl:'Nashville Division, Berrien County, Georgia',
  cite:'NARA M653-111 · page 370 · dwelling 270 / family 251 · enumerated 26–27 July 1860',
  url:'http://us-census.org/pub/usgenweb/census/ga/berrien/1860/pg00363.txt',
  cols:['Name','Age','Born','Note'],
  rows:[
    ['John Luke','62','Georgia','Farmer · real $500 · personal $760 · <b>cannot read or write</b>'],
    ['Telitha J. Luke','40','<b>North Carolina</b>','<b>cannot read or write</b>'],
    ['Elizabeth C. Luke','21','Georgia','cannot read or write'],
    ['William H. Luke','19','Georgia',''],
    ['Ruth J. Luke','8','Georgia',''],
    ['Richard B. Luke','6','Georgia','','me'],
    ['Jemima P. Luke','5','Georgia','later m. Micajah Harper'],
    ['Manda C. Luke','3','Georgia',''],
    ['Catherine Luke','1','Georgia',''],
    ['Joseph Luke','34','Georgia','son of the first marriage']],
  note:'Richard B., aged 6 in July 1860, matches a birth of 24 December 1853 exactly. <b>John and Telitha were both illiterate</b> — and in Irwin County that year, 47% of adults were. His personal property ($760) exceeded his real estate ($500), the signature of a man whose wealth was in cattle and hogs on the open range rather than in improved land. <b>He held no enslaved people</b> — confirmed by reading every page of the Berrien County slave schedule.'},

c1870b: {y:'1870', t:'John Luke household',
  pl:'District 518, Berrien County, Georgia',
  cite:'the record that proved R. B. Luke’s parentage',
  url:'https://www.familysearch.org/ark:/61903/1:1:MCSF-B51',
  cols:['Name','Relation','Age','Note'],
  rows:[
    ['John Luke','Head','72',''],
    ['Tebitha J. Luke','Wife','50','Telitha Jane Graves'],
    ['Eliza A. C. Luke','Daughter','',''],
    ['Ruth J. Luke','Daughter','',''],
    ['Richard B. Luke','Son','17','','me'],
    ['Jemima Luke','Daughter','',''],
    ['Amanda Luke','Daughter','',''],
    ['Christiana Luke','Daughter','',''],
    ['Lemhy D. Luke','','',''],
    ['Sarah A. Luke','','','']],
  note:'Ten years on, Richard B. is 17 and still at home. Taken with the 1860 page, this <b>proves the John Luke / Telitha Jane Graves parentage</b> that had circulated for years as an unsourced claim — and dissolves the "implausible 32-year age gap," which turns out to be 22 years and a second marriage.'},

c1880rb:{y:'1880', t:'R. B. Luke household',
  pl:'Georgia', cite:'his own young family, ten years before Jack was born',
  url:'https://www.familysearch.org/ark:/61903/1:1:M8LK-4QZ',
  cols:['Name','Relation','Age','Note'],
  rows:[
    ['Benjamin Luke','Head','','Richard Benjamin "R. B." Luke'],
    ['Jane Luke','Wife','','Janie Ruth Yawn'],
    ['Lucius Luke','Son','','<b>b. 9 Oct 1872 — your line</b>','me'],
    ['Richard Luke','Son','5',''],
    ['Enlinan Luke','',''],
    ['Ollif Luke','','']],
  note:'R. B. Luke with Jane Yawn and their eldest children, including <b>Lucius, aged about 7</b>. Fifteen children came in the end.'},

c1900: {y:'1900', t:'Lucius Luke household',
  pl:'Militia Districts 432 &amp; 518, ED 46, Irwin County, Georgia',
  cite:'Sheet 12A · household 207 · line 45',
  url:'https://www.familysearch.org/ark:/61903/1:1:M3JC-3CC',
  cols:['Name','Relation','Age','Born'],
  rows:[
    ['Lucius Luke','Head','27','Oct 1873, Georgia'],
    ['Narcessia Luke','Wife','22','Georgia'],
    ['Willie Luke','Son','4','Georgia'],
    ['John Luke','Son','3','Georgia','me']],
  note:'Married 5 years, consistent with the October 1894 Irwin County marriage. <b>John, age 3</b> — born October 1896, he would be exactly 3 at the June 1900 count. An exact match, and the first of two records proving Jack’s parentage.'},

c1910l: {y:'1910', t:'Lucius L. Luke household',
  pl:'Militia District 518, Irwin County, Georgia',
  cite:'Sheet 8A · NARA T624',
  url:'https://www.familysearch.org/ark:/61903/1:1:ML2H-JFH',
  cols:['Name','Relation','Age','Born'],
  rows:[
    ['Lucius L. Luke','Head','36','Georgia'],
    ['Narcissus Luke','Wife','32','Georgia'],
    ['William Luke','Son','14','Georgia'],
    ['John C W Luke','Son','12','Georgia','me'],
    ['Autman Luke','Son','0','Georgia'],
    ['George J. Tucker','—','22','Georgia']],
  note:'The second proof. William is Willie L. Luke, who died of pneumonia following influenza in 1925; Autman is Aultman Luke, who lived to 1996. <b>Narcissus is 22 in 1900 and 32 in 1910, so born about 1877–78</b> — not the 1874 that circulates.'},

c1910m: {y:'1910', t:'Art McKinnon household',
  pl:'Pearson, ED 46, Coffee County, Georgia',
  cite:'Sheet 12A · NARA T624',
  url:'https://www.familysearch.org/ark:/61903/1:1:MLKH-2Z4',
  cols:['Name','Relation','Age','Born'],
  rows:[
    ['Art McKinnon','Head','45','Georgia'],
    ['Martha McKinnon','Wife','38','Georgia'],
    ['Roan McKinnon','Son','18','Georgia'],
    ['Bessie McKinnon','Daughter','15','Georgia'],
    ['Monroe McKinnon','Son','9','Georgia','me'],
    ['William McKinnon','Son','7','Georgia'],
    ['Leon McKinnon','Son','5','Georgia'],
    ['James McKinnon','Son','0','Georgia'],
    ['John Rickerson','<b>Maternal grandfather</b>','86','Georgia']],
  note:'<b>The record that settled the McKinnon question.</b> "Art" is George Albert McKinnon. And the maiden name does not rest on a tree: <b>the enumerator wrote "maternal grandfather" beside John Rickerson</b> — Ricketson — so Martha’s own father was living in the house at 86. Sons William, Leon and James match three Coffee County obituaries found independently. <b>Note the geography:</b> Pearson is Atkinson County today, but Atkinson was not created until 1917 — in 1910 it was still Coffee.'},

c1910h: {y:'1910', t:'Abagil Hinton household',
  pl:'Levyville, ED 82, Levy County, <b>Florida</b>',
  cite:'Sheet 5B · NARA T624',
  url:'https://www.familysearch.org/ark:/61903/1:1:MVKD-BS6',
  cols:['Name','Relation','Age','Born'],
  rows:[
    ['Abagil Hinton','Head — <b>widowed</b>','26','Florida'],
    ['Otelia Hinton','Daughter','9','Florida'],
    ['James Hinton','Son','6','Florida'],
    ['Neal Hinton','Daughter','2','Florida','me'],
    ['Mack Hinton','Son','1','Florida']],
  note:'Your great-grandmother, aged two, in her mother’s house in Florida. <b>Abby is recorded as widowed</b>, which independently confirms Mackie Hinton died before April 1910 — and <b>the baby is named Mack</b>. A widow with a one-year-old named for the late father is about as good as onomastic evidence gets. Otelia, James and Mack are three siblings the family did not know about. The census also gives Abby’s father as born in <b>Alabama</b>.'},

c1930: {y:'1930', t:'J. W. Luke household',
  pl:'Holt, ED 14, Irwin County, Georgia',
  cite:'Sheet 4A · household 69 · line 41 · NARA T626',
  url:'https://www.familysearch.org/ark:/61903/1:1:3WL3-KMM',
  cols:['Name','Relation','Age','Born'],
  rows:[
    ['J. W. Luke','Head','32','Georgia'],
    ['Nealie Luke','Wife','23','<b>Florida</b>'],
    ['Dorthy Luke','Daughter','2','<b>Florida</b>','me'],
    ['Versie Luke','Daughter','1','<b>Florida</b>'],
    ['Ben Giddens','—','11','Florida']],
  note:'<b>The page that found Dorothy.</b> Listed as Nealie’s daughter, born in Florida about 1927 — a full sibling, not Clyde McMillan’s, and the eldest of Nealie’s children. <b>Ben Giddens, aged 11, is Nealie’s half-brother</b>, living with them, which anchors an otherwise contradictory cluster of Giddens links. And it dates the migration: Dorothy and Versa Mae born in Florida, Inez born July 1930 in Irwin County — <b>the family crossed from Florida into Georgia between 1929 and mid-1930</b>.'},

c1950l: {y:'1950', t:'Jack W. Luke household',
  pl:'Militia District 1804, Bridgetown, ED 34-26, Coffee County, Georgia',
  cite:'Sheet 7 · dwelling 47 · household 32 · enumerated 11 April 1950',
  url:'https://1950census.archives.gov/search/?county=Coffee&ed=34-26&page=1&state=GA',
  cols:['Name','Relation','Age','Born'],
  rows:[
    ['Luke, Jack W.','Head','52','Georgia'],
    ['Nealie','Wife','43','<b>Florida</b>'],
    ['Inez','Daughter','18','Georgia'],
    ['Doris','Daughter','17','Georgia'],
    ['Lucius','Son','15','Georgia'],
    ['James E.','Son','13','Georgia'],
    ['Curtis','Son','11','Georgia'],
    ['John W.','Son','10','Georgia'],
    ['Jewel Fae','Daughter','9','Georgia'],
    ['Voncil','Daughter','8','Georgia'],
    ['Otis','Son','6','Georgia'],
    ['Elmer','Son','5','Georgia','me'],
    ['Brenda C.','Daughter','1','Georgia']],
  note:'Fourteen people under one roof. The enumerator’s note at the top of the sheet reads <i>"Proceeding South along Lax–Willacoochee road"</i>, the house is marked as <b>on a farm</b>, and Jack is recorded working <b>60 hours</b> in the week before the count. That is the same Lax neighbourhood where his grandfather R. B. Luke held family reunions in 1914 — three generations on one stretch of road. <b>Ages here run one to two years light</b> throughout, so do not derive birth years from them.'},

c1950m: {y:'1950', t:'Monroe McKinnon household',
  pl:'Mora, ED 34-13, Coffee County, Georgia',
  cite:'Sheets 17–18 · dwelling 136 · family 71',
  url:'https://1950census.archives.gov/search/?county=Coffee&ed=34-13&page=1&state=GA',
  cols:['Name','Relation','Age','Born'],
  rows:[
    ['McKinnon, Monroe','Head','48','Georgia'],
    ['Mary J.','Wife','49','Georgia'],
    ['Willie Mae','Daughter','22','Georgia'],
    ['Louise','Daughter','19','Georgia'],
    ['Arlen','Son','17','Georgia'],
    ['Randall','Son','15','Georgia'],
    ['Andrew','Son','13','Georgia','me'],
    ['Betty J.','Daughter','11','Georgia'],
    ['Florine','Daughter','10','Georgia'],
    ['Monroe Jr.','Son','9','Georgia'],
    ['Bobby','Son','7','Georgia'],
    ['Martha J.','Daughter','5','Georgia']],
  note:'The household straddles two sheets — sheet 17 is stamped "household continued on next sheet." Mary J. at 49 matches a 24 November 1900 birth exactly. The two eldest sons, Edward (1924) and Harvey (1926), are correctly absent. <b>Bobby and Martha appear here but are missing from the online family group</b>, which lists only 10 of the 12 children.'},

c1950h: {y:'1950', t:'Jessie C. Hall household',
  pl:'Militia District 1556, Ambrose, ED 34-23, Coffee County, Georgia',
  cite:'Sheet 14 · dwelling 106 · household 62',
  url:'https://1950census.archives.gov/search/?county=Coffee&ed=34-23&page=1&state=GA',
  cols:['Name','Age','Occupation','Class'],
  rows:[
    ['Hall, Jessie C. — Head','48','<b>Farmer</b> · Farm','<b>O</b> — own business'],
    ['Mattie — wife','40','keeping house','—'],
    ['Myrtle — daughter','20','Farm Helper · Farm','<b>NP</b> — no pay'],
    ['Henry — son','17','Farm Helper · Farm','<b>NP</b> — no pay'],
    ['Mitchel — son','16','','—'],
    ['Frank — son','14','','—'],
    ['Jessie J. — son','12','','—'],
    ['Lorraine — daughter','9','','—'],
    ['Chester — son','6','','—'],
    ['Joe R. — son','4','','—'],
    ['Rudine — daughter','b. Aug 1949','','—','me']],
  note:'Six of these given names match six Hall siblings confirmed from obituaries, so this is beyond doubt the right family. <b>"O" means Jesse Hall worked his own farm</b> rather than a tenancy — and <b>"NP" means his two eldest children put in full 48-hour weeks without wages.</b> That is what a family farm looked like in 1950. The "Rudine" identification rests on the name alone, which is why it stays probable.'}
};

/* ============================ PEOPLE ============================ */
const PEOPLE = {

jaxon:{n:'Jaxon Brady Luke', g:'u', b:'18 Aug 2000', bp:'Douglas, Coffee County, Georgia',
  ev:'The starting point. Everything below is traced backward from here.', src:[], cen:[]},

richard:{n:'Richard Luke', g:'u', liv:1,
  ev:'Living. Son of Elmer Parker Luke and Sally Rudine Hall; brother of Tommy Luke. Independently corroborated — <b>Richard and Tommy Luke both served as pallbearers</b> at the 2023 funeral of their aunt Brenda Carol Luke Jewell, a printed record placing them in this family.',
  src:[S.ob('https://obituaries.tiftongazette.com/obituary/brenda-jewell-1088589275')], cen:[]},

andrea:{n:'Andrea Denise McKinnon', g:'u', liv:1,
  ev:'Living. Daughter of Andrew McKinnon and Lucille Giddens. Married Richard Luke at Mora Baptist Church, Mora, Coffee County — the church where her uncle Monroe McKinnon Jr. served as a deacon for many years.', src:[], cen:[]},

elmer:{n:'Elmer Parker Luke', g:'u', liv:1,
  ev:'Living — confirmed alive as recently as July 2023, when he and Sally were named among the survivors in his sister Brenda’s obituary. He appears as <b>"Elmer," age 5</b> in the 1950 census household on the Lax–Willacoochee road, placing his birth around 1944–45.',
  src:[S.ob('https://obituaries.tiftongazette.com/obituary/brenda-jewell-1088589275')], cen:['c1950l']},

sally:{n:'Sally Rudine Hall', g:'u', liv:1,
  ev:'Living. <b>Her parents were a total blank before this research and are now identified: Jesse Lee Hall and Mattie Cribb Hall.</b> Three separate obituaries of her brothers each name those parents <i>and</i> list "Sally Luke and husband Elmer" among the surviving sisters. That convergence is what makes it solid rather than circumstantial.',
  src:[S.ob('https://www.relihanfuneralhome.com/obituaries/joe-bud-hall'),
       S.ob('https://www.currentobituary.com/obit/262396'),
       S.ob('https://obituaries.tiftongazette.com/obituary/mitchell-hall-739677462')], cen:['c1950h']},

andrew:{n:'Andrew McKinnon', g:'c', b:'12 Jan 1937', d:'19 Sep 2009',
  bur:'Mora Cemetery, Coffee County, Georgia',
  ev:'Your family had him as "approximately 1937–2009"; the headstone gives exact dates, and the 1950 census puts him at 13 — precisely right for a January 1937 birth.<br><br><b>On the Army service: still unproven, but the usual evidence against it is worthless here.</b> The VA has no record and his stone carries no emblem — yet the VA lists only graves where <i>it</i> furnished the marker, and his looks privately bought. More telling: <b>his brother Arlen’s obituary never mentions military service either, despite a VA marker reading "PFC US ARMY | KOREA."</b> This family’s obituaries simply omit it. Finding Andrew’s obituary probably will not answer the question; his service file will.',
  src:[S.fg('https://www.findagrave.com/memorial/90560546/andrew-mckinnon')], cen:['c1950m']},

lucille:{n:'Lucille Giddens', g:'u', liv:1, b:'23 Apr 1945',
  ev:'Living. <b>Your family’s information was right:</b> her parents were Joe Edd Giddens and Sallie Mae Mercer. Proven by her brother Ernest Giddens’s 2011 obituary, which names the parents and lists "Lucille Birch of Douglas" among survivors — <i>Birch</i> being the paper’s misspelling of Burch.<br><br><b>One correction to family memory:</b> Burch is a <i>later</i> married name, not an earlier one. She married Johnny Burch around 2010, after Andrew died in 2009. The order is Giddens → McKinnon → Burch.',
  src:[S.ob('https://obituaries.tiftongazette.com/obituary/ernest-giddens-739580082'),
       S.ob('https://douglasnow.com/johnny-burch-85/')], cen:[]},

jack:{n:'John Wesley "Jack" Luke', g:'c', b:'13 Oct 1896', d:'26 Oct 1964',
  bur:'Brushy Creek Primitive Baptist Church Cemetery, Ocilla, Irwin County',
  ev:'<b>His parentage is now proven twice over.</b> He appears as "John," age 3, in the 1900 Irwin County household of Lucius and Narcessia Luke, and again as "John C W Luke," age 12, in 1910.<br><br><b>The burial place is a correction:</b> he lies at Brushy Creek in Ocilla, not at Lax or Willacoochee — a cemetery that was not previously on the family’s list.<br><br><b>He married twice.</b> The Irwin County index records "LUKE, JOHNNIE — McMILLAN, CLYDE — 09/08/1918," a first marriage that produced Richard Cleo Luke Sr., the family’s "Cleo." Nealie was his second wife.<br><br>In 1950 the enumerator found him on a farm on the Lax–Willacoochee road with Nealie and twelve children at home, and recorded him working <b>sixty hours</b> in the previous week.',
  src:[S.fg('https://www.findagrave.com/memorial/41253001/john-wesley-luke'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:M3JC-3CC'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:ML2H-JFH'),
       S.mar('http://www.southgeorgiagenealogy.com/marrfix1.htm')],
  cen:['c1900','c1910l','c1930','c1950l']},

nealie:{n:'Nealie Hinton', g:'c', b:'17 Oct 1906', bp:'Levy County, <b>Florida</b>',
  d:'20 Feb 1983', dp:'Tift County, Georgia',
  bur:'Brushy Creek Primitive Baptist Church Cemetery, Ocilla, Irwin County',
  ev:'<b>The most useful single fact about her: she was a Floridian.</b> Born in Levy County, Florida — corroborated three times over, by her headstone and independently by the 1930 and 1950 censuses.<br><br>That explains a stubborn negative. A search of the complete Irwin County marriage index — roughly 7,000 entries across all years — turns up only three Hintons in the county’s entire history, none of them hers. <b>The Hintons were never a Georgia family.</b> Surname mapping bears this out: Hinton is <i>five times rarer</i> in these ten counties than in Georgia as a whole.<br><br>She is found as "Neal Hinton," aged 2, in her widowed mother’s Levy County household in 1910. She may have been christened <b>Maggie Nealie</b>.',
  src:[S.fg('https://www.findagrave.com/memorial/41253006/nealie-luke'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MVKD-BS6'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:3WL3-KMM')],
  cen:['c1910h','c1930','c1950l']},

jessehall:{n:'Jesse Lee Hall', g:'c', b:'about 1902',
  ev:'<b>Newly identified.</b> Named as father in three of his children’s obituaries. Heads the 1950 census household at North Ambrose and First Street, recorded as "Hall, Jessie C., Head, age 48" — note the census initial "C." against the obituaries’ "Lee."<br><br>His occupation column reads <b>"Farmer / Farm / O"</b> — the O meaning he worked his own place rather than a tenancy, which in 1950 Coffee County was not the majority position. Eleven children were in the house.',
  src:[S.ob('https://www.relihanfuneralhome.com/obituaries/joe-bud-hall')], cen:['c1950h']},

mattiecribb:{n:'Mattie Cribb', g:'c', b:'about 1910',
  ev:'<b>Newly identified.</b> Named consistently as "Mattie Cribb Hall" in three of her children’s obituaries; appears in the 1950 census as "Mattie, wife, age 40," keeping house for a household of thirteen.<br><br><b>Cribb is a genuinely rare and locally rooted name</b> — only about 3,600 bearers in the entire United States, and nine times more concentrated in these counties than chance would give. English, from the Old English word for a manger. Its rarity makes it one of the most tractable lines left to research.',
  src:[S.ob('https://www.currentobituary.com/obit/262396')], cen:['c1950h']},

monroe:{n:'Monroe McKinnon Sr.', g:'c', b:'4 Oct 1900', d:'12 Jan 1989',
  bur:'Arna Primitive Baptist Church Cemetery, Willacoochee, Atkinson County',
  ev:'<b>His parentage is now proven.</b> The 1910 census at Pearson records him as "Monroe McKinnon, Son, age 9" in the household of Art (George Albert) McKinnon and Martha — with Martha’s own father, John Rickerson, living there and labelled <i>maternal grandfather</i> by the enumerator.<br><br>The online tree’s "approximately 1901" is corrected to <b>4 October 1900</b> from his headstone. Named "the late Monroe McKinnon, Sr." in five of his children’s obituaries.<br><br><b>Note the geography:</b> the family lived at Pearson and later Mora and buried at Arna. Pearson and Willacoochee are Atkinson County today, but Atkinson was carved out of Coffee County in 1917 — which is why this family reads as Coffee in some records and Atkinson in others.',
  src:[S.fg('https://www.findagrave.com/memorial/61237192/monroe-mckinnon'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MLKH-2Z4'),
       S.ob('https://www.ricketsonfuneralhome.com/obituaries/monroe-mckinnon/')],
  cen:['c1910m','c1950m']},

maryjane:{n:'Mary Jane Carver', g:'c', b:'24 Nov 1900', d:'14 May 1982',
  bur:'Arna Primitive Baptist Church Cemetery, Willacoochee, Atkinson County',
  ev:'The 1950 census records her as "Mary J., Wife, age 49" — matching a 24 November 1900 birth exactly for an April 1950 enumeration, which is unusually precise for this set of records. Her maiden name is beyond doubt: five separate funeral notices name her "Mary Jane Carver McKinnon." Married Monroe on 12 November 1922, though that date is so far only a memorial claim.',
  src:[S.fg('https://www.findagrave.com/memorial/61237207/mary-jane-mckinnon')], cen:['c1950m']},

joegiddens:{n:'Joe Edd Giddens', g:'c', b:'22 Nov 1893', d:'7 Oct 1974',
  bur:'Sweetwater United Methodist Church Cemetery, Pearson, Atkinson County',
  ev:'Family tradition called him "Joe Giddens"; his full name was <b>Joe Edd Giddens</b>. Headstone photographed October 2013, and named as "Joe E. Giddens" in his son Ernest’s obituary.<br><br><b>Giddens is one of the most locally rooted names in your tree</b> — about twelve times more concentrated in these counties than chance, and in Berrien County thirty-four times. English, habitational, from one of several villages: Giddinge in Kent, Gedding in Suffolk, or the Gidding villages near Huntingdon. The confident "Giddings of Huntingdonshire" story you may have heard is a simplification.',
  src:[S.fg('https://www.findagrave.com/memorial/32978224/joe_edd-giddens')], cen:[]},

sallymercer:{n:'Sallie Mae Mercer', g:'c', b:'1901', d:'1992',
  bur:'Sweetwater United Methodist Church Cemetery, Pearson, Atkinson County',
  ev:'Family tradition called her "Sally Mercer"; her full name was <b>Sallie Mae Mercer</b>. Confirmed as Lucille’s mother by Ernest Giddens’s obituary naming "Sally Mercer Giddens."<br><br><b>A new lead on her own parents:</b> a 1925 Atkinson County death certificate records Denis Mercer, born 12 February 1902 at Pearson, son of <b>Charley Mercer and Ida F. Brown</b>. Same surname, same small town, born months apart from Sallie Mae. Worth testing — not yet evidence.',
  src:[S.ob('https://obituaries.tiftongazette.com/obituary/ernest-giddens-739580082'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/262038')], cen:[]},

lucius:{n:'Lucius L. Luke', g:'c', b:'9 Oct 1872', d:'21 Jun 1920', dp:'Ocilla, Irwin County',
  bur:'Brushy Creek Primitive Baptist Church Cemetery, Ocilla',
  ev:'<b>His death certificate is the keystone document of this tree.</b> Georgia certificate no. 18075 gives his birth as 9 October 1872 — correcting the 1873 in circulation — and names his own parents as <b>"R B Luke" and "Jane Yawn."</b> That is how this line reached back a further generation on documentary evidence rather than hearsay.<br><br><b>How he died is now known too.</b> The Fitzgerald paper, 23 June 1920: <i>"the remains of L. L. Luke, a prominent farmer of Irwin county were laid to rest at Brushy Creek church. The deceased was only sick for three days, when death overtook him."</i> He was 48.<br><br>His headstone reads <i>"An honest man, the noblest work of GOD"</i> beneath a Masonic emblem.<br><br><b>And then the family lost the land.</b> Within two years his widow Narcissus was levied on for unpaid taxes on <b>490 acres</b> — Lot 261, 5th land district — and again the year after that. In December 1924 a creditor took the family’s steam engine. The boll weevil had reached Georgia in 1915 and state cotton acreage halved between 1914 and 1923; the Lukes were inside a regional collapse, not merely unlucky.',
  src:[S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/39416'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053306/1920-06-23/ed-1/seq-5/'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1922-06-09/ed-1/seq-10/'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1924-12-12/ed-1/seq-7/')],
  cen:['c1900','c1910l']},

narcisus:{n:'Narcisus Harper', g:'c', b:'about 1877', d:'12 Nov 1940',
  bur:'Brushy Creek Primitive Baptist Church Cemetery, Ocilla',
  ev:'Named on two Georgia death certificates as the mother of Lucius Luke’s children — "Narcisus Harper" in 1919 and "Narcis Harper" in 1925. Married Lucius on <b>21 October 1894</b> per the Irwin County register as published in 1932. (Your notes said the 27th; the county register says the 21st.)<br><br><b>Her birth year needs correcting</b> — she is 22 in 1900 and 32 in 1910, both pointing to about <b>1877–78</b>, not the 1874 that circulates.<br><br><b>Her own parents are now identified: Henry S. Harper and Polly Vickers.</b> A 1932 county history lists the family and names "Narcissus, who married L. L. Luke" outright.<br><br>After Lucius died she was administratrix of an estate that was sold out from under her — 490 acres levied for taxes twice, and the steam engine seized in 1924.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/34891'),
       S.mar('http://www.southgeorgiagenealogy.com/marrfix1.htm')],
  cen:['c1900','c1910l']},

mackie:{n:'Mackie Hinton', g:'pr', b:'about 1880', d:'1910', dp:'Levy County, Florida',
  ev:'<b>Upgraded from lead to probable by the 1910 census.</b> He is not in it — he was already dead — but two things point hard at him: <b>Abby is enumerated as widowed</b>, confirming a husband who died before April 1910, and <b>the youngest child is a one-year-old boy named Mack.</b><br><br>What is still missing is a document naming him. The memorial supplying his dates was created in 2020 with no grave photograph and no sources.',
  src:[S.fs('https://www.familysearch.org/ark:/61903/1:1:MVKD-BS6'),
       S.fg('https://www.findagrave.com/memorial/208291548/mackie-hinton')], cen:['c1910h']},

abby:{n:'Abigail Elizabeth "Abby" Johns', g:'c', b:'about 1884', bp:'Florida',
  d:'3 Apr 1950', dp:'Levy County, Florida',
  ev:'<b>Confirmed as Nealie’s mother by the 1910 census</b> — which was the weakest link in the entire tree until that page turned up. She heads a Levyville household as a 26-year-old widow with four children, the middle one "Neal," aged two.<br><br><b>The Giddens remarriage is corroborated from an unexpected direction:</b> the 1930 Luke household in Irwin County contains <b>Ben Giddens, aged 11, born Florida</b> — Nealie’s half-brother, living with his grown sister. That anchors a cluster of online links that are otherwise internally contradictory.<br><br><b>A testable lead on her own parents:</b> the census records her father as born in <b>Alabama</b> and her mother in Florida.',
  src:[S.fs('https://www.familysearch.org/ark:/61903/1:1:MVKD-BS6'),
       S.fg('https://www.findagrave.com/memorial/15165074/abigail-elizabeth-giddens')],
  cen:['c1910h','c1930']},

george:{n:'George Albert "Art" McKinnon', g:'c', b:'about 1865', d:'9 Mar 1932',
  bur:'Arna Primitive Baptist Church Cemetery, Willacoochee, Atkinson County',
  ev:'<b>Proven as Monroe’s father.</b> The 1910 census at Pearson lists him as "Art McKinnon," head of household, age 45, with Monroe among his sons. Until that page surfaced this was a plausible but unsourced claim.<br><br>His headstone gives May 1867; the census points to about 1865. Three of his other sons — William, Leon and Jimmie — are each independently confirmed as fathers in separate Coffee County obituaries, so the family group holds from both directions.<br><br>The McKinnons are named in the 1930 county history as among the members of <b>Arnie (Arna) Primitive Baptist Church</b>, organised about 1886 ten miles southwest of Douglas, "situated among a class of good farmers."',
  src:[S.fs('https://www.familysearch.org/ark:/61903/1:1:MLKH-2Z4'),
       S.fg('https://www.findagrave.com/memorial/33601515/albert-mckinnon'),
       S.bk('https://archive.org/details/wardshistoryofco00ward')], cen:['c1910m']},

martha:{n:'Martha "Mattie" Ricketson', g:'c', b:'about 1864–72', d:'12 Dec 1928',
  bur:'Arna Primitive Baptist Church Cemetery, Willacoochee, Atkinson County',
  ev:'<b>Her maiden name is proven from the census itself</b>, not from a tree. Her father <b>John Rickerson</b> was living in the household in 1910 and the enumerator labelled him "maternal grandfather."<br><br><b>Note the name correction.</b> Her headstone gives her as Martha <b>"Mattie"</b> Ricketson — <b>there is no middle name "Ann."</b> The "Martha Ann" in circulation appears unsourced; her own mother was Martha Amanda Overstreet, which may be where it came from.<br><br><b>An unresolved discrepancy:</b> the headstone says born 15 June 1864, but the census puts her at 38 in 1910, implying about 1872. Eight years apart. The relationship is settled; her birth year is not.',
  src:[S.fs('https://www.familysearch.org/ark:/61903/1:1:MLKH-2Z4'),
       S.fg('https://www.findagrave.com/memorial/33601555/martha-mckinnon')], cen:['c1910m']},

elias:{n:'Elias Carver', g:'pr', b:'20 Mar 1877', bp:'Coffee County, Georgia', d:'13 Aug 1954',
  bur:'Carver Baptist Church Cemetery, Douglas, Coffee County',
  ev:'<b>Probable father of Mary Jane Carver — and the census makes the case strong.</b> The 1950 enumeration puts the Carver household a few doors from the McKinnons in the same district at Mora: Elias as head, Laura as wife aged 72, and daughter "Levada" aged 38, matching Mary Jane’s known sister Leevader Carver Starling. Her brother Ben Carver is enumerated nearby.<br><br>What is missing is a record stating the Mary Jane → Elias relationship outright. <b>Be careful here</b> — there was more than one Carver–McKinnon marriage in this community, and two McKinnon grandchildren who are <i>not</i> Monroe’s were living in the Carver house in 1950.',
  src:[S.fg('https://www.findagrave.com/memorial/35358790/elias-carver')], cen:[]},

laura:{n:'Laura Story', g:'pr', b:'5 Sep 1877', d:'11 Nov 1958',
  bur:'Carver Baptist Church Cemetery, Douglas, Coffee County',
  ev:'Married Elias Carver on <b>24 December 1899</b> in Coffee County. Read directly off the 1950 census page: "Carver, Laura — Wife — F 72 — Georgia." Her own parents are given as Josiah Story and Jincy Willis Story — <i>lead only</i>, from a memorial note rather than a record.<br><br>Story is a northern English name from the Old Norse personal name <i>Stori</i> — Scandinavian-derived, out of the Danelaw.',
  src:[S.fg('https://www.findagrave.com/memorial/35358802/laura-carver')], cen:[]},

rb:{n:'Richard Benjamin "R. B." Luke', g:'c', b:'24 Dec 1853', bp:'Berrien County, Georgia',
  d:'2 Aug 1926', dp:'Coffee County, Georgia', bur:'Luke Cemetery, Coffee County',
  ev:'<b>He got into this tree on a document.</b> Lucius Luke’s 1920 death certificate names his father plainly as "R B Luke," and the 1860 and 1870 Berrien County censuses show him as a boy of 6 and a young man of 17 in John Luke’s house.<br><br><b>He was a substantial landowner near Lax.</b> Tax-sale notices for a neighbour’s 245 acres in 1924–25 describe the tract as "bounded on the North by lands of R. B. Luke… on the West by lands of R. B. Luke and O. J. Paulk" — he owned land on two sides of it, sixteen months before he died. He was drawn as a juror for the City Court of Douglas in 1914.<br><br><b>And he held big family reunions.</b> The <i>Douglas Enterprise</i> of 18 July 1914 reported one at his residence near Lax, listing guests from Douglas, Ambrose, Ocilla, Alapaha and Willacoochee — one paragraph that maps the whole clan’s geography. Another followed in 1915, ending with "a prayer and praise meeting."<br><br>He died <b>intestate</b>: in September 1926 "Jane Luke having made application in due form of law to be appointed Administratrix upon the estate of R. B. Luke." His headstone carries a Masonic emblem.<br><br>He also resolves the <b>John J. Luke question</b> — that older John J. Luke (1876–1939) was his son, which makes him Jack’s uncle, not his father.',
  src:[S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/39416'),
       S.fg('https://www.findagrave.com/memorial/35224777/richard-benjamin-luke'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1914-07-18/ed-1/seq-1/'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1926-09-10/ed-1/seq-7/')],
  cen:['c1860b','c1870b','c1880rb']},

janeyawn:{n:'Jane (Janie Ruth) Yawn', g:'c', b:'1855', d:'1943',
  ev:'<b>Named on Lucius Luke’s 1920 death certificate as his mother: "Jane Yawn."</b> That is a primary record, not a tree. She outlived her husband by seventeen years and was appointed administratrix of his intestate estate in 1926.<br><br><b>Her own parents are still not found</b>, and this is now one of the two best open questions in the tree. A promising thread: the Georgia death registers show an <b>Elizabeth Luke, née Yawn</b>, born December 1855 and died in Clinch County in 1924, daughter of a Yawn father and a Smith mother; her brother Thomas Yawn (d. 1925) names their father as <b>Antney (Anthony) Yawn</b>. Two Yawn women of nearly identical age both marrying Luke men suggests sisters — but suggestion is not evidence, and the two have not been merged.<br><br><b>The Yawns came to Georgia from South Carolina</b> in the 1810s–20s and settled Telfair and Appling Counties. Their Georgia homeland is unmistakable: the surname appears in Telfair County newspapers at <b>forty-four times</b> the statewide rate.',
  src:[S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/39416'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/208852')], cen:['c1880rb']},

henrysharper:{n:'Henry S. Harper', g:'c', b:'about 1854',
  ev:'<b>Narcisus Harper’s father — newly identified.</b> A 1932 history of Irwin County lists the family outright: "Henry S. Harper married Polly Vickers. Children: Asa… Richard… Dawson… Edwin… Sallie… <b>Narcissus, who married L. L. Luke</b>, and Betty."<br><br>He is corroborated independently in the 1870 census as <b>"Henry S., 16"</b> in the household of Henry S. C. Harper and Nancy at Irwinville — which places him in the right family at the right age.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.fs('http://us-census.org/pub/usgenweb/census/ga/irwin/1870/pg0269a.txt')], cen:[]},

pollyvickers:{n:'Polly Vickers', g:'c',
  ev:'Named as Narcisus Harper’s mother in the 1932 Irwin County history. The Vickers were one of the county’s pioneer families and the name recurs throughout these records — including among the guests at R. B. Luke’s 1914 reunion.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt')], cen:[]},

jimmckinnon:{n:'James "Jim" McKinnon', g:'pr', b:'9 Dec 1846', bp:'Waresboro, Ware County, Georgia',
  d:'6 Sep 1924', dp:'Coffee County', bur:'Arna Primitive Baptist Church Cemetery',
  ev:'Married Mary Jane Durham in 1863; thirteen children, of whom George Albert is yours. A landowner in the 6th District, Land Lot 202, with sons and kin holding the tracts around him.<br><br><b>The best single document in this whole project is about him.</b> The <i>Douglas Enterprise</i> of 13 July 1912 described a Fourth of July reunion at his house — a melon cutting, "a barrel of Lemonade setting in the gate with about a dozen dippers that meant help yourself," dinner "spread out under the large oaks on a long table," and a crop "such as dont grow on every mans place." The correspondent ends: <i>"some one will have to read this little notice for uncle Jim for he never reads news papers nor anything else but the bible or hymn book."</i><br><br>Seven years later the same paper noted that <b>Mrs. McKinnon called at the office and renewed her subscription</b>. She was the reader in that marriage.<br><br>He and the Durhams were among the founding families of Roberts’ Methodist Church, organised about 1866 near Kirkland.',
  src:[S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1912-07-13/ed-1/seq-1/'),
       S.bk('https://archive.org/details/wardshistoryofco00ward'),
       S.fg('https://www.findagrave.com/memorial/33601533/james-mckinnon')], cen:[]},

marydurham:{n:'Mary Jane Durham', g:'pr', b:'25 Sep 1844', d:'1921',
  ev:'Married Jim McKinnon in 1863 and bore thirteen children. Her people, the Durhams, helped found Roberts’ Methodist Church alongside the McKinnons about 1866 — Seth Durham of Ware County, born in South Carolina about 1799, sat on the first Coffee County grand jury in 1854.<br><br>In January 1919 the <i>Douglas Enterprise</i> recorded that she came into the office and <b>renewed the family’s newspaper subscription in her own name</b> — a small thing that says a great deal, given that her husband could read nothing but the Bible and the hymn book.<br><br><b>A caution:</b> the published sketch naming Seth Durham and Elzie Taff as her parents does not survive checking — Seth Durham’s 1850 household contains no Mary Jane. The McKinnon–Durham association is solid; her specific parentage is not.',
  src:[S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1919-01-17/ed-1/seq-5/'),
       S.fg('https://www.findagrave.com/memorial/33601551/mary-jane-mckinnon')], cen:[]},

rickerson:{n:'John P. Ricketson', g:'c', b:'4 Jun 1828', bp:'Montgomery County, Georgia',
  d:'2 Jul 1912', dp:'Coffee County', bur:'Royals Cemetery, Kirkland, Atkinson County',
  ev:'<b>He is here because a census enumerator wrote three words.</b> In 1910, aged 86, he was living in his daughter’s house at Pearson, and the enumerator recorded his relationship as <b>"maternal grandfather"</b> — which is what turns the Ricketson name from a tree claim into a documented fact.<br><br><b>And we have his own sworn words.</b> His Confederate pension file contains three affidavits, each signed <b>with his mark</b> — he could not write his name. Asked where he was born, he answered <i>"Montgomery County, Ga."</i> He enlisted <b>12 January 1862, Company I, 26th Regiment Georgia Volunteers</b>; was <b>captured and carried to Point Lookout, Maryland</b>; and was <b>wounded four times and never recovered</b>. In 1902 he swore he had lived in Georgia continuously "ever since the 4 day of June 1828."<br><br>Take that date over the 1830 on his memorial and the 1824 implied by the census — it is the only version he stated under oath, and he stated it twice.<br><br><b>One unverified note that matters:</b> a contributor to his memorial says he was the son of Sarah Ricketson and a John Peterson, born before she married. If true, the Ricketson surname here descends through an unmarried mother and the biological male line is Peterson. Unproven — but it is the sharpest illustration in this whole tree of why a surname is not an ancestry.',
  src:[S.pen('https://vault.georgiaarchives.org/digital/collection/TestApps/id/307550'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MLKH-2Z4'),
       S.fg('https://www.findagrave.com/memorial/72551977/john_p_griffis-ricketson')], cen:['c1910m']},

marthaoverstreet:{n:'Martha Amanda Overstreet', g:'l', b:'about 1835', d:'about 1921',
  ev:'<b>Lead only.</b> Named as John P. Ricketson’s wife and Martha "Mattie" Ricketson’s mother on an unsourced memorial. No record located.<br><br>The surname is interesting in its own right: <b>Overstreet is probably not English at all</b>, but an altered form of the Flemish <i>Overstraete</i> — topographic, roughly "across the street." It is absent from the British surname dictionaries. Flemish and Dutch families entered the Chesapeake and the Carolinas in the colonial period, which fits the standard Virginia → Carolinas → Georgia route exactly.', src:[], cen:[]},

johnluke:{n:'John Luke', g:'c', b:'about 1798', d:'10 Oct 1875',
  bur:'St. Luke Missionary Baptist Church Cemetery, Alapaha, Berrien County',
  ev:'<b>Proven as R. B. Luke’s father by two censuses</b> — 1860, with Richard B. aged 6, and 1870, with him aged 17. The "implausible 32-year age gap" that hung over this couple turns out to be an artifact of a bad memorial birth year: the census gives 62 against 40, a 22-year gap, and <b>it was his second marriage</b>.<br><br>His first wife was an Elizabeth whose surname is unknown; Joseph, John G., James E., Elizabeth C. and William H. are hers. He married <b>Telitha Jane Graves on 11 August 1850 in Laurens County</b>, where her family had just arrived from North Carolina. Ruth J. (1852) and Richard B. (1853) begin her children.<br><br>There is a lovely internal corroboration here: <b>two North Carolina–born Graves sisters married a father and his son.</b> Telitha married John; her sister Rutha Ellen married John’s son James E. The 1860 census shows them in adjacent dwellings, both women recorded as born in North Carolina.<br><br>He farmed, owned $500 in land and $760 in personal property — mostly livestock — and <b>he and Telitha were both unable to read or write</b>. <b>He held no enslaved people</b>: the Berrien County slave schedule was read page by page and no Luke appears on it.<br><br><b>Whether he was Daniel Luke’s son is unresolved.</b> No document links them, and the Irwin County marriage register for 1820–1835 and the tax digests for 1820–1830 are both lost.',
  src:[S.fs('http://us-census.org/pub/usgenweb/census/ga/berrien/1860/pg00363.txt'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MCSF-B51'),
       S.fg('https://www.findagrave.com/memorial/38336202/john-luke')],
  cen:['c1860b','c1870b']},

telitha:{n:'Telitha Jane Graves', g:'c', b:'10 Jun 1819', bp:'<b>North Carolina</b>', d:'16 Nov 1896',
  bur:'St. Luke Missionary Baptist Church Cemetery, Alapaha, Berrien County',
  ev:'<b>Confirmed, and she carries the tree out of Georgia.</b> Both the 1860 and 1870 censuses record her as born in <b>North Carolina</b> — the only foreign-state birth in the direct Luke line for three generations.<br><br>She married John Luke on <b>11 August 1850 in Laurens County, Georgia</b>, where the Graves family had just arrived. Her sister Rutha Ellen married John’s son James E., and the 1860 census shows the two North Carolina–born sisters living in adjacent houses.<br><br>Her people trace to <b>Brunswick County, North Carolina</b>, where Benjamin Graves appears in the 1790 census, born before 1774. Her parents are given as Joseph Graves (b. about 1796, NC) and Rutheo Ogletree (b. about 1793, NC).<br><br>Like her husband, she was <b>unable to read or write</b>. Her granddaughter through Jemima Patience was named <b>Tillitha Jane Harper</b> for her.',
  src:[S.fs('http://us-census.org/pub/usgenweb/census/ga/berrien/1860/pg00363.txt'),
       S.fg('https://www.findagrave.com/memorial/38336658/tetlita-jane-luke')],
  cen:['c1860b','c1870b']},

hscharper:{n:'Henry S. C. Harper', g:'c', b:'about 1817', bp:'Georgia',
  ev:'Narcisus Harper’s grandfather. The 1870 census finds him at Irwinville, aged 53, a farmer with $500 in land and $1,810 in personal property, his wife Nancy beside him and seven children at home including <b>"Henry S., 16"</b> — Narcisus’s father.<br><br>In 1860 he was better off still: <b>$1,400 in land and $2,235 in personal property</b>. <b>And he held no enslaved people</b> — he is absent from the Irwin County slave schedule for both 1850 and 1860.<br><br>That pairing is the single most useful lesson in this whole archive. In the same county the same year, Susan Harper held $2,485 in personal property <i>and</i> two enslaved men. Nearly identical estates, opposite records. In wiregrass Georgia personal property meant <b>cattle</b> — herds of several hundred head were ordinary. <b>Property value is not a proxy for slaveholding in either direction.</b><br><br>His land fell from $1,400 to $500 between 1860 and 1870. Since he held no one, that decline is wartime loss — impressment, currency collapse, devalued land — not emancipation.',
  src:[S.fs('http://us-census.org/pub/usgenweb/census/ga/irwin/1870/pg0269a.txt'),
       S.sl('http://us-census.org/pub/usgenweb/census/ga/irwin/1860/slave.txt')], cen:[]},

nancymerritt:{n:'Nancy Merritt', g:'c', b:'about 1817', bp:'<b>North Carolina</b>',
  ev:'Recorded in the 1870 census at Irwinville as Nancy, 53, born North Carolina — the transcriber notes her as née Nancy Anna Merritt. She is the second North Carolina birth in this tree, alongside Telitha Jane Graves, and both point the family back toward the Carolinas a generation before Georgia.<br><br>A 1932 county history lists the couple’s thirteen children, among them Henry S., who married Polly Vickers and fathered Narcisus.',
  src:[S.fs('http://us-census.org/pub/usgenweb/census/ga/irwin/1870/pg0269a.txt'),
       S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt')], cen:[]},

jamesmalcolm:{n:'James Malcolm McKinnon Sr.', g:'pr', b:'about 1804', bp:'<b>North Carolina</b>',
  d:'1880', dp:'Coffee County, Georgia',
  ev:'<b>The deepest McKinnon ancestor, and the most morally complicated person in this tree.</b><br><br>He served as a private in <b>Captain Levi J. Knight’s Independent Company, Lowndes County, 15 August – 15 October 1838</b>, raised, in the muster roll’s own words, "on a sudden emergency to repel the invasion of the Indians." 1838 is the year of the Cherokee removal; in south Georgia it was the aftermath of the Creek war and the tail of the Second Seminole War. Settlers were in real danger and experienced it as defence. It was also, unmistakably, service on the removal side of a war of dispossession, on land already being handed out to white settlers by lottery. Both things are true and the second does not cancel the first.<br><br>He was <b>Sheriff of Coffee County, 1856–1858</b> — and in that office he conducted <b>sales of enslaved people at the courthouse door</b>. The notices survive: "One negro man, Backus, about thirty-five years old"; "One negro woman, Ar’sey, 24 or 25 years old, and her two children."<br><br>He appears in the 1840 Ware County census as <b>"KINON, James M."</b> — the odd spelling is why he is easy to miss. He married three times: Nancy Atkinson, Emily "Millie" Rodgers of Tattnall County, and Louisa Meeks of Emanuel County.<br><br><b>His own parents are unknown.</b> No record names them, no North Carolina county is identified, and the line stops here.',
  src:[S.bk('https://raycityhistory.wordpress.com/2019/09/14/roster-of-levi-j-knights-company-1838/'),
       S.bk('https://archive.org/details/wardshistoryofco00ward'),
       S.fg('https://www.findagrave.com/memorial/167868173/james-malcolm-mckinnon')], cen:[]},

danielluke:{n:'Daniel Luke', g:'pr', b:'about 1783', d:'after 1850',
  ev:'<b>The Luke pioneer of Irwin County — and the frontier edge of the tree.</b><br><br>The earliest Luke record found anywhere in Georgia is his: <b>July term, 1825</b>, when the Irwin County Inferior Court appointed "Daniel Luke, James Stephens and Thomas Porter… to mark out river road from lower line of the county to the Dooly line." There is <i>no</i> Luke household in the 1820 Irwin County census, so the family arrived between 1820 and 1825. He was road commissioner again in 1829, 1835 and 1836, and tax collector of the 433rd District in 1829.<br><br>A 1932 county history records that <b>"Daniel Luke married Bettie Hammonds. They moved from South Carolina on Little Peedee River"</b> and lists his children: Joshua A., Mack, Jasper, James C., John, Jesse J., David, Betsey and Mary. Every testable claim in that sketch checks out against independent records — marriages, death certificates naming parents, census birthplaces — which is why it is graded probable rather than lead.<br><br><b>A real unsolved problem:</b> the 1850 census gives Daniel M. Luke as born in <i>Georgia</i> about 1783, which sits awkwardly with sons born in South Carolina in 1803–05. And the 1830 census and tax digest each show <b>two</b> Daniel Lukes in Irwin County. Whether "our" John Luke (b. about 1798) is his son is <b>not established</b>, and should not be assumed.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/41362')],
  cen:['c1850i']},

josephgraves:{n:'Joseph Graves', g:'l', b:'about 1796', bp:'North Carolina',
  ev:'<b>Lead only.</b> Given as Telitha Jane Graves’s father in a compiled family genealogy; married Rutheo Ogletree, also North Carolina–born. The family first appears in Georgia in the 1850 census of <b>Laurens County</b> — which is exactly where and when John Luke married Telitha, in August 1850. That coincidence is the strongest thing supporting the identification.',
  src:[S.bk('https://www.graves-fa.org/gen-histories/gens/gen382.html')], cen:[]},

benjamingraves:{n:'Benjamin Graves', g:'l', b:'before 1774', bp:'<b>North Carolina</b>',
  ev:'<b>Lead only — and the furthest back this tree currently reaches, at nine generations.</b><br><br>Recorded in <b>Brunswick County, North Carolina in the 1790 census</b>, and possibly a taxpayer in Northampton County, North Carolina in 1780, in Brunswick by 1784.<br><br>If the identification holds, he is the only ancestor in this tree documented on American soil before the Revolution ended — and the Graves line is the one that carries you out of Georgia and into colonial North Carolina.',
  src:[S.bk('https://www.graves-fa.org/gen-histories/gens/gen382.html')], cen:[]},

leonardharper:{n:'Leonard Harper', g:'pr', b:'before 1800', d:'before 1845',
  ev:'<b>The first Harper in Irwin County.</b> He appears in the 1830 census and in the 1830 tax digest — the earliest that survives — and is absent from the 1820 census, so the Harpers arrived in the same window as the Lukes. His will was probated at the January 1845 term of the Irwin County court.<br><br>A 1932 county history says he <b>"came from McIntosh County, Georgia"</b> and reared five sons and three daughters. That is a notably different origin story from the Lukes’ — it implies the Harpers entered Georgia by the <b>coast</b>, not overland from the Carolinas.<br><br><b>And here the family record turns uncomfortable.</b> Susan Harper of Irwin County — aged 75 in 1860, born South Carolina, and probably his widow — is the one household in this entire tree documented holding enslaved people: <b>two men, aged 33 and 30</b>, on the 1860 slave schedule. Her identification as Leonard’s widow is probable, not certain.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.sl('http://us-census.org/pub/usgenweb/census/ga/irwin/1860/slave.txt')], cen:[]}
};

/* ============================ GENERATIONS ============================ */
const GENS = [
 {no:'I', t:'Jaxon', era:'2000 –', rows:[{lab:'', a:'jaxon'}]},
 {no:'II', t:'Parents', era:'living', rows:[{lab:'Father and mother', a:'richard', b:'andrea'}]},
 {no:'III', t:'Grandparents', era:'1937 – living', rows:[
   {lab:'Paternal — the Luke side', a:'elmer', b:'sally'},
   {lab:'Maternal — the McKinnon side', a:'andrew', b:'lucille'}]},
 {no:'IV', t:'Great-grandparents', era:'1893 – 1989', rows:[
   {lab:'Luke — Holt and Bridgetown, by way of Florida', a:'jack', b:'nealie'},
   {lab:'Hall — Ambrose, Coffee County', a:'jessehall', b:'mattiecribb'},
   {lab:'McKinnon — Pearson, then Mora', a:'monroe', b:'maryjane'},
   {lab:'Giddens — Pearson, Atkinson County', a:'joegiddens', b:'sallymercer'}]},
 {no:'V', t:'Great-great-grandparents', era:'1864 – 1958', rows:[
   {lab:'Luke — Ocilla, Irwin County', a:'lucius', b:'narcisus'},
   {lab:'Hinton — Levyville, Levy County, Florida', a:'mackie', b:'abby'},
   {lab:'McKinnon — Pearson, Coffee County', a:'george', b:'martha'},
   {lab:'Carver — Douglas, Coffee County', a:'elias', b:'laura'}]},
 {no:'VI', t:'Third great-grandparents', era:'1828 – 1943', rows:[
   {lab:'Luke — near Lax, Coffee County', a:'rb', b:'janeyawn'},
   {lab:'Harper — Irwinville, Irwin County', a:'henrysharper', b:'pollyvickers'},
   {lab:'McKinnon — Waresboro, then Coffee County', a:'jimmckinnon', b:'marydurham'},
   {lab:'Ricketson — Montgomery County, then Coffee', a:'rickerson', b:'marthaoverstreet'}]},
 {no:'VII', t:'Fourth great-grandparents', era:'1798 – 1896', rows:[
   {lab:'Luke — Berrien County, by way of a Laurens County wedding', a:'johnluke', b:'telitha'},
   {lab:'Harper — Irwinville, Irwin County', a:'hscharper', b:'nancymerritt'},
   {lab:'McKinnon — born in North Carolina about 1804', a:'jamesmalcolm'}]},
 {no:'VIII', t:'Fifth great-grandparents', era:'1783 – 1850', rows:[
   {lab:'Luke — the Irwin County pioneer, from South Carolina', a:'danielluke'},
   {lab:'Harper — the first Harper in Irwin County', a:'leonardharper'},
   {lab:'Graves — North Carolina into Laurens County, Georgia', a:'josephgraves'}]},
 {no:'IX', t:'Sixth great-grandparents', era:'before 1774', rows:[
   {lab:'Graves — Brunswick County, North Carolina, 1790 census', a:'benjamingraves'}]}
];
