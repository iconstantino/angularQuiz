(function(){
    angular
        .module('manchesterFacts')
        .controller('listCtrl', ListController);


        function ListController(){
            var vm = this;

            vm.data = playersData;
        }

    var playersData = [
            {
                firstName: 'Zlatan',
                lastName : 'Ibrahimovic',
                birthplace: 'Malmo, Sweden',
                position: 'Striker',
                birthdate: '03 Oct 1981',
                bio: 'Raised by Bosnian and Croatian parents, he achieved national idol status in Sweden after being born in Malmo and emerging as one of the country\'s most popular sportsmen of all time. He has been voted the Swedish Footballer of the Year for nine seasons in a row.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/AD4AB926AC884F1B82BA94B6E2A19438.ashx?w=240&h=311&rgn=0,0,2000,2593'
            },
            {
                firstName: 'Henrikh',
                lastName : 'Mkhitaryan',
                birthplace: 'Yerevan, Armenia',
                position: 'Midfielder',
                birthdate: 'January 21, 1989',
                bio: 'Raised by Bosnian and Croatian parents, he achieved national idol status in Sweden after being born in Malmo and emerging as one of the country\'s most popular sportsmen of all time. He has been voted the Swedish Footballer of the Year for nine seasons in a row.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/0ABFC3C3E9CC4061987EAFD10412A558.ashx?w=240&h=311&rgn=26,0,1973,2520'
            },
            {
                firstName: 'Wayne',
                lastName : 'Rooney',
                birthplace: 'Croxteth, Liverpool',
                position: 'Striker',
                birthdate: '24 Oct 1985',
                bio: 'Wayne Rooney is Manchester United\'s all-time leading scorer and the only player to have scored 250 goals for the Reds, a milestone he reached when he broke Sir Bobby Charlton\'s long-standing record in January 2017.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/374AA068C74A419EBC844D25CDC93EB2.ashx?w=240&h=311&rgn=0,0,2000,2592'
            },
            {
                firstName: 'Paul',
                lastName : 'Pogba',
                birthplace: 'Lagny-sur-Marne',
                position: 'Midfielder',
                birthdate: '15 Mar 1993',
                bio: 'With his (seemingly ever-changing) shaved hairstyles, sharp cheekbones and long limbs, he is a striking figure. A footballing icon instantly recognisable to millions worldwide, he\'s clearly capable of handling his superstar status. ',
                img: 'http://www.manutd.com/sitecore/shell/~/media/24281BCB9D784BDAB54EB74526D0A26F.ashx?w=240&h=311&rgn=0,0,2000,2593'
            },
            {
                firstName: 'Marcus',
                lastName : 'Rashford',
                birthplace: 'Manchester',
                position: 'Striker',
                birthdate: '31 Oct 1997',
                bio: 'With Anthony Martial, Wayne Rooney and Will Keane sidelined, Rashford was handed a first-team debut for the Europa League game against Midtjylland and grabbed his opportunity with both hands by scoring twice.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/D938CED4EC664A51863FF79FA1629298.ashx?w=240&h=311&rgn=0,0,2000,2591'
            },
            {
                firstName: 'David',
                lastName : 'De Gea',
                birthplace: 'Manchester',
                position: 'Striker',
                birthdate: '07 Nov 1990',
                bio: 'David De Gea made history in May 2016 by becoming the first Manchester United player to win three consecutive Sir Matt Busby Player of the Year awards. It was an unprecedented honour for the goalkeeper and it cemented his status as a fan-favourite at Old Trafford.',
                img: 'http://www.manutd.com/sitecore/shell/~/media/95C636EC4F3E4109AC080C8CB5087433.ashx?w=240&h=311&rgn=0,0,2000,2593'
            }
        ]
})();