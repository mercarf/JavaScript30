'use strict';
 // Get your shorts on - this is an array workout!
      // ## Array Cardio Day 1

      // Some data we can work with

      const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
      ];

      const people = [
        'Eddard Stark',
'Robert Baratheon',
'Jaime Lannister',
'Catelyn Tully-Stark',
'Cersei Lannister',
'Daenerys Targaryen',
'Jorah Mormont',
'Viserys Targaryen',
'Jon Snow / Aegon Targaryen',
'Robb Stark',
'Sansa Stark',
'Arya Stark',
'Theon Greyjoy',
'Bran Stark / Three-Eyed Raven',
'Joffrey Baratheon',
'Sandor Clegane',
'Tyrion Lannister',
'Khal Drogo',
'Petyr Baelish',
'Davos Seaworth',
'Samwell Tarly',
'Stannis Baratheon',
'Melisandre',
'Jeor Mormont',
'Bronn',
'Varys',
'Shae',
'Margaery Tyrell',
'Tywin Lannister',
'Talisa Maegyr-Stark',
'Ygritte',
'Gendry Baratheon',
'Tormund',
'Brienne de Tarth',
'Ramsay Bolton',
'Gilly',
'Daario Naharis',
'Missandei',
'Ellaria Sand',
'Tommen Baratheon',
'Jaqen Hghar',
'Roose Bolton',
'High Sparrow',
'Grey Worm'
      ];

      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const fifteen = inventors.filter(
        (inventor) => inventor.year >= 1500 && inventor.year < 1600
      );

      console.table('1. Filtrar inventores que nacieron en 1500 a partir de un array');
      console.table(fifteen);

      // Array.prototype.map()
      // 2. Give us an array of the inventor first and last names
      const fullNames = inventors.map(
        (inventor) => `${inventor.first} ${inventor.last}`
      );
      console.log('2. Mapeado de array para obtener otro con los nombres y apellidos de los inventores');
      console.log(fullNames);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      // const ordered = inventors.sort(function(a, b) {
      //   if(a.year > b.year) {
      //     return 1;
      //   } else {
      //     return -1;
      //   }
      // });

      const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
      console.table('3. Ordenar array del más viejo al más joven');
      console.table(ordered);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0);

      console.log('4. ¿Cuántos años en total han vivido todos los inventores juntos?');
      console.log(totalYears);

      // 5. Sort the inventors by years lived
      const oldest = inventors.sort(function (a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
      });
      console.table('5. Ordenar a los inventores por los años que han vivido');
      console.table(oldest);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    //   const category = document.querySelector('.mw-category');
    //   const links = Array.from(category.querySelectorAll('a'));
    //   const de = links
    //               .map(link => link.textContent)
    //               .filter(streetName => streetName.includes('de'));

      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const alpha = people.sort((firstOne, nextOne) => {
        const [aFirst, aLast] = firstOne.split(', ');
        const [bFirst, bLast] = nextOne.split(', ');
        return aFirst > bFirst ? 1 : -1;
      });
      console.log('6. Array ordenado alfabéticamente');
      console.log(alpha);

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck',
        'pogostick',
      ];

      const transportation = data.reduce(function (obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});

      console.log('7. Obtener la cantidad de veces que se repite cada objeto');
      console.log(transportation);