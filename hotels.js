const hotels = [
    {
        name: 'The Square Milano Duomo',
        address: 'Via Albricci 2-4, Център, 20122 Милано, Италия',
        rating: 9.1,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Pets Allowed',
            'Non-Smoker Rooms', 'Restaurant', 'Coffe Machine', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1024x768/119/119790921.jpg',
            'https://cf.bstatic.com/images/hotel/max1024x768/119/119790756.jpg',
            'https://cf.bstatic.com/images/hotel/max1024x768/666/66614891.jpg',
            'https://cf.bstatic.com/images/hotel/max1024x768/666/66613730.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/120/120579092.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/120/120206822.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/119/119788823.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/119/119788828.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/845/84511858.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/666/66613707.jpg'
        ],
        type: 'Hotel',
        price: 432,
        destination: 'Милано',
        desciption: `The Square Milano Duomo се помещава в историческа сграда, на 5 минути пеша от Миланската катедрала, операта Ла Скала и търговската зона Vittorio Emanuele. Предлага ресторант, бар и безплатен Wi-Fi в цялата сграда.

        Всяка стая е в модерен стил и е оборудвана с климатик и минибар. Самостоятелната баня е със сешоар и безплатни тоалетни принадлежности.
        
        The Square Milano се намира на 15 минути пеша от парка Семпионе. Метростанция Missori е на 100 метра.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Самостоятелно пътуващите харесват местоположението - те му дават оценка от 9.5 за самостоятелен престой.`
    },
    {
        name: 'Palazzo Parigi Hotel & Grand Spa - LHW',
        adress: 'Corso Di Porta Nuova 1, Център, 20121 Милано, Италия',
        rating: 9.2,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Spa Center',
            'Pets Allowed', 'Family Rooms', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/623/62317625.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/276/276752704.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/597/59797085.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/763/76388738.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/763/76388683.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/276/276751405.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112682825.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/763/76392613.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274258886.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/597/59794302.jpg'
        ],
        type: 'Hotel',
        price: 312,
        destination: 'Милано',
        description: `Palazzo Parigi Hotel & Grand Spa - LHW се намира в сърцето на Модния квартал в Милано. Този луксозен хотел предлага ресторант и климатизирани стаи с балкон или тераса.

        Елегантните стаи в Palazzo Parigi разполагат с безплатен WiFi, модерни технологии, телевизор с плосък екран, минибар и под с паркет или мрамор. Суитите са обзаведени с кът за сядане.
        
        В ресторанта се приготвят местни специалитети. Гостите могат да опитат традиционни италиански сладкиши в сладкарница Caffè Parigi. При заявка се сервира закуска на шведска маса.
        
        Миланската катедрала е на 1,5 км, а метростанция Turati е на 500 м. Летище „Малпенса“ е на 40 минути път с кола.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Двойките харесват местоположението - те му дават оценка от 9.2 за пътуване за двама.`
    },
    {
        name: 'Armani Hotel Milano',
        address: 'Via Manzoni 31, Център, 20121 Милано, Италия',
        rating: 8.9,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Pets Allowed', 'Spa Center',
            'Non-Smoker Rooms', 'Restaurant', 'Family Rooms', 'Coffe Machine', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/134/13457149.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/134/13458519.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/831/83191788.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/15319783.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/134/13458990.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/831/83191446.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/134/13472270.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/15455771.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/15319804.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/134/13457192.jpg',
            'htts://cf.bstatic.com/images/hotel/max1280x900/133/133338409.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/133/133231528.jpg'
        ],
        type: 'Hotel',
        price: 325,
        destination: 'Милано',
        description: `Armani Hotel Milano се намира в шикозния квартал Quadrilatero della Moda, само на 50 метра от метростанция Montenapoleone. Личен лайфстайл мениджър отвежда гостите до елегантните и модерни стаи.

        Сградата на хотела датира от 1930 г. и е проектирана от Енрико Грифини. Стаите включват обзавеждане от Armani Casa и кафемашина Nespresso. Каменните или мраморни бани разполагат с душ и вана. Всички стаи са оборудвани с LCD телевизор със сателитни канали и iPad.
        
        Armani Milano предлага ежедневна закуска на шведска маса. Ресторантът сервира интернационална кухня и ястия от региона Ломбардия.
        
        След ден, прекаран в срещи, пазаруване или разглеждане на историческия център на Милано, гостите могат да релаксират в сауната или в турската баня. Любителите на спорта могат да посетят фитнес центъра.
        
        Оперният театър Ла Скала и катедралата на Милано са на 10 минути пеша от хотела. Паркът Sempione е на 1 километър.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Двойките харесват местоположението - те му дават оценка от 9.6 за пътуване за двама.`
    },
    {
        name: 'The Corner Duomo Hotel',
        adress: 'Via Adalberto Catena 2, Център, 20121 Милано, Италия',
        rating: 9.2,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Spa Center',
            'Pets Allowed', 'Family Rooms', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271225262.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271225265.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271225267.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271228344.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271226444.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271225260.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271221097.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271226455.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271226465.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271228352.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271225272.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/232/232478340.jpg'
        ],
        type: 'Hotel',
        price: 288,
        destination: 'Милано',
        description: `The Corner Duomo Hotel се намира в Милано, на 300 м от търговската галерия „Виктор Емануел“ и на 500 м от площад „Пиаца дел Дуомо“. Предлага бар, в който гостите заплащат за консумацията си по собствена преценка. Този 4-звезден хотел разполага със система за автоматизация на съоръженията и консиерж услуги. Удобствата се допълват от денонощна рецепция, рум-сървиз и помещение за съхранение на багаж.

        Всички стаи за гости са оборудвани с климатик, 55-инчов смарт телевизор с плосък екран и сателитни канали, електрическа кана, биде, сешоар и бюро. Всички включват гардероб и собствена баня.
        
        Всяка сутрин в The Corner Duomo Hotel се сервира континентална закуска.
        
        Оперният театър „Ла Скала“ и шикозната улица „Монте Наполеоне“ са на 350 м.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Двойките харесват местоположението - те му дават оценка от 9.7 за пътуване за двама.`
    },
    {
        name: 'Hotel VIU Milan',
        address: '6 Via Aristotile Fioravanti, Стационе Гарибалди, 20154 Милано, Италия',
        rating: 9.2,
        stars: 5,
        facilities: [
            'Pool', 'Free Wi Fi', 'Airport Transfer', 'Pets Allowed', 'Spa Center',
            'Non-Smoker Rooms', 'Restaurant', 'Family Rooms', 'Coffe Machine', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1024x768/124/124367365.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/102/102998127.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/103/103163816.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/103/103163844.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/103/103162728.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/988/98833241.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/103/103165114.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/139/139529729.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/139/139529750.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/139/139529715.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/103/103015740.jpg'
        ],
        type: 'Hotel',
        price: 298,
        destination: 'Милано',
        destination: `Hotel VIU Milan се намира в центъра на град Милано, на 10 минути пеша от площад Gae Aulenti и модния квартал Corso Como. Предлага басейн на покрива с панорамен 360-градусов изглед. Хотелът разполага със СПА център, сауна и фитнес зала. Гостите могат да се насладят на питие в бар Mixology.

        Създадени от прочутия дизайнер Никола Галиция, стаите са обзаведени в модерен, елегантен стил с дизайнерски мебели и мраморни бани с пъровокласни тоалетни принадлежности. Всяка стая разполага с безплатен WiFi и смарт телевизор, както и с халати за баня и чехли.
        
        Този 5-звезден хотел е построен с екологични материали. Гостите могат да се наслаждават ма местни специалитети и интернационални ястия в ресторанта с главен готвач, удостоен с 1 звезда Michelin.
        
        Хотел VIU Milan се намира в един от най-популярните квартали на Милано, близо до метростанция Isola и железопътна гара Porta Garibaldi. Разположен е на 10 минути пеша от известния парк Семпионе в Милано. От хотела има удобни връзки с метро за целия град, а най-близката метростанция Monumentale е само на 200 метра. Има удобни връзки и до катедралата Дуомо.`
    },
    {
        name: 'Hotel Dei Cavalieri Milano Duomo',
        address: 'Piazza Giuseppe Missori, 1, Център, 20123 Милано, Италия',
        rating: 9.0,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Pets Allowed', 'Spa Center',
            'Non-Smoker Rooms', 'Restaurant', 'Family Rooms', 'Coffe Machine', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/845/84555172.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/245/245203845.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/245/245204059.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/245/245203963.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/245/245203914.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/245/245203403.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/245/245203303.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/245/245203200.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/845/84522117.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/845/84522060.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/845/84522061.jpg'
        ],
        type: 'Hotel',
        price: 263,
        destination: 'Милано',
        description: `Хотел Dei Cavalieri се помещава в историческа сграда срещу метростанция Missori, само на 250 метра от Миланската катедрала. Предлага безплатен Wi-Fi и ресторант, сервиращ типична италианска кухня.

        Стаите са с декор в класически стил, с дървени мебели, пастелни цветове и мокет или паркет. Всяка разполага с LCD телевизор със сателитни канали и собствена баня с вана или душ.
        
        Закуската в Dei Cavalieri Hotel е на разнообразна шведска маса с избор от колбаси, сирена и пресни сладкиши. В бара се сервират топли леки закуски, а за вечеря се предлагат а ла карт ястия. През лятото е отворен и ресторантът с тераса на последния етаж.
        
        Хотелът се намира близо до фондовата борса на Милано и оперния театър Ла Скала. Метростанция Duomo е отдалечена на 300 метра.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Самостоятелно пътуващите харесват местоположението - те му дават оценка от 9.3 за самостоятелен престой.
        
        Ние говорим на вашия език!`
    },
    {
        name: 'Mandarin Oriental, Milan',
        address: 'Via Andegari 9, Център, 20121 Милано, Италия',
        rating: 8.9,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Pets Allowed', 'Spa Center',
            'Non-Smoker Rooms', 'Restaurant', 'Family Rooms', 'Coffe Machine', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/269/269101948.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/220/220834447.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/269/269102300.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/220/220833652.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/220/220833656.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/220/220833660.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/220/220833663.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/220/220833667.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/212/212110726.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/212/212102299.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/212/212100839.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/628/62881835.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/644/64444096.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/644/64444089.jpg'
        ],
        type: 'Hotel',
        price: 234,
        destination: 'Милано',
        description: `Mandarin Oriental, Milan е само на кратка разходка от бутиците в Модния квартал на Милано. Предлага безплатен уелнес център със закрит басейн и фитнес център, луксозни помещения за настаняване, заседателни зали и ресторант Seta, отличен с 2 звезди Michelin.

        Всички климатизирани стаи и суити се помещават в комплекс от 5 свързани сгради от 18-и век. Всички имат модерен интериор с дизайнерски мебели от Антонио Ситерио и под с паркет. От стаите се открива гледка към вътрешния двор или улицата, а някои са с изглед към Миланската катедрала.
        
        Помещенията за настаняване включват мраморна баня с меки халати и чехли. Всички са оборудвани с кафемашина Nespresso и телевизор с плосък екран с HDMI порт за връзка с лаптоп.
        
        В изискания хотелски ресторант Seta, отличен със звезди Michelin, се сервират италиански ястия. При хубаво време гостите могат да се хранят във вътрешния двор, а при заявка се предоставя самостоятелна стая за хранене. В бар Mandarin се предлагат коктейли. Осигурен е и денонощен рум-сървиз.
        
        Уелнес центърът с площ над 900 кв.м включва закрит басейн, сауна и фитнес център. Могат да се резервират масажи, козметични процедури и фризьорски услуги.
        
        Сред останалите удобства в хотела са обслужване от консиерж, велосипеди и автомобили под наем, както и бизнес център със заседателни зали с естествена дневна светлина.
        
        Оперният театър „Ла Скала“ се намира на 300 м, а летище Linate е най-близкото летище, на 7 км. Хотелът е на 25 минути с кола от изложбения център Area Expo Milan.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Самостоятелно пътуващите харесват местоположението - те му дават оценка от 9.6 за самостоятелен престой.`
    },
    {
        name: 'NH Milano Touring',
        address: 'Via Tarchetti 2, Център, 20121 Милано, Италия',
        rating: 8.5,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Pets Allowed', 'Spa Center',
            'Non-Smoker Rooms', 'Restaurant', 'Family Rooms', 'Coffe Machine', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/228/228243081.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396247.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396248.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396249.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396253.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396254.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396255.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396257.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396258.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396259.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396264.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396273.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252396274.jpg'
        ],
        type: 'Hotel',
        price: 325,
        destination: 'Милано',
        description: `NH Milano Touring се намира на 3 минути пеша от метростанциите Turati и Repubblica. На 1 километър е централната жп гара на Милано, а за 15 минути се стига пеша до центъра на града и търговската улица Via della Spiga.

        Стаите в този дизайнерски хотел са оформени в класически или в модерен стил. Те са с мокет или паркет, безплатен Wi-Fi и климатик. В някои от стаите има LCD телевизор.
        
        Ресторант Pianoterra на Milano Touring сервира богата закуска всяка сутрин. За обяд и вечеря се предлагат класически италиански ястия и международна кухня. Преди вечеря се поднася традиционен милански аперитив.
        
        Международно летище Линате в Милано е разположено на 7,5 километра.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Самостоятелно пътуващите харесват местоположението - те му дават оценка от 8.8 за самостоятелен престой.`
    },
    {
        name: 'Park Hyatt Milano',
        address: 'Via Tommaso Grossi 1, Център, 20121 Милано, Италия',
        rating: 9.4,
        stars: 5,
        facilities: [
            'Parking', 'Free Wi Fi', 'Airport Transfer', 'Pets Allowed', 'Spa Center',
            'Non-Smoker Rooms', 'Restaurant', 'Fitness Center', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155036284.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155036325.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/154282922.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/154282950.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155036553.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/154282939.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/154282756.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155036460.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155036302.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155036268.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155036689.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/154282983.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/154282810.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/154/154282782.jpg'
        ],
        type: 'Hotel',
        price: 420,
        destination: 'Милано',
        destination: `Хотел Park Hyatt Milano се намира в центъра на Модния квартал, с лице към входа на търговската галерия „Виктор Емануил“ и на 200 метра от катедралата и оперния театър ,Ла Скала“. Хотелът предлага безплатен WiFi, СПА център и фитнес зала.

        Просторните луксозни стаи в хотел Park Hyatt разполагат с големи мраморни бани. Някои стаи се отварят към собствена тераса с изглед към силуета на града.
        
        Гостите могат да опитат изискани специалитети в ресторант VUN Andrea Aprea, удостоен с 2 звезди от пътеводителя „Мишлен“, да се отпуснат с напитка в Mio Lab или да си поръчат международни ястия в целодневния ресторант La Cupola.
        
        Метростанция „Дуомо“ е на 2 минути пеша от хотел Park Hyatt Milano.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.`
    },
    {
        name: 'Aphrodite',
        address: 'Keramoti, Керамоти, 64200, Гърция',
        rating: 9.1,
        stars: 3,
        facilities: [
            'Non-Smoker Rooms', 'Parking', 'Free Wi Fi', 'Family Rooms',
            'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/284/28412789.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153357911.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153054671.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153357507.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153357509.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153357511.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153356960.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153057093.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/28410502.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153054122.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153053263.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153053259.jpg'
        ],
        type: 'Apartments',
        price: 60,
        destination: 'Керамоти',
        description: `Хотел Aphrodite предлага помещения за настаняване с възможност за самостоятелно готвене и пране и безплатен Wi-Fi. Намира се на крайбрежието на курорта Керамоти в Кавала. На 100 метра от хотела има 5-километров бял пясъчен плаж. Близката борова гора предлага възможности за разходки и спорт.

        Климатизираните студиа и апартаменти в хотел Aphrodite разполагат с телевизор с плосък екран, сешоар и кухненски бокс с хладилник, електрическа кана и котлони. От балконите се открива изглед към градината на хотела.
        
        Хотел Aphrodite сервира ежедневна закуска в градината. На разположение на гостите има кафе-бар, който предлага рум-сървиз.
        
        Кавала е на 40 км. Гостите могат да ползват безплатно двора и паркинга на хотела.
        
        Двойките харесват местоположението - те му дават оценка от 9.6 за пътуване за двама.`
    },
    {
        name: 'Daniela sunshine pool apartments',
        address: 'Keramoti, Керамоти, 64200, Гърция',
        rating: 8.9,
        stars: 3,
        facilities: [
            'Right on the beach', 'Non-Smoker Rooms', 'Parking', 'Free Wi Fi',
            'Family Rooms', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/109/109417406.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257973867.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257973920.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257973968.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257973997.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257974049.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257974211.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257974300.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257974484.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257972826.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257972709.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257972594.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257972476.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257972434.jpg'
        ],
        type: 'Apartments',
        price: 56,
        destination: 'Керамоти',
        description: `Dany House се намира на 300 метра от плажа на Керамоти. Предлага помещения за настаняване с балкон, градина и тераса.

        Апартаментите са климатизирани и са с теракотен под. Разполагат със собствена баня, телевизор с плосък екран, безплатен WiFi, гардероб, всекидневна, оборудвана кухня, веранда и изглед към градината. Всички помещения включват кът за сядане и трапезария.
        
        Плажът Амоглоса е на 1,5 км от апартамента. Най-близкото летище е международно летище Кавала „Александър Велики“, разположено на 13 км от Dany House.
        
        Ние говорим на вашия език!`
    },
    {
        name: 'Villa Christie',
        address: 'Keramoti, Керамоти, 64200, Гърция',
        rating: 8.5,
        stars: 3,
        facilities: [
            'Right on the beach', 'Non-Smoker Rooms', 'Parking', 'Free Wi Fi',
            'Family Rooms', 'Pets Allowed', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/190/190397057.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189566411.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189574403.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/190/190393531.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189574592.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/190/190397113.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189575788.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189575439.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189576069.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189575113.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189574888.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189754905.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189037536.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189037513.jpg'
        ],
        type: 'Villa',
        price: 58,
        destination: 'Керамоти',
        description: `Villa Christie се намира в Керамоти и предлага климатизирано помещение за настаняване с веранда. Тази вила предлага градина, барбекю, безплатен WiFi и безплатен собствен паркинг.

        Вилата разполага с DVD плейър, кухня с хладилник, фурна и тостер, всекидневна с кът за сядане и трапезария, 4 спални и 2 бани с биде и душ. Осигурен е телевизор с плосък екран.
        
        Плажът на Керамоти е на 400 метра от вилата. Най-близкото летище е международно летище Кавала „Александър Велики“, на 12 км.`
    },
    {
        name: 'Kassiani Studios',
        address: 'Keramoti, Керамоти, 64200, Гърция',
        rating: 9.5,
        stars: 3,
        facilities: [
            'Right on the beach', 'Non-Smoker Rooms', 'Parking', 'Free Wi Fi',
            'Family Rooms', 'Pets Allowed', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/716/71688574.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214163107.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214162613.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/206/206870542.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/206/206870313.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/206/206869262.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/206/206869049.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/206/206867193.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205479254.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205479254.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/960/96049783.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101627450.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/716/71688579.jpg'
        ],
        type: 'Apartments',
        price: 88,
        destination: 'Керамоти',
        description: `Kassiani Studios се намира в Керамоти. Предлага помещения за настаняване с веранда или балкон, безплатен WiFi и телевизор с плосък екран, както и общ салон и бар.

        Всички помещения за настаняване включват собствена баня с душ, сешоар и безплатни тоалетни принадлежности.
        
        На разположение на гостите има тераса и градина.
        
        Плажът в Керамоти е на 200 м от Kassiani Studios. Международното летище Кавала „Александър Велики“ е най-близкото летище, на 10 км.
        
        Двойките харесват местоположението - те му дават оценка от 9.8 за пътуване за двама.`
    },
    {
        name: 'Filippion Hotel',
        address: 'Keramoti, Керамоти, 64200, Гърция',
        rating: 7.6,
        stars: 2,
        facilities: [
            'Right on the beach', 'Non-Smoker Rooms', 'Parking', 'Free Wi Fi',
            'Family Rooms', 'Pets Allowed', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/497/49769963.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/18953010.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49455715.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49458798.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49455452.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49455396.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/18953310.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/497/49769961.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49455378.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49455650.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49455725.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/494/49455634.jpg'
        ],
        type: 'Hotel',
        price: 45,
        destination: 'Керамоти',
        description: `Filippion е сгушен сред добре поддържана градина в град Керамоти, Кавала, само на 150 метра от плажа. Този семеен хотел предлага снек-бар, детска площадка и стаи за гости с безплатен Wi-Fi интернет и самостоятелен балкон.

        В климатизираните стаи Ви очакват изглед към Тракийско море или градината, теракот и мебели от тъмно дърво. Оборудването им включва телевизор, сейф и хладилник. В самостоятелните бани са осигурени сешоар и безплатни тоалетни принадлежности.
        
        Гостите могат да се насладят на сутрешно кафе, питие или леки ястия сред отпускащата обстановка на снек-бара. В радиус от 50 метра ще откриете разнообразие от таверни, барове и магазини.
        
        Река Нестос е на 5 километра, а град Кавала - на 30 километра. Международното летище Кавала е на 6 километра. От пристанище Керамоти пътуват редовни фериботи до остров Тасос. За гостите е осигурен безплатен частен паркинг.
        
        Двойките харесват местоположението - те му дават оценка от 8.7 за пътуване за двама.
        
        Ние говорим на вашия език!`
    },
    {
        name: 'Irini Apartments',
        address: 'Keramoti, Керамоти, 64200, Гърция',
        rating: 9.5,
        stars: 3,
        facilities: [
            'Right on the beach', 'Non-Smoker Rooms', 'Parking', 'Free Wi Fi',
            'Family Rooms', 'Pets Allowed', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858563.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/696/69690055.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858581.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858592.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858597.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858607.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858621.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858682.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858693.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858706.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858710.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858714.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/968/96858719.jpg'
        ],
        type: 'Apartments',
        price: 89,
        destination: 'Керамоти',
        destination: `Irini Apartments се намира на около 200 м от плажа в Керамоти, регион Македония. Предлага помещения за настаняване с безплатен WiFi, барбекю, градина и безплатен частен паркинг.

        Апартаментите разполагат с кухня с микровълнова фурна и хладилник, телевизор с плосък екран със сателитни канали, уреди за гладене, гардероб и кът за сядане с диван. Всички включват самостоятелна баня с душ, сешоар и безплатни тоалетни принадлежности.
        
        В апартхотела има слънчева тераса.
        
        Плажът Амоглоса е на 1,5 км от Irini Apartments. Най-близкото летище е международното летище Кавала „Александър Велики“, на 13 км.
        
        Двойките харесват местоположението - те му дават оценка от 8.9 за пътуване за двама.`
    },
    {
        name: 'Villa Anna',
        address: 'Dimitriadi 73, Керамоти, 64004, Гърция',
        rating: 8.3,
        stars: 3,
        facilities: [
            'Right on the beach', 'Non-Smoker Rooms', 'Parking', 'Free Wi Fi',
            'Family Rooms', 'Pets Allowed', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/460/46077947.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101467453.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/453/45331301.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/453/45331271.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/453/45331290.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/453/45331275.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/462/46291413.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/453/45331272.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/136/136005663.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/136/136005567.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/136/136005733.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/136/136005503.jpg'
        ],
        type: 'Villa',
        price: 83,
        destination: 'Керамоти',
        description: `Семейна вила Villa Anna се намира в Лименас, само на 200 метра от главното пристанище и на 300 метра от плажа Agios Vassilikos, и предлага помещения с условия за самостоятелно готвене с безплатен WiFi и балкон или вътрешен двор.

        Климатизираните апартаменти предлагат изглед към градината, планината или околностите и разполагат с отделна спалня, кухня с отворен план, трапезария и кът за сядане, както и със собствена баня със сешоар и безплатни тоалетни принадлежности. Включват и телевизор с плосък екран със сателитни програми, CD/DVD плейър, фурна и пералня.
        
        Villa Anna предлага градина, съоръжения за барбекю и тераса. Осигурен е безплатен паркинг на място.
        
        До вилата има супермаркет, а в непосредствена близост има ресторанти. Археологическият музей на Тасос се намира на 500 метра, а Античният театър на Тасос е на 700 метра. Плажът Chryssi Ammoudia е на 12 километра.
        
        Двойките харесват местоположението - те му дават оценка от 9.3 за пътуване за двама.`
    },
    {
        name: 'Villa Aggeliki',
        address: 'Keramoti, Керамоти, 64200, Гърция',
        rating: 9.5,
        stars: 2,
        facilities: [
            'Parking', 'Free Wi Fi'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/268/268032508.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/268/268032513.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/268/268032520.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/268/268032527.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/267/267847396.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/267/267847111.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/731/73144864.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/258/258588489.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256482535.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256482516.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256482523.jpg'
        ],
        type: 'Villa',
        price: 150,
        destination: 'Керамоти',
        description: `Ваканционен дом Aggeliki се намира в село Прѝнос, на по-малко от 1 км от плажа Ска̀ла Прѝну. Разполага с градина с цитрусови дървета, просторна тераса с кът за барбекю и детска площадка. Предлага настаняване с възможност за самостоятелно готвене и пране и безплатна Wi-Fi връзка.

        Вилата е на един етаж и представлява построен от камък апартамент с дървени подове и легла от ковано желязо. Включва кът за сядане, напълно оборудвана кухня с кът за хранене и баня с душ. Оборудвана е също с фурна и плоскоекранен телевизор.
        
        В центъра на Прѝнос, на 300 м от Aggeliki, има супермаркети и таверни. Град Лимѐнас и пристанището му са на 18 км, а пристанище О̀рмос Прѝну е на 2 км. Осигурен е безплатен паркинг на място.`
    },
    {
        name: 'Santa Catalina, a Royal Hideaway Hotel 5*GL',
        address: 'León y Castillo, 227, 35005 Лас Палмас де Гран Канария, Испания',
        rating: 9.0,
        stars: 5,
        facilities: [
            '2 Pools', 'Spa Center', 'Non-Smoker Rooms', 'Fitness center',
            'Free Wi Fi', 'Roomservice', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226834736.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/261/261892734.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/255/255139334.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264624624.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226834752.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226834725.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/261/261858165.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/261/261863405.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/261/261871309.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/261/261872483.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264838188.jpg',

        ],
        type: 'Hotel',
        price: 312,
        destination: 'Лас Палмас де Гран Канария',
        description: `Santa Catalina, a Royal Hideaway Hotel 5*GL is situated in Las Palmas de Gran Canaria, a 5-minute walk from Las Palmas Marina and surrounded by extensive gardens. This hotel features an outdoor pool, 3 restaurants, a rooftop bar, a wellness centre and free WiFi.

        The spacious, air-conditioned rooms have flat screen TV and a bathroom with a rain-effect shower. Most have balcony or terrace with garden views.
        
        The Santa Catalina’s wellness centre offers hot tubs, Turkish baths and beauty treatments. A fitness centre is available for free. Guests can access the spa for an extra cost.
        
        Santa Catalina, a Royal Hideaway Hotel 5*GL features 3 restaurants: Poemas, offering gourmet cuisine, 1890 La Bodeguita, specialised in tapas, and Camarote, featuring a cuisine based in local products. Guest can also enjoy a cocktail in the piano bar Carabela and in the Alis Roof Top Bar.
        
        Santa Catalina, a Royal Hideaway Hotel 5*GL is a 10-minute drive from Puerto de la Luz and Las Canteras Beach. Vegueta historic district is also a 10-minute drive away. Gran Canaria Airport is a 20-minute drive from the hotel.`
    },
    {
        name: 'Ático LUXURY vista mar en Las Palmas',
        address: 'Calle Hierro, 35008 Лас Палмас де Гран Канария, Испания',
        rating: 7.0,
        stars: 3,
        facilities: [
            'Terrace', 'Free Wi Fi', 'Elevator'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247548972.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247548993.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247549011.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247548989.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/243/243839956.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247549015.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247549019.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247549004.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247548982.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247548958.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247548950.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247548995.jpg'
        ],
        type: 'Hotel',
        price: 135,
        destination: 'Лас Палмас де Гран Канария',
        description: `Boasting sea views, Ático LUXURY vista mar en Las Palmas offers accommodation with a balcony and a kettle, 200 metres from Playa de Las Canteras. Free WiFi is available in this apartment, set 400 metres from Parque de Santa Catalina and less than 1 km from Poema Del Mar Aquarium.

        This apartment includes 1 bedroom, a living room and a flat-screen TV, an equipped kitchen with a dining area, and 1 bathroom with a shower and a washing machine.
        
        A terrace is available on site and cycling can be enjoyed within close proximity of the apartment.
        
        Centro Comercial El Muelle is 1.9 km from Ático LUXURY vista mar en Las, while Alfredo Kraus Auditorium is 2.5 km from the property. The nearest airport is Gran Canaria Airport, 27 km from the accommodation.`
    },
    {
        name: 'BULL Reina Isabel & SPA',
        address: 'Alfredo L. Jones, 40, 35008 Лас Палмас де Гран Канария, Испания',
        rating: 8.9,
        stars: 5,
        facilities: [
            '2 Pools', 'Spa Center', 'Right on the Beach', 'Non-Smoker Rooms', 'Fitness center',
            'Free Wi Fi', 'Roomservice', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195284616.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195284809.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195461614.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195284605.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195284855.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195284779.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195284849.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195284938.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195464991.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195465002.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195464659.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195464661.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195464666.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/195/195462631.jpg'
        ],
        type: 'Hotel',
        price: 257,
        destination: 'Лас Палмас де Гран Канария',
        description: `Reina Isabel се намира на плажа Лас Кантерас в Лас Палмас. Предлага басейн на покрива си, безплатен спа център с фитнес зала и слънчева тераса с изглед към Атлантическия океан. Осигурени са безплатен паркинг и WiFi.

        Всички стаи в хотел Reina Isabel разполагат с климатик, под с паркет и балкон. Във всяка има телевизор с плосък екран със сателитни канали и самостоятелна баня със сешоар.
        
        Хотелът сервира закуска на шведска маса, която включва пенливо вино кава, водка и пресен портокалов сок. Вечерята е на шведска маса, има и а ла карт ресторант. Удобствата в хотела се допълват от бар край басейна и плажен бар с тераса.
        
        На плажа могат да се предоставят чадъри, хавлии и шезлонги за безплатно ползване.
        
        Киносалон El Muelle е на 5 минути пеша от BULL Reina Isabel & SPA, а до голф игрището Las Palmas може да се стигне за 8 минути с кола. Летище Gran Canaria е на около 25 минути с кола.`
    },
    {
        name: 'AC Hotel Iberia Las Palmas',
        address: 'Avenida Alcalde J. Ramirez Bethencourt, 8, 35003 Лас Палмас де Гран Канария, Испания',
        rating: 8.1,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Fitness center',
            'Free Wi Fi', 'Roomservice', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216565403.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216565996.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216566003.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216565390.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216564449.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216564393.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216563031.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216557758.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/151/151706788.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/151/151706792.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/151/151706799.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/151/151706811.jpg'
        ],
        type: 'Hotel',
        price: 280,
        destination: 'Лас Палмас де Гран Канария',
        description: `Set in the Vegueta district of Las Palmas, the oceanfront AC Hotel Iberia Las Palmas features a gym and rooftop pool.

        Modern air-conditioned rooms have a private bathroom with free toiletries. Rooms feature a king-size or double bed with 4 pillows. All have a desk, flat-screen TV and mini bar. Junior suites also have a sofa bed and free WiFi.
        
        The hotel has a free WiFi zone and WiFi is available in rooms for an extra charge. There is 24-hour reception and the hotel is a 5-minute drive from Las Canteras Beach and the Port.
        
        За нашите гости това е любимата част на Лас Палмас де Гран Канария, според независими отзиви.`
    },
    {
        name: 'Apartamentos Colón Playa',
        address: 'Alfredo L. Jones, 45, 35007 Лас Палмас де Гран Канария, Испания',
        rating: 8.5,
        stars: 2,
        facilities: [
            'Right on the Beach', 'Non-Smoker Rooms', 'Fitness center',
            'Free Wi Fi', 'Roomservice', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/835/8351085.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247432027.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247431533.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250336980.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250336898.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250336919.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250336938.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250336961.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250335862.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250335766.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250335652.jpg'
        ],
        type: 'Apartments',
        price: 97,
        destination: 'Лас Палмас де Гран Канария',
        description: `Разположен на алеята Лас Кантерас в Лас Палмас де Гран Канария, Apartamentos Colón Playa се намира на 300 метра от Пуерто де ла Лус и парка Санта Каталина. Разполага с обща слънчева тераса на покрива и добре оборудвани апартаменти.

        Всеки апартамент в Colón Playa има кухненски бокс, самостоятелна баня и дневна с кът за спане. Осигурени са сателитна телевизия, безплатен Wi-Fi интернет достъп и сейф. Повечето апартаменти са със самостоятелна тераса.
        
        Разположен в търговска и централна част, този комплекс е на съвсем кратко пътуване с обществен транспорт от центъра на Лас Палмас де Гран Канария, където можете да опитате великолепна кухня в ресторантите и модерните барове на града.
        
        Colón Playa разполага и с 24-часова рецепция.`
    },
    {
        name: 'Exe Las Palmas',
        address: 'Sagasta, 28, 35008 Лас Палмас де Гран Канария, Испания',
        rating: 8.1,
        stars: 5,
        facilities: [
            'Pool', 'Spa Center', 'Right on the Beach', 'Non-Smoker Rooms', 'Fitness center',
            'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622243.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622201.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622204.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622207.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622209.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622222.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622225.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622231.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622233.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/182/182019431.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622248.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225622253.jpg'
        ],
        type: 'Hotel',
        price: 336,
        destination: 'Лас Палмас де Гран Канария',
        description: `Този модерен хотел се намира на 20 метра от плажа Las Canteras. Предлага открит басейн, фитнес център, тераса за слънчеви бани, сауна и хидромасажна вана. На разположение на гостите са зона с безплатен WiFi и безплатни вода и кафе в стаите.

        Климатизираните стаи в Exe Las Palmas са с паркет и разполагат с плоскоекранен телевизор със сателитни програми и сейф за лаптоп. Мраморната баня е снабдена с тоалетни принадлежности и сешоар.
        
        Хотелът разполага също с напълно оборудвана фитнес зала и модерен бизнес център за срещи. Рецепцията работи денонощно, а в туристическото бюро могат да се наемат велосипеди.
        
        Популярните забележителности в близост до хотела включват Las Alcaravaneras, Playa del Confital и Parque de Santa Catalina. Най-близкото летище е Гран Канария, на 23 км от Exe Las Palmas.`
    },
    {
        name: 'Hotel Aloe Canteras',
        address: 'Sagasta, 98, 35008 Лас Палмас де Гран Канария, Испания',
        rating: 9.2,
        stars: 5,
        facilities: [
            'Right on the Beach', 'Non-Smoker Rooms', 'Fitness center',
            'Free Wi Fi', 'Airport Trasfer', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280457448.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280456463.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460437.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460444.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460450.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460459.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460470.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460493.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460496.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460519.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280460526.jpg'
        ],
        type: 'Hotel',
        price: 420,
        destination: 'Лас Палмас де Гран Канария',
        description: `Hotel Aloe Canteras се намира в столицата на Гран Канария, Лас Палмас и разполага с тераса за слънчеви бани с изглед към плажа Кантерас, отдалечен само на 30 метра. Повечето от светлите и модерни стаи предлагат панорамен или страничен изглед към Атлантическия океан.

        Стаите в Hotel Aloe Canteras са оборудвани с телевизор и работно бюро. Имат също сейф и малък хладилник, а собствените бани са със сешоар и тоалетни принадлежности.
        
        Хотелът разполага със салон с телевизор и интернет кът с безплатен WiFi. На място има вендинг автомати за напитки и леки закуски. В околността на този централно разположен хотел ще откриете много барове и ресторанти.
        
        Hotel Aloe Canteras предлага денонощна рецепция и коли под наем. Наблизо има платен паркинг.`
    },
    {
        name: 'Bex Holiday Homes',
        address: 'Calle Franchy Roca, 1, 35007 Лас Палмас де Гран Канария, Испания ',
        rating: 9,
        stars: 4,
        facilities: [
            'Right on the Beach', 'Non-Smoker Rooms', 'Fitness center',
            'Free Wi Fi', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709623.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/283/283098669.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709929.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709643.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709570.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709539.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709581.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709652.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709596.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709771.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709518.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178709483.jpg'
        ],
        type: 'Apartments',
        price: 140,
        destination: 'Лас Палмас де Гран Канария',
        description: `Located in Las Palmas de Gran Canaria, near Parque de Santa Catalina, Centro Comercial El Muelle and Poema Del Mar Aquarium, Bex Deluxe Suites features free WiFi.

        All units here are air-conditioned and feature a flat-screen TV, a living room, a well-equipped kitchen with a dining area, and a private bathroom with shower and free toiletries. A dishwasher, a microwave and fridge are also provided, as well as a kettle and a coffee machine.
        
        Guests at the apartment can enjoy a continental breakfast.
        
        Bex Deluxe Suites offers a sun terrace.
        
        Playa del Confital is 2.4 km from the accommodation, while Parque Romano is 1.7 km away.`
    },
    {
        name: 'Hotel Acuario Boutique',
        address: 'Calle del General Vives 82, 35007 Лас Палмас де Гран Канария, Испания',
        rating: 8.7,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/172/172838977.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/279/279612058.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/175/175109258.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/279/279611868.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/175/175109433.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/279/279610301.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/173/173127413.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/173/173127427.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/173/173131447.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/173/173131450.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/173/173131442.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/279/279610466.jpg'
        ],
        type: 'Hotel',
        price: 123,
        destination: 'Лас Палмас де Гран Канария',
        description: `Hotel Acuario Boutique in Las Palmas de Gran Canaria allow children of all ages. Has a terrace and a bar. The property is located 800 metres from Las Canteras Beach, and 1.9 km from Centro Comercial El Muelle. The hotel has views to Parque Santa Catalina.

        At the hotel, every room has a wardrobe, a flat-screen TV and a private bathroom. Free WiFi is accessible to all guests, while selected rooms are equipped with a balcony. Guest rooms will provide guests with a fridge.
        
        Poema Del Mar Aquarium is 500 metres from Hotel Acuario Boutique, while Parque Romano is 2.3 km away. The nearest airport is Gran Canaria Airport, 27 km from the accommodation.`
    },
    {
        name: 'Design Plus Bex Hotel',
        address: 'Leon y Castillo, 330, 35007 Лас Палмас де Гран Канария, Испания',
        rating: 8.8,
        stars: 4,
        facilities: [
            'Fitness', 'Terrace', 'Non-Smoker Rooms',
            'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/127/127805658.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/145/145134889.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322861.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322878.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322901.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322907.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322920.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322935.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322944.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322958.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322978.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203322990.jpg'
        ],
        type: 'Hotel',
        price: 98,
        destination: 'Лас Палмас де Гран Канария',
        description: `Located in Las Palmas de Gran Canaria, Design Plus Bex Hotel features a restaurant and a rooftop bar. The property is situated a short distance from Parque de Santa Catalina and Centro Comercial El Muelle. Playa de Las canteras is 700 metres from the property.

        All rooms in the hotel are fitted with a flat-screen TV and a shower. Guest rooms at Design Plus Bex Hotel include air conditioning and a wardrobe. Free WiFi is available throughout the property.
        
        Design Plus Bex Hote also offers a gym and 24-hour reception. An international buffet breakfast is served daily at the property.
        
        Aquarium "Poema del Mar" is 900 metres from the accommodation, while Gran Casino Las Palmas is just 200 metres away. The nearest airport is Gran Canaria Airport, 25 km from Design Plus Bex Hotel.`
    },
    {
        name: 'Occidental Las Palmas',
        address: 'Calle León y Castillo 244, 35005 Лас Палмас де Гран Канария, Испания',
        rating: 8.4,
        stars: 4,
        facilities: [
            'Fitness', 'Terrace', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271482301.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271482514.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/233/233046337.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271483017.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271482394.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271482994.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271482521.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271484561.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271846967.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249511836.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249511823.jpg'
        ],
        type: 'Hotel',
        price: 260,
        destination: 'Лас Палмас де Гран Канария',
        description: `Featuring a restaurant, fitness centre, bar and free WiFi, Occidental Las Palmas is set in Las Palmas de Gran Canaria, less than 1 km from Las Alcaravaneras and 2.3 km from Parque de Santa Catalina. Boasting family rooms, this property also provides guests with a terrace. The accommodation offers a 24-hour front desk, a concierge service and currency exchange for guests.

        At the hotel, all rooms come with a desk, a flat-screen TV and a private bathroom. The units at Occidental Las Palmas feature air conditioning and a wardrobe.
        
        The accommodation offers a buffet or vegetarian breakfast.
        
        Occidental Las Palmas offers 4-star accommodation with a hot tub.
        
        Parque Romano is 600 metres from the hotel, while Perez Galdos House Museum is 2.2 km away.`
    },
    {
        name: 'Hotel Atlântico Rio',
        address: 'Rua Xavier da Silveira 112, Копакабана, Рио де Жанейро, CEP 22061-010, Бразилия',
        rating: 8,
        stars: 4,
        facilities: [
            'Pool', 'Fitness', 'Terrace', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/265/26544702.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/255/255972385.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/255/255971781.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/24962361.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/24961042.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/24973240.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/123/123090575.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/380/38092713.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/290/29062611.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/290/29062546.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/265/26544700.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/24961077.jpg'
        ],
        type: 'Hotel',
        price: 170,
        destination: 'Рио де Жанейро',
        description: `Atlântico Rio е 4-звезден хотел, разположен на 500 метра от прочутия плаж Копакабана в Рио де Жанейро. Удобствата включват открит басейн, безплатна ежедневна закуска, собствен ресторант и отлично местоположение, а на кратко разстояние пеша ще откриете различни заведения за обяд и вечеря.

        Всички стаи предлагат съвременен интериор и са оборудвани с климатик, минибар, 32-инчов телевизор с плосък екран и кабелни канали. На разположение на гостите има рум-сървиз.
        
        В бара на хотела можете да поръчате екзотични коктейли и различни напитки. Наблизо има пункт за велосипеди под наем.
        
        Atlantico Rio е на 80 метра от метростанция Cantagalo и на 3.6 километра от стадион Lagoa. Летище Santos Dumont е на 11,5 километра, а международното летище Galeão - на 26 километра.
        
        За нашите гости това е любимата част на Рио де Жанейро, според независими отзиви.`
    },
    {
        name: 'Argentina Hotel',
        address: 'Rua Cruz Lima, 30, Flamengo, Рио де Жанейро, CEP 22230010, Бразилия',
        rating: 8,
        stars: 3,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89915803.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89911899.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89911774.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89918073.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89918181.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89921561.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89916936.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/133/133233984.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89918449.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89911681.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89916440.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/899/89917701.jpg'
        ],
        type: 'Hotel',
        price: 120,
        destination: 'Рио де Жанейро',
        description: `Argentina Hotel is a traditional hotel set in the 1930s, in Rio´s Flamengo area, a 20-minute drive from the Sugar Loaf. It features modern accommodation with and free WiFi and free parking.

        Rooms at Argentina Hotel feature air conditioning, a TV with cable channels, a minibar, a telephone a desk and a safe. All of them are set with a private bathroom.
        
        Guests enjoy Brazilian and international cuisine at Azafrán restaurant, which also offers popular tropical cocktails. A substantial buffet breakfast is served here as well.
        
        Argentina Hotel is located a 10-minute walk from Flamengo Subway and a 15-minute drive from Christ the Redeemer. The nearest airport is Santos Dumont Airport, 5 km away, while Tom Jobim /Rio-Galeão International Airport is within a distance of 24 km from Argentina Hotel.`
    },
    {
        name: 'Hotel Atlantico Tower',
        address: 'Rua Visconde de Inhaúma, 95 - Centro, Център, Рио де Жанейро, CEP 20091-007, Бразилия',
        rating: 7.3,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381658.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381637.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381672.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381679.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381630.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381655.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381651.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381669.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381661.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381675.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/613/61394618.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69381701.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/613/61394990.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/613/61394617.jpg'
        ],
        type: 'Hotel',
        price: 109,
        destination: 'Рио де Жанейро',
        description: `Хотел Atlantico Tower предлага модерни помещения за настаняване в центъра на Рио де Жанейро, на 600 метра от Музея на утрешния ден и на 1,5 километра от летище „Сантос Дюмон“. Предлага безплатен Wi-Fi и басейн на покрива с панорамен изглед към града.

        Стаите в хотел Atlantico Tower предлагат непретенциозен интериор с дървени мебели и подова настилка в светли цветове. Всички са оборудвани с климатик, минибар и работно бюро за лаптоп.Всеки ден се сервира закуска на шведска маса.
        
        Хотелът е на 5 километра от автогарата Ново Рио и на 12 километра от Международно летище „Галеао Стадионът Maracanã е на 3 километра, а Marquês de Sapucaí Sambadrome е на 20 минути пеша.
        
        Двойките харесват местоположението - те му дават оценка от 8.2 за пътуване за двама.`
    },
    {
        name: 'Ibis Budget RJ Copacabana',
        address: 'Rua Constante Ramos N 96 Copacabana, Копакабана, Рио де Жанейро, CEP 22051012, Бразилия',
        rating: 8.3,
        stars: 2,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Family Rooms', 'Pets Allowed', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248088434.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/283/283622711.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/223/223574782.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/118/118550932.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/223/223574787.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/223/223574768.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/118/118550937.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/223/223473687.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/223/223574791.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/951/95107172.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/951/95107178.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248088439.jpg'
        ],
        type: 'Hotel',
        price: 80,
        destination: 'Рио де Жанейро',
        description: `Ibis Budget RJ Copacabana is situated in Rio de Janeiro, 350 metres from Copacabana beach. Free WiFi is available throughout the property.

        Every room at this hotel is air conditioned and is fitted with a flat-screen TV. The rooms include a private bathroom equipped with a shower.
        
        There is a 24-hour front desk at the property.
        
        Post 7 - Arpoador is 1.8 km from the hotel, while Rodrigo de Freitas Lake is 1.9 km from the property. The nearest airport is Santos Dumont Airport, 7 km from Ibis Budget RJ Copacabana.
        
        За нашите гости това е любимата част на Рио де Жанейро, според независими отзиви.`
    },
    {
        name: 'Hotel Atlantico Prime',
        address: 'Rua do Rezende, 87 , Център, Рио де Жанейро, CEP 20231-091, Бразилия',
        rating: 7.6,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Parking', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/544/54454132.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/839/83903320.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/666/66609986.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/666/66608036.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/678/67879529.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/678/67879525.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/678/67879621.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/666/66610388.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131499091.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/666/66604919.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/544/54453558.jpg'
        ],
        type: 'Hotel',
        price: 129,
        destination: 'Рио де Жанейро',
        description: `Хотел Atlantico Prime се намира в центъра на Рио де Жанейро и предлага настаняване с ресторант, собствен паркинг, фитнес център и бар. Този 4-звезден хотел предлага безплатен WiFi и обслужване от консиерж. Хотелът предлага също денонощна рецепция, румсървиз и обмяна на валута.

        Стаите са със съвременен интериор, климатик, кабелна телевизия, минибар, сейф, сешоар и козметично огледало.
        
        Всяка сутрин се сервира континентална закуска или закуска на шведска маса. Гостите могат да се насладят на разнообразно меню в ресторанта и освежаващи напитки в бара.
        
        Хотел Atlantico Prime разполага с конгресен център за до 150 души, с 6 различни зали, които позволяват конфигурация в различни формати.
        
        Стълбите „Ескадария Селарон“ са на 800 метра от хотел Atlantico Prime, а акведуктът Аркос де Лапа е на 600 метра. Аквапаркът AquaRio и заливът Гуанабара са на 3 км, а стадион „Маракана“ е на 6,5 км. Най-близкото летище е „Сантос Дюмон“, на 2 км.
        
        `
    },
    {
        name: 'Hotel Astoria Palace',
        address: 'Avenida Atlântica, 1866, Копакабана, Рио де Жанейро, CEP 22021-001, Бразилия',
        rating: 8.4,
        stars: 4,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Right on the Beach', 'Parking', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183266907.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/240/240415841.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/240/240415854.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/240/240415304.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/240/240415137.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/240/240415150.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/240/240387927.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/240/240387757.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183267074.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183266918.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/476/47696975.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/865/86589802.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/799/7992244.jpg'
        ],
        type: 'Hotel',
        price: 118,
        destination: 'Рио де Жанейро',
        description: `Hotel Astoria Palace се намира на плажа Копакабана и предлага басейн на покрива с панорамен изглед към океана. Гостите могат да се насладят на разнообразна закуска на шведска маса. За обяд и вечеря се сервират бразилски ястия по а-ла-карт меню. В бара можете да поръчате екзотични напитки. Осигурен е безплатен Wi-Fi.

        Този 4-звезден хотел предлага светли и просторни помещения за настаняване със съвременен интериор и модерни бани.Климатизираните стаи са оборудвани с LCD телевизор със сателитни канали и минибар. Някои от тях разполагат с DVD плеър, хидромасажна вана и изглед към плажа.
        
        Другите удобства в хотела включват ресторант, фитнес зала и сауна. Туристическото бюро организира екскурзии до забележителности като планината Захарната буца, на 4 км.
        
        Hotel Astoria Palace е удобно разположен само на 300 метра от метростанция Cardeal Arcoverde, на 8 км от летище Santos Dumont и на 25 км от международното летище Galeão. Форт Копакабана е само на 2,6 км.
        
        За нашите гости това е любимата част на Рио де Жанейро, според независими отзиви.`
    },
    {
        name: 'Hotel Nacional Rio de Janeiro',
        address: 'Avenida Niemeyer 769 - São Conrado, Sao Conrado, Рио де Жанейро, CEP 22450-221, Бразилия',
        rating: 8.6,
        stars: 5,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Right on the Beach', 'Free Wi Fi', 'Parking', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/884/88472162.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/100/100132023.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/220/220699283.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/883/88326345.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/925/92572666.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/883/88326288.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/925/92572677.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/900/90027846.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/100/100273732.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/100/100274497.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/883/88326273.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/900/90093371.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/883/88326254.jpg'

        ],
        type: 'Hotel',
        price: 197,
        destination: 'Рио де Жанейро',
        description: `Хотел Nacional Rio de Janeiro е идеално разположен точно до плажа Сао Конрадо и предлага уникален избор за тези, които търсят лукса на градски курорт. Хотелът се намира в историческа сграда, проектирана от Оскар Нимайер и заобиколена от градините „Бурле Маркс“.

        Хотелът разполага с открит басейн, СПА център и фитнес център. Предлагат се плажни услуги, включително шезлонги и плажни чадъри. Гостите могат да се насладят на ексклузивни напитки и изискани тапас в бар Bardot край басейна, както и на един от двата съвременни ресторанта - Sereia и Amaro. Осигурен е WiFi навсякъде.
        
        Всички климатизирани стаи в хотел Nacional Rio de Janeiro са декорирани в топли цветове и предлагат спално бельо Trussardi, LED телевизор, минибар, електронен сейф и докинг станция. Самостоятелната баня разполага с безплатни тоалетни принадлежности, халати и сешоар.
        
        Метростанция „Сао Конрадо“ е само на 750 метра от хотела. Планината Pedra da Gávea и Ботаническата градина са на 6,5 км. Плажът Копакабана е на 11 км от хотел Nacional Rio de Janeiro. Най-близкото летище е „Сантос Дюмон“, на 13 км от хотела, а международно летище „Том Жобим“ е на 25 км.`
    },
    {
        name: 'Hilton Copacabana Rio de Janeiro',
        address: 'Avenida Atlantica, 1020, Копакабана, Рио де Жанейро, CEP 22011-010, Бразилия',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Pool', 'Spa Center', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Right on the Beach', 'Parking', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/275/275876463.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282600757.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282600747.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282595944.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168099465.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168101357.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/125/125793809.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/121/121861579.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282596943.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/966/96697034.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/275/275879094.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168099524.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168103231.jpg'
        ],
        type: 'Hotel',
        price: 260,
        destination: 'Рио де Жанейро',
        description: `The 5-star Hilton Rio de Janeiro Copacabana is ideally located across from the blue waters of Copacabana Beach. It features an elegant spa and a rooftop pool, both with splendid sea views.

        Hilton Rio de Janeiro Copacabana offers bright, sophisticated rooms with air conditioning, a TV and a minibar. They are elegantly styled with wooden furniture, contemporary decor and warm, natural tones. Most rooms feature amazing ocean views.
        
        A popular buffet breakfast is served every morning with fresh fruits and pastries. The spa at the hotel has a variety of treatments, and there is a second swimming pool on the 4th floor, where guests can find he restaurant The View. They are also welcome to exercise or have a sauna session in the fitness centre.
        
        Charming shops, restaurants and lively bars are found just 2 blocks away from this hotel. Copacabana Fort is 3.2 km away. Santos Dumont Airport is 9.6 km away, while GaleÃ£o International Airport is at a distance of 27.6 km.`
    },
    {
        name: 'Grand Hyatt Rio de Janeiro',
        address: 'Av. Lúcio Costa, 9600, Barra da Tijuca, Рио де Жанейро, CEP 22795-007, Бразилия',
        rating: 8.8,
        stars: 5,
        facilities: [
            '2 Pools', 'Spa Center', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Right on the Beach', 'Parking', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/167/167457877.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851677.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/135/135005772.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851672.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851710.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851662.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851726.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851732.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851776.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851755.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851743.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851675.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/130/130851653.jpg',

        ],
        type: 'Hotel',
        price: 420,
        destination: 'Рио де Жанейро',
        description: `Boasting an outdoor pool and spa, Grand Hyatt Rio de Janeiro is strategically located in the heart of Barra da Tijuca, nested between the ocean, the lake and the mountains, just across the street from Reserva Beach. The hotel has a sauna and fitness centre with a Yoga Studio. Guests can enjoy a meal at one of the three restaurants. Free WiFi is available throughout the property and private parking is available on site.

        Each room at this hotel is air conditioned and offers a furnished balcony. Rooms also offers a bathtub, so guests can relax after a busy day. For your comfort, you will also find bathroom amenities from Granado and a hairdryer.
        
        There is a 24-hour front desk, a cash machine and shops at the property. Beach service is available and offers chairs, parasols and towels.
        
        Guests can also enjoy several resort activities such as daily physical activities, caipirinha tasting, bike experience and welcome drinks at Cantô Restaurant, at a surcharge.
        
        Jeunesse Arena is located nearby, whilst Cidade das Artes is 3.2 km. The nearest airport is Santos Dumont Airport, 26 km from Grand Hyatt Rio de Janeiro.`
    },
    {
        name: 'Mirador Rio Copacabana Hotel',
        address: 'Rua Toneleros, 338, Копакабана, Рио де Жанейро, CEP 22030-002, Бразилия',
        rating: 8.6,
        stars: 4,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Parking', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94871104.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94871260.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94871228.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94870649.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94870240.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94870081.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94869686.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94869417.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/948/94869129.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/403/40308576.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69377481.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/693/69377560.jpg'
        ],
        type: 'Hotel',
        price: 326,
        destination: 'Рио де Жанейро',
        description: `Located 650 metres from Copacabana Beach, this hotel's swimming pool boasts panoramic views of Rio de Janeiro. The buffet breakfast is served daily in a luxurious dining area. Guests can enjoy local and international cuisine in Restaurant Vila Real. WiFi is available.

        All rooms at Mirador Rio Copacabana Hotel features a minibar, cable TV and a private bathroom with a shower. Some offer a dry sauna and additional space. Non-smoking rooms are available.
        
        As well as an outdoor pool, Mirador Rio offers a fitness centre and sauna. The lounge bar serves a wide variety of drinks, including tropical cocktails.
        
        The 24-hour front desk can arrange room service, car and bicycle rental and dry cleaning services. Private parking is available.
        
        This 4-star hotel is just 250 metres from Siqueira Campos Subway. Santos Dumont Airport is at a distance of 9 km and Galeão International Airport is 22.5 km from the property.
        
        За нашите гости това е любимата част на Рио де Жанейро, според независими отзиви.`
    },
    {
        name: 'Sheraton Grand Rio Hotel & Resort',
        address: 'Avenida Niemeyer, 121, Leblon, Рио де Жанейро, CEP 22450-220, Бразилия',
        rating: 8.6,
        stars: 5,
        facilities: [
            '2 Pools', 'Spa Center', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Right on the Beach', 'Parking', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273179041.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/787/78707006.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/789/78906267.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/787/78707011.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/428/42871944.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/789/78906271.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/797/79772847.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/197/197123840.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/804/80403815.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178736852.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/300/30075748.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/797/79772901.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/789/78906254.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/789/78906268.jpg'
        ],
        type: 'Hotel',
        price: 280,
        destination: 'Рио де Жанейро',
        description: `Този луксозен и неотдавна обновен 5-звезден крайбрежен хотелски комплекс се намира на модерния плаж Leblon, в Южната зона на Рио. Гостите на Sheraton Grand Rio може да се насладят на басейн с наскоро обновен дизайн, около който има тучна тропическа пейзажно оформена зеленина с голяма тераса и хидромасажна вана JacuzziⓇ с изглед към океана. Навсякъде в хотела е осигурен безплатен WiFi.

        За отдих се възползвайте от добре оборудваната фитнес зала или релаксирайте в новооткрития СПА център Shine Spa. Ако искате да разгледате някои от забележителностите, може да посетите емблематичната статуя на Христос Спасителя, разположена на 10 километра.
        
        В зоната на басейна на Sheraton Grand Rio ви очаква ресторант Casarão, който сервира изискани месни ястия за вечеря и шведска маса за обяд в непринудена и елегантна обстановка. Гостите може също да посетят ресторант Bene за италиански ястия и бар Dry Martini - най-новия, модерен и иновативен бар.
        
        Casa da Cachaça ви очаква в зоната на басейна и предлага изискани напитки, типичните бразилски коктейли кайпириня и класически коктейли. На 26-ия етаж ще намерите ресторант L'Etoile, където може да опитате френска кухня, докато се любувате на панорамна гледка към океана.
        
        Луксозните ремонтирани стаи в Sheraton Grand Rio са просторни, с модерен интериор и съвременни мебели. Всички стаи имат климатик и самостоятелен балкон с прекрасен изглед към плажа.
        
        Плажът Leblon е на 1 километър, а националният парк Tijuca Forest - на 3,4 километра. Sheraton Grand Rio се намира на 16 километра от летище Santos Dumont. Може да се организира летищен трансфер.`
    },
    {
        name: 'The Westin Siray Bay Resort & Spa, Phuket',
        address: '21/4 Moo 1 T.Rasada A.Muang , 83000 Пукет, Тайланд',
        rating: 8.5,
        stars: 5,
        facilities: [
            'Spa Center', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Right on the Beach', 'Parking', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/253/253617709.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249473704.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256991813.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249473127.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249472683.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249472631.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249472215.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249472488.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249471965.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249470928.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249469954.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/929/9295323.jpg'
        ],
        type: 'Hotel',
        price: 179,
        destination: 'Пукет'
    },
    {
        name: 'Novotel Phuket City Phokeethra',
        address: '40 Chanajaroen Road, Tambol Talad Yai, Amphur Muang, Phuket, 83000 Пукет, Тайланд',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Pool', 'Spa Center', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Right on the Beach', 'Parking', 'Breakfast', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/249/249170130.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244121.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244164.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244213.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244126.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244195.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244145.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244111.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244238.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117244229.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117247666.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117247215.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/117/117247697.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/721/72184779.jpg'
        ],
        type: 'Hotel',
        price: 190,
        destination: 'Пукет'
    },
    {
        name: 'Blu Monkey Hub and Hotel Phuket',
        address: '3 Soi 3 Phangnga Road, Taladyai, Muang, Phuket Town, Phuket, 83000 Пукет, Тайланд',
        rating: 8.5,
        stars: 4,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Bar'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/507/50719303.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250168947.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250168950.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250168435.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250168441.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250168272.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250168278.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/198/198905424.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/550/55078239.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/550/55078236.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/198/198905467.jpg'
        ],
        type: 'Hotel',
        price: 80,
        destination: 'Пукет'
    },
    {
        name: 'Koh Sirey Beachfront Pool Villa',
        address: '77\1 Thepprathan road Tambon Ratsada, Amphoe Mueang Phuket, 83000 Пукет, Тайланд',
        rating: 9.5,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Free Wi Fi', 'Parking'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247322422.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/255/255822315.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246821291.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247322286.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247321868.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247321615.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247321363.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247319962.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247319757.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247319611.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247314224.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247314201.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246821280.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246821287.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/247/247314156.jpg'
        ],
        type: 'Villa',
        price: 289,
        destination: 'Пукет'
    },
    {
        name: 'Little Nyonya Hotel',
        address: '3 Soi 3 Phangnga Road, Taladyai, Muang, Phuket Town, Phuket, 83000 Пукет, Тайланд',
        rating: 8.1,
        stars: 4,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52653835.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52654797.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52657552.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/491/49154181.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52657469.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52663771.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52662621.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52663990.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52662446.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52662660.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52662427.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/526/52662431.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/491/49154155.jpg'
        ],
        type: 'Hotel',
        price: 36,
        destination: 'Пукет'
    },
    {
        name: 'Casa Blanca Boutique Hotel',
        address: '26 Phuket road, Taladyai, Muang, Phuket, 83000 Пукет, Тайланд',
        rating: 9.1,
        stars: 4,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking',
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/872/87257767.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/149/149859422.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/872/87241212.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/665/66561813.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/100/100137904.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256287228.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256287240.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/106/106271508.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/100/100137923.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/100/100255046.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/200/200526689.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256287866.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101522649.jpg'
        ],
        type: 'Hotel',
        price: 40,
        destination: 'Пукет'
    },
    {
        name: 'Ramada Plaza ChaoFah, Phuket',
        address: '88/99 Moo 2, Chaofah West Road, Muang, 83000 Пукет, Тайланд',
        rating: 7.8,
        stars: 5,
        facilities: [
            'Pool', 'Fitness Center', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/268/268317955.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/253/253994794.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/253/253994803.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/213/213399188.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/213/213399515.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205297868.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/213/213399508.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205308871.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205308844.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205308880.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205298204.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/181/181106755.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/205770483.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/189/189709625.jpg'
        ],
        type: 'Hotel',
        price: 180,
        destination: 'Пукет'
    },
    {
        name: 'Peranakan House',
        address: '25/1-2 Moo4, West Chaofa Rd. Vichit, 83000 Пукет, Тайланд',
        rating: 8.8,
        stars: 3,
        facilities: [
            'Pool', 'Fitness Center', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Bar', 'Parking', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285242122.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285242124.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285241659.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285241662.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285241490.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285241494.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285241501.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/235/235639690.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/235/235639669.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/235/235639666.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/233/233791939.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/235/235639743.jpg'
        ],
        type: 'Hotel',
        price: 49,
        destination: 'Пукет'
    },
    {
        name: 'La Moon @ Phuket',
        address: '2/6 Luangphor Road, Taladyai, Muang, Phuket , 83000 Пукет, Тайланд',
        rating: 8.2,
        stars: 3,
        facilities: [
            'Airport Transfer', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/585/58564973.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/158/158099160.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/585/58564954.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/175/175172311.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/337/33737118.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/585/58564956.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/281/281996867.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/281/281996858.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/281/281996359.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/281/281996848.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/281/281996820.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/281/281996813.jpg'
        ],
        type: 'Hotel',
        price: 33,
        destination: 'Пукет'
    },
    {
        name: 'The Tide Beachfront Siray Phuket',
        address: '168 Moo1, Ratsada, Koh Siray, Muang, 83000 Пукет, Тайланд ',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Pool', 'Fitness Center', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242713620.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282930561.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282929474.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282929477.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280366847.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242716719.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242713585.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242713588.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242713626.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242700544.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242700549.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242700571.jpg'
        ],
        type: 'Hotel',
        price: 120,
        destination: 'Пукет'
    },
    {
        name: 'Chinotel ',
        address: '2/6 Luangphor Road, Taladyai, Muang, Phuket , 83000 Пукет, Тайланд',
        rating: 7.7,
        stars: 2,
        facilities: [
            'Non-Smoker Rooms', 'Free Wi Fi', 'Bar', 'Breakfast', 'Parking',
            'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/232/232947171.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/232/232947055.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/232/232946916.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/17464302.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/17464422.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/17464299.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/123/12326711.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/17463960.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/17464723.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/17464721.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/17464728.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/123/12326645.jpg'
        ],
        type: 'Hotel',
        price: 42,
        destination: 'Пукет'
    },
    {
        name: 'Hilton Vienna Plaza',
        address: 'Schottenring 11, 01.Инерещат, 1010 Виена, Австрия',
        rating: 8.6,
        stars: 5,
        facilities: [
            'Pool', 'Fitness Center', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101418845.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101418778.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101722141.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101420536.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101420503.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101418623.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101420084.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101419011.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101418994.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101410110.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101418441.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101418507.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/101/101418403.jpg'
        ],
        type: 'Hotel',
        price: 380,
        destination: 'Виена'
    },
    {
        name: 'SO/ Vienna',
        address: 'Praterstraße 1, 02.Леополдщат, 1020 Виена, Австрия',
        rating: 9,
        stars: 5,
        facilities: [
            'Pool', 'Fitness Center', 'Non-Smoker Rooms', 'Roomservice', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216154736.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246694204.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/803/80357714.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/161/161745067.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/161/161747598.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/217/217112359.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216190518.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216243079.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216243114.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216236534.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/165/165015153.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216154780.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/216/216213765.jpg'
        ],
        type: 'Hotel',
        price: 620,
        destination: 'Виена'
    },
    {
        name: 'Hilton Vienna Park',
        address: 'Am Stadtpark 1, 03.Ландщрасе, 1030 Виена, Австрия',
        rating: 8.5,
        stars: 5,
        facilities: [
            'Pool', 'Fitness Center', 'Non-Smoker Rooms', 'Roomservice', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Parking', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226647573.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264576315.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264576294.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264576283.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264576090.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264576110.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226633316.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226655437.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264576117.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/475/47526446.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226650125.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264461293.jpg'
        ],
        type: 'Hotel',
        price: 223,
        destination: 'Виена'
    },
    {
        name: 'Hampton By Hilton Vienna Messe',
        address: 'Perspektivstrasse 10, 02.Леополдщат, 1020 Виена, Австри',
        rating: 8.2,
        stars: 3,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast',
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/275/275577728.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284153411.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/275/275578391.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274479695.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497935.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497705.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497673.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497854.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497870.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497890.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497878.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274497662.jpg'
        ],
        type: 'Hotel',
        price: 130,
        destination: 'Виена'
    },
    {
        name: 'Radisson Blu Park Royal Palace Hotel Vienna',
        address: 'Schlossallee 8, 14.Пенцинг, 1140 Виена, Австрия',
        rating: 8.7,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast',
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/133/133192756.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542135.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542272.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542264.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542318.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542199.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542175.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542125.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542207.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542145.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/995/99542138.jpg'
        ],
        type: 'Hotel',
        price: 180,
        destination: 'Виена'
    },
    {
        name: 'The Ritz-Carlton, Vienna',
        address: 'Schubertring 5-7 , 01.Инерещат, 1010 Виена, Австрия',
        rating: 9.4,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Spa Center', 'Fitness Center',
            'Pool', 'Free Wi Fi', 'Bar', 'Breakfast',
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250430288.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/114/11497875.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250430502.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250430599.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/277/277743929.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/208/208450553.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250436859.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250436823.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/174223624.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250430743.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/329/32944162.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/174/174219778.jpg'
        ],
        type: 'Hotel',
        price: 629,
        destination: 'Виена'
    },
    {
        name: 'Park Hyatt Vienna',
        address: 'Am Hof 2, 01.Инерещат, 1010 Виена, Австрия',
        rating: 9.2,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Spa Center', 'Fitness Center',
            'Pool', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/111/111791339.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/160/160820062.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280085586.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280085590.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/243/243759425.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280085597.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280085607.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280085610.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/111/111791350.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/111/111791357.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112482008.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112482014.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112481945.jpg'
        ],
        type: 'Hotel',
        price: 669,
        destination: 'Виена'
    },
    {
        name: 'Vienna Marriott Hotel',
        address: 'Parkring 12a, 01.Инерещат, 1010 Виена, Австрия ',
        rating: 8.6,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Spa Center', 'Fitness Center',
            'Pool', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/138/13850762.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/277/27763370.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/277/27763474.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284852829.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284511269.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284511280.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284511290.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284513849.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284513843.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284527600.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/157/157003385.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/156/156989166.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/156/156988984.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/185/185362681.jpg'
        ],
        type: 'Hotel',
        price: 640,
        destination: 'Виена'
    },
    {
        name: 'Fitzrovia Hotel',
        address: '20-28 Bolsover Street, Уестминстър, Лондон, W1W 5NB, Великобритания',
        rating: 7.8,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/271/271029118.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/421/42100486.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273724805.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/421/42100355.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/221/221308883.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/421/42100487.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/221/221308931.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273725123.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/221/221308863.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/255/255288200.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/255/255288078.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/421/42100677.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/421/42100376.jpg'
        ],
        type: 'Hotel',
        price: 190,
        destination: 'Лондон'
    },
    {
        name: 'JW Marriott Grosvenor House London',
        address: '86-90 Park Lane, Уестминстър, Лондон, W1K 7TN, Великобритания',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Spa Center', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225517505.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/200/20062582.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/200/20062497.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/151/151949449.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/169/169289464.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225517459.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225662622.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/151/151949504.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/169/169144818.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225518645.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225518682.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225517469.jpg'
        ],
        type: 'Hotel',
        price: 544,
        destination: 'Лондон'
    },
    {
        name: 'The Park Tower Knightsbridge, a Luxury Collection Hotel',
        address: '101 Knightsbridge, Уестминстър, Лондон, SW1X 7RN, Великобритания',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/253/253010122.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/182/182520077.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/426/42618220.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/426/42618870.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/426/42606028.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/172/17269191.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/172/17271498.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/172/17272153.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/426/42622529.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/102/102132257.jpg',
        ],
        type: 'Hotel',
        price: 560,
        destination: 'Лондон'
    },
    {
        name: 'Radisson Blu Edwardian Berkshire Hotel, London',
        address: '350 Oxford Street, Уестминстър, Лондон, W1C 1BY, Великобритания',
        rating: 8.5,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246583521.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/253/253039540.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180026063.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/227/227305569.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/227/227306440.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180026336.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180026071.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180025870.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180025050.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180025056.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180025060.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180024700.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180024705.jpg'
        ],
        type: 'Hotel',
        price: 276,
        destination: 'Лондон'
    },
    {
        name: 'Hard Rock Hotel London',
        address: '101 Knightsbridge, Уестминстър, Лондон, SW1X 7RN, Великобритания',
        rating: 7.9,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/198/198065403.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273723217.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273723080.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273723006.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273723083.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273723008.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273722056.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/198/198049218.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273722509.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273722273.jpg'
        ],
        type: 'Hotel',
        price: 223,
        destination: 'Лондон'
    },
    {
        name: 'London Hilton on Park Lane',
        address: '22 Park Lane, Уестминстър, Лондон, W1K 1BE, Великобритания',
        rating: 7.9,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Airport Transfer'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/273/27367796.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280661167.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280661040.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/150/150437215.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/272/272426273.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153716210.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/265/265760124.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/265/265759902.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/768/7682577.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/773/7731283.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/153/153716427.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/109/10940285.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/842/8420364.jpg'
        ],
        type: 'Hotel',
        price: 559,
        destination: 'Лондон'
    },
    {
        name: 'The Cavendish London',
        address: '81 Jermyn Street, Уестминстър, Лондон, SW1Y 6JF, Великобритания',
        rating: 8.7,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Airport Transfer'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129635306.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246927748.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246928169.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186200093.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246927402.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/246/246927441.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/244/244960540.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186200173.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186200195.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186217579.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186220078.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186200139.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186200151.jpg'
        ],
        type: 'Hotel',
        price: 354,
        destination: 'Лондон'
    },
    {
        name: 'Amba Hotel Marble Arch',
        address: 'Bryanston Street, Marble Arch, Уестминстър, Лондон, W1H 7EH, Великобритания',
        rating: 8,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/411/41149453.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/462/46271072.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/411/41137332.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/411/41149550.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/569/56947564.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/462/46274256.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/569/56947422.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/222/222490826.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/349/34997899.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/411/41149534.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/411/41149499.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/596/59644101.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/596/59644845.jpg'
        ],
        type: 'Hotel',
        price: 354,
        destination: 'Лондон'
    },
    {
        name: 'Radisson Blu Edwardian Grafton Hotel, London',
        address: '130 Tottenham Court Road, Камден, Лондон, W1T 5AY, Великобритания',
        rating: 8.3,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186906720.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186906704.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186906708.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/186/186906714.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180041982.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180041544.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/284/284288905.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180041303.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180041173.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180041065.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180040933.jpg',
        ],
        type: 'Hotel',
        price: 256,
        destination: 'Лондон'
    },
    {
        name: 'Hyatt Regency London - The Churchill',
        address: '30 Portman Square, Уестминстър, Лондон, W1H 7BH, Великобритания',
        rating: 8.7,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/150/150886183.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131386076.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112738901.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112738802.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112738911.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112738773.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131386062.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/112/112738800.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131386100.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131386057.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131386108.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131386264.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/131/131386298.jpg'
        ],
        type: 'Hotel',
        price: 509,
        destination: 'Лондон'
    },
    {
        name: 'Park Plaza County Hall London',
        address: '1 Addington Street, Ламбет, Лондон, SE1 7RY, Великобритания',
        rating: 8.5,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/233/233361425.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/233/233362034.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/233/233360751.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264983503.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264982064.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/233/233360898.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/266/266523078.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252614430.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252614437.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252614424.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/233/233362030.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/124/124505363.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252614419.jpg'
        ],
        type: 'Hotel',
        price: 332,
        destination: 'Лондон'
    },
    {
        name: 'Hyatt Regency Paris Etoile',
        address: '3 Place du Général Koenig, 17.Конгресен дворец, 75017 Париж, Франция',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/111/111791758.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168167487.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/897/89796931.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/213/213253358.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214522050.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168167488.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/170/170104373.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/103/103322064.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168167449.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214522791.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214521932.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/111/111791906.jpg'
        ],
        type: 'Hotel',
        price: 427,
        destination: 'Париж'
    },
    {
        name: 'Hotel Lutetia',
        address: '45 Boulevard Raspail, 06.Сен Жермен - Люксембург, 75006 Париж, Франция',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194457472.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274474333.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/221/221870641.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/157/157758011.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/188/188294005.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/208/208852139.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/157/157757359.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/157/157760900.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/185/185108237.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/157/157760543.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/157/157758876.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/157/157757364.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/188/188294189.jpg'
        ],
        type: 'Hotel',
        price: 1230,
        destination: 'Париж'
    },
    {
        name: 'Sofitel Paris Arc De Triomphe',
        address: '14 Rue Beaujon, 08.Шанз-Елизе, 75008 Париж, Франция',
        rating: 8.8,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/272/272995247.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180876869.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/234/234643907.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/160/160409649.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183840023.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/138/138191353.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/138/138191667.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180878051.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/180/180875547.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/152/152443431.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/18368589.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/18368464.jpg'
        ],
        type: 'Hotel',
        price: 732,
        destination: 'Париж'
    },
    {
        name: 'Citadines Saint-Germain-des-Prés Paris',
        address: '53 Ter, Quai des Grands Augustins, 06.Сен Жермен - Люксембург, 75006 Париж, Франция',
        rating: 8.3,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/239/239424439.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/135/135348351.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/135/135347856.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/133/133235519.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/133/133234959.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/133/133234969.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/163/16356433.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/813/81395055.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/163/16356417.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/163/16356441.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/163/16356388.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/163/16356440.jpg'
        ],
        type: 'Hotel',
        price: 346,
        destination: 'Париж'
    },
    {
        name: 'Pullman Paris Tour Eiffel',
        address: '18 Avenue De Suffren, Entrée au 22 rue Jean Rey, 15.Порт дьо Версай, 75015 Париж, Франция',
        rating: 8.3,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/160/160410084.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256167927.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/256/256167811.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250450125.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/159/159006857.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250450142.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/161/161683424.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/161/161413235.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/161/161412891.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/164/164131604.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/161/161401943.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/258/258679658.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/160/160701344.jpg'
        ],
        type: 'Hotel',
        price: 572,
        destination: 'Париж'
    },
    {
        name: 'Le Meurice – Dorchester Collection',
        address: '228, Rue De Rivoli, 01.Лувър - Шатeле, 75001 Париж, Франция',
        rating: 9.4,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Airport Transfer'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214455174.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214455169.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/156/156849217.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/269/269939522.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214455177.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214455184.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214455189.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/156/156850135.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214438977.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214438723.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214438744.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214438206.jpg'
        ],
        type: 'Hotel',
        price: 1303,
        destination: 'Париж'
    },
    {
        name: 'Maison Bréguet',
        address: '8 Rue Bréguet, 11.Бастилия - площад Република, 75011 Париж, Франция',
        rating: 8.7,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Airport Transfer'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/119/119015316.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129454602.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129454591.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/126/126984087.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129453147.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183778813.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129453718.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129454494.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129611268.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183778777.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183778792.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/129/129453732.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/143/143314584.jpg'
        ],
        type: 'Hotel',
        price: 477,
        destination: 'Париж'
    },
    {
        name: 'Brach Paris',
        address: '1-7 Rue Jean Richepin, 16.Трокадеро, 75116 Париж, Франция',
        rating: 9.2,
        stars: 5,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Restaurant', 'Fitness Center',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Airport Transfer'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/162/162795121.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/162/162795110.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168055633.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/173/173596017.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/232/232951321.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225134972.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/225/225135104.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/159/159823464.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/184/184325196.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168063449.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209270132.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209269404.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209269404.jpg',
        ],
        type: 'Hotel',
        price: 834,
        destination: 'Париж'
    },
    {
        name: 'Elysées Ceramic',
        address: '34, Avenue de Wagram, 08.Шанз-Елизе, 75008 Париж, Франция',
        rating: 8.4,
        stars: 3,
        facilities: [
            'Non-Smoker Rooms', 'Restaurant', 'Family Rooms',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/286/286008243.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280890650.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280888060.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280888058.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280888193.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280888187.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280888465.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280888212.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273314532.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/167/167560418.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/273/273314724.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280888197.jpg'
        ],
        type: 'Hotel',
        price: 260,
        destination: 'Париж'
    },
    {
        name: 'Hotel du Louvre in the Unbound Collection by Hyatt',
        address: 'Place André Malraux, 01.Лувър - Шатeле, 75001 Париж, Франция',
        rating: 9.1,
        stars: 5,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast', 'Airport Transfer'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/135/135005484.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/203/203700603.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/214/214380598.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/196/196613206.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242884034.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242884060.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242884249.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242884195.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/196/196613414.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/196/196613585.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/196/196613585.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242884097.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/239/239248531.jpg'
        ],
        type: 'Hotel',
        price: 769,
        destination: 'Париж'
    },
    {
        name: 'Montfleuri',
        address: '21 Avenue De La Grande Armée, 16.Трокадеро, 75016 Париж, Франция',
        rating: 8.3,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285784211.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285706404.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285706160.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285706160.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285706709.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285705614.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285705918.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/285/285705770.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/982/98240762.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/982/98237627.jpg',

        ],
        type: 'Hotel',
        price: 572,
        destination: 'Париж'
    },
    {
        name: 'Art Complex Anel',
        address: '145 Via Pontica Str., 8130 Созопол, България',
        rating: 9.4,
        stars: 3,
        facilities: [
            '2 Pools', 'Airport Transfer', 'Non-Smoker Rooms', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/807/80734785.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274388546.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274388557.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274388570.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/274/274388580.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/210/210797541.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/210/210796579.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/210/210796583.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/210/210795142.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/485/48516102.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/487/48749425.jpg'
        ],
        type: 'Hotel',
        price: 176,
        destination: 'Созопол'
    },
    {
        name: 'Sozopol Homes',
        address: 'Meden Rid 11, 8130 Созопол, България',
        rating: 9.1,
        stars: 3,
        facilities: [
            '2 Pools', 'Airport Transfer', 'Non-Smoker Rooms',
            'Free Wi Fi', 'Right on the Beach'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/161/161340271.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/185/185830123.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/185/185825084.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/185/185830177.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/185/185826743.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/187/187465405.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/185/185818700.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/187/187466584.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/187/187465407.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/187/187465411.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/187/187465420.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/187/187465422.jpg'
        ],
        type: 'Apartments',
        price: 60,
        destination: 'Созопол'
    },
    {
        name: 'Diamanti',
        address: 'Morski skali, 8130 Созопол, България',
        rating: 9,
        stars: 3,
        facilities: [
            'Parking', 'Airport Transfer', 'Non-Smoker Rooms',
            'Free Wi Fi', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/886/8866406.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/144/144868262.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/144/144868265.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/144/144868267.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/144/144868273.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/144/144868276.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/149/149220185.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/143/143651975.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/143/143651980.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/143/143648958.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/143/143324256.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/143/143324075.jpg'
        ],
        type: 'Hotel',
        price: 61,
        destination: 'Созопол'
    },
    {
        name: 'Полина Бийч',
        address: 'Местност Месаря , 8130 Созопол, България',
        rating: 9.1,
        stars: 3,
        facilities: [
            'Parking', 'Airport Transfer', '2 Pools',
            'Non-Smoker Rooms', 'Free Wi Fi', 'Family Rooms'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/260/260084945.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238989707.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238989713.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238988975.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238988899.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238988819.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238988699.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238981725.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238981671.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238981615.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238981613.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/238/238979506.jpg'
        ],
        type: 'Hotel',
        price: 62,
        destination: 'Созопол'
    },
    {
        name: 'Апартамент Белия делфин Greenlife',
        address: 'Greenlife beach resort 12, 8130 Созопол, България',
        rating: 9.4,
        stars: 3,
        facilities: [
            'Parking', 'Fitness Center', 'Pool',
            'Non-Smoker Rooms', 'Free Wi Fi'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259613099.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259629336.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259629262.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259629226.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259629176.jpg0',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259629138.jpg0',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259629020.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259628976.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/259/259613099.jpg',

        ],
        type: 'Apartments',
        price: 120,
        destination: 'Созопол'
    },
    {
        name: 'Гардън Бийч',
        address: 'къмпинг Градина Ап.22, Созопол, България',
        rating: 7.5,
        stars: 4,
        facilities: [
            'Parking', 'Pool',
            'Pets Allowed', 'Free Wi Fi'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071067.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071145.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071148.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071151.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071156.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071158.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071160.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071161.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071162.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071167.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/263/263071172.jpg'
        ],
        type: 'Apartments',
        price: 300,
        destination: 'Созопол'
    },
    {
        name: 'Casa de oro Aparthotel',
        address: 'Greenlife beach resort 12, 8130 Созопол, България',
        rating: 9.1,
        stars: 3,
        facilities: [
            'Parking', 'Airport Transfer', 'Family Rooms',
            'Pets Allowed', 'Free Wi Fi'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252488325.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280940257.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/280/280940284.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/279/279353366.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251084822.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251998348.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/109/109534615.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251997600.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250796799.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251084827.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251084845.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/257/257434228.jpg'
        ],
        type: 'Aparthotel',
        price: 150,
        destination: 'Созопол'
    },
    {
        name: 'Hotel Silver',
        address: '10,Lozengrad, 8130 Созопол, България',
        rating: 8.8,
        stars: 3,
        facilities: [
            'Pool', 'Family Rooms',
            'Pets Allowed', 'Free Wi Fi'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744530.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744776.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744610.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744549.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744530.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744468.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744442.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744410.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744374.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744315.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/254/254744270.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252077064.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252076858.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252076817.jpg'
        ],
        type: 'Hotel',
        price: 35,
        destination: 'Созопол'
    },
    {
        name: 'Electra Metropolis',
        address: 'Mitropoleos 15, Атина, 10557, Гърция',
        rating: 8.8,
        stars: 5,
        facilities: [
            'Pool', 'Family Rooms', 'Airport Transfer', 'Fitness Center',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155083203.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250951275.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/110/110796847.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/279/279311221.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/140/140254868.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/140/140255748.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250952586.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250952096.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250951877.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250951259.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250951290.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/114/114475288.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/250/250951075.jpg'
        ],
        type: 'Hotel',
        price: 368,
        destination: 'Атина'
    },
    {
        name: 'Grand Hyatt Athens',
        address: '115, Syngrou Avenue, Атина, 11745, Гърция',
        rating: 8.5,
        stars: 5,
        facilities: [
            'Pool', 'Family Rooms', 'Airport Transfer', 'Fitness Center',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/211/211216065.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168997589.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209432169.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/168/168999054.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/176/176727228.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183985484.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209431787.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/169/169023932.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/176/176730946.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209431830.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209431870.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209431939.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/209/209431776.jpg'
        ],
        type: 'Hotel',
        price: 210,
        destination: 'Атина'
    },
    {
        name: 'Four Seasons Astir Palace Hotel Athens',
        address: '40 Apollonos Street, Вулиагмени, Атина, 16671, Гърция',
        rating: 9.4,
        stars: 5,
        facilities: [
            'Pool', 'Family Rooms', 'Airport Transfer', 'Fitness Center',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast', 'Own Beach'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/207/207323277.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/207/207323305.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/207/207323294.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/207/207323298.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248328567.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248328571.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/207/207323239.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248327573.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248326874.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248326507.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248326511.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248326518.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248326525.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/248/248326102.jpg'
        ],
        type: 'Hotel',
        price: 998,
        destination: 'Атина'
    },
    {
        name: 'Elia Ermou Athens Hotel',
        address: 'Ermou 15, Атина, 10563, Гърция',
        rating: 9.4,
        stars: 4,
        facilities: [
            'Family Rooms', 'Airport Transfer', 'Fitness Center',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/172/172629835.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178563599.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178563653.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178286102.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/177/177411096.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/177/177408642.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/177/177414614.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/177/177418228.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/226/226506489.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/177/177408477.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178563667.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/178/178563608.jpg'
        ],
        type: 'Hotel',
        price: 196,
        destination: 'Атина'
    },
    {
        name: 'Divani Apollon Palace & Thalasso',
        address: '10 Ag. Nikolaou & Iliou Str, Вулиагмени, Атина, 166 71, Гърция',
        rating: 8.6,
        stars: 4,
        facilities: [
            'Family Rooms', 'Airport Transfer', 'Fitness Center', 'Right on the Beach',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast', 'Own Beach'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/183/183969353.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242485899.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242490813.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/239/239931686.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/239/239931678.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/139/139889447.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/139/139911773.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/139/139911773.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/237/237933716.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/239/239931654.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242485893.jpg'
        ],
        type: 'Hotel',
        price: 326,
        destination: 'Атина'
    },
    {
        name: 'The Stanley',
        address: 'Odysseos 1- Karaiskaki Sq, Атина, 10437, Гърция',
        rating: 8.5,
        stars: 4,
        facilities: [
            'Family Rooms', 'Airport Transfer', 'Fitness Center', 'Right on the Beach',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/270/270044360.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/260/260367037.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/270/270646629.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/270/270044351.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/745/74599173.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155468324.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/270/270044343.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/270/270044332.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/155/155480777.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/270/270044309.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/243/243534141.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/260/260522784.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/270/270044321.jpg'
        ],
        type: 'Hotel',
        price: 190,
        destination: 'Атина'
    },
    {
        name: 'Crystal City Hotel',
        address: 'Odysseos 1- Karaiskaki Sq, Атина, 10437, Гърция',
        rating: 7.9,
        stars: 3,
        facilities: [
            'Restaurant', 'Family Rooms', 'Airport Transfer',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194442959.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194441769.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194217342.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194455585.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194453753.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194435738.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194434668.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194436868.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194450143.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194449041.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/194/194445666.jpg'
        ],
        type: 'Hotel',
        price: 100,
        destination: 'Атина'
    },
    {
        name: 'Hotel Grande Bretagne, a Luxury Collection Hotel',
        address: '1 Vasileos Georgiou A’ str., Атина, 105 64, Гърция',
        rating: 9.3,
        stars: 5,
        facilities: [
            '2 Pools', 'Family Rooms', 'Airport Transfer', 'Fitness Center', 'Parking',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/282/282790115.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264601887.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264601890.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264601897.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264601900.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264601909.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/264/264601912.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/253/253357579.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/20533565.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/205/20533487.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251082377.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251082371.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/251/251082374.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/261/261784940.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/261/261784937.jpg'
        ],
        type: 'Hotel',
        price: 809,
        destination: 'Атина'
    },
    {
        name: 'The Margi',
        address: 'Litous 11, Vouliagmeni, Вулиагмени, Атина, 16671, Гърция',
        rating: 9.0,
        stars: 5,
        facilities: [
            '2 Pools', 'Family Rooms', 'Airport Transfer', 'Fitness Center', 'Parking',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/692/69232792.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242717871.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242716434.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/242/242714158.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/234/234552004.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/234/234551744.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/234/234551545.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/234/234550921.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/198/198949547.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/198/198949597.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/198/198949616.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/196/196817955.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/196/196819142.jpg'
        ],
        type: 'Hotel',
        price: 410,
        destination: 'Атина'
    },
    {
        name: 'Palmyra Beach Hotel',
        address: '70, Possidonos Ave., Глифада, Атина, 16675, Гърция',
        rating: 8.8,
        stars: 4,
        facilities: [
            '2 Pools', 'Family Rooms', 'Airport Transfer', 'Fitness Center', 'Parking',
            'Roomservice', 'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [
            'https://cf.bstatic.com/images/hotel/max1280x900/926/92657383.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394730.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394726.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394720.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394719.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394717.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394715.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394710.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394705.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394704.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394695.jpg',
            'https://cf.bstatic.com/images/hotel/max1280x900/252/252394694.jpg'
        ],
        type: 'Hotel',
        price: 118,
        destination: 'Атина'
    }
]

