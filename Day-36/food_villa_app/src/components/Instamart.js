// import {useState} from 'react'
// const Section = ({title, description}) => {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="p-2 m-2 border border-black">
//       <h2 className="font-bold text-xl">{title}</h2>
//       <button onClick={() => setIsVisible(!isVisible)} className='cursor-pointer underline'>{isVisible?"Hide":"Show"}</button>
//       {isVisible && <p>{description}</p> }
//     </div>
//   )

// }

// const Instamart = () => {
//   return (
//     <div>
//       <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
//       <Section title={"About Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}/>
//       <Section title={"Team of Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}/>
//       <Section title={"Careers Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}/>
//       <Section title={"Products of Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}/>
//       <Section title={"Details of Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}/>
      
//     </div>

//   );
// };

// export default Instamart;
// In the above code even one section open we can open the another section


// To achieve only one section should open at a time
// import {useState} from 'react'
// const Section = ({title, description, isVisible, setIsVisible}) => {
//   // const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="p-2 m-2 border border-black">
//       <h2 className="font-bold text-xl">{title}</h2>
//       <button onClick={()=>setIsVisible(false)} className='cursor-pointer underline'>{isVisible?"Hide":"Show"}</button>
//       {isVisible && <p>{description}</p> }
//     </div>
//   )

// }

// const Instamart = () => {
//   const [sectionConfig, setSectionConfig] = useState({
//     showAbout : false,
//     showTeam : false,
//     showCareers : false,
//     showProducts : false,
//     showDetails : false,
//   })
//   return (
//     <div>
//       <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
//       <Section title={"About Instamart"}
//        description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
//        isVisible={sectionConfig.showAbout}
//        setIsVisible={()=>setSectionConfig({
//          showAbout:true,
//          showTeam: false,
//          showCareers: false,
//          showProducts: false,
//          showDetails: false,
//        })}/>
//       <Section title={"Team of Instamart"} 
//       description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
//       isVisible={sectionConfig.showTeam}
//       setIsVisible={()=>setSectionConfig({
//          showAbout: false,
//          showTeam:true,
//          showCareers: false,
//          showProducts: false,
//          showDetails: false,
//       })}
//       />
//       <Section title={"Careers Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
//       isVisible={sectionConfig.showCareers}
//       setIsVisible={()=>setSectionConfig({
//          showAbout: false,
//          showTeam:false,
//          showCareers: true,
//          showProducts: false,
//          showDetails: false,
//       })}
//       />
//       <Section title={"Products of Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
//       isVisible={sectionConfig.showProducts}
//       setIsVisible={()=>setSectionConfig({
//          showAbout: false,
//          showTeam:false,
//          showCareers: false,
//          showProducts:true,
//          showDetails: false,
//       })}
//       />
//       <Section title={"Details of Instamart"} description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in sectio The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
//       isVisible={sectionConfig.showDetails}
//       setIsVisible={()=>setSectionConfig({
//          showAbout: false,
//          showTeam:false,
//          showCareers: false,
//          showProducts: false,
//          showDetails: true,
//       })}
//       />
      
//     </div>

//   );
// };

// export default Instamart;

// optimized way to achieve only one section should open at a time
import { useState } from 'react';

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <h2 className="font-bold text-xl">{title}</h2>
      <button onClick={toggleVisibility} className='cursor-pointer underline'>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleVisibility = (section) => {
    setVisibleSection((prevSection) => (prevSection === section ? "" : section));
  };

  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text..."}
        isVisible={visibleSection === 'about'}
        toggleVisibility={() => toggleVisibility("about")}
      />
      <Section
        title={"Team of Instamart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text..."}
        isVisible={visibleSection === 'team'}
        toggleVisibility={() => toggleVisibility("team")}
      />
      <Section
        title={"Careers Instamart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text..."}
        isVisible={visibleSection === 'careers'}
        toggleVisibility={() => toggleVisibility("careers")}
      />
      <Section
        title={"Products of Instamart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text..."}
        isVisible={visibleSection === 'products'}
        toggleVisibility={() => toggleVisibility("products")}
      />
      <Section
        title={"Details of Instamart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text..."}
        isVisible={visibleSection === 'details'}
        toggleVisibility={() => toggleVisibility("details")}
      />
    </div>
  );
};

export default Instamart;