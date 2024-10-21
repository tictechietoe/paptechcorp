import { BsBoxSeam } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiPaperBagFolded } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { TfiGift } from "react-icons/tfi";
import { BsInboxesFill } from "react-icons/bs";
import { FaWineBottle } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";
import { PiNotebookFill } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa6";


const iconSize = 70;

const applicationsData = [
  {
    id: 'carton_packaging',
    icon: <BsBoxSeam size={ iconSize } />,
    name: 'carton packaging',
  },
  {
    id: 'contianer_board',
    icon: <LuPackageOpen size={ iconSize } />,
    name: 'container board',
  },
  {
    id: 'paper_bags_wraps',
    icon: <GiPaperBagFolded size={ iconSize } />,
    name: 'bags and wraps',
  },
  {
    id: 'food_and_beverages',
    icon: <IoFastFoodOutline size={ iconSize } />,
    name: 'food and beverages',
  },
  {
    id: 'luxury_packing',
    icon: <TfiGift size={ iconSize } />,
    name: 'luxury packing',
  },
  {
    id: 'corrugation_packaging',
    icon: <BsInboxesFill size={ iconSize } />,
    name: 'corrugated packaging',
  },

  {
    id: 'labels',
    icon: <FaWineBottle size={ iconSize } />,
    name: 'labels',
  },
  {
    id: 'tags',
    icon: <IoMdPricetags size={ iconSize } />,
    name: 'tags',
  },

  {
    id: 'graphic',
    icon: <IoImages size={ iconSize } />,
    name: 'graphic',
  },
  {
    id: 'pharma_literature',
    icon: <PiNotebookFill size={ iconSize } />,
    name: 'pharmaceutic of literature',
  },
  {
    id: 'writing_printing',
    icon: <FaWpforms size={ iconSize } />,
    name: 'writing and printing',
  },
  {
    id: 'flexible_packaging',
    icon: <FaBoxOpen size={ iconSize } />,
    name: 'flexible packaging',
  }
]

export default applicationsData;