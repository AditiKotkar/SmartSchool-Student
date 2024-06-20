// import React, {useState} from 'react';
// import { faSearch, faEllipsisVertical, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link } from 'react-router-dom';
// import './RomanNumerals.css';

// const RomanNumerals = () => {
//     const [isActive, setIsActive] = useState(false);
//     const [documentText, setDocumentText] = useState('');

//     const toggleMenu = (menu) => {
//         setIsActive(!isActive);
//         fetchDocument(menu);
//         // document.querySelector('.intro').classList.toggle('right-align');
//     };
//     const fetchDocument = (menu) => {
//         let endpoint = '';
//         switch (menu) {
//             case 'Introduction':
//                 endpoint = '/introduction';
//                 break;
//             case 'Rules':
//                 endpoint = '/rules';
//                 break;
//             case 'set1':
//                 endpoint = '/set1';
//                 break;
//             default:
//                 return;
//         }
//     fetch(endpoint)
//         .then(response => response.text())
//         .then(text => {
//             setDocumentText(text);
//         })
//     };
//   return (
// <div className='RomanRomnNo'>
//     <div className="Romanbgimg">
//         <nav className="Romannavbar">
//             <div className="Romanmax-width">
//                 <ul className={`Romanmenu ${isActive ? 'active' : ''}`}>
//                     <li><a href="#Introduction" className="Romanmenu-btn" onClick={() => fetchDocument('Introduction')}>Introduction</a></li>
//                     <li><a href="#Basic" className="Romanmenu-btn">Basic</a></li>
//                     <li><a href="#Rules" className="Romanmenu-btn" onClick={() => fetchDocument('Rules')}>Rules</a></li>
//                     <li><a href="#set1" className="Romanmenu-btn" onClick={() => fetchDocument('set1')}>Problem set 1</a></li>
//                     <li><a href="#Video" className="Romanmenu-btn">Video Explanation</a></li>
//                     <li><a href="#Pdf" className="Romanmenu-btn">Pdf Download</a></li>
//                 </ul>
//                 <div className="Romanmenu-btn" onClick={toggleMenu} >
//                     <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
//                 </div>
//             </div>
//         </nav>
//         <div className='RomanRoman1'>
//             <h1>1.Roman Numerals</h1>
//             <FontAwesomeIcon icon={faSearch} className='Romansearch'></FontAwesomeIcon>
//             <input className='RomanSearch' type="search" id="name" placeholder="Search By Name"></input>    
//         </div>
//         <div className='Romancontent'>
//             <div className='Romanintro' onClick={toggleMenu}>
//                 <h1 className='RomanRoman'>Roman Numerals Introduction</h1>
//                 <p><span className='RomanGeeta'>Geeta :</span> This clock doesn’t have numbers. It has some symbols instead.
//                 <br></br>
//                 <br></br><span className='RomanTeacher'>Teacher :</span> Yes, Geeta These are Roman numerals. In Europe, in the old times, Roman capital letters were used to write numbers.That is why, they were called Roman numerals.The letter ‘I’ was the symbol used for 1, ‘V’ for 5, and ‘X’ for 10. In this method, there was no symbol for zero.Also, the value of a symbol did not change with its place. There are certain rules writing numbers using the Roman numerals. Let us see how to write 1 to 20 usingthese rules and the symbols I, V and X.</p>
//             </div>
//         </div>
//     </div>
// </div>
//   );
// }
// export default RomanNumerals;


import React, { useState, useEffect } from 'react';
import { faSearch, faEllipsisVertical, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import './RomanNumerals.css';

const RomanNumerals = () => {
  const { chapter_id } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [documentText, setDocumentText] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [chapter_name, setChapter_name] = useState('');
  const [point_name, setPoint_name] = useState('');
  const [point_id, setPoint_id] = useState(''); // State to hold point_id

  useEffect(() => {
    const id = sessionStorage.getItem('chapter_id');
    const name = sessionStorage.getItem('chapter_name');
    setChapterId(id);
    setChapter_name(name);
    console.log({ chapter_name: name, chapter_id: id });
  }, []);

  useEffect(() => {
    if (chapter_id) {
      fetchDocument('Introduction');
    }
  }, [chapter_id]);

  const toggleMenu = (menu) => {
    setIsActive(!isActive);
    if (!isActive) {
    fetchDocument(menu);
  }
  };


  const fetchDocument = (menu) => {
    fetch(`https://apiaws.onrender.com/chaptercontent?chapterId=${chapter_id}`)
      .then((response) => response.json())
      .then((data) => {
        const foundPoint = data.points.find(point => point.point_name.toLowerCase() === menu.toLowerCase());
        if (foundPoint) {
          setDocumentText(foundPoint.point_text);
          setPoint_name(foundPoint.point_name);
          setPoint_id(foundPoint.point_id);
        } else {
          setDocumentText('No content available');
          setPoint_name('');
          setPoint_id('');
        }
      })
      .catch((error) => {
        console.error('Error fetching chapter content:', error);
        setDocumentText('Error fetching content');
        setPoint_name('');
        setPoint_id('');
      });
  };

  return (
    <div className='RomanRomnNo'>
      <div className="Romanbgimg">
        <nav className="Romannavbar">
          <div className="Romanmax-width">
            <ul className={`Romanmenu ${isActive ? 'active' : ''}`}>
              <li><a href="#Introduction" className="Romanmenu-btn" onClick={() => fetchDocument('Introduction')}>Introduction</a></li>
              <li><a href="#Basic" className="Romanmenu-btn" onClick={() => fetchDocument('Basic')}>Basic</a></li>
              <li><a href="#Rules" className="Romanmenu-btn" onClick={() => fetchDocument('Rules')}>Rules</a></li>
              <li><a href="#problem set" className="Romanmenu-btn" onClick={() => fetchDocument('problem set')}>Problem Set 1</a></li>
              <li><a href="#Video" className="Romanmenu-btn">Video Explanation</a></li>
              <li><a href="#Pdf" className="Romanmenu-btn">Pdf Download</a></li>
            </ul>
            <div className="Romanmenu-btn" onClick={() => toggleMenu('')}>
              <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
            </div>
          </div>
        </nav>
        <div className='RomanRoman1'>
          <h1>{chapter_id} . {chapter_name}</h1>
          <FontAwesomeIcon icon={faSearch} className='Romansearch'></FontAwesomeIcon>
          <input className='RomanSearch' type="search" id="name" placeholder="Search By Name"></input>    
        </div>
        <div className='Romancontent'>
          <div className='Romanintro'>
            <h1 className='RomanRoman'>{chapter_name} {point_name}</h1>
            <p>{documentText}</p>
            {isActive && (
              <div>
            <p>{documentText}</p>
            <p>Point Name: {point_name}</p>
                <p>Point ID: {point_id}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RomanNumerals;
