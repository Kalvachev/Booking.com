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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Милано'
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
        destination: 'Керамоти'
    },
    {
        name: 'Daniela sunshine pool apartments ',
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
        destination: 'Керамоти'
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
        destination: 'Керамоти'
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
        destination: 'Керамоти'
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
        destination: 'Керамоти'
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
        destination: 'Керамоти'
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
        destination: 'Керамоти'
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
        destination: 'Керамоти'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Лас Палмас де Гран Канария'
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
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 120,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 109,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 80,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 129,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 118,
        destination: 'Рио де Жанейро'
    },
    {
        name: 'Hotel Astoria Palace',
        address: 'Avenida Atlântica, 1866, Копакабана, Рио де Жанейро, CEP 22021-001, Бразилия',
        rating: 8.4,
        stars: 4,
        facilities: [
            'Pool', 'Non-Smoker Rooms', 'Roomservice', 'Fitness center',
            'Free Wi Fi', 'Parking', 'Bar'
        ],
        pictures: [

        ],
        type: 'Hotel',
        price: 197,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 260,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 420,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 326,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 280,
        destination: 'Рио де Жанейро'
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

        ],
        type: 'Hotel',
        price: 180,
        destination: 'Пукет'
    },
    {
        name: 'Peranakan House ',
        address: '25/1-2 Moo4, West Chaofa Rd. Vichit, 83000 Пукет, Тайланд',
        rating: 8.8,
        stars: 3,
        facilities: [
            'Pool', 'Fitness Center', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Bar', 'Parking', 'Family Rooms'
        ],
        pictures: [

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

        ],
        type: 'Hotel',
        price: 640,
        destination: 'Виена'
    },
    {
        name: 'Radisson Blu Park Royal Palace Hotel Vienna',
        address: 'Schlossallee 8, 14.Пенцинг, 1140 Виена, Австрия',
        rating: 7.9,
        stars: 4,
        facilities: [
            'Non-Smoker Rooms', 'Roomservice', 'Restaurant',
            'Free Wi Fi', 'Bar', 'Breakfast'
        ],
        pictures: [

        ],
        type: 'Hotel',
        price: 140,
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

        ],
        type: 'Apartments',
        price: 120,
        destination: 'Созопол'
    },
    {
        name: 'Апартамент Белия делфин Greenlife',
        address: 'Greenlife beach resort 12, 8130 Созопол, България',
        rating: 9.2,
        stars: 4,
        facilities: [
            'Parking', 'Pool',
            'Pets Allowed', 'Free Wi Fi'
        ],
        pictures: [

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

        ],
        type: 'Hotel',
        price: 118,
        destination: 'Атина'
    }
]

