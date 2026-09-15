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
  occ:['Farmer','pr',
    'In 1950 the enumerator found him on a farm on the Lax–Willacoochee road and wrote <b>60</b> in the hours column — sixty hours in the previous week — then left the occupation column itself blank on his row. The hours and the place are the record; the word <i>farmer</i> is the inference from them.'],
  ev:'<b>His parentage is now proven twice over.</b> He appears as "John," age 3, in the 1900 Irwin County household of Lucius and Narcessia Luke, and again as "John C W Luke," age 12, in 1910.<br><br><b>The burial place is a correction:</b> he lies at Brushy Creek in Ocilla, not at Lax or Willacoochee — a cemetery that was not previously on the family’s list.<br><br><b>He married twice.</b> The Irwin County index records "LUKE, JOHNNIE — McMILLAN, CLYDE — 09/08/1918," a first marriage that produced Richard Cleo Luke Sr., the family’s "Cleo." Nealie was his second wife.<br><br><b>The doubt about that marriage is now settled.</b> A 1920 census entry pairing a <i>Clyde Luke, 18</i> with a <b>Wm L Luke</b> had raised the possibility that Clyde McMillan married Jack’s brother rather than Jack — which would have made Cleo a nephew instead of a half-brother. Reading the Irwin County register straight through answers it: <b>"LUKE W. L. — HANLEY CLYDE — 06/23/1918"</b> sits in the same index, three months before <b>"LUKE JOHNNIE — MCMILLAN CLYDE — 09/08/1918."</b> <b>Two different women named Clyde, two different Lukes.</b> The 1920 household is W. L. Luke and Clyde Hanley, and it says nothing about Jack.<br><br>In 1950 the enumerator found him on a farm on the Lax–Willacoochee road with Nealie and twelve children at home, and recorded him working <b>sixty hours</b> in the previous week.',
  src:[S.fg('https://www.findagrave.com/memorial/41253001/john-wesley-luke'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:M3JC-3CC'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:ML2H-JFH'),
       S.mar('http://www.southgeorgiagenealogy.com/marrfix1.htm')],
  cen:['c1900','c1910l','c1930','c1950l']},

nealie:{n:'Nealie Hinton', g:'c', b:'17 Oct 1906', bp:'Levy County, <b>Florida</b>',
  d:'20 Feb 1983', dp:'Tift County, Georgia',
  bur:'Brushy Creek Primitive Baptist Church Cemetery, Ocilla, Irwin County',
  occ:['Keeping house','c',
    'The 1950 enumerator marked her <b>“H”</b> — keeping house — and then <i>no, no, no</i> across the work questions, with twelve children in the household. It is the census’s way of recording a working life as no occupation at all.'],
  ev:'<b>The most useful single fact about her: she was a Floridian.</b> Born in Levy County, Florida — corroborated three times over, by her headstone and independently by the 1930 and 1950 censuses.<br><br>That explains a stubborn negative. A search of the complete Irwin County marriage index — roughly 7,000 entries across all years — turns up only three Hintons in the county’s entire history, none of them hers. <b>The Hintons were never a Georgia family.</b> Surname mapping bears this out: Hinton is <i>five times rarer</i> in these ten counties than in Georgia as a whole.<br><br>She is found as "Neal Hinton," aged 2, in her widowed mother’s Levy County household in 1910. She may have been christened <b>Maggie Nealie</b>.',
  src:[S.fg('https://www.findagrave.com/memorial/41253006/nealie-luke'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MVKD-BS6'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:3WL3-KMM')],
  cen:['c1910h','c1930','c1950l']},

jessehall:{n:'Jesse Lee Hall', g:'c', b:'about 1902',
  occ:['Farmer, own account','c',
    '1950: <b>“Farmer / Farm / O”</b> — the <i>O</i> for own account, working his own place — 48 hours that week. Two of his children were entered beside him at 48-hour weeks of their own, marked <b>“NP”</b>: no pay.'],
  ev:'<b>Newly identified.</b> Named as father in three of his children’s obituaries. Heads the 1950 census household at North Ambrose and First Street, recorded as "Hall, Jessie C., Head, age 48" — note the census initial "C." against the obituaries’ "Lee."<br><br>His occupation column reads <b>"Farmer / Farm / O"</b> — the O meaning he worked his own place rather than a tenancy, which in 1950 Coffee County was not the majority position. Eleven children were in the house.',
  src:[S.ob('https://www.relihanfuneralhome.com/obituaries/joe-bud-hall')], cen:['c1950h']},

mattiecribb:{n:'Mattie Cribb', g:'c', b:'about 1910',
  occ:['Keeping house','c',
    'Marked <b>“H”</b> in 1950. Two of her children, aged 20 and 19, were recorded on the lines below hers working 48-hour weeks on the family place for <b>no pay</b> — which is the same arrangement she was under, entered in a different column.'],
  ev:'<b>Newly identified.</b> Named consistently as "Mattie Cribb Hall" in three of her children’s obituaries; appears in the 1950 census as "Mattie, wife, age 40," keeping house for a household of thirteen.<br><br><b>Cribb is a genuinely rare and locally rooted name</b> — only about 3,600 bearers in the entire United States, and nine times more concentrated in these counties than chance would give. English, from the Old English word for a manger. Its rarity makes it one of the most tractable lines left to research.',
  src:[S.ob('https://www.currentobituary.com/obit/262396')], cen:['c1950h']},

