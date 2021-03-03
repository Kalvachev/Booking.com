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
        description: `The Square Milano Duomo се помещава в историческа сграда, на 5 минути пеша от Миланската катедрала, операта Ла Скала и търговската зона Vittorio Emanuele. Предлага ресторант, бар и безплатен Wi-Fi в цялата сграда.

        Всяка стая е в модерен стил и е оборудвана с климатик и минибар. Самостоятелната баня е със сешоар и безплатни тоалетни принадлежности.
        
        The Square Milano се намира на 15 минути пеша от парка Семпионе. Метростанция Missori е на 100 метра.
        
        За нашите гости това е любимата част на Милано, според независими отзиви.
        
        Самостоятелно пътуващите харесват местоположението - те му дават оценка от 9.5 за самостоятелен престой.`
    },
    {
        name: 'Palazzo Parigi Hotel & Grand Spa - LHW',
        address: 'Corso Di Porta Nuova 1, Център, 20121 Милано, Италия',
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
        address: 'Via Adalberto Catena 2, Център, 20121 Милано, Италия',
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
        description: `Hotel VIU Milan се намира в центъра на град Милано, на 10 минути пеша от площад Gae Aulenti и модния квартал Corso Como. Предлага басейн на покрива с панорамен 360-градусов изглед. Хотелът разполага със СПА център, сауна и фитнес зала. Гостите могат да се насладят на питие в бар Mixology.

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
        description: `Хотел Park Hyatt Milano се намира в центъра на Модния квартал, с лице към входа на търговската галерия „Виктор Емануил“ и на 200 метра от катедралата и оперния театър ,Ла Скала“. Хотелът предлага безплатен WiFi, СПА център и фитнес зала.

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
        description: `Irini Apartments се намира на около 200 м от плажа в Керамоти, регион Македония. Предлага помещения за настаняване с безплатен WiFi, барбекю, градина и безплатен частен паркинг.

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
        destination: 'Пукет',
        description: `Този луксозен крайбрежен хотел се намира до спокойния бряг и предоставя богата гама от фитнес съоръжения, 3 инфинити басейна и невероятен изглед към океана. Той разполага също със СПА център и денонощно консиерж бюро.

        Освен панорамен морски изглед и места за сядане на открито, модерните стаи предлагат самостоятелен балкон, достъпен през плъзгащи се стъклени врати. В стаите има също 37-инчов телевизор с плосък екран, зарядно устройство за iPod и DVD плеър.
        
        На място може да се ползва безплатен паркинг. The Westin Siray Bay Resort & Spa Phuket е на 15 минути с кола от град Пукет. Намира се на около 40 минути с кола от международно летище Пукет и културния тематичен парк Phuket FantaSea.
        
        Гостите могат да се включат в уроци по йога до плажа или да се насладят на игра на волейбол. Екстрите се допълват от детски клуб, безплатни безмоторни водни спортове и безплатен WiFi в общите части.
        
        На фона на лека лаундж музика в Prego by the Beach се поднася модерна италианска кухня, а в EEST и Seasonal Taste се сервират богати азиатски ястия.`
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
        destination: 'Пукет',
        description: `Novotel Phuket City Phokeethra се намира в сърцето на град Пукет и предлага открит плувен басейн и 180 стилни стаи и суити.

        Всички климатизирани помещения за настаняване разполагат с плоскоекранен телевизор със сателитни канали, минибар и работно бюро. Има също сейф и електрическа кана. Самостоятелната баня е оборудвана със сешоар, душ и безплатни тоалетни принадлежности.
        
        Гостите могат да поддържат форма във фитнес залата на хотела. За напитки и леки закуски, можете да се отправите към лоби бара или към салона на небето, който предлага панорамна гледка. Целодневният ресторант предлага разнообразни ястия на шведска маса и а ла карт.
        
        Novotel Phuket City Phokeethra е на кратко разстояние пеша от Стария град на Пукет и близката търговска зона. Той е на по-малко от 4 километра от търговския център Central Festival Phuket. Кеят Rassada, откъдето има редовни лодки до остров Фи Фи, е на 3 километра. Популярните плажове на западния бряг на Пукет са на 45 минути с кола. Международно летище Пукет е на 1 час с кола от хотел The Gig.
        
        За нашите гости това е любимата част на Пукет, според независими отзиви.`
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
        destination: 'Пукет',
        description: `Blu Monkey Hub and Hotel се намира в град Пукет и разполага с безплатни велосипеди, бар, общ салон и градина. На разположение на гостите има консиерж услуги и тераса за слънчеви бани. Хотелът предлага открит плувен басейн, денонощна рецепция и безплатен WiFi.

        Всяка сутрин се сервира континентална закуска.
        
        Районът е популярна дестинация за колоездене. Blu Monkey Hub and Hotel предоставя коли под наем.
        
        Удобствата включват химическо чистене и бизнес услуги като факс и фотокопиране.
        
        Популярни забележителности в близост до Blu Monkey Hub and Hotel включват Стария град на Пукет, музея на историята Chinpracha House и музея Thai Hua. Най-близкото летище е международно летище Пукет, на 33 километра. Предлага се платен летищен трансфер.`
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
        destination: 'Пукет',
        description: `Set in Phuket Town, just 1 km from Siray Bay, Koh Sirey Beachfront Pool Villa offers beachfront accommodation with an outdoor swimming pool, a garden, a private beach area and free WiFi. This property offers a private pool and free private parking.

        The holiday home has 1 bedroom, a flat-screen TV with satellite channels, an equipped kitchen with a microwave and a fridge, a washing machine, and 2 bathrooms with a shower. For added convenience, the property can provide towels and bed linen for an extra charge.
        
        At the holiday home guests are welcome to take advantage of a hot tub. A car rental service is available at Koh Sirey Beachfront Pool Villa.
        
        Old Phuket Town is 6 km from the accommodation, while Chinpracha House is 7 km from the property. The nearest airport is Phuket International Airport, 42 km from Koh Sirey Beachfront Pool Villa.
        
        `
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
        destination: 'Пукет',
        description: `Little Nyonya Hotel се намира в град Пукет, на 3,2 км от музея Chinpracha House. Предлага помещения за настаняване с ресторант, безплатен частен паркинг, открит басейн и бар. Удобствата за гостите се допълват от денонощна рецепция, рум-сървиз и безплатен WiFi в цялата сграда. В хотела има градина и тераса.

        Сутрин се сервира континентална или американска закуска.
        
        Популярните забележителности близо до Little Nyonya Hotel включват пазара Chao Fah, търговския комплекс King Power Phuket и търговския център Central Festival Phuket. Най-близкото летище е международното летище Пукет, на 33 км.`
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
        destination: 'Пукет',
        description: `Бутиковият хотел Casa Blanca се помещава в елегантна сграда в колониален стил, намираща се в непосредствена близост до Стария град на Пукет. Предлага красиво обзаведени бутикови помещения със самостоятелен балкон и изглед. На разположение са градина, открит басейн и безплатен WiFi в целия хотел.

        Бутиковият хотел Casa Blanca се намира на 10 минути пеша от автогарата, а плажът на Патонг е на 30 минути с автомобил. До летище Пукет се стига за 45 минути с автомобил.
        
        Стаите са с дървен под, климатик, сейф и минибар. Предлагат модерни самостоятелни бани. Някои стаи включват всекидневна и кухненски бокс.
        
        Удобствата в хотела се допълват от туристическо бюро, което организира екскурзии до местни забележителности, и кафе-сладкарница, където се сервират а-ла-карт закуска и сладкиши.
        
        За нашите гости това е любимата част на Пукет, според независими отзиви.`
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
        destination: 'Пукет',
        description: `Хотел Ramada Plaza by Wyndham Chao Fah, Phuket се намира в град Пукет, на 5 км от музея Chinpracha House. Предлага помещения за настаняване с ресторант, безплатен собствен паркинг, открит плувен басейн и фитнес център. Този 5-звезден хотел разполага с безплатен WiFi и бар. Удобствата за гостите включват също денонощна рецепция, румсървиз и обмяна на валута.

        Всеки ден в хотела се сервира закуска на шведска маса.
        
        Музеят Thai Hua е на 5 км от Ramada Plaza by Wyndham Chao Fah, Phuket, а Старият град в Пукет е на 6 км. Най-близкото летище е международното летище Пукет, на 34 км.`
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
        destination: 'Пукет',
        description: `Set in Phuket Town, 2.5 km from Chinpracha House, Peranakan House offers accommodation with an outdoor swimming pool, free private parking, a fitness centre and a bar. This 3-star hotel offers a kids' club and a concierge service. The accommodation features a 24-hour front desk, a shuttle service, room service and free WiFi.

        All guest rooms come with air conditioning, a flat-screen TV with cable channels, a fridge, a kettle, a shower, a hairdryer and a desk. At the hotel all rooms have a wardrobe and a private bathroom.
        
        Peranakan House offers a sun terrace.
        
        Popular points of interest near the accommodation include Chao Fah Variety Market, Central Festival Phuket and King Power Phuket Complex. The nearest airport is Phuket International Airport, 26 km from Peranakan House.`
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
        destination: 'Пукет',
        description: `La Moon @ Phuket се намира на 10 минути с автомобил от град Пукет и универсален магазин Robinson. Предлага модерни климатизирани стаи с балкони и безплатен WiFi. Хотелът разполага с караоке съоръжения, туристическо бюро и заседателни зали.

        Кеят Rassada е на 15 минути с автомобил. Международното летище на Пукет е разположено на 45 минути с автомобил.
        
        Стаите за непушачи предлагат кабелна телевизия, минибар и гардероб. Самостоятелните бани са снабдени с вана и безплатни тоалетни принадлежности.
        
        Персоналът на денонощната рецепция може да съдейства на гостите с организирането на трансфер и наем на автомобил. На разположение има помещение за съхранение на багаж и сейф. Паркингът на място е безплатен.
        
        Гостите могат да се насладят на тайландски и международни ястия в ресторанта от 6:00 до 24:00 часа. При заявка се предлага румсървиз.
        
        За нашите гости това е любимата част на Пукет, според независими отзиви.`
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
        destination: 'Пукет',
        description: `Хотел The Tide Beachfront Siray Phuket се намира в град Пукет, на 6 км от Старият град и предлага настаняване с ресторант, безплатен собствен паркинг, открит плувен басейн и бар. На разположение на гостите има денонощна рецепция и румсървиз, както и безплатен WiFi навсякъде. На място има градина и тераса.

        Сутрин в хотела се сервира закуска на шведска маса.
        
        Къщата - музей Chinpracha House се намира на 7 км от The Tide Beachfront Siray Phuket, музеят Thai Hua също е на 7 км. Най-близкото летище е международно летище Пукет, разположено на 38 км.`
    },
    {
        name: 'Chinotel',
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
        destination: 'Пукет',
        description: `Chinotel provides rooms with modern décor, a 30-minute drive from Patong Beach. Offering free WiFi, it is a 10-minute walk from the fresh market and various dining options.

        The Chinotel is in the heart of Phuket Town, a 45-minute drive from Phuket International Airport. A ferry to Phi Phi Island is available from Ratsada Pier, which is a 15-minute drive away.
        
        Rooms are luxurious with spacious and well-decorated interiors and flat-screen cable TVs. They all come with ample seating space, a fridge and en suite bathrooms for comfort.
        
        For added convenience, the hotel provides room service. Visit the tour desk to enquire about excursions to local attractions.
        
        За нашите гости това е любимата част на Пукет, според независими отзиви.`
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
        destination: 'Виена',
        description: `Hilton Vienna Plaza се намира на историческия булевард „Рингщрасе“, срещу Фондовата борса и на 10 минути пеша от елегантната търговска улица „Грабен“ в центъра на Виена. Предлага безплатен WiFi в общите части и работни станции Apple и PC за безплатно ползване.

        Hilton Vienna Plaza съчетава модерни и дизайнерски елементи в стил Ар Деко. В следобедните часове гостите могат да се насладят на чай или кафе в лобито. Сауната и фитнес центърът са отворени денонощно.
        
        Стаите и суитите разполагат с елегантно обзавеждане и бани с мраморни детайли. Големите прозорци в стаите могат да се отварят.
        
        В ресторант ÉMILE се сервират австрийски и интернационални ястия, приготвени с пресни сезонни продукти, както и богат избор от австрийски и международни вина. През деня и до късно през нощта в бар ÉMILE се поднасят специални коктейли с Martini, абсент и други вкусни напитки.
        
        ВИП салонът във Vienna Plaza предлага безплатна закуска и международни вестници сутрин. На гостите, настанени в екзекютив стаи и суити, се предоставят леки закуски и напитки през целия ден, както и експресно настаняване и напускане.
        
        Метростанция Schottentor (линия U2) е на 2 минути пеша от хотела.
        
        За нашите гости това е любимата част на Виена, според независими отзиви.`
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
        destination: 'Виена',
        description: `Този стилен хотел е проектиран от известния архитект Жан Нувел и предлага панорамен изглед към Виена, гурме ресторант, фитнес зала и спа зона с площ от 750 кв. м, която гостите могат да ползват безплатно. SO Vienna се намира в центъра на града, само на една кратка разходка от всички основни забележителности.

        Стаите в SO Vienna са климатизирани и разполагат с баня с вана и душ тип „тропически дъжд“. Във всички стаи има минибар, който предлага безплатно минерална вода и плодови сокове. Осигурен е безплатен WiFi навсякъде.
        
        SO Vienna съчетава традиционната виенска архитектура с модерен дизайн и впечатлява с елегантната си стъклена фасада, просторното лоби с видео тавани и вертикалната градина.
        
        Бар-ресторант Das LOFT на 18-тия етаж е с изцяло стъклени стени и предлага директен изглед към катедралата „Свети Стефан“.
        
        Метростанция „Шведенплац“ (линии U1 и U4) се намира от другата страна на моста „Шведенбрюке“, на отсрещния бряг на Дунавския канал. Катедралата „Свети Стефан“, разположена в самия център на града, е само на 10 минути пеша.
        
        За нашите гости това е любимата част на Виена, според независими отзиви.`
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
        destination: 'Виена',
        description: `Hilton Vienna Park се намира в центъра на Виена, в непосредствена близост до Градския парк, срещу метростанция Wien-Mitte/Landstraße и жп гара City Airport Train (CAT), откъдето се стига до летище Виена за 16 минути. В общите помещения има безплатен WiFi, а в лоби бара гостите могат да ползват принтер и безплатна комуникационна станция за компютри Apple и други персонални компютри.

        Наскоро обновените и шумоизолирани стаи в Hilton Vienna Park са декорирани в топли цветове и предлагат панорамна гледка към парка и града. Всяка стая разполага с 40-инчов LED телевизор с плосък екран и просторен кът за сядане. Всички стаи са снабдени халати за баня. В стаите има високоскоростен интернет срещу допълнително заплащане.
        
        Всеки ден в Hilton Vienna Park се сервира богата закуска на шведска маса. Гостите могат да се хранят в съвременния а-ла-карт ресторант LENZ, както и да си поръчат леки закуски и напитки в бара в градски стил SELLany.
        
        Гостите на екзекютивните стаи и суити ползват достъп до големия ВИП салон, където получават безплатна закуска, международни вестници и освежителни напитки през целия ден, както и експресна регистрация при настаняване и заминаване.
        
        Сред екстрите за гостите е фитнес център с модерно кардио оборудване и парна баня. В стаите за гости има фитнес съоръжения.
        
        Катедралата „Св. Стефан“ и търговската улица „Кертнер“ са само на 10 минути пеша.
        
        За нашите гости това е любимата част на Виена, според независими отзиви.`
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
        destination: 'Виена',
        description: `Ideally set in the 02. Leopoldstadt district of Vienna, Hampton By Hilton Vienna Messe is situated 200 metres from Messe Wien, 600 metres from Vienna Prater and 1.1 km from Kunst Haus Wien - Museum Hundertwasser. With a bar, the 3-star hotel has air-conditioned rooms with free WiFi. The accommodation features a 24-hour front desk, a concierge service and organising tours for guests.

        All rooms at the hotel are fitted with a seating area, a TV with satellite channels and a private bathroom with a hairdryer and a shower.
        
        Hampton By Hilton Vienna Messe offers a buffet or gluten-free breakfast.
        
        Ernst Happel Stadium is 1.5 km from the accommodation, while Austria Center Vienna is 2.2 km from the property. The nearest airport is Vienna International, 16 km from Hampton By Hilton Vienna Messe, and the property offers a paid airport shuttle service.`
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
        destination: 'Виена',
        description: `Radisson Blu Park Royal Hotel Vienna се намира точно до Техническия музей на Виена и само на 5 минути пеша от двореца Шьонбрун. Заобиколен е от собствен парк и предлага фитнес зона със сауна и парна баня, както и безплатен WiFi.

        Просторните, климатизирани стаи на Radisson Blu Park Royal Hotel Vienna са шумоизолирани и разполагат с 49-инчов телевизор с плосък екран с канали на Sky, сейф за лаптоп, минибар и баня.
        
        Елегантният ресторант Regio и лоби бара Chino предлагат достъп до тераса с изглед към градината и зелен вътрешен двор.
        
        Срещу допълнително заплащане може да се ползва обществен паркинг на място. Трамвайната спирка на линии 49, 52 и 58 се намира само на 150 метра, а метростанция Schönbrunn (по линия U4) е на 750 метра.`
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
        destination: 'Виена',
        description: `The Ritz-Carlton, Vienna се помещава в 4 исторически двореца в центъра на Виена и съчетава лукс със съвременен дизайн. Осигурен е денонощен румсървис. Най-красивите забележителности са на няколко минути пеша, а хотелът е идеална отправна точка за опознаване на града.

        След ден, прекаран в разглеждане на забележителности, гостите могат да релаксират в СПА център Ritz-Carlton. Той разполага с най-големия закрит басейн в центъра на Виена с подводна музика, фитнес зала, отделни сауни и парни бани за мъже и жени, както и 3 СПА суита за СПА процедури с продукти Susanne Kaufmann.
        
        Луксозните стаи и суити са климатизирани и включват безплатен WiFi, телевизор с плосък екран, минибар и озвучителна система Geneva със зарядно устройство за iPod. Мраморните бани разполагат с вана, душ, сешоар, безплатни тоалетни принадлежности, халати за баня и чехли.
        
        Бар Atmosphere Rooftop Bar е разположен високо над покривите на Виена и през летния сезон предлага изискани коктейли. От него се открива панорамен изглед. В ресторант Dstrikt Steakhouse гостите могат да опитат стекове от отлежало австрийско говеждо месо, съчетани с местни продукти и богат избор от международни вина. В D-bar се предлагат модерни коктейли с нотка на креативност.
        
        На разположение на гостите в The Ritz-Carlton, Vienna има и клубен салон с индивидуално настаняване, ексклузивно консиерж обслужване, летищен трансфер и неограничена консумация на шампанско. Осигурени са кулинарни изкушения и напитки през целия ден.
        
        Сред забележителностите, разположени на няколко минути пеша, са катедралата „Свети Стефан“ и дворецът „Хофбург“. Трамвайната спирка Schwarzenbergplatz (на линии 2 и 71) се намира на 200 м, а метростанция Stadtpark (на линия U4) – на 3 минути пеша от The Ritz-Carlton, Vienna. Виенската държавна опера е на 500 м.
        
        За нашите гости това е любимата част на Виена, според независими отзиви.`
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
        destination: 'Виена',
        description: `Park Hyatt Vienna се намира в Златния квартал в центъра на града. Помещава се в бивша банкова сграда от началото на 20-ти век, съчетаваща лукс и елегантност в характерен за Виена стил. Хотелът предлага луксозен уелнес център със закрит басейн, денонощна рецепция и а ла карт ресторант. В цялата сграда е осигурен безплатен WiFi.

        Климатизираните стаи и суити в Park Hyatt са с площ от 35 до 170 кв.м. и включват типичен виенски интериор с елегантно обзавеждане и модерни уреди. Всяко помещение за настаняване разполага с телевизор с плосък екран, напълно зареден минибар и собствена баня с вана или душ, сешоар и безплатни тоалетни принадлежности.
        
        Гостите могат да избират между различни заведения за хранене и да си поръчат класически ястия в стил бирария и модерни напитки в историческата бирария The Bank Brasserie & Bar, различни видове уиски в цигарения салон Living Room, традиционни виенски кафе специалитети в Café am Hof и следобеден чай в Lounge.
        
        В спа и уелнес зоната Arany Spa на място гостите могат да се насладят на богат избор от релаксиращи процедури за лице и тяло или да поддържат формата си в модерно оборудвания фитнес център и в 15-метровия закрит плувен басейн.
        
        В Park Hyatt Vienna има съвременни конферентни зали с обща площ 800 кв.м, разположени в красиво реставрирани исторически помещения. Всички зали са оборудвани с най-модерни технологии.
        
        Park Hyatt е на 5 минути пеша от някои от най-известните забележителности на Виена, сред които площад „Свети Стефан“ с едноименната катедрала и търговската улица „Кернтнерщрасе“. Хотелът е на няколко крачки от няколко луксозни магазина и много барове и кафенета. Конгресният център „Хофбург“ е на 10 минути пеша.
        
        За нашите гости това е любимата част на Виена, според независими отзиви.`
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
        destination: 'Виена',
        description: `Хотел Vienna Marriott се намира на отлично място на самия булевард „Рингщрасе“, точно срещу виенския градския парк „Щадпарк“. Хотелът предлага закрит басейн, СПА зона и денонощна фитнес зала.

        Хотел Vienna Marriott има красиво лоби с голямо стълбище и добре осветен атриум. ВИП салонът предлага панорамен изглед към Виена.
        
        Стаите са обновени през 2017 г. и предлагат елегантен и съвременен дизайн, просторна работна зона с WiFi, машина за чай/кафе и луксозни легла.
        
        Ресторант Parkring предлага изглед към парка и в него се сервират международни и традиционни австрийски ястия. Стилният бар Cascade разполага със закрит водопад и предлага коктейли, леки закуски и музика на живо. В ресторанта и лобито има безплатен WiFi.
        
        Светлото кафене Garten Café предлага виенски сладкиши, кафе и обяд на шведска маса. В непринудената обстановка на бар-ресторант Champions Sports Bar & Restaurant гостите могат да се насладят на американски ястия и да гледат спортните събития на някой от 28-те телевизора или на големия екран в заведението всеки ден.
        
        Катедралата „Свети Стефан“, Операта и търговската улица „Кернтнерщрасе“ са само на 5-10 минути пеша от хотел Marriott Vienna.
        
        Трамвайната спирка Weihburggasse се намира пред хотела. Метростанциите U4 Stadtpark и U3 Stubentor се намират само на 250 метра. Спирката, на която спират влакове за градското летище, е само на 650 метра.
        
        За нашите гости това е любимата част на Виена, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Тази впечатляваща сграда в стил Крал Джордж се намира в Уест Енд в Лондон и понастоящем е 4-звезден хотел. В непосредствена близост се намират 2 метрсотанции. Предлага се безплатен Wi-Fi.

        Хотел Grange Fitzrovia се намира в непосредствена близост до Оксфорд Стрийт и Оксфорд Съркъс. Риджънтс Парк е на 10 минути пеша.
        
        Всяка просторна стая в Fitzrovia Hotel разполага с цифров LCD телевизор. Гостите могат да се възползват от удобствата за приготвяне на чай и кафе, както и от денонощния румсервиз.
        
        Елегантният ресторант предлага превъзходно меню, а в лоби бар Omega се сервират следобеден чай и коктейли.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Разположен на улица Парк Лейн в квартал Мейфеър, този забележителен хотел има идеално местоположение и е изключително подходящ, ако искате да посетите Хайд парк, Бъкингамския дворец или да пазарувате на улица Оксфорд и да усетите блясъка на квартал Уест Енд.

        Grosvenor House разполага със стилен коктейл бар, фитнес център и 31 заседателни зали. В общите части гостите могат да ползват 1 час безплатен достъп до Wi-Fi интернет.
        
        Открит през 1929 година и често посещаван от кралски особи и знаменитости, историческият хотел Grosvenor House предлага луксозни стаи за гости и разнообразни съоръжения. Всяка стая предлага пространство, уединение и много съвременни удобства.
        
        Ресторант JW Steakhouse осигурява класическо американско изживяване с крехки парченца телешко на скара и пресни морски дарове. Ресторант Park Lane Market сервира леки ястия и класически американски бонбони.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Хотел The Park Tower Knightsbridge, a Luxury Collection Hotel е 5-звезден хотел, разположен в центъра на Найтсбридж, в непосредствена близост до универсален магазин Harvey Nichols и Хайд Парк, както и близо до универсален магазин Harrods и други дизайнерски магазини. Предлага удостоена с отличия кухня и великолепен изглед към Лондон.

        Хотелът представлява кръгла кула и всичките 280 луксозни стаи са с впечатляващ изглед към хоризонта на Лондон. Всички стаи разполагат със зарядно устройство за iPod, телевизор с филми по поръчка и интернет достъп.
        
        Главният консиерж на хотела и неговият екип са признати със своя опит и с готовност ще съдействат на гостите в опознаването на Найтсбридж и други части на Лондон.
        
        За да помогне на гостите да опознаят културата и традициите на Великобритания, хотел The Park Tower Knightsbridge, a Luxury Collection Hotel предлага следобеден чай в салон Knightsbridge. Бар Hyde също е вдъхновен от британските членски клубове и предлага уиски и пури в изискана обстановка.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Radisson Blu Edwardian, Berkshire is a delightful boutique hotel on Oxford Street, a 5-minute walk from Selfridges department store. It is opposite Bond Street Underground Station and close to an array of luxury boutiques and designer shopping. WiFi is free throughout.

        Rooms and suites at the Radisson Blu Edwardian, Berkshire feature Samsung flat-screen Smart TVs with up to 300 channels in multiple languages, Egyptian cotton bed linen, sleek designer furnishings, Italian marble bathrooms and premium skincare brand REN toiletries.
        
        Tucked away just off Oxford Street, enjoy a relaxing stay in central London with a delicious breakfast available in the morning.
        
        Hyde Park, the royal palaces, Notting Hill, Park Lane and Piccadilly are within a 15-minute walk or 5-minute tube journey from Bond Street Tube Station (via Jubilee and Central lines). Shaftesbury Avenue is 1.2 km from the hotel. The nearest airport is London City Airport, 14 km from Radisson Blu Edwardian.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Хотел Hard Rock Hotel London се намира в центъра на Лондон, на ъгъла на улиците „Оксфорд Стрийт“ и „Парк Лейн“. Предлага климатизирани стаи с безплатен WiFi. Хайд Парк и магазините на „Оксфорд Стрийт“ са на 5 минути пеша от хотела. Хотел Hard Rock Hotel London разполага с 900 стилни стаи и суитове, както и с 2 бара и кафене Hard Rock Cafe®.

        Всяка стая в хотела разполага с бюро, гардероб и телевизор с плосък екран. Собствените бани разполагат с душ.
        
        Всеки ден в Hard Rock Hotel London се предлага богат избор от възможности за закуска и вечеря.
        
        На място има фитнес център. Персоналът на денонощната рецепция може да помогне с всякаква информация.
        
        Гостите могат да се насладят на бутиците, универсалните магазини и нощния живот в района, както и на историческите театри в Уест Енд.
        
        Бъкингамският дворец е на 30 минути от хотела, а площад „Трафалгар“ е на 35 минути пеша. Летище Лондон „Сити“ е на 17 км. Летище Лондон „Хийтроу“ е на 1 час път с кола от Hard Rock Hotel London, а летище Лондон „Гетуик“ е на 90 минути път с кола.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Хотел London Hilton on Park Lane се намира на престижната улица „Парк Лейн” в район „Мейфеър” и се радва на прекрасна панорамна гледка към Хайд Парк и кварталите „Найтсбридж” и „Уестминстър”. Този отличен с награди 5-звезден луксозен хотел има 453 стаи и суити и разполага със стилен бар и ресторант със звезда от кулинарния справочник „Мишлен”.

        Стаите имат мраморна баня и плоскоекранен телевизор, като някои от тях са с балкон. Екзекютив стаите и суитите предлагат достъп до Екзекютив салона, включващ следните удобства: безплатна континентална закуска, леки закуски и напитки през целия ден, достъп до интернет и индивидуална регистрация при настаняване.
        
        В хотела се намират едни от най-изисканите ресторанти и барове в Лондон, сред които удостоеният със звезда „Мишлен” ресторант Galvin at Windows, чието меню акцентира върху френската кухня.
        
        Trader Vic's е първият полинезийски ресторант в Лондон, който поднася божествени изкушения и е прочут със своя коктейл 1944 Mai Tai.
        
        Стилният бар-ресторант Podium сервира сезонни британски ястия и се слави със своя следобеден чай Confessions of a Chocoholic.
        
        Хотел London Hilton on Park Lane предлага също бизнес център, парна баня и сауна.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Разположен в Пикадили, хотел The Cavendish London е на 10 минути пеша от Бъкингамския дворец и площад Трафалгар. Този стилен хотел предлага луксозни стаи, ресторант, отличен с награди и вкусни следобедни чайове. Осигурен е безплатен Wi-Fi интернет достъп.

        Климатизираните стаи са обзаведени с елегантни модерни мебели, приглушено осветление и дизайнерски бани душ-кабини и луксозни тоалетни принадлежности. Включват телевизори с плосък екран и интерактивни филми, кресла и сейфове за лаптоп.
        
        Ресторант AA Rosette Petrichor предлага традиционна и модерна британска кухня, а също и отлична винена листа. Гостите могат да релаксират с питие в елегантния лоби бар или в салона със стилни дивани и обслужване по масите.
        
        Theatreland и фантастичната търговска улица Oxford Street са само на 10 минути пеша от хотела. Метростанция Piccadilly се намира на 200 метра и осигурява лесен достъп до всички части на Лондон.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Хотел Ambа Hotel Marble Arch (бивш Thistle Marble Arch) се намира в Уест енд на улица „Окфорд Стрийт“, само на 2 минути пеша от Хайд Парк. Предлага неограничен, бърз и безплатен WiFi, както и безплатен минибар и кафемашина Nespresso® във всяка стая. Прочутият район Уест Енд в Лондон е на по-малко от 1,6 км.

        Просторните стаи разполагат със стилни легла Hypnos, плоскоекранен смарт телевизор, самостоятелна баня с душ тип тропически дъжд и безплатни тоалетни принадлежности. Осигурен е също минибар, удобства за приготвяне на чай и кафе, халати за баня и работно бюро.
        
        Amba Hotel Marble Arch предлага впечатляващи бизнес съоръжения, включително 13 заседателни зали с капацитет от 2 до 500 души, бизнес център с екип за аудио-визуално съдействие на разположение, както и фитнес зала.
        
        The Grill е целодневно заведение за хранене, сервиращо класически стекове и сезонни ястия. Всяка сутрин в ресторанта се сервира а ла карт закуска, като за това трябва да се резервира час предварително.
        
        Барът предлага разнообразни вина, алкохолни напитки, бири и местен ейл. В The Deli се сервират чай и кафе, леки закуски, домашно приготвени салати, сандвичи „панини“ и сладкиши.
        
        Финансовият район е само на 10 минути с метро, а универсалният магазин Selfridges - на 5 минути пеша. Булевард „Парк Лейн“ е на 4 минути пеша.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `In London's buzzing district of Fitzrovia, Radisson Blu Edwardian, Grafton offers luxury, boutique accommodation on Tottenham Court Road. The stylish hotel has a modern restaurant and free WiFi.

        The sumptuous rooms are furnished with custom-made wall coverings and designer Italian chairs. All rooms have a Sicilian marble bathroom with complimentary premium skincare brand REN toiletries, Egyptian cotton bed linen and each features air conditioning.
        
        Guests can enjoy steaks and fresh lobsters from the Steak & Lobster restaurant. The bar offers a range of beverages and light snacks. A buffet style breakfast is available in the morning.
        
        The building of the luxury, 4-star Radisson Blu Edwardian, Grafton used to be the Aston Martin Owners Club. The contemporary hotel also has a compact 24-hour fitness centre, a 24-hour front desk and 11 meeting rooms, which can host 2-150 people.
        
        Radisson Blu Edwardian, Grafton is just 80 metres from Warren Street Underground Station. Lively Covent Garden and King’s Cross St Pancrass Railway Station, with the Eurostar to Paris and Brussels, are both a 15-minute walk away. Regent's Park is a 10-minute walk away, while Oxford Street and Carnaby Sreet are just 1.2 km from the hotel. The nearest airport is London City Airport, 13 km from the hotel.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Разположен само на 100 метра от Марбъл Арч, елегантният и луксозен Hyatt Churchill се намира в Уест Енд в Лондон и на кратко разстояние пеша от Хайд Парк и Оксфорд Стрийт.

        Луксозните, просторни стаи в Hyatt Churchill имат панорамна гледка към двора, двойни легла king-size и зарядно устройство за iPod. За гостите са осигурени модерни самостоятелни бани, халати и 25-инчови телевизори.
        
        Ресторант Montagu поднася прясно приготвени британски и европейски сезонни специалитети, както и традиционен следобеден чай, а в ресторант Locanda Locatelli можете да се насладите на отличена с награди италианска кухня.
        
        Традиционният бар Churchill предлага богат асортимент от коктейли и вина.
        
        Хотелът разполага с денонощен, модерен фитнес център и осветен тенис корт на площад Portman.
        
        Hyatt Regency London - The Churchill е само на 4 минути пеша от метростанция Marble Arch и има отлични връзки с обществения транспорт. Жп-гара Paddington, откъдето можете да хванете бързите влакове Heathrow Express до летище Хийтроу, се намира на 5 минути път с кола.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Лондон',
        description: `Разположен на южния бряг на Лондон, този модерен и семеен хотел е само на няколко минути пеша от река Темза и London Eye. The Hall Plaza County Hall London предлага бар, фитнес зала и ресторант.

        Лондонският аквариум, Биг Бен, Къщите на парламента, Народният театър, Уестминстър и Ватерлоо са на 5 минути пеша.
        
        Просторните стаи в Park Plaza County Hall разполагат с плазмен телевизор, голямо работно бюро и микровълнова печка. Гостите могат да ползват безплатно WiFi и рум-сървиз. Някои стаи на високи етажи имат изглед към Лондонското око и Лондонския град.
        
        В ресторант и бар Atrio се предлага италианска кухня, а всяка сутрин се сервира пълна английска закуска.
        
        Във фитнеса има сауна и парна баня и се предлагат различни процедури.
        
        За нашите гости това е любимата част на Лондон, според независими отзиви.`
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
        destination: 'Париж',
        description: `Hyatt Regency Paris Etoile е новото име на известния хотел Concorde La Fayette. Намира се на 1,5 километър от Триумфалната арка и популярния булевард Шанз-Елизе.

        Дизайнерските стаи за гости разполагат с бюро, кабелна телевизия, климатик и сейф. Всички стаи в хотел Hyatt Regency Paris Etoile предлагат гледка към Париж. Собствените бани са снабдени с луксозни тоалетни принадлежности.
        
        Ресторант MAYO се намира във фоайето на хотела и предлага сезонни ястия и местни продукти.
        
        Този хотел е свързан с конгресния център Palais des Congrès. Бизнес район La Defense е само на 5 минути с метрото. Останалите услуги в Hyatt Regency Paris Etoile включват обмяна на валута, денонощно консиерж обслужване и бизнес център. Метростанция Porte Maillot е на 8 минути пеша, а трансферните автобуси до летище Шарл де Гол спират точно пред хотела.
        
        За нашите гости това е любимата част на Париж, според независими отзиви.`
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
        destination: 'Париж',
        description: `Хотел Lutetia е емблематичен луксозен хотел, разположен в район Сен Жермен де Пре. Хотелът е разположен на левия бряг на река Сена, на 5 минути пеша от универсалния магазин „Ле Бон Марше“ и на 2 км от Лувъра.

        Хотелът е истинска парижка забележителност и разполага със 184 стаи, включително 40 суита и 7 емблематични суита. Всяка помещение за настаняване разполага с безплатен WiFi, озвучителна система Bang&Olufsen, медиен център и мраморни бани с безплатни тоалетни принадлежности Hermès. Някои стаи имат балкон с изглед към Айфеловата кула, а някои суитове имат тераса на покрива с 360-градусова панорама към Париж.
        
        След натоварен ден гостите могат да се отпуснат в уелнес центъра Akasha Holistic Wellbeing Centre, който разполага с фитнес център и сауна, както и с парна баня и 17-метров закрит басейн, окъпан в естествена дневна светлина. Срещу допълнително заплащане се предлагат разнообразни СПА процедури.
        
        Всяка сутрин се предлагат няколко вида закуска, включително без глутен, халал, кашер и вегетарианска. За обяд и вечеря гостите могат да се насладят на известната бирария Lutetia или на ресторант Saint Germain. Гостите имат достъп до 2 различни вътрешни двора за леки ястия. Хотелът разполага и с ВИП салон за пури и джаз-бар, проектиран от Jean Michel Willmotte.
        
        За нашите гости това е любимата част на Париж, според независими отзиви.`
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
        destination: 'Париж',
        description: `Бутиковият хотел Sofitel Paris Arc De Triomphe, проектиран изцяло от Studio Putman, се помещава в елегантна сграда в стил „Хаусман“, разположена на 450 метра от Триумфалната арка и луксозните бутици на булевард Шанз-Елизе. Концертната зала Salle Pleyel е на 250 метра.

        Стаите за гости предлагат отпускаща обстановка и матраци с мемори пяна. Всяка от тях разполага с приглушено осветление, iPod станция Bose, кафе-машина Nespresso и поднос с безплатни чайове Dammann.
        
        Суитите са оборудвани със система Nightcove, телевизор с плосък екран и просторна баня, облицована с мозайка от Putman. Удобствата включват голяма душ кабина и самостоятелна баня с тоалетни принадлежности Hermès.
        
        Ресторант Les Cocottes на майстор-готвача Christan Constant изкушава с шикозни и автентични бистро-специалитети, приготвени със сезонни продукти. Гостите могат да релаксират край камината в лобито или да се насладят на коктейл в модерния бар.
        
        В целия хотел е осигурен безплатен WiFi. На разположение на гостите са и 5 частни паркоместа, които се предоставят при заявка и в зависимост от наличността. Метростанциите Charles de Gaulle-Etoile и Ternes са на 5 минути пеша. Жп гара Charles de Gaulle-Etoile осигурява директен достъп до Marne-La-Vallée и Дисниленд Париж.
        
        За нашите гости това е любимата част на Париж, според независими отзиви.`
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
        destination: 'Париж',
        description: `Citadines Saint-Germain-des-Prés Paris се намира в центъра на град Париж, на 10 минути пеша от катедралата Света Богородица и на 300 метра от метростанция Saint-Michel. Предлага фитнес зала и безплатен достъп до Wi-Fi.

        Климатизираните студиа и апартаментите тук се обслужват от асансьор и имат сателитна телевизия. Осигурено е спално бельо. Помещенията за настаняване са със собствена баня с вана и сешоар.
        
        Срещу заплащане всеки ден се предлага континентална закуска. Всеки апартамент или студио е с кухненски бокс с микровълнова печка, хладилник и тостер. На 300 метра има ресторанти и кафенета.
        
        Тази резиденция е на 15 минути пеша от Люксембургската градина и гробницата Пантеон. Музеят Лувър е на 600 метра, а на място има паркинг.
        
        За нашите гости това е любимата част на Париж, според независими отзиви.`
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
        destination: 'Париж',
        description: `Този 4-звезден хотел Pullman Paris Tour Eiffel се намира в подножието на Айфеловата кула и Трокадеро. Фитнес залата е отворена денонощно и предлага кардио оборудване, а гостите могат да се хранят на терасата на ресторанта Frame. Хотелът се намира на 5 км от стадион „Парк де Пренс“, до който се стига само за 10 минути с кола.

        Светлите стаи за гости са обзаведени в съвременен стил и предлагат панорамен изглед към Париж. Те разполагат с плоскоекранен телевизор с безплатен достъп до най-новите филми, аудио система за iPod и безплатен WiFi. Повечето стаи разполагат с балкон, а някои предлагат великолепен изглед към Айфеловата кула или градината.
        
        В ресторанта на хотела се сервира калифорнийска кухня с френски привкус. Хотелът разполага с кухня с отворен план и стилен винен бар. На разположение на гостите има салон с компютри и принтери. Всяка сутрин се предлагат няколко вида закуска, включително азиатски, вегетариански и безглутенови ястия.
        
        Хотел Pullman Paris е разположен на Левия бряг, само на 5 минути от Айфеловата кула. Има удобно местоположение, на 600 метра от метростанция Bir-Hakeim (линия 6), осигуряваща пряк достъп до Триумфалната арка, булевард „Шанз-Елизе“ и Лувъра. На място има обществен паркинг. Само на 2 минути пеша от хотела минава автобусната линия Bus Direct, която осигурява пряк достъп до летищата „Шарл де Гол“ и „Орли“.`
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
        destination: 'Париж',
        description: `Хотел Le Meurice се помещава в дворец в централната част на Париж. Предлага ресторант, отличен с 2 звезди Michelin, както и спа и фитнес център с масажни процедури.

        Климатизираните и шумоизолирани стаи имат интериор в класически стил от 18-ти век с модерно усещане, мебели от епохата на Луи XVI и мраморна баня.
        
        В ресторанта на Le Meurice се приготвя френска гурме кухня под ръководството на главния готвач Ален Дюкас. Ястията се сервират в голямата трапезария, чиито интериор е вдъхновен от Залата на мира във Версайския дворец и е претворен от дизайнера Филип Старк.
        
        В ресторант Le Dali се поднасят ястия през целия ден. Гостите могат да си поръчат коктейл в бар 228, който предлага 300 различни вида напитки и джаз музика на живо всяка вечер. В хотела има също фитнес център и спа център, управляван от луксозният швейцарски бранд Valmont.
        
        Площад „Конкорд“ и булевард „Шанз-Елизе“ са на 5 минути пеша, а Лувърът е само на 600 м от хотела. Метростанция Tuileries е на 100 м и осигурява директен достъп до Бастилията и бизнес района „Дефанс“.
        
        За нашите гости това е любимата част на Париж, според независими отзиви.`
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
        destination: 'Париж',
        description: `Maison Bréguet се намира в Париж, на 500 метра от площад „Бастилията“ и разполага с ресторант и бар. Гостите на 5-звездния хотел могат да се насладят на масажи и да тренират във фитнес центъра.

        Всички стаи предлагат климатик и шумоизолация. Собствените бани са снабдени с вана или душ, безплатни тоалетни принадлежности и чехли. Удобствата на всяка стая включват телевизор с плосък екран със сателитни и платени канали.
        
        Всяка сутрин се сервира континентална закуска, а ресторантът е специализиран във френската кухня.
        
        Maison Bréguet разполага с денонощна рецепция, консиерж услуги и градина. Срещу заплащане се предлагат перални услуги, а на разположение има и бизнес център.
        
        Опера „Бастилия“ се намира на 650 метра от Maison Bréguet, а Площадът на Републиката е на 17 минути пеша. Летище Paris - Orly е разположено на 18 км.
        
        За нашите гости това е любимата част на Париж, според независими отзиви.`
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
        destination: 'Париж',
        description: `Brach Paris се намира в 16-и район на Париж, в непосредствена близост до Айфеловата кула и площад „Трокадеро“. Този парижки 5-звезден хотел разполага с фитнес клуб с басейни, сауна, хамам и стаи за масажи. Има и бръснарница. Организират се безплатни групови фитнес занимания, а срещу заплащане се предоставя личен инструктор.

        Светлите и просторни стаи и суити са напълно оборудвани с висококачествена озвучителна система и шумоизолация. Разполагат с тоалетни принадлежности по поръчка, висококачествени завивки, дрешник и елегантно бюро. Някои стаи и суити са с тераса и изглед към Париж и фасадите на сградите, проектирани от Жорж-Южен Осман.
        
        В Brach Paris се сервира ежедневна закуска. В ресторанта се предлагат здравословни ястия по а ла карт меню, вдъхновени от средиземноморската кухня, през целия ден, 7 дни в седмицата. В сладкарницата гостите могат да опитат сладкишите на Yann Brys, носител на Meilleur Ouvrier de France (престижна френска награда), както и коктейли късно вечер.
        
        Рецепцията е денонощна и работи без почивен ден. На 1-вия етаж има голяма тераса. От Brach се предлагат частни лимузини, паркиране на автомобилите от хотелския персонал и обслужване от консиерж, който организира разнообразни услуги в целия Париж. Другите удобства включват бизнес център и денонощен рум-сървиз.
        
        Най-близкото летище е летище Париж „Орли“, разположено на 21 км от Brach Paris. Летище „Шарл де Гол“ е на 30 км.`
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
        destination: 'Париж',
        description: `Този хотел в стил Ар Нуво се намира само на 5 минути пеша от булевард „Шанз Елизе“. Той е централно разположен в близост до основните забележителности и предлага денонощна рецепция.

        Всички стаи в хотел Elysées Ceramic имат телевизор с плосък екран със сателитни канали и минибар. Помещенията са обзаведени в съвременен стил с тапети и разполагат с WiFi интернет. Собствените бани включват вана или душ.
        
        Всяка сутрин в залата за закуска на хотел Elysées Ceramic, която има цветен стъклен таван, се сервира закуска на шведска маса. Гостите могат да изпият питие в бара или на терасата и да се любуват на цветята.
        
        Някои от другите удобства, които се предлагат в хотела, са коли под наем с шофьор и детегледачески услуги. Жп гара Charles-de-Gaulle на експресните влакове RER е на 5 минути пеша и осигурява директен достъп до увеселителния парк „Дисниленд Париж“.`
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
        destination: 'Париж',
        description: `Този 5-звезден хотел се помещава в сграда в стил Осман в сърцето на Париж. Напълно реновиран през 2019 г., той разполага с портиер и туристическо бюро с обслужване на билети.

        Климатизираните стаи за гости в Hotel du Louvre in the Unbound Collection by Hyatt са с интериор в уникален стил и предлагат сателитна телевизия, минибар и безплатен WiFi. Много стаи предлагат изглед към известни парижки забележителности, а всички стаи имат самостоятелна баня, някои включват украсени с мрамор.
        
        Хотелският ресторант La Brasserie du Louvre от Bocuse е реновиран през 2019 г. и е декориран в традиционен стил с автентични характеристики. Менюто представя емблематични ястия от Bocuse, предназначени да зарадват и местните, и пътуващите. През лятото ястия се сервират на терасата под арките, с изглед към музея на Лувъра. Всяка сутрин се сервира закуска на шведска маса. Гостите могат да се насладят на коктейл и джаз вечери два пъти седмично в The Bar, който разполага с автентичен стъклен покрив.
        
        Четирите фасади и терасата на хотела са с изглед към известния Лувър, Операта „Гарние“ и театър „Комеди франсез“. През пролетта и лятото може да се поиска кошница за пикник срещу допълнително заплащане, така че гостите могат да се насладят на пикник в парижките градини в близост до хотела.
        
        Няколко дейности са на разположение на гостите на хотела безплатно, за да позволят на гостите да открият скрити скъпоценни камъни на града, включително були в градината Тюлери, екскурзоводско обслужване на квартала и обиколка на апартаментите в стил Napoléon III в музея на Лувъра.
        
        Hotel du Louvre in the Unbound Collection by Hyatt се намира на 2 минути от метростанцията Palais Royal, от която има директни линии до „Шанз-Елизе“ площад „Бастилията“. Наблизо може да се ползва обществен паркинг.
        
        За нашите гости това е любимата част на Париж, според независими отзиви.`
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
        destination: 'Париж',
        description: `Този бутиков хотел се намира в шикозния 16-ти район на Париж, на 500 метра от известния булевард „Шанз-Елизе“ и на 800 метра от метростанция Porte Maillot и Конгресния дворец.

        Всички климатизирани стаи за гости разполагат с телевизор с плосък екран, безплатен WiFi и минибар. Всяка класическа стая разполага с дрешник и собствена баня с вана или душ, безплатни тоалетни принадлежности и сешоар.
        
        Всяка сутрин в хотел Montfleuri се сервира закуска на шведска маса. Гостите могат да се насладят на питие в бара, докато използват безплатния WiFi.
        
        Сред останалите удобства в хотел Montfleuri са денонощна рецепция и консиерж услуги на място.
        
        Метростанция Charles de Gaulle-Etoile, от която има връзка с Лувъра, е на 5 минути пеша.`
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
        destination: 'Созопол',
        description: `Art Complex Anel се намира в Созопол, на 2,4 км от плажа Харманите, и предлага място за настаняване с ресторант, безплатен частен паркинг, сезонен открит плувен басейн и фитнес център. Има бар, градина и частна плажна зона. Климатизираните стаи имат изглед към басейна, бюро и безплатен WiFi.

        Стаите за гости в хотела разполагат с кът за сядане, телевизор с плосък екран със сателитна телевизия и самостоятелна баня със сешоар и душ. В стаите има и гардероб.
        
        Арт Комплекс Анел предлага континентална закуска или закуска на шведска маса.
        
        На разположение на гостите има тераса за слънчеви бани.
        
        Амфитеатър „Аполония“ е на 9 км от Art Complex Anel, а пристанището на Созопол е на 8 км. Най-близкото летище е летище Бургас, разположено на 25 км от хотела. Организира се летищен трансфер срещу заплащане.`
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
        destination: 'Созопол',
        description: `Sozopol Homes се намира в Созопол, област Бургас, в близост до плажа Харманите и амфитеатър „Аполония“. Предлага настаняване с безплатен частен паркинг.

        Климатизираните апартаменти разполагат с паркет, собствена баня, телевизор с плосък екран, безплатен WiFi, гардероб, всекидневна, оборудвана кухня, вътрешен двор и изглед към морето. Във всички помещения има кът за сядане и кът за хранене.
        
        Сред удобствата е тераса.
        
        Пристанище Созопол е на 1,2 км от Sozopol Homes. Най-близкото летище е летище Бургас, разположено на 22 км от мястото за настаняване. Организира се летищен трансфер срещу заплащане.
        
        За нашите гости това е любимата част на Созопол, според независими отзиви.`
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
        destination: 'Созопол',
        description: `Хотел Диаманти се намира на морския бряг в Стария град на Созопол и на 300 м от плажа и предлага уникална гледка към Черно море и остров Свети Иван. Ресторантът има тераса с гледка към морето и сервира българска и интернационална кухня.

        Климатизираните стаи, студиа и апартаменти са оборудвани с телевизор със сателитни канали и хладилник. Някои разполагат с балкон с гледка към морето. Осигурен е безплатен Wi-Fi достъп до интернет.
        
        Плажът Харманите е на 1 км от Диаманти, а къмпингите Градина и Каваците са съответно на 2 и 4 км. Природен парк Аркутино е на 10 км.
        
        На 300 м от хотела има автобусна спирка. Трансфер до летище Бургас, отдалечено на 40 км, е на разположение при заявка и срещу заплащане.
        
        За нашите гости това е любимата част на Созопол, според независими отзиви.`
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
        destination: 'Созопол',
        description: `Къща за гости Полина Бийч се намира на 700 метра от плажа в Созопол и предлага живописен морски изглед, климатизирани стаи с безплатен Wi-Fi и свободен частен паркинг на място. На разположение е безплатен, открит сезонен басейн. На място има и бар.

        Всяка от модерно обзаведените стаи включва телевизор с плосък екран с кабелни канали. Осигурени са електрическа кана и малък хладилник. Всички бани са с душ, сешоар и безплатни тоалетни принадлежности. Някои стаи включват балкон с панорамна гледка към морето.
        
        Полина Бийч предлага сейф срещу допълнителна такса. Също така гостите могат да наемат и велосипеди.
        
        Най-близкият ресторант е на 5 минути пеша. На 200 метра се намира магазин за хранителни стоки. Град Черноморец е на 15 минути с кола. До Стария град на Созопол може да се стигне за 15 минути пеша, а центърът на Новия град е на 5 минути пеша. Летище Бургас отстои на 44 километра.`
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
        destination: 'Созопол',
        description: `Апартамент Белия делфин Greenlife се намира в района на плажа на Каваците в Созопол, само на 2,2 км от плажа Харманите. Предлага ресторант, сезонен открит плувен басейн, фитнес център и бар. Този апартамент има собствен басейн и градина.

        Апартаментът разполага с 1 спалня, всекидневна, телевизор с плосък екран, оборудвана кухня с кът за хранене и 1 баня с душ и пералня.
        
        На разположение на гостите има тераса.
        
        Амфитеатър „Аполония“ е на 3,6 км от Апартамент Белия делфин Greenlife, а пристанището на Созопол е на 3,4 км. Най-близкото летище е летище Бургас, разположено на 25 км от мястото за настаняване.
        
        Ние говорим на вашия език!`
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
        destination: 'Созопол',
        description: `Апартаменти Гардън Бийч се намира в Созопол и разполага с плувен басейн, бар, градина и изглед към басейна, както и с безплатен WiFi.

        Всеки апартамент разполага с напълно оборудвана кухня, телевизор с плосък екран с кабелни канали, всекидневна с диван, собствена баня и пералня. Всяко помещение за настаняване има балкон с изглед към морето.
        
        На разположение на гостите има тераса.
        
        Златна рибка е на 2 км от апартаменти Гардън Бийч, а амфитеатър „Аполония“ е на 3,6 км. Най-близкото летище е летище Бургас, разположено на 20 км от мястото за настаняване.
        
        Ние говорим на вашия език!`
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
        destination: 'Созопол',
        description: `Апартхотел „Каса де Оро“ е разположен в озеленен район край морето в местността Буджака в Созопол. Най-близкият плаж е на 100 м, а плажът Каваци - на 1,5 км. На разположение на гостите има безплатен WiFi и градина.

        Всички апартаменти са напълно оборудвани и предлагат уникален дизайн за пълен релакс.
        
        На 50 м от апартхотела има 2 ресторанта. Точно пред апартхотела минава директна транспортна линия за плажа и Стария град на Созопол. В района има условия за риболов, гмуркане с акваланг и водни спортове.
        
        Амфитеатър „Аполония” се намира на 4 км от апартхотел „Каса де Оро“, а пристанището на Созопол - на 4,4 км. Летище Бургас е най-близкото летище и е разположено на 46 км от апартхотел „Каса де Оро“.`
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
        destination: 'Созопол',
        description: `Hotel Silver се намира на тиха улица, на около 50 метра от плажа Харманите в по-новата част на Созопол. Хотелът предлага напълно оборудвани помещения за настаняване с безплатен WiFi.

        В апартаментите има кухня, климатик, плазмен телевизор и тераса.
        
        На разположение на гостите на Hotel Silver е плувен басейн.
        
        В Hotel Silver има условия за самостоятелно готвене, но в района ще намерите също множество очарователни ресторанти.
        
        За нашите гости това е любимата част на Созопол, според независими отзиви.
        
        Ние говорим на вашия език!`
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
        destination: 'Атина',
        description: `Модерният Electra Metropolis се намира в центъра на Атина, само на 200 метра от площад Синтагма. Той предлага малък басейн на покрива с водопад и тераса за слънчеви бани с изглед към града. В ресторанта на последния етаж и в M Bar с панорамен изглед към Акропола се предлагат гурме ястия и освежаващи коктейли.

        Елегантните стаи и суити в Electra Metropolis предлагат модерен интериор в топли цветове и дървен под. Те имат мраморна баня със сешоар, халати, чехли и органични тоалетни принадлежности KORRES. Стандартните удобства включват бюро, 40-инчов смарт телевизор, сейф за лаптоп и минибар. В целия хотел е осигурен безплатен Wi-Fi
        
        В центъра на сградата има всекидневна зона в ретро стил, където се предлагат кафе и напитки. Тя се намира в уникален атриум с небесно осветление и произведения на изкуството от художника Алекос Фасианос. Гостите могат да опитат средиземноморски ястия в бистрото на приземния етаж, което предлага отворена кухня.
        
        Допълнителните услуги включват денонощна рецепция и рум-сървиз. В непосредствена близост до Electra Metropolis има ресторанти, барове и магазини, а живописният район Плака е на 10 минути пеша. Летище Елефтериос Венизелос е на 34 километра.
        
        За нашите гости това е любимата част на Атина, според независими отзиви.`
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
        destination: 'Атина',
        description: `Grand Hyatt Athens, открит през август 2018 г., може да се похвали с чисто нов СПА, атриум басейн, бар и покрив със зашеметяваща гледка към Акропола. Предлага климатизирани помещения за настаняване с елегантно обзавеждане и модерни технологии. Удобствата включват фитнес, СПА център и ресторант.

        Всички стаи и суитове на хотел Grand Hyatt Athens разполагат със съвременни произведения на изкуството и 55-инчов плоскоекранен телевизор, работно бюро и минибар. Всяка стая има мраморна баня с безплатни тоалетни принадлежности, халати и сешоар. Включени са също сейф и 24-часов румсървис. Предоставя се лаптоп при наличност. При заявка се предоставят допълнителни кърпи без допълнително заплащане.
        
        Гостите могат да опитат средиземноморска и азиатска кухня в ресторантите на място, както и да се насладят на емблематични коктейли в стилния бар край басейна или в лоби бара. Предлага се ранна закуска, като може да се осигури кутия за закуска.
        
        Фитнес центърът на място е денонощен. Хотел Grand Hyatt разполага с бизнес център и заседателни зали с най-съвременни технологии, идеални за частни или корпоративни събития. Включени са пренасяне на багаж и почистване.
        
        Центърът на Атина е на кратко разстояние с кола, а пристанището на Пирея е на 20 минути с кола. Световноизвестният Акропол се намира на 3 км. Международно летище Атина се намира на 32 км от хотел Grand Hyatt Athens.`
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
        destination: 'Атина',
        description: `Петзвездният хотел Four Seasons Astir Palace се намира на Атинската ривиера и разполага с 8 ресторанта и бара, СПА център с 10 зали за процедури, фитнес център и частен плаж. Той е заобиколен от борови дървета и включва 2 различни сгради и 5 тенис корта на място.

        Климатизираните стаи и суити във Four Seasons Astir Palace Hotel Athens са елегантно обзаведени в меки тонове и разполагат с модерно обзавеждане и френски прозорци. Всички те предлагат изглед към боровите дървета или морето, а някои са със собствен басейн.
        
        Сутрин се сервира американска закуска на шведска маса в трапезарията. За обяд или вечеря гостите могат да избират между гръцки морски дарове, италианска кухня или латиноамерикански специалитети на скара, придружени от изискани вина и поднесени в ресторантите на място. В салона за пури са на разположение някои от най-добрите пури в света, редки марки коняк и уиски.
        
        СПА центърът на място включва закрит плувен басейн, турска баня, витализиращ басейн и хладни душове, а също така предлага разнообразие от масажи и други процедури. Във фитнес залата се провеждат занятия по йога, а на частния плаж могат да се практикуват водни спортове като уиндсърфинг, морски каяк и гмуркане с шнорхел.
        
        Центърът на Атина се намира на 30 минути път с кола от Four Seasons Astir Palace Hotel Athens, а яхтеното пристанище Глифада е на 9 километра. Летище „Елефтериос Венизелос“ е най-близкото летище, на 24 километра от хотела. Осигурени са безплатен WiFi и безплатен паркинг на място.`
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
        destination: 'Атина',
        description: `Elia Ermou Athens Hotel се намира само на 800 метра от световноизвестния Акропол и Музея на Акропола, на удобно място в идеалния център на Атина. Този 4-звезден хотел разполага с ресторант и уелнес клуб. Осигурен е безплатен WiFi.

        Стаите включват гардероб, телевизор с плосък екран и собствена баня. В тях има термокана, а някои предлагат балкон. Част от стаите са оборудвани с турска баня и хидромасажна вана, а някои от тях са с изглед към Акропола.
        
        Гостите на Elia Ermou Athens Hotel могат да се насладят на американска закуска на шведска маса.
        
        А ла карт ресторантът се намира на най-високия етаж и разполага с изглед към Акропола.
        
        Уелнес клубът е оборудван с редица съоръжения, включително криосауна, фитнес център и фризьорски салон.
        
        Живописният квартал „Плака“ и оживеният площад „Монастираки“ са само на 400 метра. Летище „Елефтериос Венизелос“ е най-близкото летище, на 34 километра. Срещу заплащане може да ползвате частен паркинг.
        
        За нашите гости това е любимата част на Атина, според независими отзиви.`
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
        destination: 'Атина',
        description: `Хотел Divani Apollon Palace & Thalasso е заобиколен от пленителния пейзаж на Атинската Ривиера. Предлага великолепен морски изглед. Комплексът разполага с най-съвременен център за таласотерапия. Гостите се намират сред величествена природа, заобиколена от морето и могат да ползват 3 басейна, 4 ресторанта и частен плаж.

        Divani Apollon Palace & Thalasso е член на асоциацията Leading Hotels of the World. Предлага настаняване в луксозни стаи с мебелиран балкон с морски изглед. Елегантно декорираните стаи са обзаведени с дизайнерски тъкани, мебели от дъб и картини. От всички тях се открива прекрасен изглед към морето и басейните.
        
        В изискания ресторант Mythos by Divani гостите могат да се поглезят с вкусни гастрономически специалитети с морски дарове и кулинарни плата, придружени от хубаво вино и сред романтична атмосфера точно пред морето. Богатата закуска на шведска маса включва голямо разнообразие от гръцки деликатеси, както и европейски специалитети и, разбира се, свежи плодове и сокове. Гостите ще се насладят също на непринудената обстановка на ресторант Аnemos, където храната се поднася на шведска маса и може да се консумира на открито. Светлият Atlantis Lounge and A&D bar е обзаведен в съвременен стил и предлага леки закуски, запазена марка коктейли и музика на живо. Снек-барът край басейна Meltemi предлага сенчест кът за сядане с изглед към басейните и е отворен през летния период.
        
        СПА центърът е печелил награда на World Travel Awards 2014 и приканва гостите да експерементират с изцяло различна програма за подмладяване и програми за благополучие. Спа центърът включва вътрешен басейн с площ от 270 квадратни метра, римски бани, 2 сауни, 2 турски бани и разнообразие от над 100 терапии за лице и тяло. По-активните гости могат да се възползват от осветения тенис корт и алеята за джогинг. На частния плаж могат да се практикуват водни спортове.
        
        Divani Apollon Palace & Thalasso е на 18 км от центъра на Атина. Град Глифада, известен с многобройните си магазини и нощни заведения, е на 5 минути с автобусен трансфер. Голф клуб Glyfada е на 3 км. Хотелът разполага с гараж за 250 автомобила.`
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
        destination: 'Атина',
        description: `Хотел Stanley е удобно разположен в центъра на Атина, в непосредствена близост до метростанция Metaxourgeio. Предлага басейн на покрива, 2 ресторанта и 2 бара, включително и открит бар на покрива. Предлага климатизирани помещения за настаняване с безплатен WiFi и денонощна рецепция.

        Стаите в Stanley Hotel са с модерен интериор в земни цветове и разполагат със сателитна телевизия и балкон. Всяка стая разполага със собствена баня с тоалетни принадлежности и сешоар. Някои стаи предлагат изглед към Акропола. Всеки ден между 6:30 и 1:30 часа се предлага румсървиз.
        
        Ресторант Ikaros е специализиран в гръцката кухня и сервира закуска, обяд и вечеря. Средиземноморски и гръцки ястия се приготвят в ресторанта на покрива, който е с панорамна гледка към града, Акропола и хълма Ликавитос.
        
        Гостите могат да се отпуснат на мебелирана тераса край басейна с изглед към Акропола. Освен това те могат да се насладят на коктейл в съседния бар с 360-градусова гледка към Атина.
        
        Търговската улица „Ерму“ е на 1 километър от Stanley, а Музеят на Акропола е само на 5 минути с метрото. Гостите имат достъп до много плажове, разположени на 30 минути път с автомобил. Хотел Stanley се намира извън зоната с ограничен трафик на Атина и предлага много лесен достъп до националната пътна мрежа. Международното летище на Атина е на 36 километра. На място има собствен паркинг срещу допълнително заплащане.`
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
        destination: 'Атина',
        description: `Хотел Crystal City има централно местоположение в Атина, само на 100 метра от метростанция Metaxourgeio. Той предлага безплатен Wi-Fi достъп в общите части и ресторант на покрива с панорамен изглед към града.

        Климатизираните стаи за гости в Crystal City имат телевизор със сателитни и кабелни канали, хладилник и сейф в стаята. Всеки самостоятелен санитарен възел разполага със сешоар. Някои от стаите са с балкон с изглед към Акропола.
        
        Всяка сутрин се сервира континентална закуска на шведска маса и гръцка закуска. Ресторант и салон Athina предлага гръцки ястия за обяд и вечеря с чудесен изглед към Акропола и Lycabettus Hill. Барът на покрива предлага прясно приготвени гръцки специалитети, както и сладкиши.
        
        Плака се намира на километър, а Акрополът и Националният исторически музей са на два километра от града. В непосредствена близост има музеи, барове и ресторанти.`
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
        destination: 'Атина',
        description: `Hotel Grande Bretagne, a Luxury Collection Hotel предлага отлично разположение срещу площад Конституция и сградата на Парламента. Той ще ви посрещне в луксозно обзаведени стаи за гости, а от великолепната тераса на покрива се открива възхитителен изглед към града. Във всички стаи и общи части е осигурен Wi-Fi.

        Богатият интериор впечатлява с изискани мебели и аксесоари. Мраморните бани са обзаведени с тоалетка, душ и отделна вана. Някои от стаите имат собствен балкон с изглед към Акропола, откъдето можете да наблюдавате ежедневната смяна на караула пред сградата на парламента.
        
        От ресторанта с градина на покрива на Grande Bretagne можете да се любувате на автентичния Олимпийски стадион. На изглед към Акропола можете да се насладите от бара на хотела, а ресторантът привлича с първокласна средиземноморска кухня и панорама към Партенона.
        
        Спа центърът на хотела предлага термален суит с билкова вана, пещера, леден фонтан, уединен кът за двойки и покрит басейн. Гостите могат да се поглезят с масажи с масло от анасон.
        
        Реномираният Grande Bretagne се гордее със своето обслужване, което включва богата гама от услуги - от частни партита за вечеря в ресторант The Cellar до ВИП летищни трансфери.
        
        От този 5-звезден хотел, отличен с множество награди, можете да стигнете пеша до отбрани търговски райони, различни музеи и до бизнес центъра на града. Античният площад Агора и Акрополът са на 600 метра.
        
        За нашите гости това е любимата част на Атина, според независими отзиви.`
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
        destination: 'Атина',
        description: `The Margi е бутиков 5-звезден хотел, разположен в първокласната зона Вулиагмени, сред борови дървета и само на няколко крачки от пясъчния плаж. Хотелът предлага изискани заведения за хранене и романтичен басейн. Съчетава дискретен лукс и релаксираща крайбрежна атмосфера.

        Стаите и суитите в хотел The Margi са елегантно обзаведени и разполагат с класически интериор с колониални елементи. Всички помещения за настаняване включват LCD телевизор със сателитни канали, напълно оборудван минибар, сейф и климатик. Баните са снабдени с тоалетни принадлежности Korres, пухкави халати и чехли.
        
        В ресторант Patio можете да опитате гурме ястия, приготвени с фини продукти от собствената ферма на The Margi. Ресторант Malabar предлага еклектична атмосфера и средиземноморска кухня, а в ресторант Nilaya можете да започнете деня си с обилна американска закуска, докато четете сутрешния вестник. Предлага се обиколка във фермата The Margi. Може да се насладите на автентична и органична гръцка вечеря, а при заявка ще получите готварски съвети.
        
        Хотелът предлага ексклузивни услуги като сезонен бутиков магазин с луксозни гръцки марки, лични треньори, курсове по йога, както и напълно оборудван фитнес център. В СПА центъра на хотела гостите могат да се насладят на разкрасителни процедури и масаж, да използват парната баня и сауната, както и закрития басейн.
        
        На 7 км се намира голф клуб Glyfada с 18 дупки. Центърът на град Атина е на 19 км, а международно летище „Елефтериос Венизелос“ се намира на 24 км. Осигурени са безплатен частен паркинг и безплатен WiFi във всички части.`
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
        destination: 'Атина',
        description: `Хотел Palmyra Beach се намира в предградието Глифада, на 100 м от плажа и яхтеното пристанище. Разполага с открит плувен басейн и е близо до различни ресторанти и търговски центрове.

        Всяка от климатизираните стаи е оборудвана с телевизор със сателитни канали и кът за сядане. Повечето стаи имат балкон с гледка към морето, басейна или планината. Palmyra Beach осигурява и рум-сървис. Във всяка стая са предоставени удобства за приготвяне на кафе и чай.
        
        Елегантният ресторант Belvoir сервира американска закуска на шведска маса, както и обяд и вечеря. В салона за коктейли и бара до басейна се предлагат леки закуски и напитки.
        
        Летището е на 25 км, а само на 100 м от хотела има трамвайна спирка.`,
    }
]

