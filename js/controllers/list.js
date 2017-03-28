(function(){
    angular
        .module('manchesterFacts')
        .controller('listCtrl', ListController);

        ListController.$inject = ['quizMetrics'];

        function ListController(quizMetrics){
            var vm = this;

            vm.quizMetrics = quizMetrics;
            vm.data = playersData;
            vm.activePlayer = {};
            vm.changeActivePlayer = changeActivePlayer;
            vm.activateQuiz = activateQuiz;
            vm.search = "";

            function changeActivePlayer(index){
                vm.activePlayer = index;
            }

            function activateQuiz(){
                quizMetrics.changeState(true);
            }
        }

    var playersData = [
            {
                firstName: 'Zlatan',
                lastName : 'Ibrahimovic',
                birthplace: 'Malmo, Sweden',
                position: 'Striker',
                birthdate: '03 Oct 1981',
                bio: 'Raised by Bosnian and Croatian parents, he achieved national idol status in Sweden after being born in Malmo and emerging as one of the country\'s most popular sportsmen of all time. He has been voted the Swedish Footballer of the Year for nine seasons in a row.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/AD4AB926AC884F1B82BA94B6E2A19438.ashx?w=240&h=311&rgn=0,0,2000,2593',
                imgAlt: 'http://www.campuslive24.com/wp-content/uploads/2016/07/zlatan.jpg',
                extendedBio: 'Zlatan Ibrahimović (Swedish pronunciation: [ˈslaːtan ɪbraˈhiːmɔvɪtɕ] ( listen), Bosnian: [zlǎtan ibraxǐːmoʋitɕ] ( listen); born 3 October 1981) is a Swedish professional footballer who plays as a forward for English club Manchester United. He was also a member of the Sweden national team, making his senior international debut in 2001 and serving as captain from 2010 until he retired from international football in 2016.[3] Primarily a striker, he is a prolific goalscorer, who is best known for his technique, creativity, strength, ability in the air, and his powerful and accurate striking ability. As of February 2017, he is the second most decorated active footballer in the world, having won 32 trophies in his career.[4] <br><br> Ibrahimović began his career at Malmö FF in the late 1990s before being signed by Ajax, where he made a name for himself. He signed for Juventus and excelled in Serie A in a strike partnership with David Trezeguet. In 2006, he signed for rival side Internazionale and was named to the UEFA Team of the Year in both 2007 and 2009. In addition, Ibrahimović would finish as the league\'s top scorer in 2008–09 and win three straight Scudetti. In the summer of 2009, he transferred to Barcelona, before moving back to Serie A football the following season, joining Milan in a deal that made him one of the highest-paid players in the world.[5] He won another Scudetto with Milan in the 2010–11 season. He joined Paris Saint-Germain in July 2012. During his four-season stay at PSG, Ibrahimović won four consecutive Ligue 1 titles, three Coupes de la Ligue, two Coupes de France and was the top scorer in Ligue 1 for three seasons. In October 2015, he became PSG\'s all time leading goalscorer. He finished his PSG career with 156 goals in 180 competitive matches.[6] <br><br> Ibrahimović is one of ten players to have made 100 or more appearances for the Swedish national team. He is the country\'s all-time leading goalscorer with 62 goals. He represented Sweden at the 2002 and 2006 FIFA World Cups, as well as the 2004, 2008, 2012, and 2016 UEFA European Championships. He has been awarded Guldbollen (the Golden Ball), given to the Swedish player of the year, a record 11 times, including 10 consecutive times from 2007 to 2016.[7] <br><br> With his playing style and acrobatic finishing compared to Dutch retired striker Marco van Basten, Ibrahimović is widely regarded as one of the best strikers in the game and one of the best footballers of his generation.[8][9][10][11] His spectacular bicycle kick for Sweden against England won the 2013 FIFA Puskás Award for Goal of the Year.[12] Off the field, he is known for his brash persona and outspoken comments, in addition to referring to himself in the third person.[13][14] In December 2013, Ibrahimović was ranked by The Guardian as the third-best player in the world, behind only Lionel Messi and Cristiano Ronaldo.[15] In December 2014, Swedish newspaper Dagens Nyheter named him the second-greatest Swedish sportsperson of all time, after tennis player Björn Borg.[16]'
            },
            {
                firstName: 'Henrikh',
                lastName : 'Mkhitaryan',
                birthplace: 'Yerevan, Armenia',
                position: 'Midfielder',
                birthdate: 'January 21, 1989',
                bio: 'Raised by Bosnian and Croatian parents, he achieved national idol status in Sweden after being born in Malmo and emerging as one of the country\'s most popular sportsmen of all time. He has been voted the Swedish Footballer of the Year for nine seasons in a row.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/0ABFC3C3E9CC4061987EAFD10412A558.ashx?w=240&h=311&rgn=26,0,1973,2520',
                imgAlt: 'https://massispost.com/wp-content/uploads/2016/11/henrikh_mkhitaryan.jpg',
                extendedBio: 'Henrikh Mkhitaryan (Armenian: Հենրիխ Մխիթարյան, [hɛnˈɾiχ məχitʰɑˈɾjɑn] ( listen); born 21 January 1989) is an Armenian professional footballer who plays as a midfielder for English club Manchester United, as well as captaining the Armenia national team. Mkhitaryan is Armenia\'s all-time top goalscorer, scoring 20 goals in 62 international matches since his debut in January 2007, including their first hat-trick. His previous clubs include Pyunik, where he came through the youth system, Metalurh Donetsk, Shakhtar Donetsk and Borussia Dortmund.[3] <br><br> Mkhitaryan has been chosen Armenian Footballer of the Year five times (every year since 2009, except 2010). In 2012 he was voted as the best Shakhtar player of the 2011–12 season by the fans, and was named Ukrainian Premier League Footballer of the Year. In 2012, Mkhitaryan was named in UEFA\'s Top 100 players by UEFA European Football Yearbook 2012–13.[4] Mkhitaryan was voted the CIS Footballer of the Year for 2012, making him the first Armenian footballer to be named the best player from post-Soviet countries.[5] He received the award again for 2013.[6] Mkhitaryan received the nickname Heno from his fans in Armenia[7][8] and was nicknamed Micki by Borussia Dortmund fans.[9]'
            },
            {
                firstName: 'Wayne',
                lastName : 'Rooney',
                birthplace: 'Croxteth, Liverpool',
                position: 'Striker',
                birthdate: '24 Oct 1985',
                bio: 'Wayne Rooney is Manchester United\'s all-time leading scorer and the only player to have scored 250 goals for the Reds, a milestone he reached when he broke Sir Bobby Charlton\'s long-standing record in January 2017.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/374AA068C74A419EBC844D25CDC93EB2.ashx?w=240&h=311&rgn=0,0,2000,2592',
                imgAlt: 'http://e1.365dm.com/15/09/16-9/20/wayne-rooney-england-record_3348333.jpg?20150908215124',
                extendedBio: 'Wayne Mark Rooney (/ˈruːni/; born 24 October 1985) is an English professional footballer who plays for and captains both Manchester United and the England national team. He has played much of his career as a forward, and he has also been used in various midfield roles. He is the highest goal scorer for Manchester United. <br><br> Aged nine, Rooney joined the youth team of Everton, for whom he made his professional debut in 2002 at the age of 16. He spent two seasons at the Merseyside club, before moving to Manchester United for £25.6 million in the 2004 summer transfer window. Since then, with Rooney in the team, United have won the Premier League five times, the UEFA Champions League once, the FIFA Club World Cup once, the FA Community Shield four times, the Football League Cup thrice and the FA Cup once. In September 2013, Rooney scored his 200th goal for Manchester United.[3] He is currently on 250 goals in all competitions which makes him the club\'s top goalscorer of all time. His 195 Premier League goals make him the competition\'s second top scorer of all time, behind Alan Shearer. Rooney holds the record for most goals for one club in the Premier League, with 180 for Manchester United. <br><br> Rooney made his senior international debut in February 2003 aged 17, becoming the youngest player to represent England (a record since broken by Theo Walcott) and he is England\'s youngest ever goalscorer.[4] He played at UEFA Euro 2004 and scored four goals, briefly becoming the youngest goalscorer in the history of the European Championship. Rooney has since featured at the 2006, 2010 and 2014 World Cups and is widely regarded as his country\'s best player.[5][6][7][8] He has won the England Player of the Year award four times, in 2008, 2009, 2014 and 2015. With 53 goals in 118 international caps, Rooney is England\'s all-time record goalscorer and second most-capped player, behind Peter Shilton. Along with David Beckham, Rooney is the most red carded player for England, having been sent off twice. <br><br> In 2009–10, Rooney was awarded the PFA Players\' Player of the Year and the FWA Footballer of the Year. He has won the Premier League Player of the Month award five times, a record only bettered by Steven Gerrard. He came fifth in the vote for the 2011 FIFA Ballon d\'Or and was named in the FIFPro World 11 for 2011. Rooney has won the Goal of the Season award by the BBC\'s Match of the Day poll on three occasions, with his bicycle kick against rivals Manchester City winning the Premier League Goal of the 20 Seasons award.[9]'
            },
            {
                firstName: 'Paul',
                lastName : 'Pogba',
                birthplace: 'Lagny-sur-Marne',
                position: 'Midfielder',
                birthdate: '15 Mar 1993',
                bio: 'With his (seemingly ever-changing) shaved hairstyles, sharp cheekbones and long limbs, he is a striking figure. A footballing icon instantly recognisable to millions worldwide, he\'s clearly capable of handling his superstar status. ',
                img: 'http://www.manutd.com/sitecore/shell/~/media/24281BCB9D784BDAB54EB74526D0A26F.ashx?w=240&h=311&rgn=0,0,2000,2593',
                imgAlt: 'http://i.dailymail.co.uk/i/pix/2016/05/30/21/34C749FD00000578-0-image-a-15_1464640464849.jpg',
                extendedBio: 'Paul Labile Pogba (born 15 March 1993) is a French professional footballer who plays for Premier League club Manchester United and the France national team. He operates primarily as a central midfielder and is comfortable playing both in attack and defence.[3] <br><br> After beginning his career with Manchester United in 2011, Pogba joined Italian side Juventus in 2012, and helped the club to four consecutive Serie A titles, as well as two Coppa Italia and two Supercoppa Italiana titles. During his time with the club, he established himself as one of the most promising young players in the world, and received the Golden Boy award in 2013, followed by the Bravo Award in 2014 and was named by The Guardian as one of the ten most promising young players in Europe. In 2016, Pogba was named to the 2015 UEFA Team of the Year as well as the 2015 FIFA FIFPro World XI, after helping Juventus to the 2015 UEFA Champions League Final. Despite leaving Manchester United on a free transfer, Pogba returned to the club in 2016 for a world record transfer fee of €105 million (£89.3 million).[4] <br><br> Internationally, at under-20 level, he captained his nation to victory at the 2013 FIFA U-20 World Cup and took home the Best Player award for his performances during the tournament. He made his debut for the senior French national team on 22 March 2013 in a 3–1 win against Georgia, and scored his first World Cup goal on 30 June 2014 against Nigeria; he was awarded the Best Young Player Award for his performances at the 2014 FIFA World Cup, after reaching the quarter-final. He later represented his nation at UEFA Euro 2016 on home soil, where he scored one goal as his team reached the final.'
            },
            {
                firstName: 'Marcus',
                lastName : 'Rashford',
                birthplace: 'Manchester',
                position: 'Striker',
                birthdate: '31 Oct 1997',
                bio: 'With Anthony Martial, Wayne Rooney and Will Keane sidelined, Rashford was handed a first-team debut for the Europa League game against Midtjylland and grabbed his opportunity with both hands by scoring twice.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/D938CED4EC664A51863FF79FA1629298.ashx?w=240&h=311&rgn=0,0,2000,2591',
                imgAlt: 'http://www.101greatgoals.com/wp-content/uploads/2016/03/2503.jpg',
                extendedBio: 'Marcus Rashford (born 31 October 1997) is an English professional footballer who plays as a forward for Premier League club Manchester United and the England national team. <br><br> A Manchester United player from the age of seven, he scored twice in both his first-team debut (Europa League) after the warm-up injury of striker Anthony Martial and in his first Premier League game in February 2016 (against Arsenal). He also scored in his first Manchester derby game, and his first League Cup game. <br><br> Rashford scored on his England debut in May 2016, becoming the youngest English player to score in his first senior international game. He was chosen for UEFA Euro 2016.'
            },
            {
                firstName: 'David',
                lastName : 'De Gea',
                birthplace: 'Manchester',
                position: 'Striker',
                birthdate: '07 Nov 1990',
                bio: 'David De Gea made history in May 2016 by becoming the first Manchester United player to win three consecutive Sir Matt Busby Player of the Year awards. It was an unprecedented honour for the goalkeeper and it cemented his status as a fan-favourite at Old Trafford.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/95C636EC4F3E4109AC080C8CB5087433.ashx?w=240&h=311&rgn=0,0,2000,2593',
                imgAlt: 'http://i1.mirror.co.uk/incoming/article6521340.ece/ALTERNATES/s615b/Manchester-United-v-Sunderland-Premier-League',
                extendedBio: 'David de Gea Quintana (Spanish pronunciation: [daˈβið ðe ˈxea kinˈtana]; born 7 November 1990) is a Spanish professional footballer who plays as a goalkeeper for English club Manchester United and the Spain national team. He has been hailed as one of the best goalkeepers in the world.[3][4] <br><br> Born in Madrid, De Gea began his career aged 13 with Atlético Madrid and rose through the academy system at the club before making his senior debut in 2009. After being made Atlético\'s first-choice goalkeeper, he helped the team win both the UEFA Europa League and the UEFA Super Cup in 2010. His performances attracted the attention of Manchester United, whom he joined in June 2011 for £17.8 million, a British record for a goalkeeper. <br><br> Since joining United, De Gea has made over 200 appearances and won a Premier League title, an FA Cup, a League Cup and three Community Shields. For three consecutive seasons from 2013–14 to 2015–16, he was elected as United\'s Sir Matt Busby Player of the Year, the first player in the award\'s history to win on three successive occasions. [5] <br><br> De Gea was the captain for the Spain under-21 national side that won the European Championship in 2011 and 2013, and also competed in the 2012 Olympics. He made his debut for the senior team in 2014 and was selected for that year\'s World Cup, and has been tipped by many as the successor to Iker Casillas as Spain\'s long-term goalkeeper.[6]'
            }
        ]
})();