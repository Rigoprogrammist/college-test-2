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

export default function solution (content){

  //step 1
      const rows = content.trim().split("\n").slice(2).map(line => line.split('|'));
      const datanormal = rows.map(line => line.slice(1,7));
      
      console.log(`Count: ${datanormal.length}`)
  //step 2
  
  const galacticks = datanormal.map(row=>row[1].trim())
  const set1 = new Set(galacticks);
  const keys = [...set1].sort().join(', '); 
  //const uniqGalacticks = _.uniq(galacticks);;
  console.log(`Galaxies: ${keys}`);
  
  //step 3 11
  const radiusSunlights = datanormal.map(row=>row[4])
  let maxRadius = Math.max(...radiusSunlights)
  let minRadius = Math.min(...radiusSunlights)
  console.log(`Farest from Earth: ${maxRadius} light years, closest to Earth: ${minRadius} light years`)
  
  //step 4
  
  const obj = {}
  const distonEarth =  datanormal.map(row=>`${row[0]}:${row[4]}:${row[1]}`)
    obj.distonEarth = distonEarth;
  let separator =  obj.distonEarth.map(cortej => cortej.split(':'))
  
  let min = Math.min(...separator.map(row=>row[1]))
  
  const findCentauri = (arr) => {
      const result = [];
   
       for (let i = 0; i < arr.length; i += 1) {
          if (arr[i][1] == min) {
              result.push(arr[i])
          }
        
      }
     
     let solutionstep3 =  result.flat().map(line => line.trim());
     return solutionstep3
  
  }
  findCentauri(separator)
  
  let findStarinGalaxy = findCentauri(separator)
  let removed = findStarinGalaxy.splice(1, 1)
  console.log(`Closest to Earth: ${findStarinGalaxy[0]} in ${findStarinGalaxy[1]} galaxy` )
  
  }
  


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
 


  ## Памятка по **настройке личных аккаунтов студентов и оборудования для проведения экзамена.**

  Перед началом экзамена зайдите в свой аккаунт на компьютере. Для того, чтобы скачать репозиторий и делать коммиты вам нужно настроить SSH ключ. Как это сделать:
  
  1. Проверьте, что у вас есть SSH-ключ введя в терминале команду: `ssh -T git@github.com`.
  2. Если доступ закрыт, вам нужно будет сгенерировать SSH-ключ, прочитать его и установить в настройках GitHub:
      - `ssh-keygen` - эта команда гененирует ssh ключ. Каждый раз при вопросе нажимайте ентер.
      - `cat ~/.ssh/id_rsa.pub` - эта команда читает содержимое ssh ключа.
      - Войдите в свой профиль на гитхабе. Зайдите в настройки профиля (клик по иконке профиля справа вверху, настройки), перейдите в раздел "SSH-ключи", нажмите New ssh key. Ведите имя ключа в поле сверху, а все прочитанное содержимое нового ключа в поле ниже. Затем нажмите кнопку добавить.
  3. Снова проверьте команду `ssh -T git@github.com`. В случае успеха вы должны увидеть приветствие по имени аккаунта.
  4. Склонируйте репозиторий по SSH(!), попробуйте сделать коммит и запушить. Гит попросит вас установить глобальное имя пользователя и почту. Воспользуйтесь командами, которые подсказывает терминал и напишите глобальное имя, которое является вашим никнеймом на гитхабе и почту без кавычек. Снова попробуйте запушить. Если пуш прошел, значит вы успешно настроили окружение.
  5. Еще у вас может возникнуть ошибка, которая указывает на execFileSync. Это происходит потому, что метод не может получить доступ до файла. Чтобы исправить эту ошибку сделайте 2 вещи: 1. исправьте окончания строк с CRLF на LF (в vscode это маленький пункт внизу справа) 2. не используйте виндовс (можно пользоваться wsl в винде).


// END