monroe:{n:'Monroe McKinnon Sr.', g:'c', b:'4 Oct 1900', d:'12 Jan 1989',
  bur:'Arna Primitive Baptist Church Cemetery, Willacoochee, Atkinson County',
  occ:['Farmer, own account','c',
    '1950: <b>“Farmer / Farm / O”</b>, fifty hours that week, working his own land in Coffee County.<br><br>The sheet is worth looking at for a second reason. Almost every other household the enumerator wrote down on that page — the Jacksons, the Grahams, the Millses — is Black, and almost every one of them gives the same answer in the occupation column: <b>turpentine</b>. Monroe’s farm sat in the middle of a turpentine neighbourhood, and the page records the two economies side by side.'],
  ev:'<b>His parentage is now proven.</b> The 1910 census at Pearson records him as "Monroe McKinnon, Son, age 9" in the household of Art (George Albert) McKinnon and Martha — with Martha’s own father, John Rickerson, living there and labelled <i>maternal grandfather</i> by the enumerator.<br><br>The online tree’s "approximately 1901" is corrected to <b>4 October 1900</b> from his headstone. Named "the late Monroe McKinnon, Sr." in five of his children’s obituaries.<br><br><b>Note the geography:</b> the family lived at Pearson and later Mora and buried at Arna. Pearson and Willacoochee are Atkinson County today, but Atkinson was carved out of Coffee County in 1917 — which is why this family reads as Coffee in some records and Atkinson in others.',
  src:[S.fg('https://www.findagrave.com/memorial/61237192/monroe-mckinnon'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MLKH-2Z4'),
       S.ob('https://www.ricketsonfuneralhome.com/obituaries/monroe-mckinnon/')],
  cen:['c1910m','c1950m']},

maryjane:{n:'Mary Jane Carver', g:'c', b:'24 Nov 1900', d:'14 May 1982',
  bur:'Arna Primitive Baptist Church Cemetery, Willacoochee, Atkinson County',
  occ:['Keeping house','c',
    'The 1950 enumerator wrote <b>“H”</b> against her name and <i>no, no, no</i> across the three work questions that follow it — the standard entry for a farm wife, and one that counts none of what she actually did as work.'],
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
  occ:['Farmer','c',
    'Box 8 of his 1920 death certificate — “Trade, profession, or particular kind of work” — reads simply <b>Farmer</b>. The Fitzgerald paper was more generous: “a prominent farmer of Irwin county.”<br><br>The estate sales that followed say what that amounted to in equipment. <b>Four hundred and ninety acres</b> were advertised off the courthouse steps in 1922, levied again in 1923, and in December 1924 a creditor came for the machinery: a Frick Eclipse steam engine and boiler on iron wheels — a sawmill or threshing rig.'],
  ev:'<b>His death certificate is the keystone document of this tree.</b> Georgia certificate no. 18075 gives his birth as 9 October 1872 — correcting the 1873 in circulation — and names his own parents as <b>"R B Luke" and "Jane Yawn."</b> That is how this line reached back a further generation on documentary evidence rather than hearsay.<br><br><b>How he died is now known too.</b> The Fitzgerald paper, 23 June 1920: <i>"the remains of L. L. Luke, a prominent farmer of Irwin county were laid to rest at Brushy Creek church. The deceased was only sick for three days, when death overtook him."</i> He was 48.<br><br>His headstone reads <i>"An honest man, the noblest work of GOD"</i> beneath a Masonic emblem.<br><br><b>And then the family lost the land.</b> Within two years his widow Narcissus was levied on for unpaid taxes on <b>490 acres</b> — Lot 261, 5th land district — and again the year after that. In December 1924 a creditor took the family’s steam engine. The boll weevil had reached Georgia in 1915 and state cotton acreage halved between 1914 and 1923; the Lukes were inside a regional collapse, not merely unlucky.',
  src:[S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/39416'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053306/1920-06-23/ed-1/seq-5/'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1922-06-09/ed-1/seq-10/'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1924-12-12/ed-1/seq-7/')],
  cen:['c1900','c1910l']},

narcisus:{n:'Narcisus Harper', g:'c', b:'about 1877', d:'12 Nov 1940',
  bur:'Brushy Creek Primitive Baptist Church Cemetery, Ocilla',
  occ:['Administratrix of the estate','c',
    'No record found gives her a trade. What the record does give her is the job of holding the place together after 1920: the tax levies of 1922 and 1923 name <b>“Mrs. L. L. Luke”</b> as the party whose land was being sold, and the 1924 seizure of the steam engine names <b>“Narcissus Luke, administratrix”</b> of her husband’s estate.'],
  ev:'Named on two Georgia death certificates as the mother of Lucius Luke’s children — "Narcisus Harper" in 1919 and "Narcis Harper" in 1925. Married Lucius on <b>21 October 1894</b> per the Irwin County register as published in 1932. (Your notes said the 27th; the county register says the 21st.)<br><br><b>Her birth year needs correcting</b> — she is 22 in 1900 and 32 in 1910, both pointing to about <b>1877–78</b>, not the 1874 that circulates.<br><br><b>Her own parents are now identified: Henry S. Harper and Polly Vickers.</b> A 1932 county history lists the family and names "Narcissus, who married L. L. Luke" outright.<br><br>After Lucius died she was administratrix of an estate that was sold out from under her — 490 acres levied for taxes twice, and the steam engine seized in 1924.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/34891'),
       S.mar('http://www.southgeorgiagenealogy.com/marrfix1.htm')],
  cen:['c1900','c1910l']},

