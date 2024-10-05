import sbs from '../assets/products/sbs.jpg';
import fbb from '../assets/products/fbb.jpg';
import whiteback from '../assets/products/whiteback.jpg';
import greyback from '../assets/products/greyback.jpg';
import fluting from '../assets/products/fluting.jpg';
import biblepaper from '../assets/products/biblepaper.jpg';
import uncoated from '../assets/products/uncoated.jpg';
import polycoated from '../assets/products/polycoated.jpg';

const productsData = [
  {
    id: 'sbs_board',
    image: sbs,
    name: 'SBS BOARD ( SOLID BLEACHED SULFATE )',
    category: 'virgin boards',
    gsm: '200 - 450 GSM',
  },
  {
    id: 'fbb_board',
    image: fbb,
    name: 'FBB BOARD ( FOLDING BOX BOARD )',
    category: 'virgin boards',
    gsm: '200 - 450 GSM',
  },
  {
    id: 'whiteback_baord',
    image: whiteback,
    name: 'WHITEBACK DUPLEX BOARD',
    category: 'recyled boards',
    gsm: '200 - 450 GSM',
  },
  {
    id: 'greyback_board',
    image: greyback,
    name: 'GREYBACK DUPLEX BOARD',
    category: 'recyled boards',
    gsm: '200 - 450 GSM',
  },

  {
    id: 'fluitng_medium',
    image: fluting,
    name: 'FLUTING MEDIUM & TESTLINE PAPER',
    category: 'kraft paper',
    gsm: '130 - 200 GSM',
  },
  {
    id: 'bible_paper',
    image: biblepaper,
    name: 'BIBLE PAPER',
    category: 'woodfree uncoated paper',
    gsm: '200 - 450 GSM',
  },
  {
    id: 'polycoated_board',
    image: polycoated,
    name: 'POLYCOATED BOARD',
    category: 'value added boards',
    gsm: '180 - 400 GSM',
  },
  {
    id: 'uncoated_board',
    image: uncoated,
    name: 'UNCOATED BOARD',
    category: 'value added boards',
    gsm: '180 - 400 GSM',
  },
];

export default productsData;