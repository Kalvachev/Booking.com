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
        price: 432
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
        price: 312
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
        price: 325
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
        price: 288
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
        price: 298
    },
    {
        name: 'Hotel Dei Cavalieri Milano Duomo',
        address: 'Piazza Giuseppe Missori, 1, Център, 20123 Милано, Италия',
        rating: 9,
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
        price: 263
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
        price: 234
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
        price: 325
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
        price: 420
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
        price: 60
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
        price: 56
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
        price: 58
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
        price: 88
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
        price: 45
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
        price: 89
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
        price: 83
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
        price: 150
    },
    {
        name: 'Santa Catalina, a Royal Hideaway Hotel 5*GL',
        address: 'León y Castillo, 227, 35005 Лас Палмас де Гран Канария, Испания',
        rating: 9,
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
        price: 312
    },
    {
        name: 'Ático LUXURY vista mar en Las Palmas',
        address: 'Calle Hierro, 35008 Лас Палмас де Гран Канария, Испания',
        rating: 7,
        stars: 3,
        facilities: [
            'Terrace', 'Free Wi Fi', 'Elevator'
        ],
        pictures: [

        ],
        type: 'Hotel',
        price: 135
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

        ],
        type: 'Hotel',
        price: 257
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

        ],
        type: 'Hotel',
        price: 280
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

        ],
        type: 'Apartments',
        price: 97
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

        ],
        type: 'Hotel',
        price: 336
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

        ],
        type: 'Hotel',
        price: 420
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

        ],
        type: 'Apartments',
        price: 140
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

        ],
        type: 'Hotel',
        price: 123
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

        ],
        type: 'Hotel',
        price: 98
    },
    {
        name: 'Design Plus Bex Hotel',
        address: 'Gomera, 6, 35008 Лас Палмас де Гран Канария, Испания',
        rating: 8.4,
        stars: 5,
        facilities: [
            'Pool', 'Fitness', 'Terrace', 'Non-Smoker Rooms', 'Roomservice',
            'Free Wi Fi', 'Breakfast', 'Bar'
        ],
        pictures: [

        ],
        type: 'Hotel',
        price: 260
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

        ],
        type: 'Hotel',
        price: 170
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
        price: 120
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
        price: 109
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
        price: 80
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
        price: 129
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
        price: 118
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
        price: 197
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
        price: 260
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
        price: 420
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
        price: 326
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
        price: 280
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
        price: 179
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
        price: 190
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
        price: 80
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
        price: 289
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
        price: 36
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
        price: 40
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
        price: 180
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
        price: 49
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
        price: 33
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
        price: 120
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
        price: 42
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
        price: 380
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
        price: 620
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
        price: 223
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
        price: 130
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
        price: 180
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
        price: 629
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
        price: 669
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
        price: 640
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
        price: 140
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
        price: 190
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
        price: 544
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
        price: 560
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
        price: 276
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
        price: 223
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
        price: 559
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
        price: 354
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
        price: 354
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
        price: 256
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
        price: 509
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
        price: 332
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
        price: 427
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
        price: 1230
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
        price: 732
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
        price: 346
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
        price: 572
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
        price: 1303
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
        price: 477
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
        price: 834
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
        price: 260
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
        price: 769
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
        price: 572
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
        price: 176
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
        price: 60
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
        price: 61
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
        price: 62
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
        price: 120
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
        price: 300
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
        price: 150
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
        price: 35
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
        price: 368
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
        price: 210
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
        price: 998
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
        price: 196
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
        price: 326
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
        price: 190
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
        price: 100
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
        price: 809
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
        price: 410
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
        price: 118
    }
]