mackie:{n:'Mackie Hinton', g:'c', b:'uncertain \u2014 see below', d:'about 1910', dp:'Levy County, Florida',
  ev:'<b>He is no longer a ghost \u2014 there is a marriage record.</b> The Levy County, Florida marriage licences read: <b>\u201cHinton, M. N. \u2014 Abby Johns \u2014 5 December 1901.\u201d</b> That is a document naming the couple, not an inference.<br><br>The 1910 census supports it from the other side: <b>Abby is enumerated as widowed</b>, confirming a husband dead before April 1910, and <b>the youngest child is a one-year-old boy named Mack.</b><br><br><b>His birth year is now genuinely in doubt, though.</b> An adult <b>M. N. Hinton sat on a Levy County jury in 1877</b> \u2014 so born by about 1856. The unsourced memorial giving Mackie as born 1880 cannot be that man, and the 1901 groom could be either. A search of all 62 archived Levy County cemetery transcriptions found <b>no Hinton headstone anywhere in the county</b>, which also undercuts that memorial\u2019s burial claim. The marriage return gives ages, and would settle it.',
  src:[S.mar('https://ufdcimages.uflib.ufl.edu/AA/00/06/43/30/00017/searchforyesterd1719levy_pdf.txt'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MVKD-BS6')], cen:['c1910h']},

abby:{n:'Abigail Elizabeth "Abby" Johns', g:'c', b:'about 1884', bp:'Florida',
  d:'3 Apr 1950', dp:'Levy County, Florida',
  ev:'<b>Confirmed as Nealie’s mother by the 1910 census</b> — which was the weakest link in the entire tree until that page turned up. She heads a Levyville household as a 26-year-old widow with four children, the middle one "Neal," aged two.<br><br><b>The Giddens remarriage is corroborated from an unexpected direction:</b> the 1930 Luke household in Irwin County contains <b>Ben Giddens, aged 11, born Florida</b> — Nealie’s half-brother, living with his grown sister. That anchors a cluster of online links that are otherwise internally contradictory.<br><br><b>And a claim about her own parents is now discredited.</b> The Henry Madison Johns / Margaret Douglas attribution fails its own test. The census says her father was born in <b>ALABAMA</b>; and no Henry Johns of any kind appears in any of the 62 archived Levy County cemetery transcriptions, in the county marriage lists 1854\u20131906, or in the Florida death index. The attribution has no documentary origin at all.<br><br>The <b>Douglas</b> half may survive \u2014 a Douglas family was demonstrably in Levy County in the right era. Her 1950 Florida death certificate would name both parents outright.<br><br><b>A third, independent corroboration of the Giddens remarriage turned up sideways.</b> Nealie\u2019s eldest sister proves to be <b>Montie Otelia Hinton</b>, who married John Henry Booth \u2014 and Booth is buried in the <b>Giddens family plot</b> at Chiefland Cemetery. That was reached with no reliance on any online tree.',
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
  occ:['Farmer and landowner','pr',
    'No document states his trade in a single word. What they state is land. In 1914 his holdings near Lax bounded a neighbour’s 245 acres on two sides, and he was drawn as a juror for the City Court of Douglas — a list drawn in that period from freeholders. He died intestate and his widow Jane was appointed administratrix. A Masonic emblem is cut on his stone.'],
  ev:'<b>He got into this tree on a document.</b> Lucius Luke’s 1920 death certificate names his father plainly as "R B Luke," and the 1860 and 1870 Berrien County censuses show him as a boy of 6 and a young man of 17 in John Luke’s house.<br><br><b>He was a substantial landowner near Lax.</b> Tax-sale notices for a neighbour’s 245 acres in 1924–25 describe the tract as "bounded on the North by lands of R. B. Luke… on the West by lands of R. B. Luke and O. J. Paulk" — he owned land on two sides of it, sixteen months before he died. He was drawn as a juror for the City Court of Douglas in 1914.<br><br><b>And he held big family reunions.</b> The <i>Douglas Enterprise</i> of 18 July 1914 reported one at his residence near Lax, listing guests from Douglas, Ambrose, Ocilla, Alapaha and Willacoochee — one paragraph that maps the whole clan’s geography. Another followed in 1915, ending with "a prayer and praise meeting."<br><br>He died <b>intestate</b>: in September 1926 "Jane Luke having made application in due form of law to be appointed Administratrix upon the estate of R. B. Luke." His headstone carries a Masonic emblem.<br><br>He also resolves the <b>John J. Luke question</b> — that older John J. Luke (1876–1939) was his son, which makes him Jack’s uncle, not his father.',
  src:[S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/39416'),
       S.fg('https://www.findagrave.com/memorial/35224777/richard-benjamin-luke'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1914-07-18/ed-1/seq-1/'),
       S.np('https://gahistoricnewspapers.galileo.usg.edu/lccn/sn89053042/1926-09-10/ed-1/seq-7/')],
  cen:['c1860b','c1870b','c1880rb']},

janeyawn:{n:'Jane (Janie Ruth) Yawn', g:'c', b:'about 1855', bp:'<b>Coffee County, Georgia</b>', d:'1943',
  occ:['Administratrix','c',
    'Appointed administratrix of R. B.’s intestate estate — which is to say the county put the settling of it in her hands. She outlived him by roughly eighteen years.'],
  ev:'<b>Named on Lucius Luke\u2019s 1920 death certificate as his mother: \u201cJane Yawn.\u201d</b> That certificate, read from the original image rather than the index, also gives her birthplace \u2014 <b>Coffee County, Georgia</b> \u2014 and that one word is what made everything below possible.<br><br><b>She has now been found as a child, and the record is a hard one.</b> The 1860 census of Coffee County, 5th District, P.O. Bird\u2019s Mills, page 527, lists three small Yawn girls boarded in a neighbour\u2019s house \u2014 the Elias Johns family \u2014 with no parents present: <b>Elizabeth, 5 \u00b7 Jane, 4 \u00b7 Pollyan, 1.</b> Two doors away live the only other Yawns in the county, Shadrach, 96, born South Carolina, and his wife Rosanah, 78.<br><br>The mortality schedule for the same county and year explains why the girls were boarded out: <b>\u201cElizabeth Yawn, 29, married, born Georgia, died February 1860 \u2014 cause of death: Child Bed.\u201d</b> Their mother died in childbirth four months before the census. Polly Ann, aged one, was almost certainly the child she died having.<br><br><b>And it makes the sisters real.</b> Elizabeth Luke n\u00e9e Yawn \u2014 who died in Clinch County in 1924 with a certificate naming her father as \u201cYawn\u201d and her mother as \u201cSmith\u201d \u2014 is that five-year-old. She and Jane were <b>sisters</b>, not a coincidence of two Yawn women marrying two Luke men. The \u201cAntney Yawn\u201d parentage now rests on a household, not a name match \u2014 stronger, but still short of proof.<br><br>She outlived her husband by seventeen years and was appointed administratrix of his intestate estate in 1926. <b>There is no Yawn of any spelling in the 1870 Coffee County census</b> \u2014 the family had gone.',
  src:[S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/39416'),
       S.cen('https://iiif.archive.org/iiif/populationschedu117unit%24530/full/full/0/default.jpg'),
       S.bk('http://genealogytrails.com/geo/coffee/1860-mortality.html')], cen:['c1880rb']},

henrysharper:{n:'Henry S. Harper', g:'c', b:'about 1854',
  ev:'<b>Narcisus Harper’s father — newly identified.</b> A 1932 history of Irwin County lists the family outright: "Henry S. Harper married Polly Vickers. Children: Asa… Richard… Dawson… Edwin… Sallie… <b>Narcissus, who married L. L. Luke</b>, and Betty."<br><br>He is corroborated independently in the 1870 census as <b>"Henry S., 16"</b> in the household of Henry S. C. Harper and Nancy at Irwinville — which places him in the right family at the right age.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.fs('http://us-census.org/pub/usgenweb/census/ga/irwin/1870/pg0269a.txt')], cen:[]},

pollyvickers:{n:'Polly Vickers', g:'c',
  ev:'Named as Narcisus Harper’s mother in the 1932 Irwin County history. The Vickers were one of the county’s pioneer families and the name recurs throughout these records — including among the guests at R. B. Luke’s 1914 reunion.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt')], cen:[]},

jimmckinnon:{n:'James "Jim" McKinnon', g:'pr', b:'9 Dec 1846', bp:'Waresboro, Ware County, Georgia',
  d:'6 Sep 1924', dp:'Coffee County', bur:'Arna Primitive Baptist Church Cemetery',
  occ:['Farmer and landowner','c',
    'Farmed in the 6th District, Land Lot 202. One of the founding families of Roberts’ Methodist Church. He is remembered as having read nothing but the Bible and the hymn book.'],
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
  occ:['Farmer','c',
    'Asked his occupation on his Confederate pension application he answered, under oath, <b>Farmer</b>, and signed the paper with a mark. He served in <b>Company I, 26th Georgia</b>.<br><br>The rest of the file is harder than that one word. His widow’s affidavit, sworn at Douglas on 5 August 1912, records that he had been drawing the state’s <b>indigent</b> pension — sixty dollars for the year — and that at his death he was in the use and possession of, in the clerk’s hand, <b>no property</b>.'],
  ev:'<b>He is here because a census enumerator wrote three words.</b> In 1910, aged 86, he was living in his daughter’s house at Pearson, and the enumerator recorded his relationship as <b>"maternal grandfather"</b> — which is what turns the Ricketson name from a tree claim into a documented fact.<br><br><b>And we have his own sworn words.</b> His Confederate pension file contains three affidavits, each signed <b>with his mark</b> — he could not write his name. Asked where he was born, he answered <i>"Montgomery County, Ga."</i> He enlisted <b>12 January 1862, Company I, 26th Regiment Georgia Volunteers</b>; was <b>captured and carried to Point Lookout, Maryland</b>; and was <b>wounded four times and never recovered</b>. In 1902 he swore he had lived in Georgia continuously "ever since the 4 day of June 1828."<br><br>Take that date over the 1830 on his memorial and the 1824 implied by the census — it is the only version he stated under oath, and he stated it twice.<br><br><b>The Peterson claim is refuted as stated.</b> A note on his memorial had him as the son of Sarah Ricketson and a John Peterson, born before she married. Huxford confirms Sarah Ricketson married James Carver — but <b>Sarah was born in 1820</b>, and John P. swore he was born in 1828. She would have been eight years old. The kernel of the story is real, though: Sarah\u2019s sister <b>Rachel Ricketson married James Peterson on 24 January 1825</b>.<br><br><b>Where he probably belongs.</b> Huxford sketches <b>Joseph Ricketson (1784\u20131820) of Montgomery County</b>, son of Timothy Ricketson Jr. and grandson of <b>Timothy Ricketson Sr., a Revolutionary soldier</b> granted 287\u00bd acres of bounty land in Washington County on 20 November 1784. After Joseph died his widow Serena moved to Ware County and farmed in the <b>586th Militia District</b> — the very district where \u201cKINON, James M.\u201d was enumerated in 1840. <b>The Ricketsons and the McKinnons were neighbours a generation before they married.</b> John P. is most likely a grandson of Joseph through one of his adult sons; that link is not yet proven.<br><br><b>Do not merge him with the other John.</b> Huxford also sketches a John Ricketson 1819\u20131891, and Ward\u2019s 1854 Coffee County petit jury list names John Ricketson, John P. Ricketson and Benjamin Ricketson as three separate men.',
  src:[S.pen('https://vault.georgiaarchives.org/digital/collection/TestApps/id/307550'),
       S.fs('https://www.familysearch.org/ark:/61903/1:1:MLKH-2Z4'),
       S.fg('https://www.findagrave.com/memorial/72551977/john_p_griffis-ricketson')], cen:['c1910m']},

marthaoverstreet:{n:'Martha Amanda Overstreet', g:'pr', b:'about 1835', d:'about 1921',
  occ:['No property of her own','c',
    'Her widow’s affidavit lists what she held, item by item, and enters nothing against any of it: acres of land, <b>“No”</b>; horses and mules, none; hogs and cows, none; total cash value, <b>0</b>. She signed it “Amanda <span style=\'font-family:monospace\'>×</span> Ricketson, her mark,” and swore she had lived in Coffee County continuously since <b>1843</b>.'],
  ev:'<b>Her marriage is now proven; her maiden name still is not.</b> Those are two different questions and the record answers only one of them.<br><br>Her own <b>widow’s pension affidavit</b>, sworn before the Ordinary of Coffee County on <b>5 August 1912</b>, opens: <i>“Personally before me comes <b>Amanda Ricketson</b> of said County, who, after being duly sworn, on oath says that she is the widow of <b>J. P. Ricketson</b>”</i> — married in Coffee County, resident there at his death, not since remarried. That is a primary record, and it settles that John P. Ricketson’s widow was named Amanda and was living at Douglas in 1912.<br><br><b>What it does not do is prove Overstreet.</b> The affidavit gives her married name only. The surname Overstreet reaches this tree from an unsourced memorial and stays <i>lead only</i> until a marriage record or a death certificate names her father. She signed the affidavit with a mark and swore she had lived in the county continuously since <b>1843</b>, which puts her in that corner of Georgia a decade before Coffee County existed.<br><br>The surname is interesting in its own right: <b>Overstreet is probably not English at all</b>, but an altered form of the Flemish <i>Overstraete</i> — topographic, roughly "across the street." It is absent from the British surname dictionaries. Flemish and Dutch families entered the Chesapeake and the Carolinas in the colonial period, which fits the standard Virginia → Carolinas → Georgia route exactly.',
  src:[S.pen('https://vault.georgiaarchives.org/digital/collection/TestApps/id/297716')], cen:[]},

johnluke:{n:'John Luke', g:'c', b:'about 1798', d:'10 Oct 1875',
  bur:'St. Luke Missionary Baptist Church Cemetery, Alapaha, Berrien County',
  occ:['Farmer','c',
    'The 1860 census of Berrien County calls him a <b>farmer</b> and puts a figure on it: $500 in land, $760 in personal property — which in that county in that year meant mostly livestock running in unfenced pine woods. He and Telitha are both marked unable to read or write.'],
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

hscharper:{n:'Henry S. C. Harper', g:'c', b:'about 1817', bp:'<b>Irwin County, Georgia</b>',
  ev:'<b>Born in Irwin County itself.</b> Two of his sons’ death certificates, filed two years apart by two different informants, both give his birthplace as <b>Irwin Co., Ga.</b> He was born about 1817 and the county was created in <b>1818</b> — so the Harpers were on that ground from the county’s first year, earlier than the Lukes, who do not appear there until the 1820s.<br><br>Narcisus Harper’s grandfather. The 1870 census finds him at Irwinville, aged 53, a farmer with $500 in land and $1,810 in personal property, his wife Nancy beside him and seven children at home including <b>"Henry S., 16"</b> — Narcisus’s father.<br><br>In 1860 he was better off still: <b>$1,400 in land and $2,235 in personal property</b>. <b>And he held no enslaved people</b> — he is absent from the Irwin County slave schedule for both 1850 and 1860.<br><br>That pairing is the single most useful lesson in this whole archive. In the same county the same year, Susan Harper held $2,485 in personal property <i>and</i> two enslaved men. Nearly identical estates, opposite records. In wiregrass Georgia personal property meant <b>cattle</b> — herds of several hundred head were ordinary. <b>Property value is not a proxy for slaveholding in either direction.</b><br><br>His land fell from $1,400 to $500 between 1860 and 1870. Since he held no one, that decline is wartime loss — impressment, currency collapse, devalued land — not emancipation.',
  src:[S.fs('http://us-census.org/pub/usgenweb/census/ga/irwin/1870/pg0269a.txt'),
       S.sl('http://us-census.org/pub/usgenweb/census/ga/irwin/1860/slave.txt')], cen:[]},

nancymerritt:{n:'Nancy Merritt', g:'c', b:'about 1817', bp:'<b>North Carolina</b>',
  ev:'<b>North Carolina, corroborated — and contradicted.</b> The 1870 census at Irwinville records her as Nancy, 53, <b>born North Carolina</b>. Her son <b>George J. Harper</b>’s 1924 death certificate says the same thing independently, fifty-four years later: maiden name <i>Nancy Merritt</i>, birthplace <b>N.C.</b><br><br>But her son <b>Luke L. Harper</b>’s certificate, filed in 1926 by a different informant, names the same parents and then gives her birthplace as <b>Irwin Co., Ga.</b> Two of three say North Carolina, and it is the harder answer to invent — an informant guessing reaches for the county he is standing in, not a state five hundred miles away. But the disagreement is on the record and belongs here.<br><br>The transcriber of the 1870 sheet notes her as née Nancy Anna Merritt. She is the second North Carolina birth in this tree, alongside Telitha Jane Graves, and both point the family back toward the Carolinas a generation before Georgia.<br><br>A 1932 county history lists the couple’s <b>thirteen</b> children. Four of them can now be named from documents rather than from the book: George J. (1842—1924), Luke L. (about 1845—1926), Flem B. (about 1849—1923), and Henry S., who married Polly Vickers and fathered Narcisus. Turn on <i>Show children</i> to see them.',
  src:[S.fs('http://us-census.org/pub/usgenweb/census/ga/irwin/1870/pg0269a.txt'),
       S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/215283'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/289491')], cen:[]},

jamesmalcolm:{n:'James Malcolm McKinnon Sr.', g:'pr', b:'about 1804', bp:'<b>North Carolina</b>',
  d:'1880', dp:'Coffee County, Georgia',
  occ:['Sheriff of Coffee County','c',
    'A militia private in 1838, in the companies raised for the removal of the Cherokee; then <b>Sheriff of Coffee County, 1856–1858</b>.<br><br>The office is what puts the hardest page in this file in his hands. A Georgia sheriff in that decade conducted the sales that settled debts and estates, and in this state in that decade the property sold at the courthouse door included people.'],
  ev:'<b>The deepest McKinnon ancestor, and the most morally complicated person in this tree.</b><br><br>He served as a private in <b>Captain Levi J. Knight’s Independent Company, Lowndes County, 15 August – 15 October 1838</b>, raised, in the muster roll’s own words, "on a sudden emergency to repel the invasion of the Indians." 1838 is the year of the Cherokee removal; in south Georgia it was the aftermath of the Creek war and the tail of the Second Seminole War. Settlers were in real danger and experienced it as defence. It was also, unmistakably, service on the removal side of a war of dispossession, on land already being handed out to white settlers by lottery. Both things are true and the second does not cancel the first.<br><br>He was <b>Sheriff of Coffee County, 1856–1858</b> — and in that office he conducted <b>sales of enslaved people at the courthouse door</b>. The notices survive: "One negro man, Backus, about thirty-five years old"; "One negro woman, Ar’sey, 24 or 25 years old, and her two children."<br><br>He appears in the 1840 Ware County census as <b>"KINON, James M."</b> — the odd spelling is why he is easy to miss. He married three times: Nancy Atkinson, Emily "Millie" Rodgers of Tattnall County, and Louisa Meeks of Emanuel County.<br><br><b>His own parents are unknown.</b> No record names them, no North Carolina county is identified, and the line stops here.<br><br><b>A warning about the name itself.</b> Huxford\u2019s index to <i>Pioneers of Wiregrass Georgia</i> carries <b>two</b> McKinnons with identical 1804\u20131880 dates: \u201cMcKINNON, James, Atkinson, Vol. VI\u201d and \u201cMcKINNON, Malcolm, Echols, Vol. IV.\u201d The second is a demonstrably different man \u2014 Thomas then Brooks then Echols County, Methodist, Echols County Treasurer, married Margaret McKinnon in 1832. <b>The composite \u201cJames Malcolm McKinnon\u201d may be a conflation of the two.</b> Volume VI has never been digitised; until someone reads it, treat the middle name as unverified.<br><br><b>And one argument against Highland descent does not survive.</b> Huxford shows the Wiregrass Highland families were routinely <b>Primitive Baptist</b> within a generation of arriving \u2014 the McCranies, the McInnises, the McLeans, Malcolm McMillan. Church affiliation proves nothing either way here.<br><br><b>The best untested lead:</b> Charles and Margaret McKinnon of Telfair County. Margaret was born in North Carolina about 1775; their children bracket a migration to Georgia around 1803\u201306, and the 1830 census shows four sons born 1800\u201310. Circumstantial, unproven, and the estate of Charles McKinnon is the record that would test it.',
  src:[S.bk('https://raycityhistory.wordpress.com/2019/09/14/roster-of-levi-j-knights-company-1838/'),
       S.bk('https://archive.org/details/wardshistoryofco00ward'),
       S.fg('https://www.findagrave.com/memorial/167868173/james-malcolm-mckinnon')], cen:[]},

danielluke:{n:'Daniel Luke', g:'pr', b:'about 1783', d:'after 1850',
  occ:['Road commissioner; tax collector','c',
    '<b>Road commissioner for Irwin County</b> in 1825, 1829, 1835 and 1836, and <b>tax collector of the 433rd District</b> in 1829. The order of July 1825 appointing him “to mark out river road” is the earliest Luke record this search turned up anywhere in Georgia.'],
  ev:'<b>The Luke pioneer of Irwin County — and the frontier edge of the tree.</b><br><br>The earliest Luke record found anywhere in Georgia is his: <b>July term, 1825</b>, when the Irwin County Inferior Court appointed "Daniel Luke, James Stephens and Thomas Porter… to mark out river road from lower line of the county to the Dooly line." There is <i>no</i> Luke household in the 1820 Irwin County census, so the family arrived between 1820 and 1825. He was road commissioner again in 1829, 1835 and 1836, and tax collector of the 433rd District in 1829.<br><br>A 1932 county history records that <b>"Daniel Luke married Bettie Hammonds. They moved from South Carolina on Little Peedee River"</b> and lists his children: Joshua A., Mack, Jasper, James C., John, Jesse J., David, Betsey and Mary. Every testable claim in that sketch checks out against independent records — marriages, death certificates naming parents, census birthplaces — which is why it is graded probable rather than lead.<br><br><b>A real unsolved problem:</b> the 1850 census gives Daniel M. Luke as born in <i>Georgia</i> about 1783, which sits awkwardly with sons born in South Carolina in 1803–05. And the 1830 census and tax digest each show <b>two</b> Daniel Lukes in Irwin County. Whether "our" John Luke (b. about 1798) is his son is <b>not established</b>, and should not be assumed.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/41362'),
       S.pen('https://vault.georgiaarchives.org/digital/collection/TestApps/id/120018')],
  cen:['c1850i']},

josephgraves:{n:'Joseph Graves', g:'l', b:'about 1796', bp:'North Carolina',
  ev:'<b>Lead only.</b> Given as Telitha Jane Graves’s father in a compiled family genealogy; married Rutheo Ogletree, also North Carolina–born. The family first appears in Georgia in the 1850 census of <b>Laurens County</b> — which is exactly where and when John Luke married Telitha, in August 1850. That coincidence is the strongest thing supporting the identification.',
  src:[S.bk('https://www.graves-fa.org/gen-histories/gens/gen382.html')], cen:[]},

benjamingraves:{n:'Benjamin Graves', g:'l', b:'before 1774', bp:'<b>North Carolina</b>',
  ev:'<b>Lead only — and the furthest back this tree currently reaches, at nine generations.</b><br><br>Recorded in <b>Brunswick County, North Carolina in the 1790 census</b>, and possibly a taxpayer in Northampton County, North Carolina in 1780, in Brunswick by 1784.<br><br>If the identification holds, he is the only ancestor in this tree documented on American soil before the Revolution ended — and the Graves line is the one that carries you out of Georgia and into colonial North Carolina.',
  src:[S.bk('https://www.graves-fa.org/gen-histories/gens/gen382.html')], cen:[]},

antneyyawn:{n:'Antney (Anthony) Yawn', g:'pr', b:'about 1815',
  ev:'<b>Probable father of Jane Yawn \u2014 and the case is now a household rather than a name.</b><br><br>The chain runs: Thomas Yawn, who died in Cook County in 1925 aged 80, has a death certificate naming his father as <b>\u201cAntney Yawn\u201d</b> and his mother as <b>\u201cSmith.\u201d</b> Elizabeth Luke n\u00e9e Yawn, who died in Clinch County in 1924 aged 69, born December 1855, has a certificate naming her father as <b>\u201cYawn\u201d</b> and her mother as <b>\u201cSmith.\u201d</b> And the 1860 Coffee County census puts that Elizabeth, aged 5, in the same boarded household as <b>Jane, aged 4.</b><br><br>So Jane and Elizabeth were sisters, and Elizabeth\u2019s father was Antney Yawn.<br><br><b>What is still missing:</b> no record names Jane\u2019s father directly. And <b>there is no Antney Yawn in Coffee County in 1860</b> \u2014 the only adult Yawn males there are Shadrach, 96, and Irwin, 25 and unmarried. The father was elsewhere, and his children were placed with neighbours. Finding him as a widower in the 1860 census of Clinch, Ware, Appling or Telfair, with a son Thomas born about 1845, would close the circle.<br><br><b>Thomas’s certificate says where he was born, and it points north.</b> Not Coffee, not Berrien, but <b>Laurens County</b> — a hundred miles up the Oconee, and the old centre of the Yawn surname in Georgia. <b>Which is a coincidence this tree has met before.</b> John Luke married Telitha Jane Graves in <b>Laurens County on 11 August 1850</b>, and the Graves family first appears in Georgia in the 1850 census of that same county. Lukes, Graveses and Yawns were all in Laurens in the same decade, and all three ended up in the same corner of the wiregrass. The <b>1850 Laurens County census</b> is now the most valuable page left unread in this file.<br><br><b>An arithmetic problem that has to be said out loud.</b> If the mother who died in childbirth in February 1860 was <b>29</b>, she was born about <b>1831</b> — which makes her <b>fourteen</b> when Thomas was born in 1845. That does not work. Either his stated age of 80 was a graveside guess, which is ordinary enough, or Antney married twice and Thomas belongs to an earlier wife. Until one of those is settled, <b>Antney stays probable and is not promoted</b>, however neatly the surnames line up.<br><br><b>The one lead left.</b> The Georgia Archives holds a <b>106-page Yawn family compilation</b> — <i>Yawn family, South Carolina &amp; Georgia</i>, compiled for Robert H. Jeffries, 1981 — and a genealogical folder on the family. Neither is digitised; both sit in the building at Morrow. That is where this gets answered, and it will take a person in a reading room rather than another search.<br><br><b>One of those two Coffee County Yawns can now be followed to the end.</b> The “Irwin, 25” of the 1860 census is almost certainly the <b>Irvin Yawn</b> whose widow Sarah applied for a pension from Willacoochee in 1891. Her affidavit says he enlisted about 1 September 1862 in <b>Company C, 55th Georgia</b>, went to the army in Virginia, and then, in her words: <i>“He was taken sick with Measels and sent to the Hospital at Richmond and has never Been heard from since the War.”</i> She signed with her mark and was still waiting twenty-nine years later. He is not Jane’s father — he was unmarried at 25 while she was already four — but he is the other half of the Yawn presence in that county, and his end is now on the record.<br><br><b>Where the marriage is not.</b> Three registers have been read through for R. B. Luke and Jane Yawn, and none of them holds it. The <b>Berrien County index, 1860—1875</b> lists seven Luke marriages and <i>no Yawn of any kind</i> — the whole letter Y runs to four names. The <b>complete Irwin County register</b>, 6,971 marriages spanning a century, carries 43 Lukes and <b>not one Yawn</b>. And <b>Coffee County Marriage Book B-1</b>, catalogued as 1871—1881, in fact opens in <b>December 1872</b> — after the marriage, and after Lucius was already born; the county’s earlier books are not in the filmed series at all. Three counties eliminated is worth nearly as much as a find, because it says where not to look again.<br><br><b>One of those two Coffee County Yawns can now be followed to the end.</b> The \u201cIrwin, 25\u201d of the 1860 census is almost certainly the <b>Irvin Yawn</b> whose widow Sarah applied for a pension from Willacoochee in 1891. Her affidavit says he enlisted about 1 September 1862 in <b>Company C, 55th Georgia</b>, was in the army in Virginia, and then, in her words: <i>\u201cHe was taken sick with Measels and sent to the Hospital at Richmond and has never Been heard from since the War.\u201d</i> She signed it with her mark and was still waiting thirty years later. He is not Jane\u2019s father \u2014 he was unmarried at 25 while she was already four \u2014 but he is the other half of the Yawn presence in that county.<br><br><b>Where the marriage is not.</b> Three registers have now been read through for R. B. Luke and Jane Yawn and none of them has it. The <b>Berrien County index, 1860\u20131875</b>, has seven Luke marriages and <i>no Yawn entry of any kind</i> \u2014 the whole letter Y runs to four names, none of them hers. The <b>complete Irwin County register</b>, 6,971 marriages across a century, has 43 Lukes and <b>not one Yawn</b>. And <b>Coffee County Marriage Book B-1</b>, catalogued as 1871\u20131881, in fact opens in <b>December 1872</b> \u2014 after the marriage, and after Lucius was already born. Coffee County\u2019s earlier books are not in the Archives\u2019 filmed series at all. That is three counties eliminated, which is worth as much as a find.',
  src:[S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/223126'),
       S.ga('https://vault.georgiaarchives.org/digital/collection/gadeaths/id/208852'),
       S.pen('https://vault.georgiaarchives.org/digital/collection/TestApps/id/429809'),
       S.mar('https://vault.georgiaarchives.org/digital/collection/countyfilm/id/187444')], cen:[]},

yawnmother:{n:'Elizabeth Yawn', g:'c', b:'about 1831', bp:'Georgia', d:'February 1860', dp:'Coffee County, Georgia',
  ev:'<b>She died in childbirth, and the record says so in two words.</b><br><br>The 1860 Mortality Schedule for Coffee County, Georgia \u2014 which recorded deaths in the year to 1 June 1860 \u2014 carries the entry: <b>\u201cElizabeth Yawn, 29, Female, Married, born Georgia, died February [1860], occupation Domestic, cause of death: Child Bed.\u201d</b><br><br>Four months later the census enumerator found her three surviving daughters \u2014 Elizabeth 5, Jane 4, Polly Ann 1 \u2014 boarded in a neighbour\u2019s house with no parent present. <b>Polly Ann, aged one, was almost certainly the baby she died having.</b><br><br>Her own surname was probably <b>Smith</b>: two of her children\u2019s death certificates, filed sixty-five years later in two different counties, each name the mother simply as \u201cSmith.\u201d<br><br>She is the reason this branch of the family scattered, and she is four lines in a mortality schedule.',
  src:[S.bk('http://genealogytrails.com/geo/coffee/1860-mortality.html'),
       S.cen('https://iiif.archive.org/iiif/populationschedu117unit%24530/full/full/0/default.jpg')], cen:[]},

josephricketson:{n:'Joseph Ricketson', g:'l', b:'1784', bp:'Burke County, Georgia', d:'1820', dp:'Montgomery County, Georgia',
  ev:'<b>Lead only \u2014 and the caveat matters more than the entry.</b> Huxford sketches Joseph Ricketson of Montgomery County, born in Burke County in 1784, married <b>Serena Foy Arnold</b> (widow of Needham Arnold, daughter of George Foy, born North Carolina) on 17 July 1806 in Tattnall County. Nine children, born 1807\u20131821.<br><br><b>John P. Ricketson\u2019s link into this family is NOT proven.</b> He was born in 1828, eight years after Joseph died, so he cannot be a son. He is most plausibly a grandson through one of Joseph\u2019s adult sons \u2014 Allen (b. 1807), Joseph (b. 1809), Benjamin Franklin (b. 1810) or George (b. 1812) \u2014 all grown men in the right place at the right time. That is a hypothesis, not a finding, and everything above this point in the Ricketson line hangs on it.<br><br><b>One detail that is worth the whole entry:</b> after Joseph died, his widow Serena moved to Ware County and farmed in the <b>586th Militia District</b> \u2014 the exact district where \u201cKINON, James M.\u201d was enumerated in 1840. <b>The Ricketsons and the McKinnons were neighbours three generations before Monroe married Mary Jane.</b>',
  src:[S.bk('https://babel.hathitrust.org/cgi/ssd?id=uga1.32108009929509;seq=267')], cen:[]},

serenafoy:{n:'Serena Foy', g:'l', b:'about 1785', bp:'North Carolina', d:'1856', dp:'Coffee County, Georgia',
  ev:'<b>Lead only</b>, through the unproven link above. Daughter of George Foy; married first Needham Arnold, then Joseph Ricketson on 17 July 1806 in Tattnall County.<br><br>Widowed in 1820 with nine children, she moved to Ware County and bought a farm in the 586th Militia District. That land was cut out of Ware into Clinch in 1850, and out of Clinch into Coffee in 1854 \u2014 <b>she died in Coffee County in 1856 without ever moving again.</b> Three counties, one farm. It is the neatest illustration in this tree of why these families read as Ware, Clinch, Coffee and Atkinson in different records.<br><br>Her census references run 1830, 1840 and 1850, Ware, as a widow.',
  src:[S.bk('https://babel.hathitrust.org/cgi/ssd?id=uga1.32108009929509;seq=267')], cen:[]},

timothysr:{n:'Timothy Ricketson Sr.', g:'l', b:'before 1760', d:'after 1784',
  occ:['Soldier, Continental service','l',
    'Granted bounty land in 1784 for Revolutionary service. The grant is a real record; the line of descent from him down to this family is not.'],
  ev:'<b>Lead only \u2014 and the deepest name currently attached to this tree, at ten generations.</b><br><br>Huxford records him as a <b>Revolutionary soldier</b>, granted <b>287\u00bd acres of bounty land in Washington County, Georgia, on 20 November 1784</b> \u2014 land given for service in the war. Georgia headright plats independently show Ricketsons taking grants in Richmond, Washington and Franklin Counties in 1784\u201385, under plainly English given names: Timothy, Jordan, Marmaduke.<br><br><b>Everything here depends on an unproven link</b> \u2014 John P. Ricketson\u2019s connection to Joseph Ricketson\u2019s family. Treat this as the direction the line probably runs, not as an ancestor established. If it holds, he is the only man in this tree documented fighting in the Revolution.',
  src:[S.bk('https://babel.hathitrust.org/cgi/ssd?id=uga1.32108009929509;seq=267')], cen:[]},

leonardharper:{n:'Leonard Harper', g:'pr', b:'before 1800', d:'before 1845',
  ev:'<b>The first Harper in Irwin County.</b> He appears in the 1830 census and in the 1830 tax digest — the earliest that survives — and is absent from the 1820 census, so the Harpers arrived in the same window as the Lukes. His will was probated at the January 1845 term of the Irwin County court.<br><br>A 1932 county history says he <b>"came from McIntosh County, Georgia"</b> and reared five sons and three daughters. That is a notably different origin story from the Lukes’ — it implies the Harpers entered Georgia by the <b>coast</b>, not overland from the Carolinas.<br><br><b>And here the family record turns uncomfortable.</b> Susan Harper of Irwin County — aged 75 in 1860, born South Carolina, and probably his widow — is the one household in this entire tree documented holding enslaved people: <b>two men, aged 33 and 30</b>, on the 1860 slave schedule. Her identification as Leonard’s widow is probable, not certain.',
  src:[S.bk('https://archive.org/download/historyofirwinco00clem/historyofirwinco00clem_djvu.txt'),
       S.sl('http://us-census.org/pub/usgenweb/census/ga/irwin/1860/slave.txt')], cen:[]}
};

