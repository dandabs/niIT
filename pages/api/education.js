import axios from "axios";
import Nightmare from "nightmare";
const cheerio = require('cheerio')

export default async function handler(req, res) {
    if (req.method === 'GET') {
        var data = [];
        if ('further' in req.query) data.push(await getFE);
        if ('higher' in req.query) data.push(await getHE);
        res.status(200).send(data);
    } else {
      res.sendStatus(405);
    }
  }

const getFE = new Promise(async (resolve, reject) => {
    const FE = [];

    const belfastmet = await Nightmare({ show: true }).goto(`https://www.belfastmet.ac.uk/courses/?subjectareas=computing-it-and-multimedia&moa=full-time&level=further-education`)
    .wait('body')
    .wait('p.search-results-total')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end();

    var $ = cheerio.load(belfastmet);
        $('.search-result-item').each((i, elem) => {
            FE.push({
                title: $(elem).find('h2.search-result-item-heading').find('span.search-result-item-title').text(),
                level: $(elem).find('h2.search-result-item-heading').find('span.search-result-item-qualification').text().split('Level ')[1].trim().endsWith('Apprenticeship') ? $(elem).find('h2.search-result-item-heading').find('span.search-result-item-qualification').text().split('Level ')[1].trim().split(' Apprenticeship')[0] : $(elem).find('h2.search-result-item-heading').find('span.search-result-item-qualification').text().split('Level ')[1].trim(),
                code: $(elem).find('p').text(),
                campus: $(elem).find('div.campus').text(),
                time: $(elem).find('div.level-of-study').text(),
                school: 'Belfast Met',
                url: "https://belfastmet.ac.uk" + $(elem).parent('a').attr('href'),
                apprenticeship: $(elem).find('h2.search-result-item-heading').find('span.search-result-item-qualification').text().split('Level ')[1].trim().endsWith('Apprenticeship') ? true : false,
                type: "Further Education"
            })
        })

    const nrc = await Nightmare({ show: true }).goto(`https://www.nrc.ac.uk/search/?section[]=16&keywords=computing`)
    .wait('body')
    .wait('div.content-block-wrap')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end();

    var $ = cheerio.load(nrc);
    $('.content-block.search-block').each((i, elem) => {
        FE.push({
            title: $(elem).find('div.content-block-primary').find('h2').find('a').text().split(' - ')[0],
            level: $(elem).find('div.content-block-primary').find('h2').find('a').text().split(' - ')[1].split('Level ')[1],
            code: $(elem).find('div.content-block-primary').find('p').text().split('Code: ')[1].trim(),
            campus: $(elem).find('div.content-block-secondary').find('li').text().split('-time')[1],
            time: $(elem).find('div.content-block-secondary').find('.block-list').find('li.course-colour.cc-Day').text(),
            school: 'Northern Regional College',
            url: $(elem).find('div.content-block-primary').find('h2').find('a').attr('href'),
            apprenticeship: false,
            type: "Further Education"
        })
    })

    resolve(FE);
});

const getHE = new Promise(async (resolve, reject) => {
    const HE = [];

    const belfastmet = await Nightmare({ show: true }).goto(`https://www.belfastmet.ac.uk/courses/?subjectareas=computing-it-and-multimedia&moa=full-time&level=higher-education`)
    .wait('body')
    .wait('p.search-results-total')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end();

    var $ = cheerio.load(belfastmet);
        $('.search-result-item').each((i, elem) => {
            HE.push({
                title: $(elem).find('h2.search-result-item-heading').find('span.search-result-item-title').text(),
                level: $(elem).find('h2.search-result-item-heading').find('span.search-result-item-qualification').text().trim(),
                code: $(elem).find('p').text(),
                campus: $(elem).find('div.campus').text(),
                time: $(elem).find('div.level-of-study').text(),
                school: 'Belfast Met',
                url: "https://belfastmet.ac.uk" + $(elem).parent('a').attr('href'),
                ///apprenticeship: $(elem).find('h2.search-result-item-heading').find('span.search-result-item-qualification').text().split('Level ')[1].trim().endsWith('Apprenticeship') ? true : false,
                type: "Higher Education"
            })
        })

    const nrc = await Nightmare({ show: true }).goto(`https://www.nrc.ac.uk/search/?section[]=18&keywords=computing`)
    .wait('body')
    .wait('div.content-block-wrap')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end();

    var $ = cheerio.load(nrc);
    $('.content-block.search-block').each((i, elem) => {
        HE.push({
            title: $(elem).find('div.content-block-primary').find('h2').find('a').text().split(' - ')[0],
            level: $(elem).find('div.content-block-primary').find('h2').find('a').text().split(' - ')[1].split('Level ')[1],
            code: $(elem).find('div.content-block-primary').find('p').text().split('Code: ')[1].trim(),
            campus: $(elem).find('div.content-block-secondary').find('li').text().split('-time')[1],
            time: $(elem).find('div.content-block-secondary').find('.block-list').find('li.course-colour.cc-Day').text(),
            school: 'Northern Regional College',
            url: $(elem).find('div.content-block-primary').find('h2').find('a').attr('href'),
            apprenticeship: false,
            type: "Higher Education"
        })
    })

    resolve(HE);
});
