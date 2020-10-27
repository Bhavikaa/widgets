import React ,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title:"What is React",
        content:"React is a front end javascript framework"
    },
    {
        title:"Why to use react?",
        content:"It is favourite among engineers"
    },
    {
        title:"How to use React?",
        content:"You use React by creating component"
    }
];
const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
  ];

export default ()=>{
    const [selected, setSelected] = useState(options[0]);
    return(
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
    )
};