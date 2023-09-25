#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN
const collection = data.map((row) => row.split('|'));



// const data = content.split("\n").map(line => line.split('|').map(word => word.trim()).slice(1, -1)).slice(2);
//const [, , ...plants] = content.split('\n').map((plant) => plant.split('|').map((cell) => cell.trim()).slice(1, -1));

//const ages = arraynames.map((name) => `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`)
//const Arraydanger =  findAlltypedanger.filter(row=> row === 'Да')

//let sorteUpper = ages.sort();
const data = content.trim().split("\r\n").slice(1).map(line => line.split(','))

//task 1
console.log(`Число пассажиров ${data.length}`)



const test2 =  data.map(row=>`${row[3]},${[row[4]]}`)



const prts =  data.map(row=>row[row.length - 1])

const dubplets = _.uniq(prts)
const removed2 = dubplets.splice(3, 1);

// task 3
console.log(`Порты ${dubplets}`)


const tablesurvival =  data.map(row=>row[1])

const compact = (coll) => {

  const result = [];

  for (const item of coll) {
    if (item ===  '1') {
      result.push(item);
    }
  }

  return result;
};
compact(tablesurvival)

//task 2
console.log(`Количество выжившиx ${compact(tablesurvival).length}`)

const genders =  data.map(row=>row[5])
const men =  genders.filter(row=> row === 'male').length
const women =  genders.filter(row=> row === 'female').length
console.log((men/data.length)* 100)
console.log((women/data.length)* 100)





const obj = {}
const names =  data.map(row=>`${row[3]}:${[row[4]]}`)
  obj.names = names;
  const arraynames = obj.names;
  let namestrim =  arraynames.map((word => word.trim()))
 
// END