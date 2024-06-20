/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import './mainsub.css';
import Pending  from './Pending';
import Submitted from './Submitted';
import Evaluated from './Evaluated';
import { Outlet, useParams } from 'react-router-dom';

function Mainsub () {
  const [subjectId, setSubjectId] = useState(null);
  const [activeTab, setActiveTab] = useState('Pending');
  const [totalHomework, setTotalHomework] = useState([]);
  const [pendingHomework, setPendingHomework] = useState([]);
  const [approvedHomework, setApprovedHomework] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  }
  const [selectedBox, setSelectedBox] = useState('Pending');
  const handleBoxClick = (boxName) => {
    setSelectedBox(boxName);
  };

  const handleSubjectSelection = (selectedSubjectId) => {
    setSubjectId(selectedSubjectId);
  };

  useEffect(() => {
    const totalPending = pendingHomework.length;
    const totalApproved = approvedHomework.length;
    setTotalHomework(totalPending + totalApproved);

    const percentage = (totalApproved / totalHomework) * 100;
    setCompletionPercentage(percentage.toFixed(2)); 
  }, [pendingHomework, approvedHomework]);

  return (
    <div className="maincontener">
    <div className="maincontener1">
        <div className="maintextimg">
            <h1 className="maintext">Your Homework<br></br>is here!</h1>
            <div className="mainimg"></div>
        </div>
    </div>
    <div className="mainbut1">
        <div className="mainbuttons1">
            <div className= {`div ${selectedBox === 'Pending' ? 'selected Pending' : ''}`} onClick={() => {handleTabChange('Pending'); handleBoxClick('Pending');}}>
            <span className={`tab-button ${activeTab === 'Pending' ? 'active' : ''}`}>Pending</span>
            </div>
            <div className= {`div ${selectedBox === 'Submitted' ? 'selected Submitted' : ''}`} onClick={() => {handleTabChange('Submitted'); handleBoxClick('Submitted');}}>
            <span className={`tab-button ${activeTab === 'Submitted' ? 'active' : ''}`}>Submitted</span>
            </div>
            <div className= {`div ${selectedBox === 'Evaluated' ? 'selected Evaluated' : ''}`} onClick={() => {handleTabChange('Evaluated'); handleBoxClick('Evaluated');}}>
            <span className={`tab-button ${activeTab === 'Evaluated' ? 'active' : ''}`}>Evaluated</span>
            </div>
        </div>
    </div>
    <Outlet />
    {activeTab === 'Pending' && <Pending subjectId={subjectId} totalHomework={totalHomework} pendingHomework={pendingHomework} approvedHomework={approvedHomework}/>}
    {activeTab === 'Submitted' && <Submitted approvedHomework={approvedHomework}/>}
    {activeTab === 'Evaluated' && <Evaluated completionPercentage={completionPercentage} />}
    </div>    
  );
}

export default Mainsub;