/* ============================ GENERATIONS ============================ */

/* ---------------------------------------------------------------- children
   Whole sibships, keyed by the one child this family descends from.
   `list` runs in birth order; `me` marks the direct line; `g` is the grade of
   the sibship as a whole, so an unproven one draws in rust and dashes.
   Entries are [name, dates, note, kind] — kind 'half' or 'twin' where it
   matters. These people are not in PEOPLE: they have no ancestry drawn, only
   a place beside the sibling this line runs through. */
const KIDS = {

jaxon:{ g:'u', lg:'c', of:'Richard Luke & Andrea Denise McKinnon', src:'Family knowledge \u2014 both are living, so no record is cited or needed',
 list:[
  ['Jordan Parker Luke','living','elder brother \u2014 shares the Parker of his grandfather Elmer Parker Luke'],
  ['Jaxon Brady Luke','b. 2000','the subject of this tree','me']]},

elmer:{ g:'c', of:'Jack Luke & Nealie Hinton', src:'Obituaries of Inez, Brenda, Versa Mae and Lucious; 1930 and 1950 censuses',
 list:[
  ['Richard Cleo Luke Sr.','1920 – 2005','half-brother, son of Jack’s first wife Clyde McMillan; d. Palm Bay, Florida','half'],
  ['Dorothy Lee "Dot" Luke Callaway','b. abt 1927','born Florida; in the 1930 household; died before about 1962'],
  ['Versa Mae Luke Law','1928 – 2020','Martha Berry scholarship; Savannah shipyards in the war; 35 years a seamstress'],
  ['Inez Luke Crosby','1930 – 2016','m. Johnny E. Crosby; machine operator; Willacoochee City Cemetery'],
  ['Doris Kathleen Luke Merritt','1931 – 2002','d. Center Hill, Florida; her Social Security application named the parents'],
  ['Lucious Luke','1933 – 2018','Sears, Elixir Industries, and the City of Willacoochee'],
  ['James E. Luke','d. 2018 × 2023','m. Lenora'],
  ['Curtis Luke','b. 1936','living 2026'],
  ['John Wesley Luke Jr.','1938 – 1982','buried with his parents at Brushy Creek'],
  ['Jewel Faye Luke Moore','living 2023',''],
  ['Voncile "Bonnie" Luke Cavender','living 2023','m. Jim Cavender'],
  ['Ottis Luke','living 2023','m. Barbara'],
  ['Elmer Parker Luke','living','m. Sally Rudine Hall — your grandfather','me'],
  ['Butler Luke','living 2023','m. Linda'],
  ['Brenda Carol Luke Jewell','1949 – 2023','her 2023 obituary is what fixed the size of this family']]},

andrew:{ g:'c', of:'Monroe McKinnon Sr. & Mary Jane Carver', src:'1950 census at Mora, plus five separate funeral notices',
 list:[
  ['Edward McKinnon','1924 – 2002','already grown and gone by the 1950 count'],
  ['Harvey McKinnon','1926 – 2018','U.S. Army, WWII; farmer; deacon, St. Illa Baptist'],
  ['Willie Mae McKinnon','1928 – 2020','never married; seamstress, thirty years at Spectrum'],
  ['Louise McKinnon Maulden','1930 – 2024','m. Beach E. Maulden, 48 years'],
  ['Arlen McKinnon Sr.','1932 – 2015','PFC, U.S. Army, Korea — on his VA marker, and in no obituary'],
  ['Randall McKinnon','1935 – 1999',''],
  ['Andrew McKinnon','1937 – 2009','m. Lucille Giddens — your grandfather','me'],
  ['Betty Jean McKinnon Soles','b. 1939',''],
  ['Florene McKinnon Phillips','b. 1940',''],
  ['Monroe McKinnon Jr.','1941 – 2023','Production Manager, Fleetwood Homes; deacon, Mora Baptist'],
  ['Bobby McKinnon','b. abt 1943','in the 1950 census — and missing from the family group posted online'],
  ['Martha McKinnon Denton','b. abt 1945','m. Billy Denton, Broxton — also missing from that group']]},

sally:{ g:'c', of:'Jesse Lee Hall & Mattie Cribb', src:'1950 census at Ambrose, plus three brothers’ obituaries',
 list:[
  ['Myrtle Hall Shook','age 20 in 1950','"Farm Helper, no pay" — a 48-hour week on her father’s place'],
  ['Henry Hall','age 19 in 1950','"Farm Helper, no pay" — the same 48-hour week'],
  ['Mitchell Hall','1934 – 2012',''],
  ['"Pete" Hall','age 14 in 1950','entered as "Frank" by the enumerator'],
  ['Jesse James "Buck" Hall','1939 – 2022','b. Atkinson County'],
  ['Lorraine Hall','age 9 in 1950',''],
  ['Chester Hall','age 6 in 1950','m. Verneil, of Willacoochee'],
  ['Joe "Bud" Ronald Hall','1947 – 2020','b. Ocilla'],
  ['Sally Rudine Hall','b. Aug 1949','the census infant "Rudine"; m. Elmer Parker Luke — your grandmother','me'],
  ['Judy Hall Luke','deceased','a second Hall sister who married a Luke'],
  ['Shirley "Monk" Hall Griner','—','m. James Griner'],
  ['Myrtice "Possum" Hall Brown','—','']]},

lucille:{ g:'c', of:'Joe Edd Giddens & Sallie Mae Mercer', src:'Ernest Giddens’s 2011 obituary, which named the parents and every sibling',
 list:[
  ['Louell Giddens Bowen','1923 – 2008',''],
  ['Ernest Giddens','1929 – 2011','his obituary is the document that proved this entire family'],
  ['Luther Robert Giddens','1931 – 1996',''],
  ['Mary R. Giddens Rau','1934 – 2009',''],
  ['Fred Giddens','living 2011','of Uvalda, Georgia'],
  ['Jo Ann Giddens Snipes','living 2011','of Albany, Georgia'],
  ['Lucille Giddens','b. 1945','m. Andrew McKinnon — your grandmother','me'],
  ['Jerry & Larry Giddens','both 1947','twins, died in infancy','twin']]},

jack:{ g:'c', of:'Lucius L. Luke & Narcisus Harper', src:'1900 and 1910 censuses, and two Georgia death certificates',
 list:[
  ['Willie L. Luke','1895 – 1925','"a well known young farmer of Irwin County"; died of pneumonia after influenza'],
  ['John Wesley "Jack" Luke','1896 – 1964','your great-grandfather','me'],
  ['Lessie May Luke','1918 – 1919','died at one year, nine months and five days']]},

henrysharper:{ g:'c', of:'Henry S. C. Harper & Nancy Merritt', src:'Four of the thirteen children the 1932 county history reports, each one now carried by a Georgia death certificate naming both parents',
 list:[
  ['George J. Harper','12 Jan 1842 — 4 Mar 1924','farmer at Wray; b. and d. Irwin County; New Hope Cemetery. His certificate gives his mother\u2019s birthplace as N.C.'],
  ['Luke L. Harper','abt 1845 — 15 Jun 1926','farmer at Ocilla; died of sarcoma. His certificate gives the same father and mother, but says she was born in Irwin County'],
  ['Flem B. Harper','abt 1849 — Mar 1923','died in Coffee County. Two certificates were filed for him a day apart, and they disagree about his parents'],
  ['Henry S. Harper','abt 1854','m. Polly Vickers; father of Narcisus — your line','me']]},

janeyawn:{ g:'pr', of:'Antney Yawn & Elizabeth Yawn', src:'1860 Coffee County census, where all three were boarded with the Elias Johns family',
 list:[
  ['Elizabeth Yawn','1855 – 1924','later Elizabeth Luke of Clinch County. Her certificate names the parents by surname only — a dash, then Yawn; a dash, then Smith'],
  ['Jane (Janie Ruth) Yawn','abt 1855 – 1943','m. R. B. Luke — your third-great-grandmother','me'],
  ['Polly Ann Yawn','b. abt 1859','aged one in June 1860 — almost certainly the child her mother died having']]},

johnluke:{ g:'l', of:'Daniel Luke', src:'J. B. Clements, History of Irwin County (1932) — an unsourced family sketch',
 list:[
  ['Joshua A. Luke','b. abt 1803','Senior Warden of Irwin Lodge No. 212; the 1850 census marks him unable to read or write'],
  ['Mack Luke','b. South Carolina',''],
  ['Jasper M. Luke','','Coroner of Irwin County in 1840'],
  ['James C. Luke','',''],
  ['John Luke','abt 1798 – 1875','your fifth-great-grandfather — but no document links him to Daniel','me'],
  ['Jesse J. Luke','','Tax Collector of Irwin County, 1854; Irwin Lodge No. 212 from 1858'],
  ['David Perry Luke','1825 – 1920','Co. G, 50th Georgia. His death certificate names Daniel as his father — the one hard link in this row'],
  ['Betsey Luke','',''],
  ['Mary Luke','','']]}
};

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
   {lab:'McKinnon — born in North Carolina about 1804', a:'jamesmalcolm'},
   {lab:'Yawn — Coffee County; she died in childbirth, February 1860', a:'antneyyawn', b:'yawnmother'}]},
 {no:'VIII', t:'Fifth great-grandparents', era:'1783 – 1850', rows:[
   {lab:'Luke — the Irwin County pioneer, from South Carolina', a:'danielluke'},
   {lab:'Harper — the first Harper in Irwin County', a:'leonardharper'},
   {lab:'Graves — North Carolina into Laurens County, Georgia', a:'josephgraves'},
   {lab:'Ricketson — Montgomery County; the link to John P. is unproven', a:'josephricketson', b:'serenafoy'}]},
 {no:'IX', t:'Sixth great-grandparents', era:'before 1774', rows:[
   {lab:'Graves — Brunswick County, North Carolina, 1790 census', a:'benjamingraves'}]},
 {no:'X', t:'Seventh great-grandparents', era:'before 1760', rows:[
   {lab:'Ricketson — Revolutionary soldier, bounty land 1784', a:'timothysr'}]}
];
